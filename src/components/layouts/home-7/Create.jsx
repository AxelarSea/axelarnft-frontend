import React from 'react';
import { Link } from 'react-router-dom'
import icon1 from '../../../assets/images/icon/Wallet.png'
import icon2 from '../../../assets/images/icon/Category.png'
import icon3 from '../../../assets/images/icon/Image2.png'
import icon4 from '../../../assets/images/icon/Bookmark.png'
import axelarlogo from '../../../assets/images/logo/axelar.svg'
import cd from '../../../assets/images/logo/ContributionDAO.svg'
import LogoSupport from '../../../assets/images/logo/Logo-Support.svg';
import WeSupport from '../../../assets/images/logo/We-Support.svg';
import bgsupported from '../../../assets/images/backgroup-secsion/bgsupported.png'
import { urlToHttpOptions } from 'url';

const Create = () => {
    const data = [
        {
            title: "Interoperable NFTs Browsing",
            description: "Simply enter a keyword or a collection's name. AxelarNFT allows you to search for NFTs from multiple chains that match a keyword. Too many? Too few? You can filter the shown NFTs based on their chains.",
            icon : icon3,
            colorbg : "icon-color4"
        },
        {
            title: "Interoperable NFTs Selling",
            description: "Choose between auctions and fixed-Price listings. You choose the chain where you want to receive your payment!",
            icon : icon2,
            colorbg : "icon-color4"
        },
        {
            title: "Purchase From Any Chain",
            description: "Buyers can purchase an NFT with any token from any chain. They are no longer required to manually move their asset across chains. Simply click buy, and AxelarNFT will take care of the rest!",
            icon : icon1,
            colorbg : "icon-color4"
        },
        {
            title: "Manage Your Sales",
            description: "Check all your NFT sales from multiple chains. Make Price adjustments, reconfigures or cancels the sale from a single place",
            icon : icon4,
            colorbg : "icon-color4"
        },
    ]
    return (
        <section className=" tf-box-icon live-auctions tf-section style7 bg-style">
        <div className="wrap-heading2 themesflat-container">
            <div className="row" style={{paddingTop:'6rem'}}>
                <div className="col-xl-4 col-lg-12 col-md-12">
                    <div className="heading-live-auctions style2 mg-t-3 mg-bt-22">
                        <h3 className="heading-fill mg-bt-16">One-stop Interoperable NFT Marketplace</h3>
                        <h2 className="tf-title text-left pb-15">Discover & Sell NFTs From Any Chain</h2>                    
                        <p className="content">Interoperability has been a fundamental issue in the blockchain ecosystem since its inception. This includes the NFT market where buyers and sellers are 
                        limited by the difficulty of moving assets across chains. AxelarNFT's goal is to provide solutions that facilitates buyers in making a purchase using tokens from any chain and sellers in receiving the payment on any chain and tracking their sales across multiple chains.
                        </p>     
                    </div>
                </div>                          
                <div className="col-xl-8 col-lg-12 col-md-12">
                    <div className="sc-box-icon-inner style3">
                        {
                            data.map((item,index) => (
                                <CreateItem key={index} item={item} />
                            ))
                        }
                    </div>  
                </div> 
            </div>
            <div className='d-flex flex-column align-items-center justify-content-center supported-by'>
                <h2 style={{marginBottom:'4rem',marginTop:'4rem'}}>Supported by</h2>
                <div className='flex-column align-items-center justify-content-center axelarNFT-supported' style={{marginBottom:'6rem'}}>
                    <img src={axelarlogo} alt="" style={{marginRight:'2rem'}}/>
                    <img src={cd} alt="" style={{marginLeft:'2rem'}}/>
                </div>
            </div>                 
        </div>
        <div className='tf-section d-flex flex-column align-items-center justify-content-center' style={{marginBottom:'-2rem',backgroundColor:'#F8F8F8'}}>
                <img src={WeSupport} style={{marginBottom:'4rem'}} alt="" width="137px" height="33px" />
                <img src={LogoSupport} alt="" />
        </div>
    </section>
    );
}

const CreateItem = props => (
    <div className="sc-box-icon">
        <div className="image">
            <div className={`icon-create ${props.item.colorbg}`}>
                <img src={props.item.icon} alt="" />
            </div>                                                                           
        </div>
        <div className="wrap-box">
            <h3 className="heading"><Link to="/wallet-connect">{props.item.title}</Link></h3>
            <p className="content">{props.item.description}</p>
        </div>
    </div>
)

export default Create;
