import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Modal } from "react-bootstrap";


import ethLogo from '../../assets/images/icon/eth-logo.svg'
import moonbeamLogo from '../../assets/images/icon/moonbeam-logo.svg'
import polygonLogo from '../../assets/images/icon/polygon-logo.svg'
import avaxLogo from '../../assets/images/icon/avax-logo.svg'
import fantomLogo from '../../assets/images/icon/fantom-logo.svg'

const SelectChainDestinationModal = (props) => {

    const [data,setData] = useState([
        {
            topic:'Polygon',
            img:polygonLogo,
            chainId: 80001,
            select:false,
        },
        {
            topic:'Moonbeam',
            img:moonbeamLogo,
            chainId: 1287,
            select:false,
        },
        {
            topic:'Fantom',
            img:fantomLogo,
            chainId: 4002,
            select:false,
        },
        {
            topic:'Ethereum',
            img:ethLogo,
            chainId: 3,
            select:false,
        },
        {
            topic:'Avalanche',
            img:avaxLogo,
            chainId: 43113,
            select:false,
        },
    ])

    const handleChangeChain = (topic,chainId,img,index) => {
        props.onChange(topic, chainId, img)
        props.setSelectChainDestinationShow(false)
        
        // props.setDestinationNftChain(topic)
        // props.setDestinationNftChainImg(img)
        

        // const clearSelect = data.map(item => (
        //     item.select == false
        // ))

        // setData(clearSelect)

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
                <li className={(props.myNftOn === item.topic) ? "hidden" : "list-group-item list-group-item-action justify-content-between"} style={{border:'none', cursor:(props.myNftOn === item.topic) ? 'not-allowed' : 'pointer' , opacity:(props.myNftOn === item.topic) ? '0.6' : '1'}}   onClick={() => handleChangeChain(item.topic, item.chainId, item.img ,index)} >
                    <div className="d-flex align-items-center justify-content-between">
                            <div className="d-flex align-items-center justify-content-center">
                                <img src={item.img} alt="" width="40px" height="40px"/>
                                <div className="d-flex flex-column  justify-content-center" style={{marginLeft:'3rem'}}>
                                    <h5 style={{fontSize:'18px'}}>{item.topic}</h5>
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

export default SelectChainDestinationModal;