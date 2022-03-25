import web3 from "../hooks/web3";

const cache = {};

export default function ContractCache(chainId, address, abi) {
  let key = chainId + '_' + address;
  if (cache[key]) return cache[key];
  else return cache[key] = new web3.eth.Contract(abi, address);
}