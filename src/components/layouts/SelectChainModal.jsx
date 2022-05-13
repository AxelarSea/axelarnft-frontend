import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Modal } from "react-bootstrap";


import ethLogo from '../../assets/images/icon/eth-logo.png'
import moonbeamLogo from '../../assets/images/icon/moonbeam-logo.png'
import polygonLogo from '../../assets/images/icon/polygon-logo.png'
import avaxLogo from '../../assets/images/icon/avax-logo.png'
import fantomLogo from '../../assets/images/icon/fantom-logo.png'

const SelectChainModal = (props) => {

    const [data,setData] = useState([
        {
            blockChain:'Ethereum',
            img:ethLogo,
        },
        {
            blockChain:'Avalanche',
            img:avaxLogo,
        },
        {
            blockChain:'Polygon',
            img:polygonLogo,
        },
        {
            blockChain:'Fantom',
            img:fantomLogo,
        },
        {
            blockChain:'Moonbeam',
            img:moonbeamLogo,
        },
    ])

    const handleChangeChain = (blockChain,index) => {
        props.setBlockChain(blockChain)
        props.setModalShow(false)


        const data2 = [...data]
        data2[index].select = true

        setData(data2)
    }

    return(
    <Modal show={props.onShow} onHide={props.onHide}>
        <Modal.Header closeButton></Modal.Header>
        <div className="modal-body space-y-20 pd-40">
            <h3 >Select Chain</h3>
            <input type="text" placeholder="Search Chain"/>
            <ul className="list-group">
            {data.map((item,index) => (
                <li className="list-group-item list-group-item-action justify-content-between" 
                style={{border:'none', cursor:'pointer'}} 
                onClick={() => handleChangeChain(item.blockChain,index)}
                >
                    <div className="d-flex align-items-center justify-content-between">
                            <div className="d-flex align-items-center justify-content-center">
                                <img src={item.img} alt="" width="25" height="25"/>
                                <div className="d-flex flex-column  justify-content-center" style={{marginLeft:'3rem'}}>
                                    <h5 style={{fontSize:'16px'}}>{item.blockChain}</h5>
                                    <p style={{color:'grey' , fontSize:'12px'}}>{item.detail}</p>
                                </div>
                            </div>
                    </div>

                </li>
            ))}
            </ul>
            
        </div>
    </Modal>
    )
}

export default SelectChainModal;