import React from 'react';
import { Link } from 'react-router-dom'
import icon1 from '../../../assets/images/icon/feature-1.svg'
import icon2 from '../../../assets/images/icon/feature-2.svg'
import icon3 from '../../../assets/images/icon/feature-3.svg'


const Create = () => {
    const data = [
        {
            title: "One-Click Payment Gateway",
            description: "Both sides of NFT trades - making payment and receiving compensation - can be completed in a single step from any chain using any token.",
            icon : icon1,
            colorbg : ""
        },
        {
            title: "One-stop NFT bazaar",
            description: "A single place where NFTs from all chains can be sold, resulting in a wide range of options for shoppers.",
            icon : icon2,
            colorbg : "",
        },
        {
            title: "NFT Bridge",
            description: "Bridge NFT to unlock its potential by combining its utilization with DeFi & GameFi or simply enjoying lower trading fees.",
            icon : icon3,
            colorbg : "",
        },
    ]
    return (
        <section className="tf-box-icon create tf-section bg-home-3" style={{paddingBottom:'36px'}}>
            <div className="themesflat-container" style={{marginBottom:'4rem'}}>
                <div className="row d-flex justify-content-center">
                    {
                        data.map((item , index) => (
                            <CreateItem key={index} item={item} />
                        ))
                    }
                </div>                 
            </div>
        </section>
    );
}

const CreateItem = props => (
    <div className='col-lg-4 col-md-6 col-12'>
        <div className="sc-box-icon">
        <div className="image center">
            <div className={`icon-create ${props.item.colorbg}`}>
                    <img src={props.item.icon} alt="" />
                </div>                                                                           
            </div>
        <h3 className="heading"><Link to="/wallet-connect">{props.item.title}</Link></h3>
        <p className="content">{props.item.description}</p>
    </div>
    </div>
    
)

export default Create;
