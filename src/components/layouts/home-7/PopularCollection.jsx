import React , { useState } from 'react';
import { Link } from 'react-router-dom'
import imgTop1 from '../../../assets/images/box-item/img-top.svg'
import img1Bottom1 from '../../../assets/images/box-item/img-demo.svg'
import img1Bottom2 from '../../../assets/images/box-item/img-demo2.svg'
import img1Bottom3 from '../../../assets/images/box-item/img-demo3.svg'
import imgAuthor1 from '../../../assets/images/avatar/img-author.svg'
import imgTop2 from '../../../assets/images/box-item/img-top2.png'
import img2Bottom1 from '../../../assets/images/box-item/img2Bottom1.png'
import img2Bottom2 from '../../../assets/images/box-item/img2Bottom2.png'
import img2Bottom3 from '../../../assets/images/box-item/img2Bottom3.png'
import imgAuthor2 from '../../../assets/images/avatar/img-author2.png'
import imgTop3 from '../../../assets/images/box-item/img-top3.png'
import img3Bottom1 from '../../../assets/images/box-item/img3Bottom1.png'
import img3Bottom2 from '../../../assets/images/box-item/img3Bottom2.png'
import img3Bottom3 from '../../../assets/images/box-item/img3Bottom3.png'
import imgAuthor3 from '../../../assets/images/avatar/img-author3.png'

import LogoSupport from '../../../assets/images/logo/Logo-Support.svg';
import WeSupport from '../../../assets/images/logo/We-Support.svg';


const PopularCollection = () => {
    const [data] = useState(
        [
            {
                imgTop: imgTop1,
                imgBottom1: img1Bottom1,
                imgBottom2: img1Bottom2,
                imgBottom3: img1Bottom3,
                imgAuthor: imgAuthor1,
                title: 'CLONE X - X TAKASHI...',
                name: 'Mason Woodward',
                wishlist: '100'
            },
            {
                imgTop: imgTop2,
                imgBottom1: img2Bottom1,
                imgBottom2: img2Bottom2,
                imgBottom3: img2Bottom3,
                imgAuthor: imgAuthor2,
                title: 'MetaWarden',
                name: 'Mason Woodward',
                wishlist: '100'
            },
            {
                imgTop: imgTop3,
                imgBottom1: img3Bottom1,
                imgBottom2: img3Bottom2,
                imgBottom3: img3Bottom3,
                imgAuthor: imgAuthor3,
                title: 'BoredApeYachtClub',
                name: 'Mason Woodward',
                wishlist: '100'
            },
            // {
            //     imgTop: imgTop1,
            //     imgBottom1: img1Bottom1,
            //     imgBottom2: img1Bottom2,
            //     imgBottom3: img1Bottom3,
            //     imgAuthor: imgAuthor1,
            //     title: 'Colorful Abstract',
            //     name: 'Mason Woodward',
            //     wishlist: '100'
            // },
            // {
            //     imgTop: imgTop1,
            //     imgBottom1: img1Bottom1,
            //     imgBottom2: img1Bottom2,
            //     imgBottom3: img1Bottom3,
            //     imgAuthor: imgAuthor1,
            //     title: 'Colorful Abstract',
            //     name: 'Mason Woodward',
            //     wishlist: '100'
            // },
            // {
            //     imgTop: imgTop1,
            //     imgBottom1: img1Bottom1,
            //     imgBottom2: img1Bottom2,
            //     imgBottom3: img1Bottom3,
            //     imgAuthor: imgAuthor1,
            //     title: 'Colorful Abstract',
            //     name: 'Mason Woodward',
            //     wishlist: '100'
            // },
        ]
    )

    const [visible , setVisible] = useState(3);
    const showMoreItems = () => {
        setVisible((prevValue) => prevValue + 3);
    }
    return (
<<<<<<< HEAD
        <section className="tf-section2 live-auctions style4 home4 live-auctions-style7" >
            <div className="themesflat-container">
                {/* <div className='d-flex flex-column align-items-center justify-content-center' style={{marginBottom:'6rem'}}>
                <img src={WeSupport} style={{marginBottom:'4rem'}} alt="" width="137px" height="33px" />
                <img src={LogoSupport} alt="" />
                </div> */}
=======
        <section className="tf-section live-auctions style4 home4 live-auctions-style7" >
            <div className="themesflat-container">
                <div className='d-flex flex-column align-items-center justify-content-center' style={{marginBottom:'6rem'}}>
                <img src={WeSupport} style={{marginBottom:'4rem'}} alt="" width="137px" height="33px" />
                <img src={LogoSupport} alt="" />
                </div>
>>>>>>> fbc57f3d23fc30983d8d562b3367c6eed39dd8e8
            

                <div className="row">
                    <div className="col-box-12">
                        <div className="heading-live-auctions align-items-center justify-content-center">
                            <h2 className="tf-title pb-40">
                            <h4 className="heading-fill mg-bt-16">Our Top Collection</h4>
                                Popular Collection</h2>
                            {/* <Link to="/explore-04" className="exp style2 mg-t-23">EXPLORE MORE</Link> */}
                        </div>
                    </div>
                    {
                        data.slice(0,visible).map((item,index) =>(
                            <div key={index} className="fl-collection fl-item3 col-xl-4 col-md-6">
                                <div className="sc-card-collection style-2 sc-card-style7">
                                    <div className="card-media-h7">
                                        <img src={item.imgTop} alt="Axies" />
                                    </div>
                                    <div className="card-media-h7 style2">
                                        <img src={item.imgBottom1} alt="Axies" />
                                        <img src={item.imgBottom2} alt="Axies" />
                                        <img src={item.imgBottom3} alt="Axies" />
                                    </div>
                                    <div className="card-bottom">
                                        <div className="author">
                                            <div className="content">
<<<<<<< HEAD
                                                <h5><Link to="/Collection">{item.title}</Link></h5>
                                                <div className="infor">
                                                    <span>Created by</span>
                                                    <span className="name"><Link to="/Authors-Profile">{item.name}</Link></span>
=======
                                                <h5><Link to="/authors-03">{item.title}</Link></h5>
                                                <div className="infor">
                                                    <span>Created by</span>
                                                    <span className="name"><Link to="/authors-02">{item.name}</Link></span>
>>>>>>> fbc57f3d23fc30983d8d562b3367c6eed39dd8e8
                                                </div>
                                            </div>
                                        </div>
                                        <Link to="/login" className="wishlist-button public heart mg-t-6"><span className="number-like">{item.wishlist}</span></Link>
                                    </div>
                                    <div className="sc-author-box style-2">
                                        <div className="author-avatar">
                                            <img src={item.imgAuthor} alt="Axies" className="avatar" />
                                            <div className="badge"><i className="ripple"></i></div>
                                        </div>
                                    </div>
                                </div> 	
                            </div>
                        ))
                    }
                    {
                        visible < data.length && 
                        <div className="col-md-12 wrap-inner load-more text-center mt-10"> 
                            <Link to="#" id="load-more" className="sc-button loadmore fl-button pri-3" onClick={showMoreItems}><span>Load More</span></Link>
                        </div>
                    }
                </div>
            </div>
    </section>
    );
}


export default PopularCollection;
