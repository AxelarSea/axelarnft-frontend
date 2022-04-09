import axios from "axios";
import ERC721MetaMintable from "../contracts/ERC721MetaMintable";
import Marketplace from "../contracts/Marketplace";
import web3 from "../hooks/web3";
import switchChain from "./switchChain";
import wait from "./wait";

import {
  GetDepositAddressDto,
  GetDepositAddressPayload,
  AxelarAssetTransfer,
} from "@axelar-network/axelarjs-sdk";

import {
  LCDClient,
  MnemonicKey,
  MsgTransfer,
  Coin,
} from "@terra-money/terra.js";
import ERC20 from "../contracts/ERC20";
import { generateBuyERC721Signature } from "../contracts/generateSignature";
import { executeCosmosTransaction } from "./keplr";

const environment = "testnet";
const axelarApi = new AxelarAssetTransfer({ environment });

export const CROSS_CHAIN_TOKEN_ADDRESS = {
  uluna: {
    3: "0x7Aa125543B9D4a361f58aC1Ff3Bea86eAF6D948B",
    43113: "0x50a70aBb7bd6EbBcC46Df7C0d033C568F563cA27",
    4002: "0x121286BeDd58d58558A30ED2db2f4a7c6Eb646A3",
  },
  uusd: {
    3: "0x1487F3faefE78792CDC48D87FF32aaC6650fd85f",
    43113: "0x43F4600b552089655645f8c16D86A5a9Fa296bc3",
    4002: "0x89A1D86901D25EFFe5D022bDD1132827e4D7f010",
  },
};

export function crossChainTokenSymbol(chainId, tokenAddress) {
  for (let symbol in CROSS_CHAIN_TOKEN_ADDRESS) {
    console.log(CROSS_CHAIN_TOKEN_ADDRESS[symbol][chainId]);
    if (
      (CROSS_CHAIN_TOKEN_ADDRESS[symbol][chainId] || "").toLowerCase() ==
      (tokenAddress || "").toLowerCase()
    ) {
      return symbol;
    }
  }
  return "";
}

export function crossChainTokenLabel(chainId, tokenAddress) {
  let symbol = crossChainTokenSymbol(chainId, tokenAddress);

  switch (symbol) {
    case "uluna":
      return "LUNA";
    case "uusd":
      return "UST";
  }

  return symbol;
}

export async function getMetaWalletAddress(chainId, address) {
  let response = await axios.post(
    process.env.REACT_APP_API_HOST +
      "/api/metatx/createMetaWallet/" +
      chainId +
      "/" +
      address
  );
  return response.data.metaWalletAddress;
}

export async function executeMetaWalletTx(chainId, address, signature) {
  let response = await axios.post(
    process.env.REACT_APP_API_HOST +
      "/api/metatx/metawallet/" +
      chainId +
      "/" +
      address,
    signature
  );
  return true;
}

export const getDepositAddress = async (chainId, asset, destinationAddress) => {
  let chainName = "";

  switch (parseInt(chainId)) {
    case 3:
      chainName = "ethereum";
      break;
    case 43113:
      chainName = "avalanche";
      break;
    case 4002:
      chainName = "fantom";
      break;
  }

  const payload = {
    fromChain: "terra",
    toChain: chainName,
    destinationAddress: destinationAddress,
    asset: asset,
  };

  const linkAddress = await axelarApi.getDepositAddress(
    payload.fromChain,
    payload.toChain,
    payload.destinationAddress,
    payload.asset
  );
  return linkAddress;
};

