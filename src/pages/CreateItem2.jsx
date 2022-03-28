import React, { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Countdown from "react-countdown";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import img1 from "../assets/images/box-item/image-box-6.jpg";
import avt from "../assets/images/avatar/avt-9.jpg";

import AlunaLogo from "../assets/images/icon/Luna.png";
import AustLogo from "../assets/images/icon/UST.png";

import HeaderStyle2 from "../components/header/HeaderStyle2";
import { CROSS_CHAIN_TOKEN_ADDRESS, listItem } from "../utils/api";
import web3 from "../hooks/web3";

const CreateItem2 = () => {
  const [price, setPrice] = useState("");
  const [priceType, setPriceType] = useState("ALUNA");
  const [pricePic, setPricePic] = useState(AlunaLogo);

  const [searchParams, setSearchParams] = useSearchParams();

  const collectionAddress = searchParams.get('collection');
  const tokenId = searchParams.get('tokenId');
  const chainId = searchParams.get('chainId');

  async function listItemOnClick(e) {
    e.preventDefault();

    let priceTypeSymbol = "";

    switch (priceType) {
      case "ALUNA": priceTypeSymbol = "uluna"; break;
      case "AUST": priceTypeSymbol = "uusd"; break;
    }

    await listItem(
      chainId,
      collectionAddress,
      tokenId,
      CROSS_CHAIN_TOKEN_ADDRESS[priceTypeSymbol][chainId],
      price,
    );
  }

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
                  <Link to="/item-details-01">
                    <img src={img1} alt="Axies" />
                  </Link>
                  <Link to="/login" className="wishlist-button heart">
                    <span className="number-like"> 100</span>
                  </Link>
                  <div className="featured-countdown">
                    <span className="slogan"></span>
                    <Countdown date={Date.now() + 500000000}>
                      <span>You are good to go!</span>
                    </Countdown>
                  </div>
                </div>
                <div className="card-title">
                  <h5>
                    <Link to="/item-details-01">"Cyber Doberman #766”</Link>
                  </h5>
                  <div className="tags">bsc</div>
                </div>
                <div className="meta-info">
                  <div className="author">
                    <div className="avatar">
                      <img src={avt} alt="Axies" />
                    </div>
                    <div className="info">
                      <span>Owned By</span>
                      <h6>
                        {" "}
                        <Link to="/author-02">Freddie Carpenter</Link>
                      </h6>
                    </div>
                  </div>
                  <div className="price">
                    <span>Current Bid</span>
                    <h5> 4.89 ETH</h5>
                  </div>
                </div>
                <div className="card-bottom">
                  <Link
                    to="/wallet-connect"
                    className="sc-button style bag fl-button pri-3"
                  >
                    <span>Buy Now</span>
                  </Link>
                  <Link to="/activity-01" className="view-history reload">
                    View History
                  </Link>
                </div>
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
                      <Tab>
                        <span className="icon-fl-clock"></span>Time Auctions
                      </Tab>
                    </TabList>

                    <TabPanel>
                      <form action="#">
                        <h4 className="price-item">Price</h4>
                        <div className="d-flex">
                          <div id="sort-by" className="dropdown">
                            <Link to="#" className="btn-selector nolink">
                              <img
                                width="29"
                                height="29"
                                src={pricePic}
                                style={{ marginRight: "14px" }}
                              />
                              {priceType}
                            </Link>
                            <ul>
                              <li
                                onClick={() => {
                                  setPriceType("ALUNA");
                                  setPricePic(AlunaLogo);
                                }}
                              >
                                <div className="d-flex align-items-center">
                                  <span>
                                    <img
                                      width="29"
                                      height="29"
                                      src={AlunaLogo}
                                      style={{ marginRight: "14px" }}
                                    />
                                    ALUNA
                                  </span>
                                </div>
                              </li>
                              <li
                                onClick={() => {
                                  setPriceType("AUST");
                                  setPricePic(AustLogo);
                                }}
                              >
                                <span>
                                  <img
                                    width="29"
                                    height="29"
                                    src={AustLogo}
                                    style={{ marginRight: "14px" }}
                                  />
                                  AUST
                                </span>
                              </li>
                            </ul>
                          </div>
                          <input type="text" placeholder="Enter price" onChange={(e) => setPrice(e.target.value)} />
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
                              <div id="all-items" className="dropdown">
                                <Link to="#" className="btn-selector">
                                  7 Day
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* <h4 className="title-create-item">Description</h4>
                                                <textarea placeholder="e.g. “This is very limited item”"></textarea> */}
                        <hr />

                        <div className="row-form style-3">
                          <div className="inner-row-form style-2">
                            <div>
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
                            {/* <div className="inner-row-form">
                                                        <h4 className="title-create-item">Royalties</h4>
                                                        <input type="text" placeholder="5%" />
                                                    </div>
                                                    <div className="inner-row-form">
                                                        <h4 className="title-create-item">Size</h4>
                                                        <input type="text" placeholder="e.g. “size”" />
                                                    </div> */}
                            {/* <div className="inner-row-form style-2">
                                                        <div className="seclect-box">
                                                            <div id="item-create" className="dropdown">
                                                                <Link to="#" className="btn-selector nolink">Abstraction</Link>
                                                                <ul >
                                                                    <li><span>Art</span></li>
                                                                    <li><span>Music</span></li>
                                                                    <li><span>Domain Names</span></li>
                                                                    <li><span>Virtual World</span></li>
                                                                    <li><span>Trading Cards</span></li>
                                                                    <li><span>Sports</span></li>
                                                                    <li><span>Utility</span></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div> */}
                          </div>
                        </div>
                        <button className="" style={{ marginTop: "20px" }} onClick={listItemOnClick}>
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
                          placeholder="Enter price for one item (ETH)"
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
    </div>
  );
};

export default CreateItem2;
