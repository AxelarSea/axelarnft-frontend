import MarketplaceMetaWalletGMPABI from "./MarketplaceMetaWalletGMP.json";
import ContractCache from "./ContractCache";
import web3 from "../hooks/web3";

const marketplaceMetaWalletAddress = {
  3: '0x25d546Cf3AC6FDeBD8f1bf5F38fa4b8c4A059266',
  80001: "0xF064fB56d1841e88B71D60fC08af663035B96D7B",
  43113: "0x8D013ac025C8f949CaFe11F935f24130D3330008",
  4002: "0x6e865C4e7079405EF5082217ACEFe6568d12a93c",
  1287: "0x3269B478744C069E1cfA4c6246B8cBB948Ef9cEC",
}

const BRIDGE_GAS_LIMIT = 400_000;
const GAS_PRICE = {
  3: 40,
  97: 10,
  80001: 10,
  43113: 30,
  4002: 300,
  1287: 5,
}
const GAS_TOKEN_PRICE = {
  3: 4000,
  97: 500,
  80001: 2,
  43113: 100,
  4002: 1,
  1287: 4,
}

const axelarChainName = {
  "3": "Ethereum",
  "1287": "Moonbeam",
  "4002": "Fantom",
  "43113": "Avalanche",
  "80001": "Polygon",
}

const weth = {
  "3": "0xc778417E063141139Fce010982780140Aa0cD5Ab",
  "1287": "0x1436aE0dF0A8663F18c0Ec51d7e2E46591730715",
  "4002": "0x812666209b90344Ec8e528375298ab9045c2Bd08",
  "43113": "0xd00ae08403B9bbb9124bB305C09058E32C39A48c",
  "80001": "0x9c3C9283D3e44854697Cd22D3Faa240Cfb032889"
}

const wethDest = {
  43113: {
    3: "0x72af7e1e7E0D38bCF033C541598F5a0301D051A5",
    80001: "0x6DD60c05FdA1255A44Ffaa9A8200b5b179A578D6",
    43113: "0xd00ae08403B9bbb9124bB305C09058E32C39A48c",
    4002: "0x8776aDD48553518641a589C39792cc409d4C8B84",
    1287: "0x64aae6319934995Bf30e67EBBBA9750256E07283",
  }
}

const tokenSymbol = {
  "43113": "WAVAX",
  "1287": "WDEV",
  "3": "WETH",
  "4002": "WFTM",
  "80001": "WMATIC",
}

export default class MarketplaceMetaWalletGMP {
  constructor(chainId, from) {
    const address = marketplaceMetaWalletAddress[chainId];
    this.contract = ContractCache(chainId, address, MarketplaceMetaWalletGMPABI);
    this.address = address;
    this.from = from;
  }

  async name() {
    return "MarketplaceMetaWallet";
  }

  async bridge(sourceChainId, destChainId, seller, tokenAddress, tokenId, amount) {
    const gasDestToken = BRIDGE_GAS_LIMIT * GAS_PRICE[destChainId] / 1000000000;
    const gasSourceToken = gasDestToken * GAS_TOKEN_PRICE[destChainId] / GAS_TOKEN_PRICE[sourceChainId];

    const payload = web3.eth.abi.encodeParameters(
      ['address', 'address', 'address', 'uint256'],
      [this.from, tokenAddress, seller, tokenId]
    );

    // console.log(axelarChainName[destChainId], payload, tokenSymbol[sourceChainId], web3.utils.toWei(gasSourceToken.toPrecision(9)))

    return await this.contract.methods.bridge(axelarChainName[destChainId], payload, tokenSymbol[sourceChainId], web3.utils.toWei(gasSourceToken.toPrecision(9))).send({from: this.from, value: web3.utils.toWei((amount * 1.1 + gasSourceToken + 0.00001).toPrecision(9))});
  }
}

