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
import NftBridgeController from "../contracts/NftBridgeController";
import MarketplaceMetaWalletGMP from "../contracts/MarketplaceMetaWalletGMP";

const environment = "testnet";
const axelarApi = new AxelarAssetTransfer({ environment });

export const CROSS_CHAIN_TOKEN_ADDRESS = {
  uluna: {
    3: "0x7Aa125543B9D4a361f58aC1Ff3Bea86eAF6D948B",
    80001: "0x6Ad38DD216DC344c6B3CeDc34612e1014e2aa469",
    43113: "0x50a70aBb7bd6EbBcC46Df7C0d033C568F563cA27",
    4002: "0x121286BeDd58d58558A30ED2db2f4a7c6Eb646A3",
    1287: "0xa1cF442E73045F1ea9960499FC8771454a01019D",
  },
  uusd: {
    3: "0x1487F3faefE78792CDC48D87FF32aaC6650fd85f",
    80001: "0xa32575f477FDEbFA02513880d47F6515Da42FB90",
    43113: "0x43F4600b552089655645f8c16D86A5a9Fa296bc3",
    4002: "0x89A1D86901D25EFFe5D022bDD1132827e4D7f010",
    1287: "0xD34007Bb8A54B2FBb1D6647c5AbA04D507ABD21d",
  },
  "wavax-wei": {
    3: "0x72af7e1e7E0D38bCF033C541598F5a0301D051A5",
    80001: "0x6DD60c05FdA1255A44Ffaa9A8200b5b179A578D6",
    43113: "0xd00ae08403B9bbb9124bB305C09058E32C39A48c",
    4002: "0x8776aDD48553518641a589C39792cc409d4C8B84",
    1287: "0x64aae6319934995Bf30e67EBBBA9750256E07283",
  }
};

export function crossChainTokenSymbol(chainId, tokenAddress) {
  for (let symbol in CROSS_CHAIN_TOKEN_ADDRESS) {
    // console.log(CROSS_CHAIN_TOKEN_ADDRESS[symbol][chainId]);
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
    case "wavax-wei":
      return "AVAX";
  }

  return symbol;
}

export function calculateSelectedTokensFromFilter(filter) {
  // avaxCoin: false,
  // lunaCoin: false,
  // ustCoin: false,

  let selectedTokens = [];

  if (filter.avaxCoin) {
    for (let chainId in CROSS_CHAIN_TOKEN_ADDRESS['wavax-wei']) {
      selectedTokens.push(CROSS_CHAIN_TOKEN_ADDRESS['wavax-wei'][chainId])
    }
  }
  
  if (filter.lunaCoin) {
    for (let chainId in CROSS_CHAIN_TOKEN_ADDRESS.uluna) {
      selectedTokens.push(CROSS_CHAIN_TOKEN_ADDRESS.uluna[chainId])
    }
  }
  
  if (filter.ustCoin) {
    for (let chainId in CROSS_CHAIN_TOKEN_ADDRESS.uusd) {
      selectedTokens.push(CROSS_CHAIN_TOKEN_ADDRESS.uusd[chainId])
    }
  }

  return selectedTokens;
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
    case 80001:
      chainName = "polygon";
      break;
    case 43113:
      chainName = "avalanche";
      break;
    case 4002:
      chainName = "fantom";
      break;
    case 1287:
      chainName = "moonbeam";
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
  listPrice,
  setStatus,
  setTx,
) {
  let itemFromApi = await fetchItem(chainId, collectionAddress, tokenId);

  if (itemFromApi.listAmount <= 0) {
    setStatus(5)
    throw new Error("Frontrun");
  }

  // LOCK
  // await axios.post(
  //   process.env.REACT_APP_API_HOST +
  //     "/api/nft/collections/" +
  //     collectionAddress +
  //     "/" +
  //     chainId +
  //     "/items/" +
  //     tokenId +
  //     "/lock"
  // );

  setStatus(0);

  let address = (await web3.eth.getAccounts())[0];
  let symbol = crossChainTokenSymbol(chainId, listTokenAddress);
  let targetToken = new ERC20(chainId, listTokenAddress, address, true);
  let nft = new ERC721MetaMintable(
    chainId,
    collectionAddress,
    address,
    true
  )

  let seller = await nft.ownerOf(tokenId);
  console.log("SELLER:", seller);

  // EVM mode
  if (symbol.endsWith("wei")) {
    const sourceChainId = 43113; // MOCK

    setStatus(1)

    await switchChain(sourceChainId);
    let metaWallet = new MarketplaceMetaWalletGMP(sourceChainId, address);

    let tx = await metaWallet.bridge(
      sourceChainId,
      chainId,
      seller,
      collectionAddress,
      tokenId,
      listPrice,
    )

    upRateLimit(1);
    setTx(tx.transactionHash)

    // DELIST
    await axios.post(
      process.env.REACT_APP_API_HOST +
        "/api/nft/collections/" +
        collectionAddress +
        "/" +
        chainId +
        "/items/" +
        tokenId +
        "/delist"
    );

    setStatus(2);

    // Polling
    while (true) {
      try {
        let nftOwner = await nft.ownerOf(tokenId);

        // console.log(balance);
        // console.log(parseFloat(balance) / 1000000, listPrice);

        if (nftOwner.toLowerCase() == address.toLowerCase()) {
          break;
        } else {
          console.log("Not arrived");
        }
      } catch (err) {
        console.error(err);
      }
      await wait(3000);
    }

    await wait(6000);

    setStatus(5);

    return;
  }

  let metaWalletAddress = await getMetaWalletAddress(chainId, address);
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

    setStatus(1)

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
            amount: Math.floor(listPrice * 1.05 * 1e6).toString(),
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
          amount: [
            {
              denom: "uluna",
              amount: "18750",
            },
          ],
        },
      });
    }

    setStatus(2)

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
  setStatus(3)

  let signature = await generateBuyERC721Signature(
    chainId,
    metaWalletAddress,
    collectionAddress,
    seller,
    tokenId
  );
  console.log(signature);

  setStatus(4)

  await executeMetaWalletTx(chainId, address, signature);

  await wait(6000);

  setStatus(5)

  // await refreshMetadata(chainId, collectionAddress, tokenId);
}

