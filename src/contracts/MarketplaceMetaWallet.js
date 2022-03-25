import MarketplaceMetaWalletABI from "./MarketplaceMetaWallet.json";
import ContractCache from "./ContractCache";

export default class MarketplaceMetaWallet {
  constructor(chainId, address, from) {
    this.contract = ContractCache(chainId, address, MarketplaceMetaWalletABI);
    this.address = address;
    this.from = from;
  }

  async name() {
    return "MarketplaceMetaWallet";
  }

  async buyERC721(tokenAddress, seller, tokenId) {
    return await this.contract.methods.buyERC721(tokenAddress, seller, tokenId).send({from: this.from});
  }

  async buyERC1155(tokenAddress, seller, tokenId, amount) {
    return await this.contract.methods.buyERC1155(tokenAddress, seller, tokenId, amount).send({from: this.from});
  }

  async executeMetaTransaction(userAddress, functionSignature, nonce, sigR, sigS, sigV) {
    return await this.contract.methods.executeMetaTransaction(userAddress, functionSignature, nonce, sigR, sigS, sigV).send({from: this.from});
  }
}

