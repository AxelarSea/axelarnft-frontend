import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Countdown from "react-countdown";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Dropdown } from "react-bootstrap";
import "react-tabs/style/react-tabs.css";
import img1 from "../assets/images/box-item/image-box-6.jpg";
import avt from "../assets/images/avatar/satoshi.svg";

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

import TransactionSubmitModal from "../components/layouts/TransactionSubmitModal"
import CongratListModal from "../components/layouts/CongratListModal"

const CreateItem2 = () => {
  const [data, setData] = useState({});
  const [Price, setPrice] = useState("");
  const [PriceType, setPriceType] = useState("AVAX");
  const [PricePic, setPricePic] = useState(avaxLogo);
  const [processing, setProcessing] = useState(false);
  const [TransactionSubmitModalShow, setTransactionSubmitModalShow] = useState(false);
  const [CongratListModalModalShow, setCongratListModalModalShow] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();

  const collectionAddress = searchParams.get('collection');
  const tokenId = searchParams.get('tokenId');
  const chainId = searchParams.get('chainId');

  async function listItemOnClick(e) {
    e.preventDefault();

    try {
      setProcessing(true);
      setTransactionSubmitModalShow(true)

      let PriceTypeSymbol = "";

      switch (PriceType) {
        case "aLUNA": PriceTypeSymbol = "uluna"; break;
        case "aUST": PriceTypeSymbol = "uusd"; break;
        case "AVAX": PriceTypeSymbol = "wavax-wei"; break;
      }

      console.log(PriceTypeSymbol)
  
      await listItem(
        chainId,
        collectionAddress,
        tokenId,
        CROSS_CHAIN_TOKEN_ADDRESS[PriceTypeSymbol][chainId],
        Price,
      );
      setTransactionSubmitModalShow(false);
      setCongratListModalModalShow(true);
      // window.alert("List success");
    } finally {
      setProcessing(false);
    }

  }

  async function refreshData() {
    setData(await fetchItem(chainId, collectionAddress, tokenId));
  }

  useEffect(() => {
    refreshData();
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
                <h1 className="heading text-center">List item for sale</h1>
              </div>
              {/* <div className="breadcrumbs style2">
                                <ul>
                                    <li><Link to="/home-07">Home</Link></li>
                                    <li><Link to="#">Pages</Link></li>
                                    <li>Create Item</li>
                                </ul>
                            </div> */}
            </div>
          </div>
        </div>
      </section>
      <div className="tf-create-item tf-section">
        <div className="themesflat-container">
          <div className="row">
            <div className="col-xl-3 col-lg-6 col-md-6 col-12">
              <h4 className="title-create-item">Preview item</h4>
              <div className="sc-card-product">
                <div className="card-media">
                  <Link to="#">
                    <img src={data.metadata?.image} alt="AxelarSea" />
                  </Link>
                  {/* <Link to="/login" className="wishlist-button heart">
                    <span className="number-like"> 100</span>
                  </Link> */}
                  {/* <div className="featured-countdown">
                    <span className="slogan"></span>
                    <Countdown date={Date.now() + 500000000}>
                      <span>You are good to go!</span>
                    </Countdown>
                  </div> */}
                </div>
                <div className="card-title">
                  <h5>
                    {data.collection?.name} #{data.tokenId}
                  </h5>
                  {/* <div className="tags">bsc</div> */}
                </div>
                <div className="meta-info">
                  <div className="author">
                    {/* <div className="avatar">
                      <img src={data.metadata?.image} alt="AxelarSea" />
                    </div> */}
                    <div className="info">
                      <span>Owned By</span>
                      <h6>
                        {maskAddress(data.owner)}
                      </h6>
                    </div>
                  </div>
                  {/* <div className="tags">{chainLabel(data.collection?.chainId)}</div> */}
                  <img src={data.collection?.chainId === 3 ? ethLogo : data.collection?.chainId === 43113 ? avaxLogo : data.collection?.chainId === 4002 ? fantomLogo : data.collection?.chainId === 1283 ? moonbeamLogo : data.collection?.chainId === 80001 ? polygonLogo : ''} alt=""  width="40px"/>

                  {/* <div className="Price">
                    <span>Price</span>
                    <h5>{Price} {PriceType}</h5>
                  </div> */}
                </div>
                
                {/* <div className="card-bottom">
                  <Link
                    to="/wallet-connect"
                    className="sc-button style bag fl-button pri-3"
                  >
                    <span>Buy Now</span>
                  </Link>
                  <Link to="/activity-01" className="view-history reload">
                    View History
                  </Link>
                </div> */}
              </div>
            </div>
            <div className="col-xl-9 col-lg-6 col-md-12 col-12">
              <div className="form-create-item">
                {/* <form action="#">
                                    <h4 className="title-create-item">Upload file</h4>
                                    <label className="uploadFile">
                                        <span className="filename">PNG, JPG, GIF, WEBP or MP4. Max 200mb.</span>
                                        <input type="file" className="inputfile form-control" name="file" />
                                    </label>
                                 </form> */}
                <div className="flat-tabs tab-create-item ">
                  <h4 className="title-create-item">Type</h4>
                  <Tabs>
                    <TabList>
                      <Tab>
                        <span className="icon-fl-tag"></span>Fixed Price
                      </Tab>
                      <Tab disabled>
                        <span className="icon-fl-clock" disabled></span>Time Auctions
                      </Tab>
                    </TabList>

                    <TabPanel>
                      <form action="#">
                        <h4 className="Price-item">Price</h4>
                        <div className="d-flex align-items-center">
                            <Dropdown>
                              <Dropdown.Toggle className="dropdown-chain-box" 
                              style={{marginRight:'0.5rem', width:'12rem'}}>
                              <img 
                                src={
                                  PriceType == "AVAX" ? avaxLogo 
                                  : PriceType == "aLUNA" ? AlunaLogo 
                                  : PriceType == "aUST" ? AustLogo 
                                  : ''}
                                style={{marginRight:'1rem', width:'25px'}}
                              />
                              <a>{PriceType}</a>
                              </Dropdown.Toggle>
                              <Dropdown.Menu style={{width:'100%'}}>
                                <Dropdown.Item className="dropdown-chain-detail"
                                onClick={() => setPriceType("AVAX")}>
                                  <img src={avaxLogo} style={{marginRight:'1rem', width:'25px'}}/>
                                  AVAX
                                </Dropdown.Item>
                                <Dropdown.Item className="dropdown-chain-detail" 
                                disabled style={{opacity:'0.6'}}
                                onClick={() => setPriceType("aLUNA")}>
                                  <img src={AlunaLogo} style={{marginRight:'1rem', width:'25px'}}/>
                                  aLUNA
                                </Dropdown.Item>
                                <Dropdown.Item className="dropdown-chain-detail"
                                disabled style={{opacity:'0.6'}}
                                onClick={() => setPriceType("aUST")}>
                                  <img src={AustLogo} style={{marginRight:'1rem', width:'25px'}}/>
                                  aUST
                                </Dropdown.Item>
                              </Dropdown.Menu>
                            </Dropdown>
                          <input type="text" placeholder="Enter Price(at least 0.1 AVAX)" className="" style={{marginBottom:'0rem'}} onChange={(e) => setPrice(e.target.value)} />
                        </div>

                        <h4
                          className="title-create-item"
                          style={{ marginTop: "20px" }}
                        >
                          Duration
                        </h4>
                        <div className="row-form style-3">
                          <div className="inner-row-form style-2">
                            <div className="seclect-box">
                              <div id="all-items" className="dropdown" disabled>
                                <a>No expiration Date</a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <hr style={{border:"1px solid #c4c4c4"}} />
                        <div className="row-form style-3">
                          <div className="inner-row-form style-2">
                            <div className="pd-10" style={{backgroundColor:"#f8f8f8", borderRadius:"10px"}}>
                              <p>Fees</p>
                              <div className="d-flex justify-content-between align-items-center">
                                <p style={{ color: "#B0B5B7" }}>Service Fee</p>
                                <p style={{ color: "#B0B5B7" }}>0%</p>
                              </div>
                              <div className="d-flex justify-content-between align-items-center">
                                <p style={{ color: "#B0B5B7" }}>Creator Fee</p>
                                <p style={{ color: "#B0B5B7" }}>25%</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <button className="sc-button loadmore fl-button pri-3" style={{ marginTop: "20px" }} onClick={listItemOnClick} disabled={processing}>
                          Complete listing
                        </button>
                      </form>
                    </TabPanel>
                    <TabPanel>
                      <form action="#">
                        <h4 className="title-create-item">Minimum bid</h4>
                        <input type="text" placeholder="enter minimum bid" />
                        <div className="row">
                          <div className="col-md-6">
                            <h5 className="title-create-item">Starting date</h5>
                            <input
                              type="date"
                              name="bid_starting_date"
                              id="bid_starting_date"
                              className="form-control"
                              min="1997-01-01"
                            />
                          </div>
                          <div className="col-md-6">
                            <h4 className="title-create-item">
                              Expiration date
                            </h4>
                            <input
                              type="date"
                              name="bid_expiration_date"
                              id="bid_expiration_date"
                              className="form-control"
                            />
                          </div>
                        </div>

                        <h4 className="title-create-item">Title</h4>
                        <input type="text" placeholder="Item Name" />

                        <h4 className="title-create-item">Description</h4>
                        <textarea placeholder="e.g. “This is very limited item”"></textarea>
                      </form>
                    </TabPanel>
                    <TabPanel>
                      <form action="#">
                        <h4 className="title-create-item">Price</h4>
                        <input
                          type="text"
                          placeholder="Enter Price for one item (ETH)"
                        />

                        <h4 className="title-create-item">Minimum bid</h4>
                        <input type="text" placeholder="enter minimum bid" />

                        <div className="row">
                          <div className="col-md-6">
                            <h5 className="title-create-item">Starting date</h5>
                            <input
                              type="date"
                              name="bid_starting_date"
                              id="bid_starting_date2"
                              className="form-control"
                              min="1997-01-01"
                            />
                          </div>
                          <div className="col-md-6">
                            <h4 className="title-create-item">
                              Expiration date
                            </h4>
                            <input
                              type="date"
                              name="bid_expiration_date"
                              id="bid_expiration_date2"
                              className="form-control"
                            />
                          </div>
                        </div>

                        <h4 className="title-create-item">Title</h4>
                        <input type="text" placeholder="Item Name" />

                        <h4 className="title-create-item">Description</h4>
                        <textarea placeholder="e.g. “This is very limited item”"></textarea>
                      </form>
                    </TabPanel>
                  </Tabs>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    <TransactionSubmitModal
    onShow={TransactionSubmitModalShow}
    onHide={() => {
      setTransactionSubmitModalShow(false)
    }}
    />
    <CongratListModal
        onShow={CongratListModalModalShow}
        onHide={() => {
                  setCongratListModalModalShow(false)
                  window.location.reload()
                }
            }
        name={data.collection?.name}
        chainId={chainId}
        collectionAddress={collectionAddress}
        tokenId={data.tokenId}
        listPrice={Price}
        img={data.metadata?.image}
        owner={maskAddress(data.owner)}
      />
    </div>
  );
};

export default CreateItem2;
