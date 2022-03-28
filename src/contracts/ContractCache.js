import web3 from "../hooks/web3";
import web3ReadOnly from "./web3ReadOnly";

const cache = {};
const cacheReadOnly = {};

export default function ContractCache(chainId, address, abi) {
  let key = chainId + '_' + address;
  if (cache[key]) return cache[key];
  else return cache[key] = new web3.eth.Contract(abi, address);
}

export function ContractCacheReadOnly(chainId, address, abi) {
  let key = chainId + '_' + address;
  if (cacheReadOnly[key]) return cacheReadOnly[key];
  else return cacheReadOnly[key] = new web3ReadOnly[chainId].eth.Contract(abi, address);
}