export async function fetchAllItems({ listTokenAddress = [] } = {}) {
  let response = await axios.get(
    process.env.REACT_APP_API_HOST + "/api/nft/items",
    {
      params: {
        listTokenAddress,
      }
    }
  );
  return response.data.docs;
}

export async function fetchAllListedItems({ limit = 20, page = 1, listTokenAddress = [] } = {}) {
  let response = await axios.get(
    process.env.REACT_APP_API_HOST + "/api/nft/items/listed",
    {
      params: {
        limit,
        page,
        priceStart: 0.1,
        listTokenAddress,
      },
    }
  );
  return response.data.docs;
}

export async function fetchAllHolderItems(address, { listTokenAddress = [] } = {}) {
  let response = await axios.get(
    process.env.REACT_APP_API_HOST + "/api/nft/items/holder/" + address,
    {
      params: {
        listTokenAddress,
      }
    }
  );
  return response.data.docs;
}

export async function fetchAllMyItems(options = {}) {
  let address = (await web3.eth.getAccounts())[0];
  // console.log(address)
  return await fetchAllHolderItems(address, options);
}

export async function fetchItem(chainId, collectionAddress, tokenId) {
  let response = await axios.get(
    process.env.REACT_APP_API_HOST +
      "/api/nft/collections/" +
      collectionAddress +
      "/" +
      chainId +
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
      "/" +
      chainId +
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

  let tokenLabel = crossChainTokenLabel(chainId, listTokenAddress);

  // console.log(collectionAddress, tokenId, listAmount, listTokenAddress, listPrice);

  await contract.list(
    collectionAddress,
    tokenId,
    listAmount,
    listTokenAddress,
    tokenLabel == 'UST' || tokenLabel == 'LUNA' ? Math.floor(listPrice * 1000000) : web3.utils.toWei(listPrice),
  );

  await wait(1000);

  await refreshMetadata(chainId, collectionAddress, tokenId);
}

const BRIDGE_GAS_LIMIT = 250_000;
const GAS_PRICE = {
  3: 40,
  97: 10,
  80001: 10,
  43113: 30,
  4002: 300,
  1287: 5,
}
const GAS_TOKEN_PRICE = {
  3: 4000,
  97: 500,
  80001: 2,
  43113: 100,
  4002: 1,
  1287: 4,
}

export async function bridgeNft(sourceChainId, destChainId, nftId, tokenId, to, setStatus, setLockTx) {
  await switchChain(sourceChainId);
  let account = (await web3.eth.getAccounts())[0];

  const toEncoded = web3.eth.abi.encodeParameters(
    ['address'],
    [to]
  );

  let sourceBridgeController = new NftBridgeController(sourceChainId, account);
  let sourceNftAddress = await sourceBridgeController.nftId2address(nftId);
  let sourceNft = new ERC721MetaMintable(sourceChainId, sourceNftAddress, account);

  const gasDestToken = BRIDGE_GAS_LIMIT * GAS_PRICE[destChainId] / 1000000000;
  const gasSourceToken = gasDestToken * GAS_TOKEN_PRICE[destChainId] / GAS_TOKEN_PRICE[sourceChainId];

  console.log(gasSourceToken)

  if (!(await sourceNft.allowance(account, sourceBridgeController.address))) {
    await sourceNft.approve(sourceBridgeController.address);
  }
  
  let lockTx = await sourceBridgeController.bridge(destChainId, nftId, tokenId, 1, toEncoded, web3.utils.toWei(gasSourceToken.toPrecision(9)));

  console.log(lockTx)

  upRateLimit(1)
  setStatus(1)
  setLockTx(lockTx.transactionHash)

  await wait(500);

  // refreshMetadata(sourceChainId, sourceNftAddress, tokenId);

  let destBridgeController = new NftBridgeController(destChainId, account, true);
  let destNftAddress = await destBridgeController.nftId2address(nftId);
  let destNft = new ERC721MetaMintable(destChainId, destNftAddress, account, true);
  let unlocked = false;

  console.log('NFT ID', nftId);
  console.log('Dest NFT', destNftAddress);

  while (!unlocked) {
    console.log('WAITING FOR UNLOCK')

    try {
      if ((await destNft.ownerOf(tokenId)).toLowerCase() == account.toLowerCase()) {
        unlocked = true;
      }
    } catch (err) {}

    await wait(3000);
  }

  setStatus(2)

  // await refreshMetadata(destChainId, destNftAddress, tokenId);
}

export async function getDestinationNftAddress(sourceChainId, sourceNftAddress, destChainId) {
  let account = (await web3.eth.getAccounts())[0];

  let sourceBridgeController = new NftBridgeController(sourceChainId, account, true);
  let nftId = await sourceBridgeController.address2nftId(sourceNftAddress);

  let destBridgeController = new NftBridgeController(destChainId, account, true);
  return await destBridgeController.nftId2address(nftId);
}

export async function upRateLimit(id) {
  return await axios.post(process.env.REACT_APP_API_HOST + '/api/nft/ratelimit/' + id);
}