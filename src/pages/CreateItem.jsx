import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Countdown from "react-countdown";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import img1 from "../assets/images/box-item/image-box-6.jpg";
import avt from "../assets/images/avatar/avt-9.jpg";
import { Dropdown } from "react-bootstrap";
import Swal from "sweetalert2";
import ETH from "../assets/images/avatar/ETH.jpg";
import AVAX from "../assets/images/avatar/AVAX.jpg";
import FTM from "../assets/images/avatar/FTM.jpg";
import Moonbeam from "../assets/images/avatar/moonbeam.gif";
import Polygon from "../assets/images/avatar/polygon.gif";
import ethLogo from "../assets/images/icon/eth-logo.svg";
import polygonLogo from "../assets/images/icon/polygon-logo.svg";
import avaxLogo from "../assets/images/icon/avax-logo.svg";
import moonbeamLogo from "../assets/images/icon/moonbeam-logo.svg";
import fantomLogo from "../assets/images/icon/fantom-logo.svg";
import HeaderStyle2 from "../components/header/HeaderStyle2";
import AxelarSeaSampleNft from "../contracts/AxelarSeaSampleNft";
import web3 from "../hooks/web3";
import switchChain from "../utils/switchChain";
import wait from "../utils/wait";
import { refreshMetadata, fetchItem } from "../utils/api";

import SelectChainModal from "../components/layouts/SelectChainModal";

