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
            select:false,
        },
        // {
        //     topic:'Moonbeam (Currently not supported)',
        //     img:moonbeamLogo,
        //     chainId: 1287,
        //     select:false,

        // },
        {
            topic:'Fantom',
            img:fantomLogo,
            chainId: 4002,
            select:false,
        },
        // {
        //     topic:'ETH (Currently not supported)',
        //     img:ethLogo,
        //     chainId: 3,
        //     select:false,
        // },
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
                <li className="list-group-item list-group-item-action justify-content-between" style={{border:'none', cursor:'pointer'}} onClick={() => handleChangeChain(item.topic, item.chainId, item.img ,index)} >
                    <div className="d-flex align-items-center justify-content-between">
                            <div className="d-flex align-items-center justify-content-center">
                                <img src={item.img} alt="" width="25" height="25"/>
                                <div className="d-flex flex-column  justify-content-center" style={{marginLeft:'3rem'}}>
                                    <h5 style={{fontSize:'16px'}}>{item.topic}</h5>
                                    <p style={{color:'grey' , fontSize:'12px'}}>{item.detail}</p>
                                </div>
                            </div>
                    </div>
                    {/* <h5 style={{fontSize:'16px' , fontWeight:'600' , cursor:'pointer'}} onClick={() => handleChangeChain(item.topic , item.img ,index)}>{item.select ? 'Selected' : 'Select'}</h5> */}

                </li>
            ))}
                <li className="list-group-item list-group-item-action justify-content-between" style={{border:'none', opacity:'0.6',cursor:'not-allowed'}}>
                    <div className="d-flex align-items-center justify-content-between">
                            <div className="d-flex align-items-center justify-content-center">
                                <img src={ethLogo} alt="" width="25" height="25"/>
                                <div className="d-flex flex-column  justify-content-center" style={{marginLeft:'3rem'}}>
                                    <h5 style={{fontSize:'16px'}}>ETH (Currently not supported)</h5>
                                </div>
                            </div>
                    </div>
                </li>
                <li className="list-group-item list-group-item-action justify-content-between" style={{border:'none', opacity:'0.6', cursor:'not-allowed'}}>
                    <div className="d-flex align-items-center justify-content-between">
                            <div className="d-flex align-items-center justify-content-center">
                                <img src={moonbeamLogo} alt="" width="25" height="25"/>
                                <div className="d-flex flex-column  justify-content-center" style={{marginLeft:'3rem'}}>
                                    <h5 style={{fontSize:'16px'}}>Moonbeam (Currently not supported)</h5>
                                </div>
                            </div>
                    </div>
                </li>
            </ul>
            
        </div>
    </Modal>
    )
}

export default SelectChainDestinationModal;