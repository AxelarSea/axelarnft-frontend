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
import AxelarSeaBridgeLogo from '../assets/images/logo/axelarsea-bridge-logo.svg'


import HeaderStyle2 from "../components/header/HeaderStyle2";
import { bridgeNft, CROSS_CHAIN_TOKEN_ADDRESS, fetchItem, listItem } from "../utils/api";
import web3 from "../hooks/web3";
import { chainLabel, maskAddress } from "../utils/address";

import one from "../../src/assets/images/icon/1.svg"
import two from "../../src/assets/images/icon/2.svg"
import Bridge from "../../src/assets/images/icon/bridgeandborder.svg"

import SelectChainModal from "../components/layouts/SelectChainModal";
import SelectChainDestinationModal from "../components/layouts/SelectChainDestinationModal";
import SelectNftModal from '../components/layouts/SelectNftModal'

import Explore from "../components/layouts/explore-04/Explore";
import widgetSidebarData from "../assets/fake-data/data-widget-sidebar";
import { cancelListing, crossChainTokenLabel, fetchAllMyItems } from "../utils/api";
import Swal from "sweetalert2";

const sampleNftId = {
  "3": "1020847100762815390390123822295304634369",
  "1287": "437943406227247802477363119764685688143873",
  "4002": "1361810032417595730780425178941936382246913",
  "43113": "14670593685062419975296469450205822900502529",
  "80001": "27222929636041998015533431969148888684691457"
}