export async function buyERC721(
  wallet,
  chainId,
  collectionAddress,
  tokenId,
  listTokenAddress,
  listPrice
) {
  let address = (await web3.eth.getAccounts())[0];
  let metaWalletAddress = await getMetaWalletAddress(chainId, address);
  let symbol = crossChainTokenSymbol(chainId, listTokenAddress);
  let targetToken = new ERC20(chainId, listTokenAddress, address, true);

  let seller = await new ERC721MetaMintable(
    chainId,
    collectionAddress,
    address,
    true
  ).ownerOf(tokenId);
  console.log("SELLER:", seller);

  let startBalance = await targetToken.balanceOf(metaWalletAddress);

  if (parseFloat(startBalance) / 1000000 < listPrice) {
    let depositAddress = await getDepositAddress(
      chainId,
      symbol,
      metaWalletAddress
    );
    console.log("MetaWalletAddress", metaWalletAddress);
    console.log("CHAIN ID", chainId);
    console.log(depositAddress);

    if (wallet != "KEPLR") {
      const msgTransfer = new MsgTransfer(
        "transfer",
        "channel-78",
        new Coin(symbol, Math.floor(listPrice * 1.05 * 1e6)),
        wallet.walletAddress,
        depositAddress,
        undefined,
        (Date.now() + 60 * 1000) * 1e6
      );

      console.log(wallet);

      await wallet.post({
        msgs: [msgTransfer],
      });
    } else {
      const chainIdCosmos = "bombay-12";
      const rpcCosmos = "https://terra-bombay-rpc.axelarnft.workers.dev/";
      const offlineSigner = window.keplr.getOfflineSigner(chainIdCosmos);
      const accounts = await offlineSigner.getAccounts();
      
      const msgTransfer = {
        type: "cosmos-sdk/MsgTransfer",
        value: {
          source_port: "transfer",
          source_channel: "channel-78",
          token: {
            denom: symbol,
            amount: Math.floor(listPrice * 1.05 * 1e6),
          },
          sender: accounts[0]?.address,
          receiver: depositAddress,
          // timeout_height: {
          //   revision_number: "4",
          //   revision_height: "1762978",
          // },
          timeout_timestamp: (Date.now() + 60 * 1000) * 1e6,
        },
        __type: "CosmosIBCTransferMessage",
      };

      await executeCosmosTransaction({
        chainId: chainIdCosmos,
        msgs: [msgTransfer],
        rpcUrl: rpcCosmos,
        fee: {
          gas: "150000",
          amount: [{
            denom: 'uluna',
            amount: 270000,
          }]
        }
      })
    }

    // Polling
    while (true) {
      try {
        let balance = await targetToken.balanceOf(metaWalletAddress);

        // console.log(balance);
        // console.log(parseFloat(balance) / 1000000, listPrice);

        if (parseFloat(balance) / 1000000 >= listPrice) {
          break;
        } else {
          console.log("Not arrived");
        }
      } catch (err) {
        console.error(err);
      }

      await wait(3000);
    }
  }

  console.log("Deposit arrived");

  let signature = await generateBuyERC721Signature(
    chainId,
    metaWalletAddress,
    collectionAddress,
    seller,
    tokenId
  );
  console.log(signature);

  await executeMetaWalletTx(chainId, address, signature);

  await wait(1000);

  await refreshMetadata(chainId, collectionAddress, tokenId);
}

export async function fetchAllItems() {
  let response = await axios.get(
    process.env.REACT_APP_API_HOST + "/api/nft/items"
  );
  return response.data.docs;
}

export async function fetchAllListedItems() {
  let response = await axios.get(
    process.env.REACT_APP_API_HOST + "/api/nft/items/listed"
  );
  return response.data.docs;
}

export async function fetchAllHolderItems(address) {
  let response = await axios.get(
    process.env.REACT_APP_API_HOST + "/api/nft/items/holder/" + address
  );
  return response.data.docs;
}

export async function fetchAllMyItems() {
  let address = (await web3.eth.getAccounts())[0];
  // console.log(address)
  return await fetchAllHolderItems(address);
}

export async function fetchItem(collectionAddress, tokenId) {
  let response = await axios.get(
    process.env.REACT_APP_API_HOST +
      "/api/nft/collections/" +
      collectionAddress +
      "/items/" +
      tokenId
  );
  return response.data;
}

export async function refreshMetadata(chainId, collectionAddress, tokenId) {
  return await axios.post(
    process.env.REACT_APP_API_HOST +
      "/api/nft/collections/" +
      collectionAddress +
      "/items/" +
      tokenId +
      "/refreshMetadata"
  );
}

export async function cancelListing(chainId, collectionAddress, tokenId) {
  await switchChain(chainId);
  let account = (await web3.eth.getAccounts())[0];
  let response = await new Marketplace(chainId, account).cancelListing(
    collectionAddress,
    tokenId
  );
  await refreshMetadata(chainId, collectionAddress, tokenId);
  return response;
}

export async function listItem(
  chainId,
  collectionAddress,
  tokenId,
  listTokenAddress,
  listPrice,
  listAmount = 1
) {
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

  await contract.list(
    collectionAddress,
    tokenId,
    listAmount,
    listTokenAddress,
    Math.floor(listPrice * 1000000)
  );

  await wait(1000);

  await refreshMetadata(chainId, collectionAddress, tokenId);
}