const CreateItem = () => {
  let [blockChain, setBlockChain] = useState("Ethereum");

  const [processing, setProcessing] = useState(false);

  const [modalShow, setModalShow] = useState(false);

  async function mint(e) {
    e.preventDefault();

    // Swal.fire(
    //   'Sorry',
    //   "Testnet V1 has been paused, please wait for further announcement.",
    //   'warning'
    // )

    // return;

    try {
      setProcessing(true);

      let chainId;

      // Get chainid from name
      switch (blockChain) {
        case "Ethereum":
          chainId = 3;
          break;
        case "Avalanche":
          chainId = 43113;
          break;
        case "Fantom":
          chainId = 4002;
          break;
        case "Moonbeam":
          chainId = 1287;
          break;
        case "Polygon":
          chainId = 80001;
          break;
      }

      await switchChain(chainId);

      await wait(500);

      let account = (await web3.eth.getAccounts())[0];
      let contract = new AxelarSeaSampleNft(chainId, account);

      // let totalSupplyBefore = await contract.totalSupply();
      await contract.mint();

      Swal.fire(
        "Please wait",
        "Please wait for data syncing. Don't close tab or navigate to any page.",
        "warning"
      );

      await wait(5000);

      // let totalSupply = await contract.totalSupply();

      // for (let i = totalSupplyBefore; i <= totalSupply; i++) {
      //   try {
      //     await fetchItem(chainId, contract.address, i);
      //   } catch (err) {
      //     await refreshMetadata(chainId, contract.address, i)
      //   }
      // }

      // window.alert('Mint success');
      Swal.fire(
        "Mint Success!",
        "You have minted NFT on " + blockChain + "!",
        "success"
      );
    } finally {
      setProcessing(false);
    }
  }

  return (
    <div className="create-item">
      <HeaderStyle2 />
      <section className="flat-title-page inner">
        <div className="themesflat-container">
          <div className="row">
            <div
              className="col-md-12"
              style={{ marginTop: "6rem", marginBottom: "2rem" }}
            >
              <div className="page-title-heading mg-bt-12">
                <h1 className="heading text-center">Create Item</h1>
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
            <div className="col-xl-3 col-lg-6 col-md-6 col-12 sticky-nft-image">
              <h4 className="title-create-item ">Preview item</h4>
              <div className="sc-card-product">
                <div className="card-media">
                  <Link to="#">
                    <img
                      src={
                        blockChain === "Ethereum"
                          ? ETH
                          : blockChain === "Fantom"
                          ? FTM
                          : blockChain === "Avalanche"
                          ? AVAX
                          : blockChain === "Moonbeam"
                          ? Moonbeam
                          : blockChain === "Polygon"
                          ? Polygon
                          : img1
                      }
                      alt="AxelarSea"
                    />
                  </Link>
                  {/* <Link to="/login" className="wishlist-button heart">
                    <span className="number-like"> 100</span>
                  </Link>
                  <div className="featured-countdown">
                    <span className="slogan"></span>
                    <Countdown date={Date.now() + 500000000}>
                      <span>You are good to go!</span>
                    </Countdown>
                  </div> */}
                </div>
                {/* <div className="card-title">
                  <h5>
                    <Link to="#">"Cyber Doberman #766”</Link>
                  </h5>
                  <div className="tags">bsc</div>
                </div> */}
                {/* <div className="meta-info">
                  <div className="author">
                    <div className="avatar">
                      <img src={avt} alt="AxelarSea" />
                    </div>
                    <div className="info">
                      <span>Owned By</span>
                      <h6>
                        {" "}
                        <Link to="/Authors-Profile">Freddie Carpenter</Link>
                      </h6>
                    </div>
                  </div>
                  <div className="price">
                    <span>Price</span>
                    <h5> 4.89 ETH</h5>
                  </div>
                </div> */}
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
                <form action="#">
                  <h4 className="title-create-item">Upload file</h4>
                  <label className="uploadFile" style={{ cursor: "default" }}>
                    <span className="filename">
                      PNG, JPG, GIF, WEBP or MP4. Max 200mb.
                    </span>
                    <input
                      disabled
                      type="file"
                      className="inputfile form-control"
                      name="file"
                    />
                  </label>
                </form>
                <div className="flat-tabs tab-create-item">
                  {/* <h4 className="title-create-item">Select method</h4> */}
                  <Tabs>
                    {/* <TabList>
                                            <Tab><span className="icon-fl-tag"></span>Fixed Price</Tab>
                                            <Tab><span className="icon-fl-clock"></span>Time Auctions</Tab>
                                            <Tab><span className="icon-fl-icon-22"></span>Open For Bids</Tab>
                                        </TabList> */}

                    <TabPanel>
                      <form action="#">
                        <h4 className="title-create-item d-flex">
                          Name<h4 style={{ color: "red" }}>*</h4>
                        </h4>
                        <input
                          disabled
                          type="text"
                          placeholder=""
                          value="AxelarRobot"
                          style={{ cursor: "default" }}
                        />

                        <h4
                          className="title-create-item"
                          style={{ lineHeight: "19px", marginBottom: "10px" }}
                        >
                          External link
                        </h4>
                        <p
                          style={{
                            fontSize: "10px",
                            color: "#B0B5B7",
                            lineHeight: "10px",
                            marginBottom: "10px",
                          }}
                        >
                          a link to this URL on this item's detail page, so that
                          users can click to learn more about it. You are
                          welcome to link to your own webpage with more details.
                        </p>
                        <input
                          disabled
                          type="text"
                          placeholder=""
                          value="https://axelar.network/"
                          style={{ cursor: "default" }}
                        />

                        <h4 className="title-create-item">Description</h4>
                        <textarea
                          value="The description will be included on the item's detail page underneath its image"
                          style={{ cursor: "default" }}
                        ></textarea>

                        <h4 className="title-create-item d-flex ">
                          Collection
                        </h4>
                        <input
                          disabled
                          type="text"
                          placeholder=""
                          value="AxelarSea Collection."
                          style={{ cursor: "default" }}
                        />

                        <h4 className="title-create-item d-flex">Supply</h4>
                        <input
                          disabled
                          type="text"
                          placeholder=""
                          value="1"
                          style={{ cursor: "default" }}
                        />

                        <h4 className="title-create-item d-flex">Blockchain</h4>
                        <Dropdown>
                          <Dropdown.Toggle
                            className="dropdown-chain-box"
                            onClick={() => setModalShow(true)}
                          >
                            <img
                              onChange={() => setModalShow(false)}
                              src={
                                blockChain == "Ethereum"
                                  ? ethLogo
                                  : blockChain == "Avalanche"
                                  ? avaxLogo
                                  : blockChain == "Fantom"
                                  ? fantomLogo
                                  : blockChain == "Moonbeam"
                                  ? moonbeamLogo
                                  : blockChain == "Polygon"
                                  ? polygonLogo
                                  : ""
                              }
                              style={{ marginRight: "1rem", width: "25px" }}
                            />
                            {blockChain}
                          </Dropdown.Toggle>

                          <Dropdown.Menu style={{ width: "100%" }}>
                            <Dropdown.Item
                              className="dropdown-chain-detail"
                              onClick={() => setBlockChain("Ethereum")}
                            >
                              <img
                                src={ethLogo}
                                style={{ marginRight: "1rem", width: "25px" }}
                              />
                              Ethereum
                            </Dropdown.Item>
                            <Dropdown.Item
                              className="dropdown-chain-detail"
                              onClick={() => setBlockChain("Avalanche")}
                            >
                              <img
                                src={avaxLogo}
                                style={{ marginRight: "1rem", width: "25px" }}
                              />
                              Avalanche
                            </Dropdown.Item>
                            <Dropdown.Item
                              className="dropdown-chain-detail"
                              onClick={() => setBlockChain("Fantom")}
                            >
                              <img
                                src={fantomLogo}
                                style={{ marginRight: "1rem", width: "25px" }}
                              />
                              Fantom
                            </Dropdown.Item>
                            <Dropdown.Item
                              className="dropdown-chain-detail"
                              onClick={() => setBlockChain("Moonbeam")}
                            >
                              <img
                                src={moonbeamLogo}
                                style={{ marginRight: "1rem", width: "25px" }}
                              />
                              Moonbeam
                            </Dropdown.Item>
                            <Dropdown.Item
                              className="dropdown-chain-detail"
                              onClick={() => setBlockChain("Polygon")}
                            >
                              <img
                                src={polygonLogo}
                                style={{ marginRight: "1rem", width: "25px" }}
                              />
                              Polygon
                            </Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                        <button
                          className=""
                          id="liveToastBtn"
                          style={{ margin: "3rem 0rem" }}
                          onClick={mint}
                          disabled={processing}
                        >
                          Submit
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

      <SelectChainModal
        onShow={modalShow}
        onHide={() => setModalShow(false)}
        setModalShow={setModalShow}
        setBlockChain={setBlockChain}
      />
    </div>
  );
};

export default CreateItem;
