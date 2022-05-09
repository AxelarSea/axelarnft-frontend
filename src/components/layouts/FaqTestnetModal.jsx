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
                key: "1",
                title: 'What can I do with the testnet version?',
                text: <p>Users can mint and sell NFTs from five EVM chains, using MetaMask. In order to do so, just connect MetaMask to the website. NO NEED TO CONNECT TERRA STATION OR KEPLR. For the buying, due to the struggling performance of Axelar Network, you can`t perform a buy right now. We will update again if it`s back online!</p>
            },
            {
                key: "2",
                title: 'What do I need to do to get the "Testnet Testers" Role?',
                text: <p>Mint NFT on at least 3 out of 5 supported EVM chains. Place at least one NFT on sell. DON'T NEED TO BUY. Complete the tasks and claim the role in our Discord before Sun 24 Apr 23:59 (UTC)</p>
            },
            {
                key: "3",
                title: 'How do I know if I qualify for the “Testnet Tester” role?',
                text: <a href="https://medium.com/@axelarsea/how-to-claim-the-testnet-tester-role-9818f195d8ef "  target='_blank' class="link-secondary" style={{fontSize:'1.5rem'}}>How to claim the “Testnet Tester” role.</a>
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
            {
                key: "9",
                title: 'I had so many issues the last time that, despite the fact that the transactions had already been confirmed, the NFT did not appear. Is this issue resolved?',
                text: <p>YES! We`ve built a new database infrastructure that, fingers crossed, will completely eliminate this problem. Every mint, sell, buy, and bridge should be accurately reflected!</p>
            },
            {
                key: "10",
                title: 'Why does it take so long to bridge an NFT?',
                text: <p>The required time is determined by several factors, including congestion on the source and destination networks, as well as the procedure through Axelar Network threshold signature schemes. We are collaborating with related parties to reduce processing time.</p>
            },
            {
                key: "11",
                title: 'Why does it require such a high gas fee?',
                text: <p>This problem usually occurs when users attempt to send an NFT to the Ethereum chain. Users must cover the fees on the destination chain (by paying from the source chain), and the gas fee on the Ethereum chain is simply absurdly high. Try changing the destination chain to something other than Ethereum.</p>
            },
            {
                key: "12",
                title: 'Why does it take significantly longer time trying to bridge an NFT from Polygon chain?',
                text: <p>Polygon Mumbai Testnet has quite a unique infrastructure that require a large amount of blocks to confirm. This structure does not exist on Polygon Mainnet so this issue will not arise when AxelarSea is released.</p>
            },
            {
                key: "13",
                title: ' Why can`t I see some of my NFTs in the eligible list to bridge?',
                text: <p>You can only bridge an NFT that is not listed for sale.</p>
            },
        ]
    )

   

    return(
    <Modal show={props.onShow} onHide={props.onHide} size="xl">
        <Modal.Header closeButton></Modal.Header>
        <div className="modal-body space-y-20 pd-10">
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