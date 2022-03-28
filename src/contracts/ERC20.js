import ERC20ABI from "./ERC20.json";
import BigNumber from "bignumber.js";
import ContractCache, {ContractCacheReadOnly} from "./ContractCache";

export default class ERC20 {
  constructor(chainId, address, from, readOnly = false) {
    if (readOnly) {
      this.contract = new ContractCacheReadOnly(chainId, address, ERC20ABI);
    } else {
      this.contract = new ContractCache(chainId, address, ERC20ABI);
    }
    
    this.from = from;
  }

  async balanceOf(address) {
    return await this.contract.methods.balanceOf(address).call()
  }

  async symbol() {
    return await this.contract.methods.symbol().call()
  }

  async approve(spender) {
    console.log("Approve Start")
    let response = await this.contract.methods.approve(spender, "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff").send({from: this.from})
    console.log("Approve end", response)
    return response;
  }

  async limitedApprove(spender, amount) {
    return await this.contract.methods.approve(spender, amount).send({from: this.from})
  }

  async allowance(owner, spender) {
    return await this.contract.methods.allowance(owner, spender).call()
  }

  async checkAllowance(owner, spender, requiredAmount) {
    let allowedAmount = await this.allowance(owner, spender);
    return new BigNumber(allowedAmount).gte(new BigNumber(requiredAmount));
  }

  async totalSupply() {
    return await this.contract.methods.totalSupply().call()
  }
}