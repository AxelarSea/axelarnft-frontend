import axios from "axios";
import ERC721MetaMintable from "../contracts/ERC721MetaMintable";
import Marketplace from "../contracts/Marketplace";
import web3 from "../hooks/web3";
import switchChain from "./switchChain";
import wait from "./wait";

export async function fetchAllItems() {
  let response = await axios.get(process.env.REACT_APP_API_HOST + '/api/nft/items');
  return response.data.docs;
}

export async function fetchAllListedItems() {
  let response = await axios.get(process.env.REACT_APP_API_HOST + '/api/nft/items/listed');
  return response.data.docs;
}

export async function fetchAllHolderItems(address) {
  let response = await axios.get(process.env.REACT_APP_API_HOST + '/api/nft/items/holder/' + address);
  return response.data.docs;
}

export async function fetchAllMyItems() {
  let address = (await web3.eth.getAccounts())[0];
  // console.log(address)
  return await fetchAllHolderItems(address);
}

export async function fetchItem(collectionAddress, tokenId) {
  let response = await axios.get(process.env.REACT_APP_API_HOST + '/api/nft/collection/' + collectionAddress + '/items/' + tokenId);
  return response.data;
}

export async function refreshMetadata(chainId, collectionAddress, tokenId) {
  return await axios.post(process.env.REACT_APP_API_HOST + '/api/nft/collections/' + collectionAddress + '/items/' + tokenId + '/refreshMetadata');
}

export async function listItem(chainId, collectionAddress, tokenId, listTokenAddress, listPrice, listAmount = 1) {
  // console.log(chainId, tokenId, listAmount, listTokenAddress, listPrice);
  
  await switchChain(chainId);

  // console.log('BBB')

  await wait(500);

  let account = (await web3.eth.getAccounts())[0];
  let contract = new Marketplace(chainId, account);
  let erc721 = new ERC721MetaMintable(chainId, collectionAddress, account);
  let allowance = await erc721.allowance(account, contract.address);
  
  if (!allowance) {
    await erc721.approve(contract.address);
  }

  // console.log(collectionAddress, tokenId, listAmount, listTokenAddress, listPrice);

  await contract.list(collectionAddress, tokenId, listAmount, listTokenAddress, listPrice);

  await wait(1000);

  await refreshMetadata(chainId, collectionAddress, tokenId);
}

export async function buyERC721(chainId, collectionAddress, tokenId) {

}
