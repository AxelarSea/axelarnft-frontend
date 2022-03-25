import AxelarSeaSampleNftABI from "./AxelarSeaSampleNft.json";
import ContractCache from "./ContractCache";

const address = {
  80001: "0xe54bd661dda41649A1c84b9D22Eb95BD1fc9BB58",
  43113: "0x913fF316D6921438930e131b716344F42Cb79135",
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

