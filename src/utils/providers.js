import { ethers } from 'ethers';

export const simpleRpcProvider = new ethers.providers.JsonRpcProvider(process.env.REACT_APP_MAIN_CHAIN_RPC_URL);