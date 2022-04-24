import React, { useEffect, useState } from "react";
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

import HeaderStyle2 from "../components/header/HeaderStyle2";
import { CROSS_CHAIN_TOKEN_ADDRESS, fetchItem, listItem } from "../utils/api";
import web3 from "../hooks/web3";
import { chainLabel, maskAddress } from "../utils/address";

import one from "../../src/assets/images/icon/1.svg"
import two from "../../src/assets/images/icon/2.svg"
import Bridge from "../../src/assets/images/icon/bridge.svg"

import SelectChainModal from "../components/layouts/SelectChainModal";

import Explore from "../components/layouts/explore-04/Explore";
import widgetSidebarData from "../assets/fake-data/data-widget-sidebar";
import { cancelListing, crossChainTokenLabel, fetchAllMyItems } from "../utils/api";


const NFTBridge = () => {

  const [items, setItems] = useState([]);
  const [defaultItems, setDefaultItems] = useState([]);

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
      id: 1,
      dataContent: [
        // {
        //     img: img1,
        //     title: "The RenaiXance Rising the sun ",
        //     tags: "bsc",
        //     imgAuthor: imga1,
        //     nameAuthor: "SalvadorDali",
        //     Price: "4.89 ETH",
        //     PriceChange: "$12.246",
        //     wishlist: "100",
        //     imgCollection: imgCollection1,
        //     nameCollection: "Creative Art 3D"
        // },
        // {
        //     img: img2,
        //     title: "The RenaiXance Rising the sun ",
        //     tags: "bsc",
        //     imgAuthor: imga2,
        //     nameAuthor: "SalvadorDali",
        //     Price: "4.89 ETH",
        //     PriceChange: "$12.246",
        //     wishlist: "100",
        //     imgCollection: imgCollection2,
        //     nameCollection: "Creative Art 3D"
        // },
        // {
        //     img: img3,
        //     title: "The RenaiXance Rising the sun ",
        //     tags: "bsc",
        //     imgAuthor: imga3,
        //     nameAuthor: "SalvadorDali",
        //     Price: "4.89 ETH",
        //     PriceChange: "$12.246",
        //     wishlist: "100",
        //     imgCollection: imgCollection3,
        //     nameCollection: "Creative Art 3D"
        // },
        // {
        //     img: img4,
        //     title: "The RenaiXance Rising the sun ",
        //     tags: "bsc",
        //     imgAuthor: imga4,
        //     nameAuthor: "SalvadorDali",
        //     Price: "4.89 ETH",
        //     PriceChange: "$12.246",
        //     wishlist: "100",
        //     imgCollection: imgCollection4,
        //     nameCollection: "Creative Art 3D"
        // },
        // {
        //     img: img5,
        //     title: "The RenaiXance Rising the sun ",
        //     tags: "bsc",
        //     imgAuthor: imga5,
        //     nameAuthor: "SalvadorDali",
        //     Price: "4.89 ETH",
        //     PriceChange: "$12.246",
        //     wishlist: "100",
        //     imgCollection: imgCollection5,
        //     nameCollection: "Creative Art 3D"
        // },
        // {
        //     img: img6,
        //     title: "The RenaiXance Rising the sun ",
        //     tags: "bsc",
        //     imgAuthor: imga6,
        //     nameAuthor: "SalvadorDali",
        //     Price: "4.89 ETH",
        //     PriceChange: "$12.246",
        //     wishlist: "100",
        //     imgCollection: imgCollection6,
        //     nameCollection: "Creative Art 3D"
        // },
        // {
        //     img: img7,
        //     title: "The RenaiXance Rising the sun ",
        //     tags: "bsc",
        //     imgAuthor: imga7,
        //     nameAuthor: "SalvadorDali",
        //     Price: "4.89 ETH",
        //     PriceChange: "$12.246",
        //     wishlist: "100",
        //     imgCollection: imgCollection7,
        //     nameCollection: "Creative Art 3D"
        // },
        // {
        //     img: img8,
        //     title: "The RenaiXance Rising the sun ",
        //     tags: "bsc",
        //     imgAuthor: imga8,
        //     nameAuthor: "SalvadorDali",
        //     Price: "4.89 ETH",
        //     PriceChange: "$12.246",
        //     wishlist: "100",
        //     imgCollection: imgCollection8,
        //     nameCollection: "Creative Art 3D"
        // },
        // {
        //     img: img1,
        //     title: "The RenaiXance Rising the sun ",
        //     tags: "bsc",
        //     imgAuthor: imga1,
        //     nameAuthor: "SalvadorDali",
        //     Price: "4.89 ETH",
        //     PriceChange: "$12.246",
        //     wishlist: "100",
        //     imgCollection: imgCollection1,
        //     nameCollection: "Creative Art 3D"
        // },
        // {
        //     img: img2,
        //     title: "The RenaiXance Rising the sun ",
        //     tags: "bsc",
        //     imgAuthor: imga2,
        //     nameAuthor: "SalvadorDali",
        //     Price: "4.89 ETH",
        //     PriceChange: "$12.246",
        //     wishlist: "100",
        //     imgCollection: imgCollection2,
        //     nameCollection: "Creative Art 3D"
        // },
        // {
        //     img: img3,
        //     title: "The RenaiXance Rising the sun ",
        //     tags: "bsc",
        //     imgAuthor: imga3,
        //     nameAuthor: "SalvadorDali",
        //     Price: "4.89 ETH",
        //     PriceChange: "$12.246",
        //     wishlist: "100",
        //     imgCollection: imgCollection3,
        //     nameCollection: "Creative Art 3D"
        // },
        // {
        //     img: img4,
        //     title: "The RenaiXance Rising the sun ",
        //     tags: "bsc",
        //     imgAuthor: imga4,
        //     nameAuthor: "SalvadorDali",
        //     Price: "4.89 ETH",
        //     PriceChange: "$12.246",
        //     wishlist: "100",
        //     imgCollection: imgCollection4,
        //     nameCollection: "Creative Art 3D"
        // },
        // {
        //     img: img5,
        //     title: "The RenaiXance Rising the sun ",
        //     tags: "bsc",
        //     imgAuthor: imga5,
        //     nameAuthor: "SalvadorDali",
        //     Price: "4.89 ETH",
        //     PriceChange: "$12.246",
        //     wishlist: "100",
        //     imgCollection: imgCollection5,
        //     nameCollection: "Creative Art 3D"
        // },
        // {
        //     img: img6,
        //     title: "The RenaiXance Rising the sun ",
        //     tags: "bsc",
        //     imgAuthor: imga6,
        //     nameAuthor: "SalvadorDali",
        //     Price: "4.89 ETH",
        //     PriceChange: "$12.246",
        //     wishlist: "100",
        //     imgCollection: imgCollection6,
        //     nameCollection: "Creative Art 3D"
        // },
        // {
        //     img: img7,
        //     title: "The RenaiXance Rising the sun ",
        //     tags: "bsc",
        //     imgAuthor: imga7,
        //     nameAuthor: "SalvadorDali",
        //     Price: "4.89 ETH",
        //     PriceChange: "$12.246",
        //     wishlist: "100",
        //     imgCollection: imgCollection7,
        //     nameCollection: "Creative Art 3D"
        // },
        // {
        //     img: img8,
        //     title: "The RenaiXance Rising the sun ",
        //     tags: "bsc",
        //     imgAuthor: imga8,
        //     nameAuthor: "SalvadorDali",
        //     Price: "4.89 ETH",
        //     PriceChange: "$12.246",
        //     wishlist: "100",
        //     imgCollection: imgCollection8,
        //     nameCollection: "Creative Art 3D"
        // },
      ],
    },
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
    // {
    //     id: 3,
    //     dataContent: [
    //         {
    //             id: 1,
    //             img: img1,
    //             title: "The RenaiXance Rising the sun ",
    //             tags: "bsc",
    //             imgAuthor: imga1,
    //             nameAuthor: "SalvadorDali",
    //             Price: "4.89 ETH",
    //             PriceChange: "$12.246",
    //             wishlist: "100",
    //             imgCollection: imgCollection1,
    //             nameCollection: "Creative Art 3D"
    //         },
    //         {
    //             id: 3,
    //             img: img3,
    //             title: "The RenaiXance Rising the sun ",
    //             tags: "bsc",
    //             imgAuthor: imga3,
    //             nameAuthor: "SalvadorDali",
    //             Price: "4.89 ETH",
    //             PriceChange: "$12.246",
    //             wishlist: "100",
    //             imgCollection: imgCollection3,
    //             nameCollection: "Creative Art 3D"
    //         },
    //         {
    //             id: 4,
    //             img: img4,
    //             title: "The RenaiXance Rising the sun ",
    //             tags: "bsc",
    //             imgAuthor: imga4,
    //             nameAuthor: "SalvadorDali",
    //             Price: "4.89 ETH",
    //             PriceChange: "$12.246",
    //             wishlist: "100",
    //             imgCollection: imgCollection4,
    //             nameCollection: "Creative Art 3D"
    //         },
    //         {
    //             id: 5,
    //             img: img5,
    //             title: "The RenaiXance Rising the sun ",
    //             tags: "bsc",
    //             imgAuthor: imga5,
    //             nameAuthor: "SalvadorDali",
    //             Price: "4.89 ETH",
    //             PriceChange: "$12.246",
    //             wishlist: "100",
    //             imgCollection: imgCollection5,
    //             nameCollection: "Creative Art 3D"
    //         },
    //     ]
    // },
    // {
    //     id: 4,
    //     dataContent: [
    //         {
    //             id: 1,
    //             img: img1,
    //             title: "The RenaiXance Rising the sun ",
    //             tags: "bsc",
    //             imgAuthor: imga1,
    //             nameAuthor: "SalvadorDali",
    //             Price: "4.89 ETH",
    //             PriceChange: "$12.246",
    //             wishlist: "100",
    //             imgCollection: imgCollection1,
    //             nameCollection: "Creative Art 3D"
    //         },
    //         {
    //             id: 2,
    //             img: img2,
    //             title: "The RenaiXance Rising the sun ",
    //             tags: "bsc",
    //             imgAuthor: imga2,
    //             nameAuthor: "SalvadorDali",
    //             Price: "4.89 ETH",
    //             PriceChange: "$12.246",
    //             wishlist: "100",
    //             imgCollection: imgCollection2,
    //             nameCollection: "Creative Art 3D"
    //         },
    //         {
    //             id: 3,
    //             img: img3,
    //             title: "The RenaiXance Rising the sun ",
    //             tags: "bsc",
    //             imgAuthor: imga3,
    //             nameAuthor: "SalvadorDali",
    //             Price: "4.89 ETH",
    //             PriceChange: "$12.246",
    //             wishlist: "100",
    //             imgCollection: imgCollection3,
    //             nameCollection: "Creative Art 3D"
    //         },
    //         {
    //             id: 5,
    //             img: img5,
    //             title: "The RenaiXance Rising the sun ",
    //             tags: "bsc",
    //             imgAuthor: imga5,
    //             nameAuthor: "SalvadorDali",
    //             Price: "4.89 ETH",
    //             PriceChange: "$12.246",
    //             wishlist: "100",
    //             imgCollection: imgCollection5,
    //             nameCollection: "Creative Art 3D"
    //         },
    //         {
    //             id: 7,
    //             img: img7,
    //             title: "The RenaiXance Rising the sun ",
    //             tags: "bsc",
    //             imgAuthor: imga7,
    //             nameAuthor: "SalvadorDali",
    //             Price: "4.89 ETH",
    //             PriceChange: "$12.246",
    //             wishlist: "100",
    //             imgCollection: imgCollection7,
    //             nameCollection: "Creative Art 3D"
    //         },
    //     ]
    // },
    // {
    //     id: 5,
    //     dataContent: [
    //         {
    //             id: 2,
    //             img: img2,
    //             title: "The RenaiXance Rising the sun ",
    //             tags: "bsc",
    //             imgAuthor: imga2,
    //             nameAuthor: "SalvadorDali",
    //             Price: "4.89 ETH",
    //             PriceChange: "$12.246",
    //             wishlist: "100",
    //             imgCollection: imgCollection2,
    //             nameCollection: "Creative Art 3D"
    //         },
    //         {
    //             id: 3,
    //             img: img3,
    //             title: "The RenaiXance Rising the sun ",
    //             tags: "bsc",
    //             imgAuthor: imga3,
    //             nameAuthor: "SalvadorDali",
    //             Price: "4.89 ETH",
    //             PriceChange: "$12.246",
    //             wishlist: "100",
    //             imgCollection: imgCollection3,
    //             nameCollection: "Creative Art 3D"
    //         },
    //         {
    //             id: 4,
    //             img: img4,
    //             title: "The RenaiXance Rising the sun ",
    //             tags: "bsc",
    //             imgAuthor: imga4,
    //             nameAuthor: "SalvadorDali",
    //             Price: "4.89 ETH",
    //             PriceChange: "$12.246",
    //             wishlist: "100",
    //             imgCollection: imgCollection4,
    //             nameCollection: "Creative Art 3D"
    //         },
    //         {
    //             id: 6,
    //             img: img5,
    //             title: "The RenaiXance Rising the sun ",
    //             tags: "bsc",
    //             imgAuthor: imga6,
    //             nameAuthor: "SalvadorDali",
    //             Price: "4.89 ETH",
    //             PriceChange: "$12.246",
    //             wishlist: "100",
    //             imgCollection: imgCollection6,
    //             nameCollection: "Creative Art 3D"
    //         },
    //     ]
    // },
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

  const [myNftOn , setMyNftOn] = useState('Avalanche')
  const [myNftOnImg , setMyNftOnImg] = useState(avaxLogo)

  const [visible, setVisible] = useState(8);
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
      id: x.collection.address + "-" + x.tokenId,
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
    setData(await fetchItem(chainId, collectionAddress, tokenId));
  }
  

  useEffect(() => {
    refreshData();
    refreshData2();
  }, []);

  console.log(data)

  return (
    <div className="create-item">
      <HeaderStyle2 />
      <section className="flat-title-page inner">
        <div className="overlay"></div>
        <div className="themesflat-container">
          <div className="row">
            <div className="col-md-12">
              <div className="page-title-heading mg-bt-12">
                <h1 className="heading text-center">NFT Bridge</h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="bridge-page">
        <div className="bridge-box pd-20">
          <div className="bridge-header">
            <img style={{marginRight:'1rem'}} src={one}/>
            <h6>Select chain your NFT and select destination chain</h6>
          </div>
          <div className="bridge-content d-flex justify-content-between" style={{marginTop:'2rem'}}>
            <h4>My NFT On</h4>
            <hr style={{width:'362px' , border:'1px solid '}}/>

            <img src={Bridge}/>

            <hr style={{width:'362px'  , border:'1px solid '}}/>
            <h4>Destination</h4>
          </div>
          <div className="d-flex justify-content-center" style={{marginTop:'2rem'}}>
            <button style={{padding:'10px 25px'}} type="submit"> Bridge & Transfer</button>
          </div>
          <div className="bridge-content d-flex justify-content-between">
            <div className="d-flex align-items-center bridge-select-box" onClick={() => setModalShow(true)}>
              <img src={myNftOnImg} width ='30px'/>
              <h5>{myNftOn}</h5>
            </div>
            
            <div className="d-flex align-items-center bridge-select-box" onClick={() => setModalShow(true)}>
              <img src={myNftOnImg} width ='30px'/>
              <h5>{myNftOn}</h5>
            </div>
          </div>
          <div className="bridge-content"  style={{marginTop:'2rem'}}>
            <form className="mr-3 d-flex justify-content-around">
              <img src={ethLogo} alt="" style={{marginRight:'0.5rem'}}/>
              <input
              type="text"
              className="inputcopy"
              value="Not Connected"
              readOnly
              />
              <button type="button" className="btn-copycode">
                <i className="icon-fl-file-1"></i>
              </button>
            </form>
          </div>
        </div>
        <div className="bridge-box" style={{marginTop:'34px'}}>
          <div className="bridge-header pd-20">
            <img style={{marginRight:'1rem'}} src={two}/>
            <h6>Select an NFT to send through the AxelarSea NFT Bridge.</h6>
          </div>
          <Tabs>
              {/* <TabList>
                {menuTab.map((item, index) => (
                  <Tab key={index}>{item.name}</Tab>
                ))}
              </TabList> */}

              <div className="content-tab">
                <div className="content-inner">
                  <Explore data={widgetSidebarData} setItems={setItems} items={items} defaultItems={defaultItems} formatItems={formatItems}>
                    <div className="col-xl-9 col-lg-9 col-md-12">
                      {panelTab.map((item, index) => (
                        <TabPanel
                          key={index}
                        >
                          <div className="row w-100">
                            {item.dataContent
                              .slice(0, visible)
                              .map((data, index) => (
                                <Link
                                  to={"/ItemDetails?chainId=" + data.chainId + "&collection=" + data.collectionAddress + "&tokenId=" + data.tokenId}
                                  className="col-xl-4 col-lg-4 col-md-6 col-12"
                                  key={index}
                                >
                                  <div className="sc-card-product explode ">
                                    <div className="card-media">
                                      <img src={data.img} alt="AxelarSea" />
                                      <div className="button-place-bid ">
                                        <button
                                          onClick={(e) => {
                                            e.preventDefault();
                                            if (data.listAmount > 0) cancelListingAction(data); else sellAction(data);
                                          }}
                                          className="sc-button style-place-bid style bag fl-button pri-3"
                                        >
                                          <span>{data.listAmount > 0 ? "Cancel Listing" : "Sell"}</span>
                                        </button>
                                      </div>
                                      {/* <Link to="/login" className="wishlist-button heart"><span className="number-like"> {data.wishlist}</span></Link> */}
                                    </div>
                                    <div className="card-title mg-bt-16">
                                      <h5>{data.title}</h5>
                                    </div>
                                    <div className="meta-info">
                                      <div className="author">
                                        <div className="avatar">
                                          <img src={avt} alt="AxelarSea" />
                                        </div>
                                        <div className="info">
                                          <span>Owned By</span>
                                          <h6>{maskAddress(data.nameAuthor)}</h6>
                                        </div>
                                      </div>
                                      <div className="">
                                      <img src={data.tags === 'ETH' ? ethLogo : data.tags === 'AVAX' ? avaxLogo : data.tags === 'FTM' ? fantomLogo : data.tags === 'MOONBEAM' ? moonbeamLogo : data.tags === 'POLYGON' ? polygonLogo : ''} alt="" width={'40'}/>

                                      </div>
                                    </div>
                                    <div className="card-bottom style-explode">
                                      <div className="Price">
                                        <span>Price</span>
                                        <div className="Price-details">
                                          <h5>{data.price}</h5>
                                          {/* <span>= {data.PriceChange}</span> */}
                                        </div>
                                      </div>
                                      {/* <Link to="/activity-01" className="view-history reload">View History</Link> */}
                                    </div>
                                  </div>
                                </Link>
                              )) }
                          </div>
                          {visible < item.dataContent.length && (
                            <div className="col-md-12 wrap-inner load-more text-center">
                              <Link
                                to="#"
                                id="load-more"
                                className="sc-button loadmore fl-button pri-3"
                                onClick={showMoreItemsProfile}
                              >
                                <span>Load More</span>
                              </Link>
                            </div>
                          )}
                        </TabPanel>
                      ))}
                    </div>
                  </Explore>
                </div>
              </div>
            </Tabs>
        </div>
      </div>
      
      <Footer />
      <SelectChainModal
        onShow={modalShow}
        onHide={() => setModalShow(false)}
        setMyNftOn={setMyNftOn}
        setMyNftOnImg={setMyNftOnImg}
        setModalShow={setModalShow}
      />
    </div>
  );
};

export default NFTBridge;
