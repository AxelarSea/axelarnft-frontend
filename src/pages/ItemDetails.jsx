import React, { useEffect, useState } from "react";
import Header from "../components/header/HeaderStyle2";
import Footer from "../components/footer/Footer";
import { Link, useSearchParams } from "react-router-dom";
import Countdown from "react-countdown";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import TopSeller from '../components/layouts/home-7/TopSeller';
import liveAuctionData from "../assets/fake-data/data-live-auction";
import LiveAuction from "../components/layouts/LiveAuction";
import img1 from "../assets/images/avatar/avt-3.jpg";
import img2 from "../assets/images/avatar/avt-11.jpg";
import img3 from "../assets/images/avatar/avt-1.jpg";
import img4 from "../assets/images/avatar/avt-5.jpg";
import img5 from "../assets/images/avatar/avt-7.jpg";
import img6 from "../assets/images/avatar/satoshi.svg";
import img7 from "../assets/images/avatar/avt-2.jpg";
import ethLogo from '../assets/images/icon/eth-logo.svg'
import polygonLogo from '../assets/images/icon/polygon-logo.svg'
import avaxLogo from '../assets/images/icon/avax-logo.svg'
import moonbeamLogo from '../assets/images/icon/moonbeam-logo.svg'
import fantomLogo from '../assets/images/icon/fantom-logo.svg'
import lunaLogo from '../assets/images/icon/Luna.svg'
import ustLogo from '../assets/images/icon/UST.svg'
import noHistory from '../assets/images/icon/NoHistory.svg'

import imgdetail1 from "../assets/images/box-item/images-item-details.jpg";
import CardModal from "../components/layouts/CardModal";
import UnavailablePaymentModal from "../components/layouts/unavailablePaymentModal";

import { cancelListing, crossChainTokenLabel, fetchItem } from "../utils/api";
import { maskAddress } from "../utils/address";
import web3 from "../hooks/web3";

