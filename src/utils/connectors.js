import { InjectedConnector } from '@web3-react/injected-connector';
import { WalletConnectConnector } from '@web3-react/walletconnect-connector';

const POLLING_INTERVAL = 12000;

const RPC_URL_LIST = {
  3: "https://ropsten.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161",
  // 97: "https://data-seed-prebsc-2-s3.binance.org:8545",
  // 80001: "https://rpc-mumbai.maticvigil.com",
  43113: "https://api.avax-test.network/ext/bc/C/rpc",
  4002: "https://rpc.testnet.fantom.network/",
}

export const injected = new InjectedConnector({ supportedChainIds: Object.keys(RPC_URL_LIST) });

export const walletconnect = new WalletConnectConnector({
  rpc: RPC_URL_LIST,
  qrcode: true,
  pollingInterval: POLLING_INTERVAL,
});