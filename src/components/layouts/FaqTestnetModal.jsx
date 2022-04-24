import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Modal } from "react-bootstrap";
import FAQ from "../../pages/FAQ";
import { Accordion } from 'react-bootstrap-accordion'



import ethLogo from '../../assets/images/icon/eth-logo.png'
import moonbeamLogo from '../../assets/images/icon/moonbeam-logo.png'
import polygonLogo from '../../assets/images/icon/polygon-logo.png'
import avaxLogo from '../../assets/images/icon/avax-logo.png'
import fantomLogo from '../../assets/images/icon/fantom-logo.png'

const FaqTestnetModal = (props) => {

    const [data] = useState(
        [
           
            {
                key: "5",
                title: 'Why can`t I buy an NFT?',
                text: <p>There could be several factors involved.
                            <ul className='pd-10'>
                                <li className='d-flex align-items-center'><a style={{marginRight:'1rem',fontSize:'30px'}}>{'\u2022'}</a>Make sure that the NFT has a price greater than 10 UST/0.1 LUNA.</li>
                                <li className='d-flex align-items-center'><a style={{marginRight:'1rem',fontSize:'30px'}}>{'\u2022'}</a>After clicking buy, it will take a bit of time (at most ~1 min) for TerraStation/Keplr to pop-up. This is because we use Axelar Network to check information across chains.</li>
                                <li className='d-flex align-items-center'><a style={{marginRight:'1rem',fontSize:'30px'}}>{'\u2022'}</a>After confirming on TerrStation/Keplr, you would have a decent amount of time before MetaMask comes up (at most ~5 min). This is because we are transferring the asset across chains through Axelar Network.</li>
                                <li className='d-flex align-items-center'><a style={{marginRight:'1rem',fontSize:'30px'}}>{'\u2022'}</a>Make sure that you keep the browser opened.</li>
                            </ul>
                        </p>
            },
            {
                key: "6",
                title: 'I minted successfully but NFT isn`t showing.',
                text: <p>There is an overload of transaction. Try again later (more than 10 minutes) with increased gas price/limit. Minting again in quick succession will NOT help.</p>
            },
            {
                key: "7",
                title: 'I`ve finished all the tasks but the role is not given, yet.',
                text: <p>Click "Join" button of Guild.xyz bot in #verify channel in our Discord again.</p>
            },
            {
                key: "8",
                title: 'The Guild.xyz bot is not responding! It`s accepting my request.',
                text: <p>Open a ticket in our Discord.</p>
            },
        ]
    )

   

    return(
    <Modal show={props.onShow} onHide={props.onHide}>
        <Modal.Header closeButton></Modal.Header>
        <div className="modal-body space-y-20 pd-40">
            <div className="col-md-12">
            <h2 className="tf-title-heading ct style-2 fs-30 mg-bt-10">
                                Frequently Asked Questions
                            </h2>
                <div className="flat-accordion2">
                    {
                        data.map((item,index) => (
                            <Accordion key={index} title={item.title} >
                                {item.text}
                            </Accordion>
                        ))
                    }                             
                </div>
            </div>
        </div>
    </Modal>
    )
}

export default FaqTestnetModal;