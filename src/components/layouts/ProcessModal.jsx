import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Modal } from "react-bootstrap";
import Countdown from "react-countdown";
import one from "../../assets/images/icon/1.svg";
import oneWhite from "../../assets/images/icon/oneWhite.svg";
import twoWhite from "../../assets/images/icon/twoWhite.svg";
import oneGreen from "../../assets/images/icon/oneGreen.svg";
import twoGreen from "../../assets/images/icon/twoGreen.svg";
import threeWhite from "../../assets/images/icon/threeWhite.svg";
import oneWhiteSpin from "../../assets/images/icon/one-white-spin.gif";
import twoWhiteSpin from "../../assets/images/icon/two-white-spin.gif";
import threeWhiteSpin from "../../assets/images/icon/three-white-spin.gif";
import greenCheck from "../../assets/images/icon/green-check.svg";

import TransferFailedModal from "./TranferFailedModal";

import two from "../../assets/images/icon/2.svg";
import three from "../../assets/images/icon/3.svg";
import four from "../../assets/images/icon/4.svg";
import five from "../../assets/images/icon/5.svg";

import FaqTestnetModal from "./FaqTestnetModal";
import { maskAddress } from "../../utils/address";
import { getExplorerUrl } from "../../utils/switchChain";

const ProcessModal = (props) => {
  const [faqModalShow, setFaqModalShow] = useState(false);

  const [time, setTime] = useState(Date.now() + 30000);

  useEffect(() => {
    console.log(props.status == 0, props.onShow);
    if (props.status == 0 && props.onShow) {
      setTime(Date.now() + 120000);
    }
    if (props.status == 2) {
      setTime(Date.now() + 600000);
    } else if (props.status == 5) {
      setTime(Date.now() + 120000);
    }
  }, [props.status, props.onShow]);

  return (
    <Modal show={props.onShow} onHide={props.onHide}>
      <Modal.Header closeButton></Modal.Header>
      <div
        className="modal-body space-y-20 pd-20"
        style={{ paddingTop: "1rem" }}
      >
        <div className="transaction-warning-box">
          <h6 className="transaction-warning-detail">
            In future versions, users will be able to track the buying process
            in real time.
          </h6>
        </div>

        <div className="count-box pd-20">
          <p className="center" style={{ fontSize: "16px" }}>
            Estimated Time
          </p>
          <div className="center">
            <Countdown
              className="center countdown"
              date={time}
              onComplete={() => {
                props.setTransferFailedModalShow(true);
                props.onHide();
              }}
            >
              <span className="center countdown">
                Please keep this window open.
              </span>
            </Countdown>
          </div>
        </div>
        <h5 className="transaction-header">
          Please wait while the transaction is being processed.
        </h5>
        <div className="transaction-step-box">
          <h6 className="transaction-step-detail">
            <img
              src={props.status <= 1 ? oneWhiteSpin : greenCheck}
              style={{ marginRight: "1rem", width: "30px" }}
            />
            <div>
              <div>Approve transaction on MetaMask wallet</div>
              {props.txHash && <div>Transaction Hash: <a href={getExplorerUrl(props.chainId) + "/tx/" + props.txHash} target="_blank">{maskAddress(props.txHash)}</a></div>}
            </div>
          </h6>
        </div>
        <div className="transaction-step-box">
          <h6 className="transaction-step-detail">
            <img
              src={
                props.status == 3
                  ? twoWhiteSpin
                  : props.status > 3
                  ? greenCheck
                  : props.status < 4 && props.status > 1
                  ? twoWhiteSpin
                  : two
              }
              style={{ marginRight: "1rem", width: "30px" }}
            />
            <div>
              <div>Wait for transaction to complete</div>
              {props.txHash && <div>Real Time Check: <a href={"https://testnet.axelarscan.io/gmp/" + props.txHash} target="_blank">{maskAddress(props.txHash)} <a className="animation-gradient" style={{fontWeight:'600'}}>Click Here!</a></a></div>}
            </div>
          </h6>
        </div>
        {/* <div className="transaction-step-box">
          <h6 className="transaction-step-detail">
            <img
              src={props.status == 4 ? threeWhiteSpin : three}
              style={{ marginRight: "1rem", width: "30px" }}
            />
            Wait for transaction to complete{" "}
          </h6>
        </div> */}

        {/* <h5 className="transaction-note">Depending on network congestion, the entire process</h5>
        
        <h5 className="transaction-note" style={{marginTop: '5px'}}>could take up to 10 minutes.</h5> */}
        <div className="center">
          <button onClick={() => setFaqModalShow(true)}>FAQ</button>
        </div>
      </div>
      <FaqTestnetModal
        onShow={faqModalShow}
        onHide={() => setFaqModalShow(false)}
      />
    </Modal>
  );
};
export default ProcessModal;
