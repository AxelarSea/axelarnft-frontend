import React from 'react';
import { Link } from 'react-router-dom'
import icon1 from '../../../assets/images/icon/feature-1.svg'
import icon2 from '../../../assets/images/icon/feature-4.svg'
import icon3 from '../../../assets/images/icon/feature-5.svg'
import icon4 from '../../../assets/images/icon/feature-6.svg'
import icon5 from '../../../assets/images/icon/feature-7.svg'
import icon6 from '../../../assets/images/icon/feature-8.svg'
import axelarlogo from '../../../assets/images/logo/axelar.svg'
import cd from '../../../assets/images/logo/ContributionDAO.svg'
import axelar from '../../../assets/images/logo/axelarLogo.png'
import cdao from '../../../assets/images/logo/cdaoLogo.png'
import rango from '../../../assets/images/logo/rangoLogo.png'
import speedboat from '../../../assets/images/logo/speedboatLogo.png'
import LogoSupport from '../../../assets/images/logo/Logo-Support.svg';
import WeSupport from '../../../assets/images/logo/We-Support.svg';
import fantom from '../../../assets/images/logo/fantom-logo.svg';
import polygon from '../../../assets/images/logo/polygon-logo.svg';
import ethereum from '../../../assets/images/logo/eth-logo.svg';
import terra from '../../../assets/images/logo/terra-logo.svg';
import moonbeam from '../../../assets/images/logo/moonbeam-logo.svg';
import avalanche from '../../../assets/images/logo/avax-logo.svg';

const Create = () => {
    const data = [
        {
            title: "Purchase From Any Chain",
            description: "Buyers can purchase an NFT with any token from any chain. They are no longer required to manually move their asset across chains. Simply click buy, and AxelarSea will take care of the rest!",
            icon : icon1,
            colorbg : ""
        },
        {
            title: "Manage Your NFTs Sales",
            description: "Check all your NFT sales from multiple chains. Make price adjustments, reconfigures or cancels the sale from a single place. You choose the chain where you want to receive your payment!",
            icon : icon2,
            colorbg : "",
        },
        {
            title: "Bridge NFTs while maintaining metadata",
            description: "AxelarSea's NFT bridge offers a novel solution for preserving metadata of bridged NFT, such as collection id and other stats. This enables DApps on the destination chain to trace it back and verify the authenticity of the NFT on the source chain.",
            icon : icon3,
            colorbg : "",
        },
        {
            title: "NFT x Decentralized Applications",
            description: "Due to AxelarSea Bridge's metadata-preserving capabilities, NFT can be fully used in other industries such as DeFi and GameFi. Bridged NFTs, for example, can be used as collateral, whereas NFT game characters can move freely from one chain to the next.",
            icon : icon4,
            colorbg : "",
        },
        {
            title: "Lower Trading Fees",
            description: "Trading and gas fees add up over time for seasoned traders, diminishing profits. NFTs can now be bridged to a chain with lower fees while maintaining the same collection.",
            icon : icon5,
            colorbg : "",
        },
        {
            title: "Cross-Chain Collection Verification",
            description: "Wondering if the collection you're about to buy is authentic? No longer! The NFT bridge from AxelarSea allows NFT collections to be verified across multiple chains at the same time, eliminating all fakes",
            icon : icon6,
            colorbg : "",
        },
    ]
    return (
        <section className="tf-box-icon create tf-section bg-home-3">
            <div className="themesflat-container">
                <div className="d-flex flex-column justify-content-center">
                    <h3 className="heading-fill mg-bt-16 d-flex justify-content-center">One-stop Interoperable NFT Marketplace</h3>
                    <h2 className="tf-title text-left pb-15 d-flex justify-content-center">Discover & Sell NFTs From Any Chain</h2>
                    <div className="content d-flex justify-content-center">                    
                        <p className="content" style={{width:'80%', marginBottom:'4rem'}}>Interoperability has been a fundamental issue in the blockchain ecosystem since its inception. This includes the NFT market where buyers and sellers are 
                            limited by the difficulty of moving assets across chains. AxelarSea's goal is to provide solutions that facilitates buyers in making a purchase using tokens from any chain and sellers in receiving the payment on any chain and tracking their sales across multiple chains.
                        </p>
                    </div>   
                </div>
                <div className="row d-flex justify-content-center">
                    {
                        data.map((item , index) => (
                            <CreateItem key={index} item={item} />
                        ))
                    }
                </div>
                <div className='d-flex flex-column align-items-center justify-content-center supported-by'>
                    <h2 style={{marginBottom:'4rem',marginTop:'4rem'}}>Partner</h2>
                    <div className="row d-flex justify-content-center align-items-center">
                        <div className='col-lg-3 col-md-6 col-12'>
                            <img src={axelar} style={{padding:'1rem'}} alt="" />                                                                                                                                          
                        </div>
                        <div className='col-lg-3 col-md-6 col-12 center'>
                            <img src={rango} style={{padding:'1rem',width:'80%'}} alt="" />                                                                                                                                          
                        </div>
                        <div className='col-lg-3 col-md-6 col-12'>
                            <img src={cdao} style={{padding:'1rem'}} alt="" />                                                                                                                                          
                        </div>
                        <div className='col-lg-3 col-md-6 col-12'>
                            <img src={speedboat} style={{padding:'1rem'}} alt="" />                                                                                                                                          
                        </div>
                    </div>
                    {/* <div className='col-lg-4 col-md-6 col-12' style={{marginBottom:'6rem'}}>
                        <img src={axelar} style={{width:'20%',padding:'4rem'}} alt="" />
                        <img src={rango} style={{width:'16%',padding:'4rem'}} alt="" />
                        <img src={cdao} style={{width:'20%',padding:'4rem'}} alt="" />
                        <img src={speedboat} style={{width:'20%',padding:'4rem'}} alt="" />
                    </div> */}
                </div>                     
            </div>
            
        </section>
    );
}

const CreateItem = props => (
    <div className='col-lg-4 col-md-6 col-12'>
        <div className="sc-box-icon mg-bt-16">
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
