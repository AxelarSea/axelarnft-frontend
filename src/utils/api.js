import axios from "axios";
import web3 from "../hooks/web3";

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