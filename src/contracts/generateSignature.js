import { splitSignature } from '@ethersproject/bytes'
import web3 from "../hooks/web3"
import switchChain from '../utils/switchChain';
import MarketplaceMetaWallet from './MarketplaceMetaWallet';

export async function generateSignature(chainId, contractAddress, functionSignature, ContractClass) {
  const account = (await web3.eth.getAccounts())[0];

  // console.log('Token Address', tokenAddress);
  // console.log('Account', account);
  // console.log('Function Signature', functionSignature);

  // try to gather a signature for permission
  const token = await new ContractClass(chainId, contractAddress, account);
  // const nonce = await token.getNonce(account);
  const nonce = Date.now().toString() + Math.floor(Math.random() * 10000).toString(); // New version of nonce to enable parallel call
  // console.log(nonce)
  const name = await token.name();

  const EIP712Domain = [
    { name: 'name', type: 'string' },
    { name: 'version', type: 'string' },
    { name: 'chainId', type: 'uint256' },
    { name: 'verifyingContract', type: 'address' },
  ]

  const domain = {
    name: name,
    version: '1',
    chainId,
    verifyingContract: contractAddress,
  }

  const MetaTransaction = [
    { name: 'nonce', type: 'uint256' },
    { name: 'from', type: 'address' },
    { name: 'functionSignature', type: 'bytes' },
  ]
  const message = {
    nonce,
    from: account,
    functionSignature
  }
  const typedData = {
    types: {
      EIP712Domain,
      MetaTransaction,
    },
    domain,
    primaryType: 'MetaTransaction',
    message,
  }

  console.log({
    method: "eth_signTypedData_v4",
    params: [account, JSON.stringify(typedData)],
    from: account
  })

  await switchChain(chainId);

  // Get a signable message from the typed data
  // const signingKey = new utils.SigningKey(privateKey);
  // const typedMessage = getMessage(typedData, true);
  // let signature = signingKey.signDigest(typedMessage);
  const signatureBytes = await new Promise((resolve, reject) => {
    web3.currentProvider.sendAsync({
      method: "eth_signTypedData_v4",
      params: [account, JSON.stringify(typedData)],
      from: account
    }, function (err, result) {
      if (err) {
        reject(err);
        return;
      }

      return resolve(result.result);
    });
  });
  // console.log(signatureBytes);

  const signature = splitSignature(signatureBytes);
  // console.log(signature);

  return {
    ...signature,
    functionSignature: functionSignature,
    nonce,
  }
}

export async function generateBuyERC721Signature(chainId, metaWalletAddress, tokenAddress, seller, tokenId) {
  const functionSignature = web3.eth.abi.encodeFunctionCall(
    {
      "inputs": [
        {
          "internalType": "contract IERC721",
          "name": "token",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "seller",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "buyERC721",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    [tokenAddress, seller, tokenId],
  );

  return await generateSignature(chainId, metaWalletAddress, functionSignature, MarketplaceMetaWallet);
}