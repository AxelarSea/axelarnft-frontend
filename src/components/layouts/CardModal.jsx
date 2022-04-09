import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Modal } from "react-bootstrap";

import AlunaLogo from "../../assets/images/icon/Luna.png";
import AustLogo from "../../assets/images/icon/UST.png";
import { buyERC721, crossChainTokenLabel, crossChainTokenSymbol } from "../../utils/api";
import ProcessModal from './ProcessModal'

import { useConnectedWallet, useLCDClient } from "@terra-money/wallet-provider";
import web3 from "../../hooks/web3";
import { maskAddress } from "../../utils/address";

const CardModal = (props) => {
  const lcd = useLCDClient();

  const [modalShow , setModalShow] = useState(false);

  const [youPayPic, setYouPayPic] = useState(AustLogo);

  const [youPayType, setYouPayType] = useState("UST");

  const [PricePic, setPricePic] = useState(AlunaLogo);

  const [PriceType, setPriceType] = useState("Luna");

  const connectedWallet = useConnectedWallet();

  const [processing, setProcessing] = useState(false);

  const [balance, setBalance] = useState(0);
  const [metamaskAccount, setMetamaskAccount] = useState("");

  async function buyOnClick() {
    if (!connectedWallet) {
      window.alert("Please connect to terra station wallet");
      return;
    }

    if (connectedWallet.network.chainID.startsWith('columbus')) {
      window.alert(`Please switch to Bombay testnet on your terra station`);
      return;
    }
    try {
      props.setBuyNowModal(false)
      setModalShow(true)
      setProcessing(true);
      await buyERC721(connectedWallet, props.chainId, props.collectionAddress, props.tokenId, props.listTokenAddress, props.listPrice);
      window.alert("Buy success");
    } finally {
      setProcessing(false);
    }
    
  }

  async function refreshBalance() {
    const accounts = await web3.eth.getAccounts();
    setMetamaskAccount(accounts[0]);

    if (connectedWallet) {
      let [coins] = await lcd.bank.balance(connectedWallet.walletAddress);
      console.log(coins.get(crossChainTokenSymbol(props.chainId, props.listTokenAddress)))
      setBalance(coins.get(crossChainTokenSymbol(props.chainId, props.listTokenAddress)).amount / 1000000);
    }
  }

  useEffect(() => {
    const priceType = crossChainTokenLabel(props.chainId, props.listTokenAddress)
    setPriceType(priceType);
    setYouPayType(priceType);
    
    setPricePic(priceType == 'UST' ? AustLogo : AlunaLogo);
    setYouPayPic(priceType == 'UST' ? AustLogo : AlunaLogo);

    refreshBalance();
  }, [props.chainId, props.listTokenAddress, connectedWallet])

  return (
    <div>
     <Modal show={props.show} onHide={props.onHide}>
      <Modal.Header closeButton></Modal.Header>

      <div className="modal-body space-y-20 pd-40">
        <h2>Checkout</h2>
        <p className="">
          You are about to purchase a{" "}
          <span className="price color-popup">{props.name}</span>
        </p>
        <div className="d-flex align-items-center justify-content-between">
          <div className="d-flex align-items-center">
            <p>On</p>
            <div id="buy" className="dropdown">
              <Link to="#" className="btn-selectornolink">
                Terra
              </Link>
              {/* <ul >
                            <li><span>On Auction</span></li>
                            <li><span>Has Offers</span></li>
                        </ul> */}
            </div>
          </div>
          <p>Balance {balance.toFixed(3)} {youPayType}</p>
        </div>
        {/* <input type="text" className="form-control"
            placeholder="00.00 ETH" /> */}

        <div className="d-flex justify-content-between">
          <div
            className="w-50"
            style={{
              backgroundColor: "rgb(245 245 245)",
              borderRight: "1px solid white",
              borderRadius:"10px"
            }}
          >
            <div className="d-flex justify-content-between align-items-center">
              <p style={{ fontSize: "14px", marginLeft: "5px" }}>Price</p>
              <p style={{ fontSize: "14px", marginRight: "5px" }}>
                {/* $24,055.16 */}
              </p>
            </div>
            <div className="d-flex justify-content-between align-items-center">
              <div
                id="sort-by"
                className="dropdown"
                style={{ marginLeft: "5px" }}
              >
                <a
                  className="btn-selector nolink"
                  style={{ minWidth: "100px" }}
                >
                  <img
                    width="15"
                    height="15"
                    src={PricePic}
                    style={{ marginRight: "14px" }}
                  />
                  {PriceType}
                </a>
              </div>
              <p
                style={{
                  fontSize: "14px",
                  fontWeight: "bold",
                  marginRight: "5px",
                }}
              >
                {props.listPrice}
              </p>
            </div>
          </div>
          <div className="w-50" style={{ backgroundColor: "rgb(245 245 245)",borderLeft: "1px solid white",borderRadius:"10px"}}>
            <div className="d-flex justify-content-between align-items-center">
              <p style={{ fontSize: "14px", marginLeft: "5px" }}>You pay</p>
              <p style={{ fontSize: "14px", marginRight: "5px" }}>
                {/* $24,055.16 */}
              </p>
            </div>
            <div className="d-flex justify-content-between align-items-center" style={{pointerEvents: "none"}}>
              <div
                id="sort-by"
                className="dropdown"
                style={{ marginLeft: "5px" }}
              >
                <a
                  className="btn-selector nolink"
                  style={{ minWidth: "100px" }}
                >
                  <img
                    width="15"
                    height="15"
                    src={youPayPic}
                    style={{ marginRight: "14px" }}
                  />
                  {youPayType}
                </a>
                <ul>
                  <li
                    onClick={() => {
                      setYouPayType("ALUNA");
                      setYouPayPic(AlunaLogo);
                    }}
                  >
                    <span>
                      <img
                        width="15"
                        height="15"
                        src={AlunaLogo}
                        style={{ marginRight: "14px" }}
                      />
                      ALUNA
                    </span>
                  </li>
                  <li
                    onClick={() => {
                      setYouPayType("AUST");
                      setYouPayPic(AustLogo);
                    }}
                  >
                    <span>
                      <img
                        width="15"
                        height="15"
                        src={AustLogo}
                        style={{ marginRight: "14px" }}
                      />
                      AUST
                    </span>
                  </li>
                </ul>
              </div>
              <p
                style={{
                  fontSize: "14px",
                  fontWeight: "bold",
                  marginRight: "5px",
                }}
              >
                {props.listPrice}
              </p>
            </div>
          </div>
        </div>

        {/* <input type="number" className="form-control" placeholder="1" /> */}
        <div className="hr"></div>
        <div className="d-flex justify-content-between">
          <p> You want to Receive NFT</p>
        </div>
        <div className="d-flex justify-content-between">
          <p> 
            To 
            <a style={{ backgroundColor: "rgb(245 245 245)",borderRadius:"10px"}}>
              {maskAddress(metamaskAccount)}
            </a> 
          </p>
        </div>

        <button
          className="btn btn-primary"
          data-toggle="modal"
          data-target="#popup_bid_success"
          data-dismiss="modal"
          aria-label="Close"
          onClick={buyOnClick}
          disabled={processing}
        >
          Confirm
        </button>
      </div>
      
    </Modal>
        <ProcessModal 
        onShow={modalShow}
        onHide={() => setModalShow(false)}
        />
    </div>
    
  );
};

export default CardModal;
