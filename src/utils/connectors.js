import { InjectedConnector } from '@web3-react/injected-connector';
import { WalletConnectConnector } from '@web3-react/walletconnect-connector';

const POLLING_INTERVAL = 12000;

const RPC_URL_LIST = {
  3: "https://ropsten.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161",
  // 97: "https://data-seed-prebsc-2-s3.binance.org:8545",
<<<<<<< HEAD
  // 80001: "https://rpc-mumbai.maticvigil.com",
  43113: "https://api.avax-test.network/ext/bc/C/rpc",
  4002: "https://rpc.testnet.fantom.network/",
=======
  80001: "https://rpc-mumbai.maticvigil.com",
  43113: "https://api.avax-test.network/ext/bc/C/rpc",
  4002: "https://rpc.testnet.fantom.network/",
  1287: "https://rpc.testnet.moonbeam.network/",
>>>>>>> fbc57f3d23fc30983d8d562b3367c6eed39dd8e8
}

export const injected = new InjectedConnector({ supportedChainIds: Object.keys(RPC_URL_LIST) });

export const walletconnect = new WalletConnectConnector({
  rpc: RPC_URL_LIST,
  qrcode: true,
  pollingInterval: POLLING_INTERVAL,
});