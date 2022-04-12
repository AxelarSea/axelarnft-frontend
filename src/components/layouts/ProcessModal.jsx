import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Modal } from "react-bootstrap";

const ProcessModal = (props) => {
    return (
        <Modal show={props.onShow} onHide={props.onHide}>
      <Modal.Header closeButton></Modal.Header>
      <div className="modal-body space-y-20 pd-40">
          <h5>Waiting for transaction, follow these steps:</h5>

      <ul className="list-group" style={{fontSize: "1.5rem"}} >
            <li class="list-group-item  " style={{background:'#ffffff' , border:'none'}}>Get deposit address from Axelar Network</li>
            <li class="list-group-item" style={{background:'#ffffff', border:'none'}}>Transfer token to axelar network using Terra Station</li>
            <li class="list-group-item" style={{background:'#ffffff', border:'none'}}>Wait for deposit arrival in the destination chain</li>
            <li class="list-group-item" style={{background:'#ffffff', border:'none'}}>Sign signature in metamask to confirm buying transaction</li>
            <li class="list-group-item" style={{background:'#ffffff', border:'none'}}>Wait for transaction to complete </li>
    </ul>
        </div>

      </Modal>
    )
}
export default ProcessModal
