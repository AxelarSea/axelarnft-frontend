import AxelarSeaSampleNftABI from "./AxelarSeaSampleNft.json";
import ContractCache from "./ContractCache";

const address = {
  3: "0xe54bd661dda41649A1c84b9D22Eb95BD1fc9BB58",
  80001: "0xe54bd661dda41649A1c84b9D22Eb95BD1fc9BB58",
  43113: "0x7EE1704B30C7efE70e2cA7d143A4585F47E05eDf",
  4002: "0xBB6aD024b0890255EA8f5674e868EF16a2797632"
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

