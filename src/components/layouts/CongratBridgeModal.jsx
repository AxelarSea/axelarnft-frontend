import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Modal } from "react-bootstrap";
import {maskAddress} from '../../utils/address'


import ethLogo from '../../assets/images/icon/eth-logo.png'
import moonbeamLogo from '../../assets/images/icon/moonbeam-logo.png'
import polygonLogo from '../../assets/images/icon/polygon-logo.png'
import avaxLogo from '../../assets/images/icon/avax-logo.png'
import fantomLogo from '../../assets/images/icon/fantom-logo.png'

const CongratBridgeModal = (props) => {

    console.log(props.nftSelect)



    return(
    <Modal show={props.onShow} onHide={props.onHide}>
        <Modal.Header closeButton></Modal.Header>
        <div>
            <h1>{props.nftSelect == null ? "" : props.nftSelect.title}</h1>
            <img src={props.nftSelect == null ? "" : props.nftSelect.img} alt="" />
            <img src={props.myNftOnImg == null ? "" : props.myNftOnImg} alt="" />
            <img src={props.destinationNftChainImg == null ? "" : props.destinationNftChainImg} alt="" />
            
            
            <h1>{props.nftSelect == null ? "" : maskAddress(props.nftSelect.nameAuthor)}</h1>
        </div>
        This is CongratBridgeModal
    </Modal>
    )
}

export default CongratBridgeModal;