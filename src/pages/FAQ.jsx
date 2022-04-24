import React , { useState } from 'react';
import { Link } from 'react-router-dom'
import HeaderStyle2 from '../components/header/HeaderStyle2';
import Footer from '../components/footer/Footer';
import { Accordion } from 'react-bootstrap-accordion'

const FAQ = () => {
    const [data] = useState(
        [
            {   key: "0",
                show: "show",
                title: 'What is AxelarSea?',
                text: <p>AxelarSea is a one-stop interoperable NFT marketplace across chains where buyers can pay for an NFT on any supported chain using a token from a completely different chain, and sellers can list an NFT for sale on any supported chain while receiving payments on another chain. That is why, in the Testnet version, we let buyers buy an NFT that is hosted on EVM chains while paying directly from Terra. Users don't need to do any asset transfer</p>
            },
            {
                key: "1",
                title: 'What can I do with the testnet version?',
                text: <p>Users can mint and sell NFTs from five EVM chains, using MetaMask. In order to do so, just connect MetaMask to the website. NO NEED TO CONNECT TERRA STATION OR KEPLR. For the buying, due to the struggling performance of Axelar Network, you can`t perform a buy right now. We will update again if it`s back online!</p>
            },
            {
                key: "2",
                title: 'What do I need to do to get the "Testnet Testers" Role?',
                text: <p>Mint at least one NFT on ALL five EVM chains. Place at least one NFT on sell. DON`T NEED TO BUY.</p>
            },
            {
                key: "3",
                title: 'How do I know if I qualify for the “Testnet Tester” role?',
                text: <a href="https://medium.com/@axelarsea/how-to-claim-the-testnet-tester-role-9818f195d8ef "  target='_blank' class="link-secondary" style={{fontSize:'1.5rem'}}>How to claim the “Testnet Tester” role.</a>
            },
            {
                key: "4",
                title: 'Mobile support?',
                text: <p>Yes - for minting and selling through MetaMask. No - for buying through Terra Station or Keplr. In the future when buying is back online, please perform the buying from PC only.</p>
            },
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
    return (
        <div>
            <HeaderStyle2 />
            <section className="flat-title-page inner">
                <div className="overlay"></div>
                <div className="themesflat-container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="page-title-heading mg-bt-12">
                                <h1 className="heading text-center">FAQ</h1>
                            </div>
                            {/* <div className="breadcrumbs style2">
                                <ul>
                                    <li><Link to="/">Home</Link></li>
                                    <li><Link to="#">Pages</Link></li>
                                    <li>FAQ</li>
                                </ul>
                            </div> */}
                        </div>
                    </div>
                </div>                    
            </section>
            <section className="tf-section wrap-accordion">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h2 className="tf-title-heading ct style-2 fs-30 mg-bt-10">
                                Frequently Asked Questions
                            </h2>
                            {/* <h5 className="sub-title help-center mg-bt-32 ">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum obcaecati dignissimos quae quo ad iste ipsum officiis deleniti asperiores sit.
                            </h5> */}
                        </div>
                        <div className="col-md-12">
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
                </div>
            </section>
            <Footer />
        </div>
    );
}

export default FAQ;
