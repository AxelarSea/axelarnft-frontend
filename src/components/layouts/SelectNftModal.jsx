import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Modal } from "react-bootstrap";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import CardModal from "../../components/layouts/CardModal";

import avt from "../../assets/images/avatar/satoshi.svg";
import img1 from "../../assets/images/box-item/card-item-3.jpg";
import imga1 from "../../assets/images/avatar/avt-1.jpg";
import imgCollection1 from "../../assets/images/avatar/avt-18.jpg";
import img2 from "../../assets/images/box-item/card-item-4.jpg";
import imga2 from "../../assets/images/avatar/avt-2.jpg";
import imgCollection2 from "../../assets/images/avatar/avt-18.jpg";
import img3 from "../../assets/images/box-item/card-item-2.jpg";
import imga3 from "../../assets/images/avatar/avt-4.jpg";
import imgCollection3 from "../../assets/images/avatar/avt-18.jpg";
import img4 from "../../assets/images/box-item/card-item-7.jpg";
import imga4 from "../../assets/images/avatar/avt-3.jpg";
import imgCollection4 from "../../assets/images/avatar/avt-18.jpg";
import img5 from "../../assets/images/box-item/card-item8.jpg";
import imga5 from "../../assets/images/avatar/avt-12.jpg";
import imgCollection5 from "../../assets/images/avatar/avt-18.jpg";
import img6 from "../../assets/images/box-item/card-item-9.jpg";
import imga6 from "../../assets/images/avatar/avt-1.jpg";
import imgCollection6 from "../../assets/images/avatar/avt-18.jpg";
import img7 from "../../assets/images/box-item/image-box-6.jpg";
import imga7 from "../../assets/images/avatar/avt-4.jpg";
import imgCollection7 from "../../assets/images/avatar/avt-18.jpg";
import img8 from "../../assets/images/box-item/image-box-11.jpg";
import imga8 from "../../assets/images/avatar/avt-3.jpg";
import imgCollection8 from "../../assets/images/avatar/avt-18.jpg";
import HeaderStyle2 from "../../components/header/HeaderStyle2";
import ethwallet from '../../assets/images/icon/ethwallet.svg'
import terrawallet from '../../assets/images/icon/terrawallet.svg'

import ethLogo from '../../assets/images/icon/eth-logo.svg'
import polygonLogo from '../../assets/images/icon/polygon-logo.svg'
import avaxLogo from '../../assets/images/icon/avax-logo.svg'
import moonbeamLogo from '../..//assets/images/icon/moonbeam-logo.svg'
import fantomLogo from '../../assets/images/icon/fantom-logo.svg'


import Explore from "../../components/layouts/explore-04/Explore";
import widgetSidebarData from "../../assets/fake-data/data-widget-sidebar";
import { cancelListing, crossChainTokenLabel, fetchAllMyItems } from "../../utils/api";
import { chainLabel, maskAddress } from "../../utils/address";
import web3 from "../../hooks/web3";
import { useConnectedWallet } from "@terra-money/wallet-provider";

const SelectNftModal = (props) => {

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

  const [visible, setVisible] = useState(8);
  const showMoreItemsProfile = () => {
    setVisible((prevValue) => prevValue + 4);
  };

  const [modalShow, setModalShow] = useState(false);

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
    }));
  }

//   async function refreshData2() {
//     console.log("Refresh Start");
//     let items = await fetchAllMyItems();
//     console.log(items);
//     let newItem = formatItems(items)
//     let filterNewItem = newItem.filter(item  => item.price === '- ')
//     console.log(filterNewItem)
//     setItems(filterNewItem);
//     setDefaultItems(filterNewItem);
//   }

  async function refreshData() {
    console.log("Refresh Start");
    let items = await fetchAllMyItems();
    console.log(items);
    setItems(formatItems(items));
    setDefaultItems(formatItems(items));
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

  const filterItem = () => {
    const item = panelTab.filter(itemm => maskAddress(itemm.nameAuthor) === maskAddress(account))
    setPanelTab(item)
  }

  const [account, setAccount] = useState("");
  const terraAccount = useConnectedWallet();

  async function fetchMetamaskAccount() {
    setAccount((await web3.eth.getAccounts())[0] ?? "");
  }

  window.ethereum.on("accountsChanged", account => setAccount(account[0]));

  useEffect(fetchMetamaskAccount, []);

  async function cancelListingAction(data) {
    await cancelListing(data.chainId, data.collectionAddress, data.tokenId);
    await refreshData();
    window.alert("Cancel Listing Success");
  }

  async function sellAction(data) {
    window.location.href = "/list-item?chainId=" + data.chainId + "&collection=" + data.collectionAddress + "&tokenId=" + data.tokenId
  }

  useEffect(() => {
    refreshData();
    filterItem();
  }, [account, terraAccount]);


    return(
    <Modal show={props.onShow} onHide={props.onHide} size="xl">
        <Modal.Header closeButton></Modal.Header>
        <div className="modal-body space-y-20 pd-80">
            <h3 className="nftbridge-header-modal">Select NFT Want to Bridge</h3>
            <p className="d-flex justify-content-center">(Listed NFT cannot use bridging function)</p>
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
                          <div className="d-flex justify-content-between align-items-center" style={{marginBottom:'1rem'}}>
                            <h5 style={{fontSize:'3rem' , color:'grey'}}>{`${item.dataContent.length} items`}</h5>
                            <input   className="search-wallet" placeholder="Search" required="" />
                            <button className="search search-submit d-flex align-items-center " style={{height:'38px'}}type="submit" value="submit">
                                <i className="icon-fl-search-filled" ></i>
                            </button>
                          </div>
                          


                          <div className="row w-100">
                            {item.dataContent
                              .slice(0, visible)
                              .map((data, index) => (
                                <div
                                  to={
                                    "/NFT-Bridge?chainId=" +
                                     data.chainId +
                                    "&collection=" +
                                     data.collectionAddress +
                                    "&tokenId=" +
                                     data.tokenId
                                    }
                                    onClick={(e) => {
                                      props.onSelect(data.id)
                                    }}
                                  className="col-xl-4 col-lg-4 col-md-6 col-12"
                                  key={index}
                                >
                                  <div className="sc-card-product explode ">
                                    <div className="card-media">
                                      <img src={data.img} alt="AxelarSea" />
                                      {data.price == '- ' ? 
                                        <div className="button-place-bid ">
                                           <Link 
                                          to={
                                            "/NFT-Bridge?chainId=" +
                                            data.chainId +
                                            "&collection=" +
                                            data.collectionAddress +
                                            "&tokenId=" +
                                            data.tokenId
                                          }
                                          >
                                        {/* <button
                                          onClick={(e) => {
                                            props.onSelect(data.id)
                                          }}
                                          className="sc-button style-place-bid style bag fl-button pri-3"
                                        >
                                         
                                          
                                          
                                          
                  
                                          <span>{"Select"}</span>
                                          
                                          
                                        </button> */}
                                        </Link>
                                      </div>
                                        :
                                        ""
                                    }
                                      
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
                                </div>
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
    </Modal>
    )
}

export default SelectNftModal;