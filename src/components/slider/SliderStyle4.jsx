import React  from 'react';
import { Link } from 'react-router-dom'
import { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import img1 from '../../assets/images/box-item/img1.svg'
import img2 from '../../assets/images/box-item/img2.svg'
import img3 from '../../assets/images/box-item/img3.svg'
// import img4 from '../../assets/images/box-item/img4.svg'
// import img5 from '../../assets/images/box-item/img5.svg'
// import img6 from '../../assets/images/box-item/img6.svg'
import shape1 from '../../assets/images/backgroup-secsion/bg-gradient1.png'
import shape2 from '../../assets/images/backgroup-secsion/bg-gradient2.png'
import shape3 from '../../assets/images/backgroup-secsion/bg-gradient3.png'

import shape4 from '../../assets/images/item-background/Axelar-divider-1.png'

// import background1 from '../../assets/images/backgroup-secsion/background-1.svg'

const SliderStyle4 = () => {
    
    return (
        <div>
            <section className="flat-title-page mainslider" >
            <img className="bgr-gradient gradient2" src={shape2} alt="AxelarNFT" />
                 {/* <img className="bgr-gradient gradient3" src={shape4} alt="AxelarNFT" />
                <img className="bgr-gradient gradient2" src={shape2} alt="AxelarNFT" />
                <img className="bgr-gradient gradient1" src={shape3} alt="AxelarNFT" />  */}
                <div className="overlay"></div>
                <div className="themesflat-container ">
                        <div className="wrap-heading flat-slider flex">
                            <div className="wrap-heading-content">
                                <h1 className="heading ">First Cross-Chain
                                </h1>	
                                <h1 className="heading mb-style"><span className="nft-marketplace-heading" >NFT Marketplace</span>                                          
                                </h1>
                                {/* <h1 className="heading">Monster NFTs</h1> */}
                                <p className="sub-heading mt-19 mb-40">Trade NFTs. Using any token. From any chain                
                                </p>

                                <div className="flat-bt-slider flex style2 d-inline-flex p-2">
                                    <Link to="/Explore" className="sc-button header-slider style style-1 rocket fl-button pri-1">
                                        <span >
                                            Explore
                                        </span>
                                    </Link>
                                    <Link to="/create-item" className="sc-button header-slider style style-1 note fl-button pri-1">
                                        <span>
                                            Sell NFT
                                        </span>
                                    </Link>
                                </div>
                            </div>
                            <Swiper
                                modules={[ Autoplay ]}
                                direction={"vertical"}
                                spaceBetween={25}
                                slidesPerView={5}
                                loop
                                autoplay={{
                                    delay: 1,
                                    disableOnInteraction: false,
                                    pauseOnMouseEnter: true,
                                }}
                                speed= {2000}
                            >
                                {/* <SwiperSlide><img src={img1} alt="AxelarNFT" /></SwiperSlide>
                                <SwiperSlide><img src={img2} alt="AxelarNFT" /></SwiperSlide>
                                <SwiperSlide><img src={img3} alt="AxelarNFT" /></SwiperSlide>
                                <SwiperSlide><img src={img1} alt="AxelarNFT" /></SwiperSlide>
                                <SwiperSlide><img src={img2} alt="AxelarNFT" /></SwiperSlide> */}

                            </Swiper>
                            <Swiper
                                modules={[ Autoplay ]}
                                direction={"vertical"}
                                spaceBetween={25}
                                slidesPerView={5}
                                loop
                                autoplay={{
                                    delay: 1,
                                    disableOnInteraction: false,
                                    pauseOnMouseEnter: true,
                                }}
                                speed= {1800}
                            >
                                
                                {/* <SwiperSlide><img src={img3} alt="AxelarNFT" /></SwiperSlide>
                                <SwiperSlide><img src={img2} alt="AxelarNFT" /></SwiperSlide>
                                <SwiperSlide><img src={img1} alt="AxelarNFT" /></SwiperSlide>
                                <SwiperSlide><img src={img3} alt="AxelarNFT" /></SwiperSlide>
                                <SwiperSlide><img src={img2} alt="AxelarNFT" /></SwiperSlide> */}

                            </Swiper>
                            <Swiper
                                modules={[ Autoplay ]}
                                direction={"vertical"}
                                spaceBetween={25}
                                slidesPerView={5}
                                loop
                                autoplay={{
                                    delay: 1,
                                    disableOnInteraction: false,
                                    pauseOnMouseEnter: true,
                                }}
                                speed= {2200}
                            >
                                {/* <SwiperSlide><img src={img3} alt="AxelarNFT" /></SwiperSlide>
                                <SwiperSlide><img src={img1} alt="AxelarNFT" /></SwiperSlide>
                                <SwiperSlide><img src={img2} alt="AxelarNFT" /></SwiperSlide>
                                <SwiperSlide><img src={img3} alt="AxelarNFT" /></SwiperSlide>
                                <SwiperSlide><img src={img1} alt="AxelarNFT" /></SwiperSlide> */}

                            </Swiper>
                        </div>
                        
                    </div>
            </section>
        </div>
    );
}


export default SliderStyle4;
