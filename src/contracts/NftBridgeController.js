import NftBridgeControllerABI from "./NftBridgeController.json";
import ContractCache, { ContractCacheReadOnly } from "./ContractCache";

const address = {
  "3": "0x14BAEaa10561824ebb730627b983b7FF563937A8",
  "1287": "0x56373111e61B98E42D1F79aC96216FBe6bDB84Fe",
  "4002": "0x9E79695DC78538AC6935f9BBB8Dc118a7003585A",
  "43113": "0x3047c4d21EE1C5b2de3Bfbeed79881dCf0E1a286",
  "80001": "0x9D59e10FaBe0C437Dce07eB873f6C8C60eAa5F38"
}

export default class NftBridgeController {
  constructor(chainId, from, readOnly = false) {
    if (readOnly) {
      this.contract = new ContractCacheReadOnly(chainId, address[chainId], NftBridgeControllerABI);
    } else {
      this.contract = ContractCache(chainId, address[chainId], NftBridgeControllerABI);
    }
    
    this.address = address[chainId];
    this.from = from;
    this.chainId = chainId;
  }

  // async name() {
  //   return "AxelarSeaMarketplace";
  // }

  async bridge(chainId, nftId, tokenId, amount, header, gasPrice) {
    return await this.contract.methods.bridge(chainId, nftId, tokenId, amount, header).send({from: this.from, value: gasPrice});
  }

  async bridgeWithPayload(chainId, nftId, tokenId, amount, header, payload, gasPrice) {
    return await this.contract.methods.bridge(chainId, nftId, tokenId, amount, header, payload).send({from: this.from, value: gasPrice});
  }

  async enable(chainId, nftAddress, gasPrice) {
    return await this.contract.methods.enable(chainId, nftAddress).send({from: this.from, value: gasPrice});
  }

  async address2nftId(address) {
    return await this.contract.methods.address2nftId(address).call();
  }

  async nftId2address(nftId) {
    return await this.contract.methods.nftId2address(nftId).call();
  }

  async isERC721(nftId) {
    return await this.contract.methods.isERC721(nftId).call();
  }
}

