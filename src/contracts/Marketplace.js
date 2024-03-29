import MarketplaceABI from "./Marketplace.json";
import ContractCache from "./ContractCache";
import MarketplaceMetaWallet from "./MarketplaceMetaWallet";

const address = {
  3: '0x5fA3b915A19D4a56417C06ba6617a8E90Ea149fD',
  80001: "0x5C3B75f5656bB6b82FF4839E52491b9A575C0670",
  43113: "0xA32a90B0ec1232c69388AA1Bd5FEE6E8570a3726",
  4002: "0x5fA3b915A19D4a56417C06ba6617a8E90Ea149fD",
  1287: "0x5fA3b915A19D4a56417C06ba6617a8E90Ea149fD",
}

export default class Marketplace {
  constructor(chainId, from) {
    this.contract = ContractCache(chainId, address[chainId], MarketplaceABI);
    this.address = address[chainId];
    this.from = from;
    this.chainId = chainId;
  }

  async name() {
    return "AxelarSeaMarketplace";
  }

  async list(tokenAddress, tokenId, amount, PriceToken, Price) {
    return await this.contract.methods.list(tokenAddress, tokenId, amount, PriceToken, Price).send({from: this.from});
  }

  async cancelListing(tokenAddress, tokenId) {
    return await this.contract.methods.cancelListing(tokenAddress, tokenId).send({from: this.from});
  }

  async buyERC721(tokenAddress, seller, tokenId) {
    return await this.contract.methods.buyERC721(tokenAddress, seller, tokenId).send({from: this.from});
  }

  async buyERC1155(tokenAddress, seller, tokenId, amount) {
    return await this.contract.methods.buyERC1155(tokenAddress, seller, tokenId, amount).send({from: this.from});
  }

  async createMetaWallet(target) {
    return await this.contract.methods.createMetaWallet(target).send({from: this.from});
  }

  async getMetaWalletAddress(target) {
    return await this.contract.methods.metaWallet(target).call();
  }

  async getMetaWallet(target) {
    let address = await this.getMetaWalletAddress(target);
    return new MarketplaceMetaWallet(this.chainId, address, this.from);
  }

  async getSale(seller, tokenAddress, tokenId) {
    return await this.contract.methods.getSale(seller, tokenAddress, tokenId).call();
  }
}

