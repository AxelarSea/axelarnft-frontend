import React , { useState , Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom'
import { Dropdown } from 'react-bootstrap';
import CardModal from '../CardModal';

import ethLogo from '../../../assets/images/icon/eth-logo.svg'
import polygonLogo from '../../../assets/images/icon/polygon-logo.svg'
import avaxLogo from '../../../assets/images/icon/avax-logo.svg'
import moonbeamLogo from '../../../assets/images/icon/moonbeam-logo.svg'
import fantomLogo from '../../../assets/images/icon/fantom-logo.svg'


import imgTodayPick from '../../../assets/images/box-item/img-today-pick-demo.svg'
import imgAuthor from '../../../assets/images/avatar/satoshi.svg'
import { crossChainTokenLabel, fetchAllListedItems } from '../../../utils/api';
import { chainLabel, maskAddress } from '../../../utils/address';

const RecentlyListed = () => {

    const [data, setData] = useState(
        [
            // {
            //     img: imgTodayPick,
            //     title: "Loading...",
            //     tags: "bsc",
            //     imgAuthor: imgAuthor,
            //     nameAuthor: ".",
            //     Price: "4.89 ETH",
            //     wishlist: "100",
            // },
            // {
            //     img: imgTodayPick,
            //     title: "Loading...",
            //     tags: "bsc",
            //     imgAuthor: imgAuthor,
            //     nameAuthor: ".",
            //     Price: "4.89 ETH",
            //     wishlist: "100",
            // },
            // {
            //     img: imgTodayPick,
            //     title: "Loading...",
            //     tags: "bsc",
            //     imgAuthor: imgAuthor,
            //     nameAuthor: ".",
            //     Price: "4.89 ETH",
            //     wishlist: "100",
            // },
            // {
            //     img: imgTodayPick,
            //     title: "Loading...",
            //     tags: "bsc",
            //     imgAuthor: imgAuthor,
            //     nameAuthor: ".",
            //     Price: "4.89 ETH",
            //     wishlist: "100",
            // },
            // {
            //     img: imgTodayPick,
            //     title: "Loading...",
            //     tags: "bsc",
            //     imgAuthor: imgAuthor,
            //     nameAuthor: ".",
            //     Price: "4.89 ETH",
            //     wishlist: "100",
            // },
            // {
            //     img: imgTodayPick,
            //     title: "Loading...",
            //     tags: "bsc",
            //     imgAuthor: imgAuthor,
            //     nameAuthor: ".",
            //     Price: "4.89 ETH",
            //     wishlist: "100",
            // },
            // {
            //     img: imgTodayPick,
            //     title: "Loading...",
            //     tags: "bsc",
            //     imgAuthor: imgAuthor,
            //     nameAuthor: ".",
            //     Price: "4.89 ETH",
            //     wishlist: "100",
            // },
            // {
            //     img: imgTodayPick,
            //     title: "Loading...",
            //     tags: "bsc",
            //     imgAuthor: imgAuthor,
            //     nameAuthor: ".",
            //     Price: "4.89 ETH",
            //     wishlist: "100",
            // },
            // {
            //     img: imgTodayPick,
            //     title: "Loading...",
            //     tags: "bsc",
            //     imgAuthor: imgAuthor,
            //     nameAuthor: ".",
            //     Price: "4.89 ETH",
            //     wishlist: "100",
            // },
            // {
            //     img: imgTodayPick,
            //     title: "Loading...",
            //     tags: "bsc",
            //     imgAuthor: imgAuthor,
            //     nameAuthor: ".",
            //     Price: "4.89 ETH",
            //     wishlist: "100",
            // },
            // {
            //     img: imgTodayPick,
            //     title: "Loading...",
            //     tags: "bsc",
            //     imgAuthor: imgAuthor,
            //     nameAuthor: ".",
            //     Price: "4.89 ETH",
            //     wishlist: "100",
            // },
            // {
            //     img: imgTodayPick,
            //     title: "Loading...",
            //     tags: "bsc",
            //     imgAuthor: imgAuthor,
            //     nameAuthor: ".",
            //     Price: "4.89 ETH",
            //     wishlist: "100",
            // },
        ]
    )

    const [allData , setAllData] = useState('')
    const [page, setPage] = useState(1)


    async function loadMore() {
        let listed = await fetchAllListedItems({ limit: 20, page });
        // listed = listed.slice(0, 20);

        const newData = listed.map(x => ({
            img: x.metadata.image,
            title: x.collection.name + " #" + x.tokenId,
            tags: chainLabel(x.collection.chainId),
            imgAuthor: '/assets/images/satoshi.svg',
            nameAuthor: x.owner,
            price: x.listPrice + " " + crossChainTokenLabel(x.collection.chainId, x.listTokenAddress),
            wishlist: "100",
            raw: x,
            chainId:x.collection.chainId,
            listPrice:x.listPrice,
            priceTag:crossChainTokenLabel(x.collection.chainId, x.listTokenAddress)
        }))

        setData([...data, ...newData]);
        setPage(page + 1)
        

    }

    

    const handleBlockchainChange = (blockChain) => {
        if(blockChain == 'AVAX'){
            const filterData = data.filter(item => item.chainId == 43113)
            setData(filterData)
        }
        if(blockChain == 'FTM'){
            const filterData = data.filter(item => item.chainId == 4002)
            setData(filterData)
        }
        if(blockChain == 'ETH'){
            const filterData = data.filter(item => item.chainId == 3)
            setData(filterData)
        }
        if(blockChain == 'MATIC'){
            const filterData = data.filter(item => item.chainId == 80001)
            setData(filterData)
        }
        if(blockChain == 'GLMR'){
            const filterData = data.filter(item => item.chainId == 1283)
            setData(filterData)
        }
        else{
            setData(data)
        }
    }

    const [visible , setVisible] = useState(20);
    const showMoreItems = () => {
        setVisible((prevValue) => prevValue + 5);
    }

    const [modalShow, setModalShow] = useState(false);

    useEffect(() => {
        loadMore();
    }, [])

    console.log(data)

    return (
        <Fragment>
            <section className="tf-section2 today-pick">
                <div className="themesflat-container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="heading-live-auctions mg-bt-21">
                                <h2 className="tf-title">
                                    Recently Listed
                                </h2>
                                <Link to="/explore" className="exp style2">EXPLORE MORE</Link>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="tf-soft">
                            <div className="soft-left">
                                <Dropdown disabled>
                                    <Dropdown.Toggle id="dropdown-basic" disabled>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M3.16992 7.44043L11.9999 12.5504L20.7699 7.47043" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                            <path d="M12 21.61V12.54" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                            <path d="M9.92965 2.48028L4.58965 5.44028C3.37965 6.11028 2.38965 7.79028 2.38965 9.17028V14.8203C2.38965 16.2003 3.37965 17.8803 4.58965 18.5503L9.92965 21.5203C11.0696 22.1503 12.9396 22.1503 14.0796 21.5203L19.4196 18.5503C20.6296 17.8803 21.6196 16.2003 21.6196 14.8203V9.17028C21.6196 7.79028 20.6296 6.11028 19.4196 5.44028L14.0796 2.47028C12.9296 1.84028 11.0696 1.84028 9.92965 2.48028Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                        <span>Blockchain</span>
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu style={{ margin: 0 }}>
                                    <Dropdown.Item href="#" onClick={() => handleBlockchainChange('AVAX')}>Avalanche</Dropdown.Item>
                                    <Dropdown.Item href="#" onClick={() => handleBlockchainChange('ETH')}>Ethereum</Dropdown.Item>
                                    <Dropdown.Item href="#" onClick={() => handleBlockchainChange('FTM')}>Fantom</Dropdown.Item>
                                    <Dropdown.Item href="#" onClick={() => handleBlockchainChange('GLMR')}>Moonbeam</Dropdown.Item>
                                    <Dropdown.Item href="#" onClick={() => handleBlockchainChange('MATIC')}>Polygon</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                                <Dropdown disabled>
                                    <Dropdown.Toggle id="dropdown-basic" disabled>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M8.67188 14.3298C8.67188 15.6198 9.66188 16.6598 10.8919 16.6598H13.4019C14.4719 16.6598 15.3419 15.7498 15.3419 14.6298C15.3419 13.4098 14.8119 12.9798 14.0219 12.6998L9.99187 11.2998C9.20187 11.0198 8.67188 10.5898 8.67188 9.36984C8.67188 8.24984 9.54187 7.33984 10.6119 7.33984H13.1219C14.3519 7.33984 15.3419 8.37984 15.3419 9.66984" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                            <path d="M12 6V18" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                            <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg> 
                                        <span>Price range</span>
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu style={{ margin: 0 }}>
                                    <Dropdown.Item href="#">
                                        <div className='sort-filter'>
                                            <span>Price: Low to High</span>
                                            <i className="fal fa-check"></i>
                                        </div></Dropdown.Item>
                                    <Dropdown.Item href="#"><div className='sort-filter'>
                                            <span>Price: High to Low</span>
                                            <i className="fal fa-check"></i>
                                        </div></Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                                {/* {/* <Dropdown>
                                    <Dropdown.Toggle id="dropdown-basic">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5 10H7C9 10 10 9 10 7V5C10 3 9 2 7 2H5C3 2 2 3 2 5V7C2 9 3 10 5 10Z" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                                            <path d="M17 10H19C21 10 22 9 22 7V5C22 3 21 2 19 2H17C15 2 14 3 14 5V7C14 9 15 10 17 10Z" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                                            <path d="M17 22H19C21 22 22 21 22 19V17C22 15 21 14 19 14H17C15 14 14 15 14 17V19C14 21 15 22 17 22Z" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                                            <path d="M5 22H7C9 22 10 21 10 19V17C10 15 9 14 7 14H5C3 14 2 15 2 17V19C2 21 3 22 5 22Z" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                        <span>Category</span>
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu style={{ margin: 0 }}>
                                    <Dropdown.Item href="#">
                                        <div className='sort-filter active'>
                                            <span><img src={imgfilter1} alt="" /> All</span>
                                            <i className="fal fa-check"></i>
                                        </div>
                                    </Dropdown.Item>
                                    <Dropdown.Item href="#">
                                        <div className='sort-filter'>
                                            <span><img src={imgfilter2} alt="" /> Art</span>
                                            <i className="fal fa-check"></i>
                                        </div>
                                    </Dropdown.Item>
                                    <Dropdown.Item href="#">
                                        <div className='sort-filter'>
                                            <span><img src={imgfilter3} alt="" /> Photography</span>
                                            <i className="fal fa-check"></i>
                                        </div>
                                    </Dropdown.Item>
                                    <Dropdown.Item href="#">
                                        <div className='sort-filter'>
                                            <span><img src={imgfilter4} alt="" /> Music</span>
                                            <i className="fal fa-check"></i>
                                        </div>
                                    </Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown> */}
                                
                                {/* <Dropdown>
                                    <Dropdown.Toggle id="dropdown-basic">
                                        <svg width="18" height="22" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M3.0901 12.2799H6.1801V19.4799C6.1801 21.1599 7.0901 21.4999 8.2001 20.2399L15.7701 11.6399C16.7001 10.5899 16.3101 9.7199 14.9001 9.7199H11.8101V2.5199C11.8101 0.839898 10.9001 0.499897 9.7901 1.7599L2.2201 10.3599C1.3001 11.4199 1.6901 12.2799 3.0901 12.2799Z" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                        <span>Sale type</span>
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu style={{ margin: 0 }}>
                                    <Dropdown.Item href="#"> Timed auction</Dropdown.Item>
                                    <Dropdown.Item href="#">Fixed Price</Dropdown.Item>
                                    <Dropdown.Item href="#">Not for sale</Dropdown.Item>
                                    <Dropdown.Item href="#">Open for offers</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown> */}
                                {/* <Dropdown>
                                    <Dropdown.Toggle id="dropdown-basic">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M3.16992 7.44043L11.9999 12.5504L20.7699 7.47043" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                            <path d="M12 21.61V12.54" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                            <path d="M9.92965 2.48028L4.58965 5.44028C3.37965 6.11028 2.38965 7.79028 2.38965 9.17028V14.8203C2.38965 16.2003 3.37965 17.8803 4.58965 18.5503L9.92965 21.5203C11.0696 22.1503 12.9396 22.1503 14.0796 21.5203L19.4196 18.5503C20.6296 17.8803 21.6196 16.2003 21.6196 14.8203V9.17028C21.6196 7.79028 20.6296 6.11028 19.4196 5.44028L14.0796 2.47028C12.9296 1.84028 11.0696 1.84028 9.92965 2.48028Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                        <span>Blockchain</span>
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu style={{ margin: 0 }}>
                                    <Dropdown.Item href="#" onClick={() => handleBlockchainChange('AVAX')}>Avalanche</Dropdown.Item>
                                    <Dropdown.Item href="#" onClick={() => handleBlockchainChange('ETH')}>Ethereum</Dropdown.Item>
                                    <Dropdown.Item href="#" onClick={() => handleBlockchainChange('FTM')}>Fantom</Dropdown.Item>
                                    <Dropdown.Item href="#" onClick={() => handleBlockchainChange('GLMR')}>Moonbeam</Dropdown.Item>
                                    <Dropdown.Item href="#" onClick={() => handleBlockchainChange('MATIC')}>Polygon</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown> */}
                            </div>
                            <div className="soft-right">
                                <Dropdown>
                                    <Dropdown.Toggle id="dropdown-basic" disabled>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M3 7H21" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                                            <path d="M6 12H18" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                                            <path d="M10 17H14" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                                        </svg>
                                        <span>Sort By: Recently Added</span>
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu style={{ margin: 0 }} >
                                    <Dropdown.Item href="#">
                                        <span>Recently added</span>
                                        <i className="fal fa-check"></i>
                                    </Dropdown.Item>
                                    <Dropdown.Item href="#" className='active'>
                                        <span>Price: Low to High</span>
                                        <i className="fal fa-check"></i></Dropdown.Item>
                                    <Dropdown.Item href="#">
                                        <span>Price: High to Low</span>
                                        <i className="fal fa-check"></i>
                                    </Dropdown.Item>
                                    <Dropdown.Item href="#">
                                        <span>Auction ending soon</span>
                                        <i className="fal fa-check"></i>
                                    </Dropdown.Item>
                                    <Dropdown.Item href="#">
                                        <span>Auction ending soon</span>
                                        <input className="check" type="checkbox" value="checkbox" name="check" />
                                    </Dropdown.Item>
                                    <Dropdown.Item href="#">
                                        <span>Show lazy minted</span>
                                        <input className="check" type="checkbox" value="checkbox" name="check" />
                                    </Dropdown.Item>
                                    {/* <Dropdown.Item href="#">
                                        <h6>Sort by</h6>
                                        <Link className="sort-filter" to="#">
                                            <span>Recently added</span>
                                            <i className="fal fa-check"></i>
                                        </Link>
                                        <Link className="sort-filter active" to="#">
                                            <span>Price: Low to High</span>
                                            <i className="fal fa-check"></i>
                                        </Link>
                                        <Link className="sort-filter" to="#">
                                            <span>Price: High to Low</span>
                                            <i className="fal fa-check"></i>
                                        </Link>
                                        <Link className="sort-filter" to="#">
                                            <span>Auction ending soon</span>
                                            <i className="fal fa-check"></i>
                                        </Link>
                                        <h6>Options</h6>
                                        <div className="sort-filter">
                                            <span>Auction ending soon</span>
                                            <input className="check" type="checkbox" value="checkbox" name="check" />
                                        </div>
                                        <div className="sort-filter">
                                            <span>Show lazy minted</span>
                                            <input className="check" type="checkbox" value="checkbox" name="check" />
                                        </div>
                                    </Dropdown.Item> */}
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                                
                            </div>
                        </div>
                        <div className='content-inner'>
                            {
                                data.map((item,index) => (
                                    ((item.priceTag == "LUNA" && item.listPrice < 0.1) || (item.priceTag == "UST" && item.listPrice < 10) ?
                                    ""
                                    :
                                    
                                    <Link to={"/ItemDetails?chainId=" + item.raw?.collection.chainId + "&collection=" + item.raw?.collection.contractAddress + "&tokenId=" + item.raw?.tokenId} key={index} className={`sc-card-product menu_card style-h7 ${item.feature ? 'comingsoon' : '' } `}>
                                        <div>
                                            
                                            <div className="card-media">
                                                <img src={item.img} alt="AxelarSea" />
                                                <div className="button-place-bid">
                                            <button
                                                onClick={() => setModalShow(true)}
                                                className="sc-button style-place-bid style bag fl-button pri-3"
                                            >
                                                <span>Buy Now</span>
                                            </button>
                                            </div>
                                            </div>
                                            <div className="card-title">
                                                <h5>{item.title}</h5>
                                            </div>
                                            <div className="meta-info style mt-2">
                                                <div className="author">
                                                    <div className="avatar">
                                                        <img src={item.imgAuthor} alt="AxelarSea" />
                                                    </div>
                                                    <div className="info">
                                                        <span>Owned By</span>
                                                        <h6> <Link to="/Authors-Profile">{maskAddress(item.nameAuthor)}</Link> </h6>
                                                    </div>
                                                </div>
                                                <div className=" d-flex align-items-center justify-content-around" style={{width:'6rem',marginLeft:'2.2rem'}}>
                                                        <img src={item.tags === 'ETH' ? ethLogo : item.tags === 'AVAX' ? avaxLogo : item.tags === 'FTM' ? fantomLogo : item.tags === 'MOONBEAM' ? moonbeamLogo : item.tags === 'POLYGON' ? polygonLogo : ''} alt="" width={'40'}/>
                                                        {/* <h5 style={{fontSize:'14px'}}>{item.tags}</h5> */}
                                                </div>
                                                {/* <Link to="/login" className="wishlist-button heart"><span className="number-like">{item.wishlist}</span></Link> */}
                                            </div>
                                            <div className="meta-info  " id='cardprice' >
                                                <div className="card-bottom style-explode">
                                                    <div className="price">
                                                        <span>Price</span>
                                                        <div className="price-details mt-1">
                                                            <h5>{item.price}</h5>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <div className="card-bottom">
                                                <button onClick={() => setModalShow(true)} className="sc-button style bag fl-button pri-3 no-bg"><span>Buy Now</span></button>
                                                <Link to="/activity-01" className="view-history reload">View History</Link>
                                            </div> */}
                                        </div>
                                    </Link>
                                )))
                            }
                        </div>
                        {
                            true && 
                            <div className="col-md-12 wrap-inner load-more text-center"> 
                                <Link to="#" id="load-more" className="sc-button loadmore fl-button pri-3 mt-21" onClick={loadMore}><span>Load More</span></Link>
                            </div>
                        }
                    </div>
                </div>
            </section>
            <CardModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </Fragment>
    );
}


export default RecentlyListed;
