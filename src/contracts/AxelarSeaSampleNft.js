import AxelarSeaSampleNftABI from "./AxelarSeaSampleNft.json";
import ContractCache from "./ContractCache";

const address = {
  3: "0xe54bd661dda41649A1c84b9D22Eb95BD1fc9BB58",
<<<<<<< HEAD
  80001: "0xe54bd661dda41649A1c84b9D22Eb95BD1fc9BB58",
  43113: "0x7EE1704B30C7efE70e2cA7d143A4585F47E05eDf",
  4002: "0xcdc110ff963e5c4508BeDcf5fF7795C9E526Dfd5"
=======
  80001: "0xcdc110ff963e5c4508BeDcf5fF7795C9E526Dfd5",
  43113: "0x7EE1704B30C7efE70e2cA7d143A4585F47E05eDf",
  4002: "0xcdc110ff963e5c4508BeDcf5fF7795C9E526Dfd5",
  1287: "0xe54bd661dda41649A1c84b9D22Eb95BD1fc9BB58",
>>>>>>> fbc57f3d23fc30983d8d562b3367c6eed39dd8e8
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

