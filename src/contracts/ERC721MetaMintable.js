import ERC721MetaMintableABI from "./ERC721MetaMintable.json";
import ContractCache from "./ContractCache";

export default class ERC721MetaMintable {
  constructor(chainId, address, from = "") {
    this.contract = ContractCache(chainId, address, ERC721MetaMintableABI);
    this.from = from;
  }

  async ownerOf(tokenId) {
    return await this.contract.methods.ownerOf(tokenId).call()
  }

  async owner() {
    return await this.contract.methods.owner().call()
  }

  async name() {
    return await this.contract.methods.name().call()
  }

  async symbol() {
    return await this.contract.methods.symbol().call()
  }

  async approve(spender) {
    console.log("Approve Start")
    let response = await this.contract.methods.setApprovalForAll(spender, true).send({from: this.from})
    console.log("Approve end", response)
    return response;
  }

  async allowance(owner, spender) {
    return await this.contract.methods.isApprovedForAll(owner, spender).call()
  }

  async getNonce(user) {
    return await this.contract.methods.getNonce(user).call()
  }

  async mint() {
    return await this.contract.methods.mint().send({from: this.from});
  }

  async tokenURI(tokenId) {
    return await this.contract.methods.tokenURI(tokenId).call();
  }
}
