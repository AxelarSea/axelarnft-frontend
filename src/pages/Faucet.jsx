import React , { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';

import img1 from '../assets/images/icon/eth-facuet.png'
import img2 from '../assets/images/icon/avax-facuet.png'
import img3 from '../assets/images/icon/fantom-facuet.png'
import img4 from '../assets/images/icon/terra-facuet.png'
import img5 from '../assets/images/icon/moonbeam-facuet.png'
import img6 from '../assets/images/icon/polygon-facuet.png'
import img7 from '../assets/images/icon/connect-7.png'
import img8 from '../assets/images/icon/connect-8.png'
import HeaderStyle2 from '../components/header/HeaderStyle2';

const Faucet = () => {

    const goSite = (site) =>{
        window.open(site,'_blank')
    }

    const [data] = useState(
        [
            {
                img: img1,
                title: 'Ropsten Testnet Faucet',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
                website:'https://faucet.egorfine.com/'

            },
            {
                img: img2,
                title: 'AVAX Fuji Testnet Faucet',
                description: ' Dolor lacinia? Donec nulla, deleniti, dis arcu pharetra maecenas dapibus ante nemo! Wisi?',
                website:'https://faucet.avax-test.network/'

            },
            {
                img: img3,
                title: 'Testnet Opera Faucet',
                description: 'Potenti eleifend faucibus quo vero nibh netus suspendisse unde? Consectetuer aspernatur',
                website:'https://faucet.fantom.network/'
                
            },
            {
                img: img5,
                title: 'Moonbeam Faucet',
                description: 'Sollicitudin iure conubia vivamus habitasse aptent, eligendi deserunt excepteur tellus non',
                website:'https://axelarsea.gitbook.io/axelarsea-docs/testnet/funding-testnet-wallet/moonbeam-alpha-testnet'
            },
            {
                img: img6,
                title: 'Polygon Faucet',
                description: 'Purus irure lacinia eiusmod inventore bibendum habitant potenti non sint rem! Felis, asper',
                website:'https://faucet.polygon.technology/'
            },
            // {
            //     img: img4,
            //     title: 'Terra Testnet Faucet',
            //     description: 'Potenti eleifend faucibus quo vero nibh netus suspendisse unde? Consectetuer aspernatur',
            //     website:'https://faucet.terra.money/'
            // },
            // {
            //     img: img7,
            //     title: 'Kaikas',
            //     description: 'Varius culpa, aspernatur accusantium? Corporis rhoncus, voluptatibus incididunt, velit '
            // },
            // {
            //     img: img8,
            //     title: 'Torus',
            //     description: ' Soluta fuga nihil, mollitia, ad reprehenderit qui viverra culpa posuere labore inventore'
            // },
            
        ]
    )
    return (
        <div>
            <HeaderStyle2 />
            <section className="flat-title-page inner">
                <div className="overlay"></div>
                <div className="themesflat-container">
                    <div className="row">
                        <div className="col-md-12" style={{marginTop:'6rem', marginBottom:'2rem'}}>
                            <div className="page-title-heading mg-bt-12" >
                                <h1 className="heading text-center">Faucet</h1>
                            </div>
                            {/* <div className="breadcrumbs style2">
                                <ul>
                                    <li><Link to="/">Home</Link></li>
                                    <li><Link to="#">Pages</Link></li>
                                    <li>Faucet</li>
                                </ul>
                            </div> */}
                        </div>
                    </div>
                </div>                    
            </section>
            <div className="tf-connect-wallet tf-section">
                <div className="themesflat-container">
                    <div className="row">
                        {/* <div className="col-12">
                            <h2 className="tf-title-heading ct style-2 mg-bt-12">
                                Connect Your Wallet
                            </h2>
                            <h5 className="sub-title ct style-1 pad-400">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum obcaecati dignissimos quae quo ad iste ipsum officiis deleniti asperiores sit.
                            </h5>
                        </div> */}
                        <div className="col-md-12">
                            <div className="sc-box-icon-inner style-2">
                                {
                                    //onclick="javascript:window.location.href='link1.html'
                                    data.map((item,index) => (
                                        
                                        <div key={index} className="sc-box-icon d-flex flex-column align-items-center justify-content-center " style={{cursor:'pointer'}} target="_blank" onClick={() => goSite(item.website)}>
                                            <div className="img">
                                                <img src={item.img} alt="AxelarSea" />
                                            </div>
                                            <h4 className="heading"><a href={item.website} target="_blank">{item.title}</a> </h4>
                                            
                                         </div>
                                    
                                    ))
                                }
                                <div className="sc-box-icon d-flex flex-column align-items-center justify-content-center " style={{cursor:'not-allowed', opacity:'0.6'}}>
                                    <div className="img">
                                        <img src={img4} alt="AxelarSea"/>
                                    </div>
                                    <h4 className="heading"><a>Terra Testnet Faucet</a> </h4>
                                    <p className="content" style={{position:'absolute', marginTop:'12rem'}}>Suspended</p>
                                </div>
                            </div>  
                        </div>    
                    </div>              
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Faucet;
