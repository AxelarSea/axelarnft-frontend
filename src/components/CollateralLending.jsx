import React, { useEffect, useState, Component } from "react";
import { Link, useSearchParams } from "react-router-dom";
import Header from "./header/Header";
import Footer from "./footer/Footer";
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
import defiStep1 from '../assets/images/icon/defi-step1.svg'
import defiStep2 from '../assets/images/icon/defi-step2.svg'
import bridgeimg from '../assets/images/backgroup-secsion/bridge_effect.gif'
import iconnfttable from '../assets/images/icon/icon-nft-table.svg'
import iconnfttableselect from '../assets/images/icon/icon-nft-table-select.svg'
import spin from '../assets/images/icon/processing.gif'
import AxelarSeaBridgeLogo from '../assets/images/logo/axelarsea-bridge-logo.svg'
import questionMark from '../assets/images/icon/question-mark.svg'
import menu from '../assets/images/icon/icon-menu.svg'
import processText from '../assets/images/icon/processing-text.gif'
import bgGamrfi from "../assets/images/backgroup-secsion/bg-gamefi.png"
import greenCheck from '../assets/images/icon/green-check.svg'
import check from '../assets/images/icon/check.svg'
import banner from "../assets/images/backgroup-secsion/bg-lending.png"
import DeFiModal from "./layouts/DeFiModal";

import HeaderStyle2 from "./header/HeaderStyle2";
import { bridgeNft, CROSS_CHAIN_TOKEN_ADDRESS, fetchItem, listItem } from "../utils/api";
import web3 from "../hooks/web3";
import { chainLabel, maskAddress } from "../utils/address";

import atk from "../../src/assets/images/icon/icon-atk.svg"
import dex from "../../src/assets/images/icon/icon-dex.svg"
import agi from "../../src/assets/images/icon/icon-agi.svg"

import SelectChainModal from "./layouts/SelectChainModal";
import SelectChainDestinationModal from "./layouts/SelectChainDestinationModal";
import SelectNftModal from './layouts/SelectNftModalDefi'

import Explore from "./layouts/explore-04/Explore";
import widgetSidebarData from "../assets/fake-data/data-widget-sidebar";
import { cancelListing, crossChainTokenLabel, fetchAllMyItems } from "../utils/api";
import Swal from "sweetalert2";
import CongratBridgeModal from "./layouts/CongratBridgeModal";

const sampleNftId = {
  "3": "1020847100762815390390123822295304634369",
  "1287": "437943406227247802477363119764685688143873",
  "4002": "1361810032417595730780425178941936382246913",
  "43113": "14670593685062419975296469450205822900502529",
  "80001": "27222929636041998015533431969148888684691457"
}


