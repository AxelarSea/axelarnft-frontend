import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Modal } from "react-bootstrap";
import one from "../../assets/images/icon/1.svg";
import two from "../../assets/images/icon/2.svg";
import three from "../../assets/images/icon/3.svg";
import four from "../../assets/images/icon/4.svg";
import five from "../../assets/images/icon/5.svg";

const ProcessModal = (props) => {
    return (
        <Modal show={props.onShow} onHide={props.onHide}>
      <Modal.Header closeButton></Modal.Header>
      <div className="modal-body space-y-20 pd-40">
          <h4>Waiting for transaction, follow these steps:</h4>
          <div className="transaction-step-box">
            <h6 className="transaction-step-detail"><img src={one} style={{marginRight: '1rem'}}/>Get deposit address from Axelar Network.</h6>
          </div>
          <div className="transaction-step-box">
            <h6 className="transaction-step-detail"><img src={two} style={{marginRight: '1rem'}}/> Transfer XXX UST to axelar network using Terra Station.</h6>
          </div>
          <div className="transaction-step-box">
            <h6 className="transaction-step-detail"><img src={three} style={{marginRight: '1rem'}}/>Wait for deposit arrival in the destination chain.</h6>
          </div>
          <div className="transaction-step-box">
            <h6 className="transaction-step-detail"><img src={four} style={{marginRight: '1rem'}}/>Sign signature in metamask to confirm buying transaction.</h6>
            <p className="transaction-sign-detail">Sign a message using your wallet to continue.</p>
          </div>
          <div className="transaction-step-box">
            <h6 className="transaction-step-detail"><img src={five} style={{marginRight: '1rem'}}/>Wait for transaction to complete.</h6>
          </div>
          <h5 className="transaction-note">Depending on network congestion, the entire process</h5>
          <h5 className="transaction-note" style={{marginTop: '5px'}}>could take up to 10 minutes.</h5>
      </div>

      </Modal>
    )
}
export default ProcessModal
