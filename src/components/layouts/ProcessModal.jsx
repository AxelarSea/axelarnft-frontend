import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Modal } from "react-bootstrap";

const ProcessModal = (props) => {
    return (
        <Modal show={props.onShow} onHide={props.onHide}>
      <Modal.Header closeButton></Modal.Header>
      <div className="modal-body space-y-20 pd-40">
          <h5>Waiting for transaction, follow these steps:</h5>

      <ul className="list-group" >
            <li class="list-group-item  " style={{background:'#343444' , border:'none'}}>Get deposit address from Axelar Network</li>
            <li class="list-group-item" style={{background:'#343444', border:'none'}}> Transfer XXX UST to axelar network using Terra Station</li>
            <li class="list-group-item" style={{background:'#343444', border:'none'}}>Wait for deposit arrival in the destination chain</li>
            <li class="list-group-item" style={{background:'#343444', border:'none'}}>Sign signature in metamask to confirm buying transaction</li>
            <li class="list-group-item" style={{background:'#343444', border:'none'}}>Wait for transaction to complete </li>
    </ul>
        </div>

      </Modal>
    )
}
export default ProcessModal
