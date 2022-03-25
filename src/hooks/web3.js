import Web3 from 'web3';

let web3;

if (typeof window !== 'undefined' && typeof window.ethereum !== 'undefined') {
  // We are in the browser and metamask is running.
  window.ethereum.request({ method: 'eth_requestAccounts' });
  web3 = new Web3(window.ethereum);
} else {
  // We are on the server *OR* the user is not running metamask
  let rpcUrl = 'https://data-seed-prebsc-1-s1.binance.org:8545'
  switch (parseInt(process.env.NEXT_PUBLIC_CHAIN_ID || "97")) {
    case 97: rpcUrl = 'https://data-seed-prebsc-1-s1.binance.org:8545'; break;
    case 56: rpcUrl = 'https://bsc-dataseed1.binance.org'; break;
  }
  const provider = new Web3.providers.HttpProvider(rpcUrl);
  web3 = new Web3(provider);
}

window.web3 = web3;

export default web3;
