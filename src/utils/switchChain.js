import web3 from "../hooks/web3";

const networkData = {
  3: {
    chainId: '0x3',
    chainName: 'Ropsten Test Network',
    rpcUrls: ['https://ropsten.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161'],
    nativeCurrency: {
      name: 'Ethereum',
      symbol: 'ETH',
      decimals: 18,
    },
    blockExplorerUrls: ['https://ropsten.etherscan.io'],
  },
  80001: {
    chainId: '0x13881',
    chainName: 'Polygon Mumbai Testnet',
    rpcUrls: ['https://rpc-mumbai.maticvigil.com'],
    nativeCurrency: {
      name: 'Matic',
      symbol: 'MATIC',
      decimals: 18,
    },
    blockExplorerUrls: ['https://mumbai.polygonscan.com'],
  },
  43113: {
    chainId: '0xA869',
    chainName: 'Avalanche FUJI Testnet',
    rpcUrls: ['https://api.avax-test.network/ext/bc/C/rpc'],
    nativeCurrency: {
      name: 'Avalanche',
      symbol: 'AVAX',
      decimals: 18,
    },
    blockExplorerUrls: ['https://testnet.snowtrace.io'],
  },
  4002: {
    chainId: '0xFA2',
    chainName: 'Fantom Testnet',
    rpcUrls: ['https://rpc.testnet.fantom.network'],
    nativeCurrency: {
      name: 'Fantom',
      symbol: 'FTM',
      decimals: 18,
    },
    blockExplorerUrls: ['https://testnet.ftmscan.com'],
  },
  1287: {
    chainId: '0x507',
    chainName: 'Moonbase Alpha Testnet',
    rpcUrls: ['https://rpc.testnet.moonbeam.network'],
    nativeCurrency: {
      name: 'GLMR Development',
      symbol: 'DEV',
      decimals: 18,
    },
    blockExplorerUrls: ['https://moonbase.moonscan.io'],
  },
};

export function getExplorerUrl(chainId) {
  return (networkData[chainId] && networkData[chainId].blockExplorerUrls[0]) || "";
}

export default async function switchChain(chainId) {
  let currentChainId = await web3.eth.getChainId();

  if (currentChainId == chainId) return true;

  console.log('0x' + parseInt(chainId).toString(16))

  if (chainId < 10) {
    return await window.ethereum.request({
      method: 'wallet_switchEthereumChain',
      params: [{ chainId: '0x' + parseInt(chainId).toString(16) }],
    });
  }

  return await window.ethereum.request({
    method: 'wallet_addEthereumChain',
    params: [networkData[chainId]],
  });
}