const CollateralLending = (props) => {

  const stakeNow = () => {
    if(nftSelect.nameCollection == "AxelarNFT Fantom" && nftSelect.tags == "FTM"){
      setApy('5 %')
      setReward('0.012 %')
      setNFTPrice('1.32 ETH ($40,234)')
    }
    else if(nftSelect.nameCollection == "AxelarNFT AVAX" && nftSelect.tags == "FTM"){
      setApy('15 %')
      setReward('0.04 %')
      setNFTPrice('1.32 ETH ($40,234)')
    }
    else{
      setApy('- %')
      setReward('- %')
      setNFTPrice('-')
    }

  }

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

  const [apy,setApy] = useState('- %')
  const [reward,setReward] = useState('- %')
  const [NFTPrice,setNFTPrice] = useState('-')

  const [modalShow , setModalShow] = useState(false)
  const [DeFiModalShow , setDeFiModalShow] = useState(false)

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
    setApy('- %')
    setReward('-')

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
    <div>
      <img src={banner} alt="" />
      <div className="d-flex justify-content-around">
        <div className="select-nft-box pd-20 ">
          <img src={defiStep1} alt="" style={{marginBottom:'1rem'}}/>
          <div className="nftdefi-card d-flex justify-content-center" onClick={() => setSelectNftModalShow(true)} style={{cursor:'pointer'}}>
                    {nftSelect == null 
                    ?
                    <img className="img-chain-select" src={iconnfttableselect} width='128px'/> 
                    : 
                    <div className="pd-10">
                        <div className="nftgamefi-card-img-box d-flex justify-content-center">
                          <img className="nftgamefi-card-img" src={nftSelect.img} alt="AxelarSea" width='155px'/>
                        </div>
                        <div className="card-title mg-bt-6" style={{marginTop:'9px'}}>
                          <h5 className="nft-text-l" style={{fontSize:'9px'}}>{nftSelect.title}</h5>
                        </div>
                        <div className="meta-info d-flex justify-content-between align-items-center">
                          <div className="author d-flex align-items-center">
                            <div className="avatar">
                              <img className="avt-img" src={avt} alt="AxelarSea" width="30px"/>
                            </div>
                            <div className="info" style={{marginLeft:'1rem'}}>
                              <span className="nft-text-s"style={{fontSize:'8px'}}>Owned By</span>
                              <h6 className="nft-text-m"style={{fontSize:'8px'}}>{maskAddress(nftSelect.nameAuthor)}</h6>
                            </div>
                          </div>
                          <div className="chain-icon">
                            <img src={nftSelect.tags === 'ETH' ? ethLogo : nftSelect.tags === 'AVAX' ? avaxLogo : nftSelect.tags === 'FTM' ? fantomLogo : nftSelect.tags === 'MOONBEAM' ? moonbeamLogo : nftSelect.tags === 'POLYGON' ? polygonLogo : ''} alt="" width="25px"/>
                          </div>
                        </div>
                      </div>
                    }
                  </div>
            </div>
            <div className="detail-nft-box pd-20">
              <img src={defiStep2} alt="" width='105px'/>
              <div className="stake-detail pd-10 d-flex justify-content-around">
              <div>
                  <div>
                    <p>NFT Name :</p>
                    <h6 >{nftSelect == null ? 'Select Your Fantom NFT' : nftSelect.title}</h6>
                  </div>
                  <div style={{marginTop:'5px'}}>
                    <p>Total APY  :</p>
                    <h6 >{nftSelect == null ? '- %' : (nftSelect.nameCollection == "AxelarNFT Fantom" && nftSelect.tags == "FTM") ? '5 %' : (nftSelect.nameCollection == "AxelarNFT AVAX" && nftSelect.tags == "FTM") ? '15 %' : '- %'}</h6>
                  </div>
                  <div style={{marginTop:'5px'}}>
                    <p>Rewards :</p>
                    <h6 ><img src={fantomLogo} alt="" style={{marginRight:'1rem'}}/>Fantom</h6>
                  </div>
                </div>
                <div>
                  <div>
                    <p>NFT Avg Price :</p>
                    <h6 >{nftSelect == null ? '- %' : (nftSelect.nameCollection == "AxelarNFT Fantom" && nftSelect.tags == "FTM") ? '1.32 ETH ($40,234)' : (nftSelect.nameCollection == "AxelarNFT AVAX" && nftSelect.tags == "FTM") ? '1.32 ETH ($40,234)' : '- ETH'}</h6>
                  </div>
                  <div style={{marginTop:'5px'}}>
                    <p>Daily APR  :</p>
                    <h6 >{nftSelect == null ? '- %' : (nftSelect.nameCollection == "AxelarNFT Fantom" && nftSelect.tags == "FTM") ? '0.012 %' : (nftSelect.nameCollection == "AxelarNFT AVAX" && nftSelect.tags == "FTM") ? '0.04 %' : '- %'}</h6>
                  </div>
                </div>
                {/* <div>
                  <div>
                    <p>NFT Name :</p>
                    <h6 >{nftSelect == null ? 'Select Your Fantom NFT' : nftSelect.title}</h6>
                  </div>
                  <div style={{marginTop:'5px'}}>
                    <p>Total APR  :</p>
                    <h6 >{nftSelect == null ? '- %' : (nftSelect.nameCollection == "AxelarNFT Fantom" && nftSelect.tags == "FTM") ? '5 %' : (nftSelect.nameCollection == "AxelarNFT AVAX" && nftSelect.tags == "FTM") ? '15 %' : '- %'}</h6>
                  </div>
                  <div style={{marginTop:'5px'}}>
                    <p>Rewards :</p>
                    <h6 ><img src={fantomLogo} alt="" style={{marginRight:'1rem'}}/>Fantom</h6>
                  </div>
                </div>
                <div>
                  <div>
                    <p>NFT Avg Price :</p>
                    <h6 >{NFTPrice}</h6>
                  </div>
                  <div style={{marginTop:'5px'}}>
                    <p>Daily APR  :</p>
                    <h6 >{reward}</h6>
                  </div>
                </div> */}
              </div>
            <button
                  style={{padding:'10px 25px', width:'460px', height:'45px'}} 
                  type="submit" 
                  disabled={nftSelect == null ? true : false}
                  onClick={() => setDeFiModalShow(true)}
                  >
                  <span>Stake Now!</span>
            </button>
            {/* <button
                  style={{padding:'10px 25px', width:'460px', height:'45px'}} 
                  type="submit" 
                  disabled={nftSelect == null ? true : false}
                  onClick={() => stakeNow()}
                  >
                  <span>Stake Now!</span>
            </button> */}
            </div>
      </div>
            {/* <button
                style={{padding:'10px 25px', width:'200px', height:'45px'}} 
                type="submit" 
                disabled={nftSelect == null ? true : false}
                onClick={() => stakeNow()}
                >
                
                <span>Stake Now!</span>
            </button>
            <div className="nftbridge-card pd-10 d-flex flex-column align-items-center" style={{marginTop:'3rem'}}>
                <img src={fantomLogo} alt="" width='40px' style={{marginTop:'2rem'}}/>
                <h3 style={{marginTop:'2rem'}}>Stake on Fantom</h3>
                <h1 className="d-flex justify-content-center align-content-center" style={{marginTop:'4rem'}}>{apy}</h1>
                <h5 className="d-flex justify-content-center align-content-end" style={{marginTop:'2rem'}}>APY</h5>
            </div> */}

      <SelectNftModal 
        onShow={selectNftModalShow}
        onHide={() => setSelectNftModalShow(false)}
        items={items}
        onSelect={onSelect}
        walletAddress={walletAddress}
      />
      <DeFiModal 
        onShow={DeFiModalShow}
        onHide={() => {
                        setDeFiModalShow(false)
                        setNftSelect(null)
                      }}
        result={nftSelect == null ? "-" 
        : (nftSelect.nameCollection == "AxelarNFT AVAX" && nftSelect.tags == "FTM")
         ? <h2 className="congratulation-title">Staking Success</h2> : (nftSelect.nameCollection == "AxelarNFT Fantom" && nftSelect.tags == "FTM") ? <h2 style={{color:'red'}}>Staking Success</h2> : '-'}
        exp={nftSelect == null ? "-" 
        : (nftSelect.nameCollection == "AxelarNFT AVAX" && nftSelect.tags == "FTM")
         ? <h4 className="congratulation-title">Rewards +0.0084</h4> : (nftSelect.nameCollection == "AxelarNFT Fantom" && nftSelect.tags == "FTM") ? <h4 style={{color:'red', marginBottom:'20px'}}>Rewards +0.0032</h4> : '-'}
        nftSelect={nftSelect}
        setDeFiModalShow={setDeFiModalShow}
        setNftSelect={setNftSelect}
      />
    </div>
  );
};

export default CollateralLending;