import React, { useEffect, useState, Component } from "react";
import { Link, useSearchParams } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Countdown from "react-countdown";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import avt from "../assets/images/avatar/satoshi.svg";
import img1 from "../assets/images/box-item/card-item-3.jpg";
import imga1 from "../assets/images/avatar/avt-1.jpg";
import imgCollection1 from "../assets/images/avatar/avt-18.jpg";
import img2 from "../assets/images/box-item/card-item-4.jpg";
import imga2 from "../assets/images/avatar/avt-2.jpg";
import imgCollection2 from "../assets/images/avatar/avt-18.jpg";
import img3 from "../assets/images/box-item/card-item-2.jpg";
import imga3 from "../assets/images/avatar/avt-4.jpg";
import imgCollection3 from "../assets/images/avatar/avt-18.jpg";
import img4 from "../assets/images/box-item/card-item-7.jpg";
import imga4 from "../assets/images/avatar/avt-3.jpg";
import imgCollection4 from "../assets/images/avatar/avt-18.jpg";
import img5 from "../assets/images/box-item/card-item8.jpg";
import imga5 from "../assets/images/avatar/avt-12.jpg";
import imgCollection5 from "../assets/images/avatar/avt-18.jpg";
import img6 from "../assets/images/box-item/card-item-9.jpg";
import imga6 from "../assets/images/avatar/avt-1.jpg";
import imgCollection6 from "../assets/images/avatar/avt-18.jpg";
import img7 from "../assets/images/box-item/image-box-6.jpg";
import imga7 from "../assets/images/avatar/avt-4.jpg";
import imgCollection7 from "../assets/images/avatar/avt-18.jpg";
import img8 from "../assets/images/box-item/image-box-11.jpg";
import imga8 from "../assets/images/avatar/avt-3.jpg";
import imgCollection8 from "../assets/images/avatar/avt-18.jpg";
import ethwallet from '../assets/images/icon/ethwallet.svg'
import terrawallet from '../assets/images/icon/terrawallet.svg'

import AlunaLogo from "../assets/images/icon/Luna.png";
import AustLogo from "../assets/images/icon/UST.png";
import ethLogo from '../assets/images/icon/eth-logo.svg'
import polygonLogo from '../assets/images/icon/polygon-logo.svg'
import avaxLogo from '../assets/images/icon/avax-logo.svg'
import moonbeamLogo from '../assets/images/icon/moonbeam-logo.svg'
import fantomLogo from '../assets/images/icon/fantom-logo.svg'
import bridgeimg from '../assets/images/backgroup-secsion/bridge_effect.gif'
import iconnfttable from '../assets/images/icon/icon-nft-table.svg'
import iconnfttableselect from '../assets/images/icon/icon-nft-table-select.svg'
import spin from '../assets/images/icon/processing.gif'
import moonbeamfaucetLogo from '../assets/images/logo/moonbeamfaucetLogo.svg'
import subHeader from '../assets/images/logo/subHeadder.svg'
import questionMark from '../assets/images/icon/question-mark.svg'
import menu from '../assets/images/icon/icon-menu.svg'
import processText from '../assets/images/icon/processing-text.gif'


import HeaderStyle2 from "../components/header/HeaderStyle2";
import { bridgeNft, CROSS_CHAIN_TOKEN_ADDRESS, fetchItem, listItem } from "../utils/api";
import web3 from "../hooks/web3";
import { chainLabel, maskAddress } from "../utils/address";

import one from "../../src/assets/images/icon/1.svg"
import two from "../../src/assets/images/icon/2.svg"
import Bridge from "../../src/assets/images/icon/bridgeandborder.svg"
import stepOne from "../../src/assets/images/icon/stepone.svg"
import stepTwo from "../../src/assets/images/icon/steptwo.svg"

import SelectChainModal from "../components/layouts/SelectChainModal";
import SelectChainDestinationModal from "../components/layouts/SelectChainDestinationModal";
import SelectNftModal from '../components/layouts/SelectNftModal'