const NFTBridge = () => {

  const [selectChainDestinationShow,setSelectChainDestinationShow] = useState(false)

  const [nftSelect,setNftSelect] = useState(null)

  const [isSelect,setIsSelect] = useState(true)

  const [items, setItems] = useState([]);
  const [defaultItems, setDefaultItems] = useState([]);

  const [selectNftModalShow,setSelectNftModalShow] = useState(false)

  const [wallet , setWallet] = useState('')

  const [WalletAdress, setWalletAdress] = useState('')

  const handleWalletChange = e => {
    setWalletAdress(e.target.value)
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
    setWalletAdress(filterItem[0].owner)
    console.log(filterItem[0])
    setIsSelect(false)

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

      console.log(nftSelect.chainId, destinationNftChainId, nftSelect.nftId, nftSelect.tokenId, nftSelect.owner)
      await bridgeNft(nftSelect.chainId, destinationNftChainId, nftSelect.nftId, nftSelect.tokenId, nftSelect.owner);
  
      Swal.fire(
        'Bridge Success!',
        'You have bridged NFT on ' + myNftOn + ' to ' + destinationNftChain + '!',
        'success'
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
            {/* <h1 className="nftbridge-header">NFT Bridge</h1> */}
            <img className="bridge-head-logo" src={AxelarSeaBridgeLogo} alt="AxelarSeaLogo" width='500rem'/>
            <div className="nftbridge-box pd-20">
              <div className="nftbridge-card-section">
                <div className="nftbridge-card d-flex justify-content-center" onClick={() => setSelectNftModalShow(true)} style={{cursor:'pointer'}}>
                  {nftSelect == null 
                  ?
                   <img className="img-chain-select" src={iconnfttableselect} width='128px'/> 
                   : 
                   <div className="nftbridge-card pd-10">
                      <div className="nftbridge-nft-img-box d-flex justify-content-center">
                        <img className="nftbridge-nft-img" src={nftSelect.img} alt="AxelarSea" width='200px'/>
                        {/* style={{height:'200px'}} */}
                      </div>
                      <div className="card-title mg-bt-6" style={{marginTop:'10px'}}>
                        <h5 className="nft-text-l" >{nftSelect.title}</h5>
                      </div>

                      <div className="meta-info d-flex justify-content-between align-items-center">
                                      <div className="author d-flex align-items-center">
                                        <div className="avatar">
                                          <img className="avt-img" src={avt} alt="AxelarSea" width="30px"/>
                                        </div>
                                        <div className="info" style={{marginLeft:'1rem'}}>
                                          <span className="nft-text-s">Owned By</span>
                                          <h6 className="nft-text-m">{maskAddress(nftSelect.nameAuthor)}</h6>
                                        </div>
                                      </div>
                                      <div className="chain-icon">
                                      <img src={nftSelect.tags === 'ETH' ? ethLogo : nftSelect.tags === 'AVAX' ? avaxLogo : nftSelect.tags === 'FTM' ? fantomLogo : nftSelect.tags === 'MOONBEAM' ? moonbeamLogo : nftSelect.tags === 'POLYGON' ? polygonLogo : ''} alt="" width="25px"/>

                                      </div>
                                    </div>
                      </div>
                  }
                  
                </div>
                <img className="bridge-animation" src={bridgeimg}/>
                <div className="nftbridge-card d-flex justify-content-center">
                  {nftSelect == null
                  ?
                  <img src={iconnfttable} width='70px'/>
                  :
                  <div className="nftbridge-card pd-10">
                      <div className="nftbridge-nft-img-box d-flex justify-content-center">
                        <img className="nftbridge-nft-img" src={nftSelect.img} alt="AxelarSea" width='200px'/>
                        {/* style={{height:'200px'}} */}
                      </div>
                      <div className="card-title mg-bt-6" style={{marginTop:'10px'}}>
                        <h5 className="nft-text-l">{nftSelect.title}</h5>
                      </div>

                      <div className="meta-info d-flex justify-content-between align-items-center">
                                      <div className="author d-flex align-items-center">
                                        <div className="avatar">
                                          <img className="avt-img" src={avt} alt="AxelarSea" width="30px"/>
                                        </div>
                                        <div className="info" style={{marginLeft:'1rem'}}>
                                          <span className="nft-text-s">Owned By</span>
                                          <h6 className="nft-text-m">{maskAddress(nftSelect.nameAuthor)}</h6>
                                        </div>
                                      </div>
                                      <div className="">
                                      <img className="chain-icon" src={destinationNftChainImg} alt="" width="25px"/>

                                      </div>
                                    </div>
                      </div>
                  }
                </div>
              </div>
              <div className="d-flex justify-content-between " style={{marginTop:'15px'}}>
                <div className="nftbridge-process-detail" style={{marginLeft:'7rem'}}>
                 <img src={one} width='30px'/>
                  <h6 className="bridge-text" style={{marginTop:'7px'}}>Select  your NFT</h6>
                </div>
                {/* <hr className="line-banner" style={{width:'242px' , border:'1px solid '}}/> */}
                <div  className="nftbridge-process-detail" style={{marginRight:'5rem'}}>
                  <img src={two} width='30px'/>
                  <h6 className="bridge-text" style={{marginTop:'7px'}}>Select Destination chain</h6>
                </div>
              </div>
              <div className="d-flex justify-content-center " style={{marginTop:'20px' , background:'#F8F8F8'}}> 
              {/* style={{marginTop:'15px',backgroundColor:'#F8F8F8',borderRadius:'10px'}} */}

                <div className="bridge-text d-flex align-items-center bridge-select-box1">
                  {myNftOn == null ? 'Source chain My NFT on'
                  :
                  <div className=" d-flex align-items-center bridge-select-box1">
                    <img src={myNftOnImg} style={{marginRight:'13px'}} width ='40px'/>
                    <div >
                      <h5>{myNftOn}</h5>
                      <p><small>Source chain</small></p>
                    </div>
                  </div>
                  }
                  
                </div>
                  <img className="bridge-icon" src={Bridge} alt="" />
                <div  className="d-flex align-items-center bridge-select-box2"  
                      onClick={!isSelect ? () => setSelectChainDestinationShow(true) : undefined}
                >
                  {destinationNftChain == null ?
                    <div className="bridge-text d-flex align-items-center bridge-select-box2"
                    
                    >
                      Select Destination chain 
                    </div>

                  :
                    <div className="d-flex align-items-center bridge-select-box">
                      <img src={destinationNftChainImg}  style={{marginRight:'13px'}} width ='40px'/>
                        <div>
                        <h5>{destinationNftChain}</h5>
                        <p><small>Destination chain</small></p>
                      </div>
                    </div>
                  }
                  
                </div>
              </div>
              
              <div className="d-flex justify-content-center">
              <button 
                style={{padding:'10px 25px', marginTop:'20px'}} 
                type="submit" 
                disabled={!destinationNftChainId} 
                onClick={bridge}> 
                  
                {processing && <span><img src={spin} alt="processing" style={{marginRight:'5px'}} width='25px'/>Processing</span>}
                {!processing && <span>Bridge & Transfer</span>}
              </button>
              </div>
              <p className="d-flex justify-content-center">(The process will take around 5 min)</p>
              <div className="nftbridge-process-detail" style={{marginTop:'5px'}}>
                <p className="nftbridge-wallet-title">Send to address</p>
                <div className="destiantion-wallet-box d-flex justify-content-center" style={{marginTop:'7px'}}>
                  <input onChange={e =>handleWalletChange(e)} type="text" value={nftSelect == null ? " " : (WalletAdress)}/>
                </div>
                {/* <form className="mr-3 d-flex justify-content-around"  style={{marginTop:'5px'}}>
                  <img src={ethLogo} alt="" style={{marginRight:'0.5rem'}}/>
                  <input
                  type="text"
                  className="inputcopy"
                  value="Not Connected"
                  readOnly
                  />
                </form> */}
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
        WalletAdress={WalletAdress}
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
        // setDestinationNftChain={setDestinationNftChain}
        // setDestinationNftChainImg={setDestinationNftChainImg}
        // setSelectChainDestinationShow={setSelectChainDestinationShow}
      />
    </div>
  );
};

export default NFTBridge;
