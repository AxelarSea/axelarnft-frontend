import { getMessage } from 'eip-712';
import { Signature, utils } from 'ethers';
import web3 from "../hooks/web3"

export async function generateSignature(chainId, tokenAddress, functionSignature, ContractClass) {
  const account = web3[chainId].eth.defaultAccount;

  // console.log('Token Address', tokenAddress);
  // console.log('Account', account);
  // console.log('Function Signature', functionSignature);

  // try to gather a signature for permission
  const token = await new ContractClass(tokenAddress, account);
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
    verifyingContract: tokenAddress,
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

  // Get a signable message from the typed data
  const signingKey = new utils.SigningKey(privateKey);
  const typedMessage = getMessage(typedData, true);
  let signature = signingKey.signDigest(typedMessage);

  return {
    ...signature,
    functionSignature: functionSignature,
    nonce,
  }
}