import Explore from "../components/layouts/explore-04/Explore";
import widgetSidebarData from "../assets/fake-data/data-widget-sidebar";
import { cancelListing, crossChainTokenLabel, fetchAllMyItems } from "../utils/api";
import Swal from "sweetalert2";
import CongratBridgeModal from "../components/layouts/CongratBridgeModal";

const sampleNftId = {
  "3": "1020847100762815390390123822295304634369",
  "1287": "437943406227247802477363119764685688143873",
  "4002": "1361810032417595730780425178941936382246913",
  "43113": "14670593685062419975296469450205822900502529",
  "80001": "27222929636041998015533431969148888684691457"
}


const NFTBridge = () => {



  const [congratBridgeModalShow,setCongratBridgeModalShow] = useState(false)

  const [selectChainDestinationShow,setSelectChainDestinationShow] = useState(false)

  const [nftSelect,setNftSelect] = useState(null)

  const [isSelect,setIsSelect] = useState(true)

  const [items, setItems] = useState([]);
  const [defaultItems, setDefaultItems] = useState([]);

  const [selectNftModalShow,setSelectNftModalShow] = useState(false)

  const [wallet , setWallet] = useState('')

  const [walletAddress, setwalletAddress] = useState('')

  const handleWalletChange = e => {
    setwalletAddress(e.target.value)
  }

  const connectWalletHandler = () => {
    if (window.ethereum && window.ethereum.isMetaMask) {
      console.log("MetaMask Here!");

      window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then((result) => {
         setWallet(result[0]);
          // setConnButtonText("Wallet Connected");
        })
        .catch((error) => {
          console.log(error)
        });
    } else {
      console.log("Need to install MetaMask");
      // setErrorMessage("Please install MetaMask browser extension to interact");
    }
  };

  const [menuTab] = useState([
    {
      class: "active",
      name: "Collected",
    },
    {
      class: "",
      name: "Listing",
    },
    // {
    //     class: '',
    //     name: 'MUSIC'
    // },
    // {
    //     class: '',
    //     name: 'COLLECTIBLES'
    // },
    // {
    //     class: '',
    //     name: 'SPORTS'
    // },
  ]);
  const [panelTab, setPanelTab] = useState([
    {
      id: 2,
      dataContent: [
        {
          id: 2,
          img: img2,
          title: "The RenaiXance Rising the sun ",
          tags: "bsc",
          imgAuthor: imga2,
          nameAuthor: "SalvadorDali",
          Price: "4.89 ETH",
          PriceChange: "$12.246",
          wishlist: "100",
          imgCollection: imgCollection2,
          nameCollection: "Creative Art 3D",
        },
        {
          id: 3,
          img: img3,
          title: "The RenaiXance Rising the sun ",
          tags: "bsc",
          imgAuthor: imga3,
          nameAuthor: "SalvadorDali",
          Price: "4.89 ETH",
          PriceChange: "$12.246",
          wishlist: "100",
          imgCollection: imgCollection3,
          nameCollection: "Creative Art 3D",
        },
        {
          id: 4,
          img: img4,
          title: "The RenaiXance Rising the sun ",
          tags: "bsc",
          imgAuthor: imga4,
          nameAuthor: "SalvadorDali",
          Price: "4.89 ETH",
          PriceChange: "$12.246",
          wishlist: "100",
          imgCollection: imgCollection4,
          nameCollection: "Creative Art 3D",
        },
        {
          id: 5,
          img: img5,
          title: "The RenaiXance Rising the sun ",
          tags: "bsc",
          imgAuthor: imga5,
          nameAuthor: "SalvadorDali",
          Price: "4.89 ETH",
          PriceChange: "$12.246",
          wishlist: "100",
          imgCollection: imgCollection5,
          nameCollection: "Creative Art 3D",
        },
      ],
    },
  ]);
  const [data, setData] = useState({});
  const [Price, setPrice] = useState("");
  const [PriceType, setPriceType] = useState("aLUNA");
  const [PricePic, setPricePic] = useState(AlunaLogo);
  const [processing, setProcessing] = useState(false);

  const [modalShow , setModalShow] = useState(false)

  const [searchParams, setSearchParams] = useSearchParams();

  const collectionAddress = searchParams.get('collection');
  const tokenId = searchParams.get('tokenId');
  const chainId = searchParams.get('chainId');

  const [myNftOn , setMyNftOn] = useState(null)
  const [myNftOnChainId , setMyNftOnChainId] = useState(null)
  const [myNftOnImg , setMyNftOnImg] = useState(null)

  const [destinationNftChain , setDestinationNftChain] = useState(null)
  const [destinationNftChainId , setDestinationNftChainId] = useState(null)
  const [destinationNftChainImg , setDestinationNftChainImg] = useState(null)

  const [visible, setVisible] = useState(8);

  const onSelect = id => {
    setSelectNftModalShow(false)
    console.log(id)
    const filterItem = defaultItems.filter(item => item.id === id)
    console.log(defaultItems)
    setNftSelect(filterItem[0])
    setwalletAddress(filterItem[0].owner)
    console.log(filterItem[0])
    setIsSelect(false)
    setDestinationNftChainImg(questionMark)

    if(filterItem[0].chainId === 43113){
      setMyNftOn('Avalanche')
      setMyNftOnChainId(43113)
      setMyNftOnImg(avaxLogo)
    }
    if(filterItem[0].chainId === 3){
      setMyNftOn('Ethereum')
      setMyNftOnChainId(3)
      setMyNftOnImg(ethLogo)
    }
    if(filterItem[0].chainId === 80001){
      setMyNftOn('Polygon')
      setMyNftOnChainId(80001)
      setMyNftOnImg(polygonLogo)
    }
    if(filterItem[0].chainId === 4002){
      setMyNftOn('Fantom')
      setMyNftOnChainId(4002)
      setMyNftOnImg(fantomLogo)
    }
    if(filterItem[0].chainId === 1287){
      setMyNftOn('Moonbeam')
      setMyNftOnChainId(1287)
      setMyNftOnImg(moonbeamLogo)
    }
  }
  const showMoreItemsProfile = () => {
    setVisible((prevValue) => prevValue + 4);
  };

  

  async function cancelListingAction(data) {
    await cancelListing(data.chainId, data.collectionAddress, data.tokenId);
    await refreshData();
    window.alert("Cancel Listing Success");
  }

  async function sellAction(data) {
    window.location.href = "/list-item?chainId=" + data.chainId + "&collection=" + data.collectionAddress + "&tokenId=" + data.tokenId
  }

  function formatItems(items) {
    console.log(items);
    return items.map((x) => ({
      id: x.collection.contractAddress + "-" + x.tokenId,
      img: x.metadata.image,
      title: x.collection.name + " #" + x.tokenId,
      tags: chainLabel(x.collection.chainId),
      imgAuthor: x.owner,
      nameAuthor: x.owner,
      price: (x.listPrice || "-") + " " + crossChainTokenLabel(x.collection.chainId, x.listTokenAddress),
      priceChange: "$12.246",
      wishlist: "100",
      imgCollection: x.metadata.image,
      nameCollection: x.collection.name,
      tokenId: x.tokenId,
      collectionAddress: x.collection.contractAddress,
      chainId: x.collection.chainId,
      listAmount: x.listAmount,
      owner: x.owner,
      nftId: x.collection.nftId,
    }));
  }

  async function refreshData2() {
    console.log("Refresh Start");
    let items = await fetchAllMyItems();
    console.log(items);
    let newItem = formatItems(items)
    let filterNewItem = newItem.filter(item  => item.price === '- ')
    console.log(filterNewItem)
    setItems(filterNewItem);
    setDefaultItems(filterNewItem);
  }

  useEffect(() => {
    setPanelTab([
      {
        id: 1,
        dataContent: items,
      },
      {
        id: 2,
        dataContent: items.filter((x) => x.listAmount),
      },
    ]);
  }, [items]);

  async function listItemOnClick(e) {
    e.preventDefault();

    try {
      setProcessing(true);

      let PriceTypeSymbol = "";

      switch (PriceType) {
        case "aLUNA": PriceTypeSymbol = "uluna"; break;
        case "aUST": PriceTypeSymbol = "uusd"; break;
      }

      console.log(PriceTypeSymbol)
  
      await listItem(
        chainId,
        collectionAddress,
        tokenId,
        CROSS_CHAIN_TOKEN_ADDRESS[PriceTypeSymbol][chainId],
        Price,
      );

      window.alert("List success");
    } finally {
      setProcessing(false);
    }

  }



  async function refreshData() {
    let x = await fetchItem(chainId, collectionAddress, tokenId)
    console.log(x)
    let y = formatItems([x])
    setNftSelect(y[0])
    console.log(y)
  }

  async function bridge() {
    try {
      setProcessing(true);

      // console.log(nftSelect.chainId, destinationNftChainId, nftSelect.nftId, nftSelect.tokenId, nftSelect.owner)
      await bridgeNft(nftSelect.chainId, destinationNftChainId, nftSelect.nftId, nftSelect.tokenId, walletAddress);
  
      Swal.fire(
        'Bridge Success!',
        'You have bridged NFT on ' + myNftOn + ' to ' + destinationNftChain + '!',
        'success'
      ).then(
        setCongratBridgeModalShow(true)
      )
    } finally {
      setProcessing(false);
    }

  }
  

  useEffect(() => {
    refreshData();
    refreshData2();
  }, []);

  useEffect(() => {
    if (collectionAddress && tokenId && !myNftOn && defaultItems.length > 0) {
      onSelect(collectionAddress + '-' + tokenId);
    }
  }, [defaultItems])


  console.log(data)

  return (
    <div className="create-item">
      <HeaderStyle2 />
      <section >
        <div className="overlay2"></div>
        <div className="themesflat-container-bridge">
          <div className="page-title-heading"></div>
          <div className="nft-bridge-section">
            <div className="nftbridge-section">
              <img className="bridge-head-logo" src={moonbeamfaucetLogo} alt="AxelarSeaLogo" width='500rem'/>
              <div className="faucet-box pd-20 d-flex flex-column align-items-center">
                <img src={subHeader} alt="" width='70%' style={{marginTop:'2rem'}}/>
                <p style={{marginTop:'2rem', fontSize:'12px'}}>Serving from</p>
                <p style={{fontSize:'14px'}}>0x005eaD90291d82249565A69E8554C0C280d49bEc</p>
                <div className="d-flex align-items-center" style={{marginTop:'4rem',marginBottom:'2rem'}}>
                <input type="text" style={{width:'90%', height:'40px', marginRight:'1rem'}}/>
                <button
                type="submit" 
                > 
                <span>Request</span>
              </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
      <SelectChainModal
        onShow={modalShow}
        onHide={() => setModalShow(false)}
        setMyNftOn={setMyNftOn}
        setMyNftOnImg={setMyNftOnImg}
        setModalShow={setModalShow}
      />
      <SelectNftModal 
        onShow={selectNftModalShow}
        onHide={() => setSelectNftModalShow(false)}
        items={items}
        onSelect={onSelect}
        walletAddress={walletAddress}
      />
      <SelectChainDestinationModal 
        onShow={selectChainDestinationShow}
        onHide={() => setSelectChainDestinationShow(false)}
        onChange={(name, chainId, img) => {
          setDestinationNftChain(name);
          setDestinationNftChainId(chainId);
          setDestinationNftChainImg(img);
          setSelectChainDestinationShow(false)
        }}
        myNftOn={myNftOn}

        
        // setDestinationNftChain={setDestinationNftChain}
        // setDestinationNftChainImg={setDestinationNftChainImg}
        // setSelectChainDestinationShow={setSelectChainDestinationShow}
      />
      <CongratBridgeModal 
        onShow={congratBridgeModalShow}
        onHide={() => {
                  setCongratBridgeModalShow(false)
                  setNftSelect(null)
                  setDestinationNftChainImg(null)
                  setDestinationNftChain(null)
                  setMyNftOn(null)
                  setMyNftOnImg(null)
                  setIsSelect(true)
                }
            }
        nftSelect={nftSelect}
        myNftOnImg={myNftOnImg}
        destinationNftChainImg={destinationNftChainImg}
        destinationNftChainId={destinationNftChainId}
        collectionAddress={collectionAddress}
        tokenId={tokenId}
        chainId={chainId}
      />
    </div>
  );
};

export default NFTBridge;
