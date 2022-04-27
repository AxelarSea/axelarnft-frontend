import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Modal } from "react-bootstrap";


import ethLogo from '../../assets/images/icon/eth-logo.png'
import moonbeamLogo from '../../assets/images/icon/moonbeam-logo.png'
import polygonLogo from '../../assets/images/icon/polygon-logo.png'
import avaxLogo from '../../assets/images/icon/avax-logo.png'
import fantomLogo from '../../assets/images/icon/fantom-logo.png'

const SelectChainDestinationModal = (props) => {

    const [data,setData] = useState([
        {
            topic:'Polygon',
            img:polygonLogo,
            chainId: 80001,
            select:false
        },
        {
            topic:'Moonbeam',
            img:moonbeamLogo,
            chainId: 1287,
            select:false

        },
        {
            topic:'Fantom',
            img:fantomLogo,
            chainId: 4002,
            select:false

        },
        {
            topic:'ETH',
            img:ethLogo,
            chainId: 3,
            select:false
        },
        {
            topic:'Avalanche',
            img:avaxLogo,
            chainId: 43113,
            select:false
     
        },
    ])

    const handleChangeChain = (topic,chainId,img,index) => {
        props.onChange(topic, chainId, img)

        // props.setDestinationNftChain(topic)
        // props.setDestinationNftChainImg(img)
        // props.setSelectChainDestinationShow(false)

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
                <li className="list-group-item list-group-item-action justify-content-between" style={{border:'none'}}>
                    <div className="d-flex align-items-center justify-content-between">
                            <div className="d-flex align-items-center justify-content-center">
                                <img src={item.img} alt="" width="25" height="25"/>
                                <div className="d-flex flex-column  justify-content-center" style={{marginLeft:'3rem'}}>
                                    <h5 style={{fontSize:'16px'}}>{item.topic}</h5>
                                    <p style={{color:'grey' , fontSize:'12px'}}>{item.detail}</p>
                                </div>
                            </div>
                    </div>
                    <h5 style={{fontSize:'16px' , fontWeight:'600' , cursor:'pointer'}} onClick={() => handleChangeChain(item.topic, item.chainId, item.img, index)}>{item.select ? 'Selected' : 'Select'}</h5>

                </li>
            ))}
            </ul>
            
        </div>
    </Modal>
    )
}

export default SelectChainDestinationModal;