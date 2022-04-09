import AxelarSeaSampleNftABI from "./AxelarSeaSampleNft.json";
import ContractCache from "./ContractCache";

const address = {
  3: "0xe54bd661dda41649A1c84b9D22Eb95BD1fc9BB58",
  80001: "0x93fC46e9cc34094519983e529869ebAFb93F47bF",
  43113: "0x7EE1704B30C7efE70e2cA7d143A4585F47E05eDf",
  4002: "0xcdc110ff963e5c4508BeDcf5fF7795C9E526Dfd5",
  1287: "0xc873FA6c0068895f80C4A25021B94FCFA33E3268",
}

export default class AxelarSeaSampleNft {
  constructor(chainId, from) {
    this.contract = ContractCache(chainId, address[chainId], AxelarSeaSampleNftABI);
    this.address = address[chainId];
    this.from = from;
    this.chainId = chainId;
  }

  async mint() {
    return await this.contract.methods.mint().send({from: this.from});
  }

  async totalSupply() {
    return await this.contract.methods.totalSupply().call();
  }
}

