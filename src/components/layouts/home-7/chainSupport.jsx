import React , { useState } from 'react';
import axelarlogo from '../../../assets/images/logo/axelar.svg'
import cd from '../../../assets/images/logo/ContributionDAO.svg'
import LogoSupport from '../../../assets/images/logo/Logo-Support.svg';
import WeSupport from '../../../assets/images/logo/We-Support.svg';
import fantom from '../../../assets/images/logo/fantom-logo.svg';
import polygon from '../../../assets/images/logo/polygon-logo.svg';
import ethereum from '../../../assets/images/logo/eth-logo.svg';
import terra from '../../../assets/images/logo/terra-logo.svg';
import moonbeam from '../../../assets/images/logo/moonbeam-logo.svg';
import avalanche from '../../../assets/images/logo/avax-logo.svg';



const PopularCollection = () => {
    return (
        <section className="tf-section2 live-auctions style4 home4 live-auctions-style7" >
            <div className="themesflat-container">
                <div className="row">
                    <div className="col-box-12">
                        <div className="heading-live-auctions align-items-center justify-content-center"> 
                            <div className='tf-section d-flex flex-column align-items-center justify-content-center chain-support' style={{marginBottom:'0rem',backgroundColor:'#F8F8F8'}}>
                            <img src={WeSupport} style={{marginBottom:'4rem'}} alt="" width="137px" height="33px" />
                                <div className='flex-column align-items-center justify-content-center axelarNFT-supported' style={{marginBottom:'6rem'}}>
                                    <img src={fantom} alt='' width='160px'/>
                                    <img src={polygon} alt='' width='160px'/>
                                    <img src={ethereum} alt='' width='160px'/>
                                    <img src={terra} alt='' width='160px'/>
                                    <img src={moonbeam} alt='' width='160px'/>
                                    <img src={avalanche} alt='' width='160px'/>
                                </div>
                            </div>                 
                        </div>
                    </div>
                </div>
            </div>
    </section>
    );
}


export default PopularCollection;
