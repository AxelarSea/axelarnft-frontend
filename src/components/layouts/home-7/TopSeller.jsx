import React , { useState } from 'react';
import { Link } from 'react-router-dom'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import img1 from '../../../assets/images/avatar/avt-31.jpg'
import img2 from '../../../assets/images/avatar/avata_profile.jpg'
import img3 from '../../../assets/images/avatar/avt-4.jpg'
import img4 from '../../../assets/images/avatar/avt-3.jpg'
import img5 from '../../../assets/images/avatar/avt-5.jpg'
import img6 from '../../../assets/images/avatar/avt-8.jpg'
import img7 from '../../../assets/images/avatar/avt-6.jpg'
import img8 from '../../../assets/images/avatar/avt-9.jpg'
import img9 from '../../../assets/images/avatar/avt-7.jpg'
import img10 from '../../../assets/images/avatar/avt-10.jpg'
import img11 from '../../../assets/images/avatar/avt-32.jpg'
import img12 from '../../../assets/images/avatar/avt-33.jpg'

import imgAuthor from '../../../assets/images/avatar/img-author1.png'
import imgAuthor2 from '../../../assets/images/avatar/img-author3.png'
import imgAuthor3 from '../../../assets/images/avatar/img-author2.png'
import imgAuthor4 from '../../../assets/images/avatar/img-author4.png'