const ItemDetails = () => {
  // const navigate = useNavigate()
  const [data, setData] = useState({});
  const [searchParams, setSearchParams] = useSearchParams();
  const [account, setAccount] = useState("");

  const [modalShow, setModalShow] = useState(false);
  const [UnavailablePaymentModalShow, setunavailablePaymentModalShow] = useState(true);

  // const [logo,setLogo] = useState('')

  const collectionAddress = searchParams.get("collection");
  const tokenId = searchParams.get("tokenId");
  const chainId = searchParams.get("chainId");

  const [dataHistory] = useState([
    // {
    //     img: img1,
    //     name:"Mason Woodward",
    //     time: "8 hours ago",
    //     Price: "4.89 ETH",
    //     PriceChange: "$12.246"
    // },
    // {
    //     img: img2,
    //     name:"Mason Woodward",
    //     time: "at 06/10/2021, 3:20 AM",
    //     Price: "4.89 ETH",
    //     PriceChange: "$12.246"
    // },
    // {
    //     img: img3,
    //     name:"Mason Woodward",
    //     time: "8 hours ago",
    //     Price: "4.89 ETH",
    //     PriceChange: "$12.246"
    // },
    // {
    //     img: img4,
    //     name:"Mason Woodward",
    //     time: "8 hours ago",
    //     Price: "4.89 ETH",
    //     PriceChange: "$12.246"
    // },
    // {
    //     img: img5,
    //     name:"Mason Woodward",
    //     time: "8 hours ago",
    //     Price: "4.89 ETH",
    //     PriceChange: "$12.246"
    // },
    // {
    //     img: img6,
    //     name:"Mason Woodward",
    //     time: "8 hours ago",
    //     Price: "4.89 ETH",
    //     PriceChange: "$12.246"
    // },
  ]);

  async function refreshData() {
      setData(await fetchItem(chainId, collectionAddress, tokenId));
  }

  async function cancelListingAction() {
    await cancelListing(chainId, collectionAddress, tokenId);
    await refreshData();
    window.alert('Cancel success');
  }

  console.log(data)

  async function fetchMetamaskAccount() {
    setAccount((await web3.eth.getAccounts())[0] ?? "");
  }

  window.ethereum.on("accountsChanged", account => setAccount(account[0]));

  useEffect(fetchMetamaskAccount, []);

  // console.log(account)

  useEffect(() => {
    refreshData();
  }, [account]);
  console.log(data.owner)

  return (
    <div className="item-details">
      <Header />
      
      <div className="tf-section tf-item-details" > 
        <div className="themesflat-container " style={{backgroundColor:'#F8F8F8' , borderRadius:'10px'}}>
          <div className="row d-flex align-items-center justify-content-between">
            <div className="col-xl-6 col-md-12" >
              <div className="content-left" style={{paddingTop:'3rem' , marginBottom:'2rem'}}>
                <Link to="/">
                  <button>Back</button>
                </Link>
              </div>
            </div>
            <div className="col-xl-6 col-md-12">
              <div className="content-right">
                {data.listAmount == 0 && data.owner.toLowerCase() == account.toLowerCase() &&
                  <Link
                    to={
                      "/list-item?chainId=" +
                      chainId +
                      "&collection=" +
                      collectionAddress +
                      "&tokenId=" +
                      tokenId
                    }
                  >
                    <button style={{ float: "right" }}>Sell</button> 
                    
                  </Link>
                }
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="tf-section tf-item-details">
        <div className="themesflat-container">
          <div className="row">
            <div className="col-xl-6 col-md-12">
              <div className="content-left">
                <div className="media">
                  <img src={data.metadata?.image || imgdetail1} alt="AxelarSea" />
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-md-12">
              <div className="content-right">
                <div className="sc-item-details">
                  <h2 className="style2">
                    {data.collection?.name} #{data.tokenId} <img src={chainId === '3' ? ethLogo : chainId === '1287' ? moonbeamLogo : chainId === '43113' ? avaxLogo : chainId === '80001' ? polygonLogo : chainId === '4002' ? fantomLogo : ''} alt="" width="50" height="50" />
                  </h2>
                  <div className="meta-item">
                    <div className="left">
                      <h4>{maskAddress(data.collection?.owner)}</h4>
                    </div>
                    <div className="right">
                      <span className="viewed eye">225</span>
                      <span
                        
                        className="liked heart wishlist-button mg-l-8"
                      >
                        <span className="number-like">100</span>
                      </span>
                    </div>
                    {/* <div className="right">
                      <Link to="#" className="share"></Link>
                      <Link to="#" className="option"></Link>
                    </div> */}
                  </div>
                  <div className="client-infor sc-card-product">
                    <div className="meta-info">
                      <div className="author">
                        <div className="avatar">
                          <img src={img6} alt="AxelarSea" />
                        </div>
                        <div className="info">
                          <span>Owned By</span>
                          <h6>
                            {" "}
                            <Link to="/authors-02">{maskAddress(data.owner)}</Link>{" "}
                          </h6>
                        </div>
                      </div>
                    </div>
                    <div className="meta-info">
                      <div className="author">
                        <div className="avatar">
                          <img src={img6} alt="AxelarSea" />
                        </div>
                        <div className="info">
                          <span>Create By</span>
                          <h6>
                            {" "}
                            <Link to="/authors-02">{maskAddress(data.collection?.owner)}</Link>{" "}
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p>
                    {data.metadata?.description}
                  </p>
                  <div className="meta-item-details style2">
                    <div className="item meta-Price">
                      <span className="heading">Price</span>
                      <div className="Price">
                        <div className="Price-box d-flex align-items-center" style={{width:'100%'}}>
                        <img src={crossChainTokenLabel(data.collection?.chainId, data.listTokenAddress, data.tokenId) === 'LUNA' ? lunaLogo : ustLogo } alt="" width="30" height="30" />

                          <h5 style={{marginLeft:'0.5rem'}}>
                            {data.listPrice || "-"} {crossChainTokenLabel(data.collection?.chainId, data.listTokenAddress, data.tokenId)}
                            </h5>
                          {/* <span>= $12.246</span> */}
                        </div>
                      </div>
                    </div>
                    {/* <div className="item count-down">
                      <span className="heading style-2">Countdown</span>
                      <Countdown date={Date.now() + 500000000}>
                        <span>N/A</span>
                      </Countdown>
                    </div> */}
                  </div>
                  <div class="d-flex align-items-center justify-content-center">
                    {data.listAmount > 0 && data.owner.toLowerCase() != account.toLowerCase() && crossChainTokenLabel(data.collection?.chainId, data.listTokenAddress, data.tokenId) != "LUNA" && data.listPrice < 10 && crossChainTokenLabel(data.collection?.chainId, data.listTokenAddress, data.tokenId) != "UST" &&
                      <button
                        onClick={() => setModalShow(true)}
                        className="sc-button loadmore fl-button pri-3"
                        style={{width:'100%'}}
                        disabled={(data.listPrice < 0.1 && crossChainTokenLabel(data.collection?.chainId, data.listTokenAddress, data.tokenId) == "LUNA")? true : false}
                      >
                        <span>Buy Now</span>
                      </button>
                    }
                    {data.listAmount > 0 && data.owner.toLowerCase() == account.toLowerCase() &&
                      <button
                        style={{marginLeft:'2rem'}}
                        onClick={() => cancelListingAction()}
                        className="sc-button loadmore fl-button pri-3 "
                      >
                        <span>Cancel Listing</span>
                      </button>
                    }
                    {data.listAmount == 0 && data.owner.toLowerCase() == account.toLowerCase() &&
                      <Link
                        to={
                          "/list-item?chainId=" +
                          chainId +
                          "&collection=" +
                          collectionAddress +
                          "&tokenId=" +
                          tokenId
                        }
                      >
                        <button
                          style={{marginLeft:'2rem'}}
                          className="sc-button loadmore fl-button pri-3 "
                        >
                          <span>Sell</span>
                        </button>
                      </Link>
                    }
                    {/* {data.listAmount == 0 && data.owner.toLowerCase() == account.toLowerCase() &&
                      <Link
                        to={
                          "/NFT-Bridge?chainId=" +
                          chainId +
                          "&collection=" +
                          collectionAddress +
                          "&tokenId=" +
                          tokenId
                        }
                        // to='/NFT-Bridge'
                      >
                        <button
                          style={{marginLeft:'2rem'}}
                          className="sc-button loadmore fl-button pri-3 "
                        >
                          <span>Bridge</span>
                        </button>
                      </Link>
                    } */}
                    {((data.listAmount == 0 && data.owner.toLowerCase() != account.toLowerCase()) || ((crossChainTokenLabel(data.collection?.chainId, data.listTokenAddress, data.tokenId) == "LUNA") || (crossChainTokenLabel(data.collection?.chainId, data.listTokenAddress, data.tokenId) == "UST"))) &&
                      <button
                        style={{marginLeft:'2rem', opacity: 0.6, pointerEvents: "none"}}
                        className="sc-button loadmore fl-button pri-3 "
                      >
                        <span>Not for sale</span>
                      </button>
                    }
                  </div>
                  <div className="flat-tabs themesflat-tabs">
                    <Tabs>
                      <TabList>
                        <Tab>History</Tab>
                        {/* <Tab>Info</Tab>
                        <Tab>Provenance</Tab> */}
                      </TabList>

                      <TabPanel>
                        <ul className="bid-history-list">
                          {}
                          {dataHistory.length == 0  ? 
                            <div className="text-center" style={{backgroundColor:'#F8F8F8' , borderRadius:'10px' , paddingTop:'2rem' , paddingBottom:'2rem'}}>
                                <img src={noHistory} alt="" />
                            </div>
                          : (dataHistory.map((item, index) => (
                            <li key={index} item={item}>
                              <div className="content">
                                <div className="client">
                                  <div className="sc-author-box style-2">
                                    <div className="author-avatar">
                                      <Link to="#">
                                        <img
                                          src={item.img}
                                          alt="AxelarSea"
                                          className="avatar"
                                        />
                                      </Link>
                                      <div className="badge"></div>
                                    </div>
                                    <div className="author-infor">
                                      <div className="name">
                                        <h6>
                                          <Link to="/authors-02">
                                            {item.name}{" "}
                                          </Link>
                                        </h6>{" "}
                                        <span
                                          onClick={() => setModalShow(true)}
                                        >
                                          {" "}
                                          Buy Now
                                        </span>
                                      </div>
                                      <span className="time">{item.time}</span>
                                    </div>
                                  </div>
                                </div>
                                <div className="Price">
                                  <h5>{item.Price}</h5>
                                  <span>= {item.PriceChange}</span>
                                </div>
                              </div>
                            </li>
                          )))}
                        </ul>
                      </TabPanel>
                      <TabPanel>
                        <ul className="bid-history-list">
                          <li>
                            <div className="content">
                              <div className="client">
                                <div className="sc-author-box style-2">
                                  <div className="author-avatar">
                                    <Link to="#">
                                      <img
                                        src={img1}
                                        alt="AxelarSea"
                                        className="avatar"
                                      />
                                    </Link>
                                    <div className="badge"></div>
                                  </div>
                                  <div className="author-infor">
                                    <div className="name">
                                      <h6>
                                        {" "}
                                        <Link to="/authors-02">
                                          Mason Woodward{" "}
                                        </Link>
                                      </h6>{" "}
                                      <span onClick={() => setModalShow(true)}>
                                        {" "}
                                        Buy Now
                                      </span>
                                    </div>
                                    <span className="time">8 hours ago</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </TabPanel>
                      <TabPanel>
                        <div className="provenance">
                          <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book. It has
                            survived not only five centuries, but also the leap
                            into electronic typesetting, remaining essentially
                            unchanged. It was popularised in the 1960s with the
                            release of Letraset sheets containing Lorem Ipsum
                            passages, and more recently with desktop publishing
                            software like Aldus PageMaker including versions of
                            Lorem Ipsum.
                          </p>
                        </div>
                      </TabPanel>
                    </Tabs>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <LiveAuction data={liveAuctionData} />
      <Footer />

      <CardModal 
        setBuyNowModal={setModalShow}
        show={modalShow}
        onHide={() => setModalShow(false)}
        name={data.collection?.name + ' #' + data.tokenId}
        chainId={chainId}
        collectionAddress={collectionAddress}
        tokenId={tokenId}
        listTokenAddress={data.listTokenAddress}
        listPrice={data.listPrice}
        img={data.metadata?.image}
        owner={data.owner}
      />
      <UnavailablePaymentModal
        onShow = {UnavailablePaymentModal}
        onHide={() => {
          setunavailablePaymentModalShow(false)
          window.location.href="/Explore"
        }}
      />
    </div>
  );
};

export default ItemDetails;
