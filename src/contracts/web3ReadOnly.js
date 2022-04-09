import Web3 from "web3"

const RPC_URL_LIST = {
  3: "https://ropsten.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161",
  97: "https://data-seed-prebsc-2-s3.binance.org:8545",
  80001: "https://rpc-mumbai.maticvigil.com",
  43113: "https://api.avax-test.network/ext/bc/C/rpc",
  4002: "https://rpc.testnet.fantom.network/",
  1287: "https://rpc.testnet.moonbeam.network/",
}

const WEB3_LIST = {};

for (let chainId in RPC_URL_LIST) {
  const web3 = new Web3(new Web3.providers.HttpProvider(RPC_URL_LIST[chainId]));

  WEB3_LIST[chainId] = web3;
}

export default WEB3_LIST;