const TopSeller = () => {
    const [dataTopSellerTab] = useState(
        [
            {
                title: '24 Hours',
            },
            {
                title: 'Week',
            },
            {
                title: 'Month',
            },
        ]
    )
    const [dataTopSellerPanel] = useState(
        [
            {
                id: 1, //24 Hours
                dataTopSellerContent: [
                    {
                        img: imgAuthor,
                        name: 'XelarGEN2',
                        mail: '0xF5ab…A754',
                        top: '1',
                        Price: '$32,893.53'
                    },
                    {
                        img: imgAuthor2,
                        name: 'INKstyle',
                        mail: '0xs4dfb…A141',
                        top: '2',
                        Price: '$28,425.24'
                    },
                    {
                        img: imgAuthor3,
                        name: 'PlantanimalNFT',
                        mail: '0xG341…A151',
                        top: '3',
                        Price: '$25,893.53'
                    },
                    {
                        img: imgAuthor4,
                        name: 'AxelarSea',
                        mail: '0xG341…Aw24',
                        top: '4',
                        Price: '$20,123.22'
                    },
                    // {
                    //     img: img5,
                    //     name: 'Windsor Lane',
                    //     mail: '@windsorlandhh',
                    //     top: '2',
                    //     Price: '120.7 ETH'
                    // },
                    // {
                    //     img: img6,
                    //     name: 'Windsor Lane',
                    //     mail: '@windsorlandhh',
                    //     top: '5',
                    //     Price: '120.7 ETH'
                    // },
                    // {
                    //     img: img7,
                    //     name: 'Windsor Lane',
                    //     mail: '@windsorlandhh',
                    //     top: '8',
                    //     Price: '120.7 ETH'
                    // },
                    // {
                    //     img: img8,
                    //     name: 'Windsor Lane',
                    //     mail: '@windsorlandhh',
                    //     top: '11',
                    //     Price: '120.7 ETH'
                    // },
                    // {
                    //     img: img9,
                    //     name: 'Windsor Lane',
                    //     mail: '@windsorlandhh',
                    //     top: '3',
                    //     Price: '120.7 ETH'
                    // },
                    // {
                    //     img: img10,
                    //     name: 'Windsor Lane',
                    //     mail: '@windsorlandhh',
                    //     top: '6',
                    //     Price: '120.7 ETH'
                    // },
                    // {
                    //     img: img11,
                    //     name: 'Windsor Lane',
                    //     mail: '@windsorlandhh',
                    //     top: '9',
                    //     Price: '120.7 ETH'
                    // },
                    // {
                    //     img: img12,
                    //     name: 'Windsor Lane',
                    //     mail: '@windsorlandhh',
                    //     top: '12',
                    //     Price: '120.7 ETH'
                    // },
                ]
            },
            {
                id: 2,
                dataTopSellerContent: [
                    {
                        img: imgAuthor,
                        name: 'XelarGEN2',
                        mail: '0xF5ab…A754',
                        top: '1',
                        Price: '$240,163.92'
                    },
                    {
                        img: imgAuthor3,
                        name: 'PlantanimalNFT',
                        mail: '0xG341…A151',
                        top: '2',
                        Price: '$196,749.11'
                    },
                    {
                        img: imgAuthor2,
                        name: 'INKstyle',
                        mail: '0xs4dfb…A141',
                        top: '3',
                        Price: '$190,405.82'
                    },
                    {
                        img: imgAuthor4,
                        name: 'AxelarNFT',
                        mail: '0xG341…Aw24',
                        top: '4',
                        Price: '$128,772.29'
                    },
                    // {
                    //     img: img5,
                    //     name: 'Windsor Lane',
                    //     mail: '@windsorlandhh',
                    //     top: '2',
                    //     Price: '120.7 ETH'
                    // },
                    // {
                    //     img: img6,
                    //     name: 'Windsor Lane',
                    //     mail: '@windsorlandhh',
                    //     top: '4',
                    //     Price: '120.7 ETH'
                    // },
                    // {
                    //     img: img7,
                    //     name: 'Windsor Lane',
                    //     mail: '@windsorlandhh',
                    //     top: '6',
                    //     Price: '120.7 ETH'
                    // },
                    // {
                    //     img: img8,
                    //     name: 'Windsor Lane',
                    //     mail: '@windsorlandhh',
                    //     top: '8',
                    //     Price: '120.7 ETH'
                    // },
                    
                ]
            },
            {
                id: 3,
                dataTopSellerContent: [
                    {
                        img: imgAuthor,
                        name: 'XelarGEN2',
                        mail: '0xF5ab…A754',
                        top: '1',
                        Price: '$863,439.41'
                    },
                    {
                        img: imgAuthor2,
                        name: 'INKstyle',
                        mail: '0xs4dfb…A141',
                        top: '2',
                        Price: '$716,853.67'
                    },
                    {
                        img: imgAuthor3,
                        name: 'PlantanimalNFT',
                        mail: '0xG341…A151',
                        top: '3',
                        Price: '$662,157.60'
                    },
                    {
                        img: imgAuthor4,
                        name: 'AxelarNFT',
                        mail: '0xG341…Aw24',
                        top: '4',
                        Price: '$493,893.88'
                    },
                    // {
                    //     img: img5,
                    //     name: 'Windsor Lane',
                    //     mail: '@windsorlandhh',
                    //     top: '2',
                    //     Price: '120.7 ETH'
                    // },
                    // {
                    //     img: img6,
                    //     name: 'Windsor Lane',
                    //     mail: '@windsorlandhh',
                    //     top: '5',
                    //     Price: '120.7 ETH'
                    // },
                    // {
                    //     img: img7,
                    //     name: 'Windsor Lane',
                    //     mail: '@windsorlandhh',
                    //     top: '8',
                    //     Price: '120.7 ETH'
                    // },
                    // {
                    //     img: img8,
                    //     name: 'Windsor Lane',
                    //     mail: '@windsorlandhh',
                    //     top: '11',
                    //     Price: '120.7 ETH'
                    // },
                    // {
                    //     img: img9,
                    //     name: 'Windsor Lane',
                    //     mail: '@windsorlandhh',
                    //     top: '3',
                    //     Price: '120.7 ETH'
                    // },
                    // {
                    //     img: img10,
                    //     name: 'Windsor Lane',
                    //     mail: '@windsorlandhh',
                    //     top: '6',
                    //     Price: '120.7 ETH'
                    // },
                    // {
                    //     img: img11,
                    //     name: 'Windsor Lane',
                    //     mail: '@windsorlandhh',
                    //     top: '9',
                    //     Price: '120.7 ETH'
                    // },
                    // {
                    //     img: img12,
                    //     name: 'Windsor Lane',
                    //     mail: '@windsorlandhh',
                    //     top: '12',
                    //     Price: '120.7 ETH'
                    // },
                ]
            },
        ]
    )
    return (
        <div>
            <section className="tf-section top-seller home5 bg-style">
                <div className="themesflat-container">
                    <div className="row">
                        <div className="col-xl-12 col-lg-12">
                            <div className="heading-live-auctions">
                                <h2 className="tf-title pb-16">
                                    Top Seller</h2>
                                {/* <a href="/Explore" className="exp style2 see-all">SEE ALL</a> */}
                            </div>
                            <div className="flat-tabs seller-tab">
                            <Tabs>
                                <TabList disabled>
                                    {
                                        dataTopSellerTab.map((item,index) =>(
                                            <Tab key={index} >{item.title}</Tab>
                                        ))
                                    }
                                </TabList>

                                <div className="content-tab mg-t-24">
                                {
                                    dataTopSellerPanel.map((item) =>(
                                        <TabPanel key={item.id} >
                                            {
                                                item.dataTopSellerContent.map((item,index) => (
                                                    <div key={index} className="col-xl-3 col-lg-4 col-md-6">
                                                        <div className="box-item">
                                                            <div className="sc-author-box style-3">
                                                            <div className="author-style2 flex">
                                                                <div className="author-avatar">
                                                                    <Link to="#">
                                                                        <img src={item.img} alt="AxelarSea" className="avatar" />
                                                                    </Link>
                                                                    <div className="badge"><i className="ripple"></i></div>
                                                                </div>
                                                                <div className="author-infor">
                                                                    <h5><Link to="#">{item.name}</Link></h5>
                                                                    <div className="tag">{item.mail}</div>
                                                                    <span className="Price">{item.Price}</span>
                                                                </div>
                                                            </div>
                                                            <div className="action">
                                                                <div className="number">#{item.top}</div>
                                                                <div className="btn-follow">
                                                                    <Link to="#">Follow</Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        </div> 
                                                    </div>
                                                ))
                                            }
                                        </TabPanel>
                                    ))
                                }
                                </div>

                            </Tabs>
                            </div> 
                        </div>
                    </div>
                </div>     
            </section>
        </div>
    );
}

export default TopSeller;
