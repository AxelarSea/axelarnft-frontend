import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Modal } from "react-bootstrap";

import AlunaLogo from "../../assets/images/icon/Luna.png";
import AustLogo from "../../assets/images/icon/UST.png";
import ethLogo from '../../assets/images/icon/eth-logo.png'

const SelectTokenModal = (props) => {

    const [data,setData] = useState([
        {
            topic:'aUST',
            detail:'aUST (Axelar wrapped)',
            img:AustLogo,
            amount:'9999'
        },
        {
            topic:'aLUNA',
            detail:'aLuna (Axelar wrapped)',
            img:AlunaLogo,
            amount:'9999'
        },
        {
            topic:'ETH',
            detail:'Ethereum',
            img:ethLogo,
            amount:'9999'
        },
    ])

    return(
    <Modal show={props.onShow} onHide={props.onHide}>
        <Modal.Header closeButton></Modal.Header>
        <div className="modal-body space-y-20 pd-40">
            <h3 >Select a token</h3>
            <input type="text" placeholder="Search token"/>
            <ul className="list-group">
            {data.map(item => (
                <li classBane="list-group-item list-group-item-action">
                    <div className="d-flex align-items-center justify-content-between">
                            <div className="d-flex align-items-center justify-content-center">
                                <img src={item.img} alt="" width="25" height="25"/>
                                <div className="d-flex flex-column  justify-content-center" style={{marginLeft:'3rem'}}>
                                    <h5 style={{fontSize:'16px'}}>{item.topic}</h5>
                                    <p style={{color:'grey' , fontSize:'12px'}}>{item.detail}</p>
                                </div>
                            </div>
                            <h5 style={{fontSize:'16px' , fontWeight:'600'}}>{item.amount}</h5>
                    </div>
                </li>
            ))}
            </ul>
            
        </div>
    </Modal>
    )
}

export default SelectTokenModal;