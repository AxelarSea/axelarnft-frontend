import React,{useState , useEffect} from 'react';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Navigation, Scrollbar, A11y   } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import axios from 'axios'
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import shape1 from '../../assets/images/backgroup-secsion/bg-gradient1.png'
import shape2 from '../../assets/images/backgroup-secsion/bg-gradient2.png'
import shape3 from '../../assets/images/backgroup-secsion/bg-gradient3.png'
import imgbg from '../../assets/images/backgroup-secsion/bghome-w.png'
import { _fetchData } from 'ethers/lib/utils';
import { setupAuthExtension } from '@cosmjs/stargate';

const SliderStyle1 = props => {


    
    
    
    
    const data = props.data
    return (
        <div className="mainslider" >
            <Swiper
                modules={[Navigation,  Scrollbar, A11y ]}
                    spaceBetween={0}
                    slidesPerView={1}
                    navigation
                    scrollbar={{ draggable: true }}
                >
                {
                    data.map((item, index) => (
                        <SwiperSlide key={index} className={item.class}>
                            <SliderItem item={item} />
                        </SwiperSlide>
                        
                    ))
                }
        </Swiper>
        </div>
    );
}

SliderStyle1.propTypes = {
    data: PropTypes.array.isRequired,
}
const SliderItem = props => {

    const [count,setCount] = useState({})


    const fetchData = async() => {
        await axios.get(
            process.env.REACT_APP_API_HOST +'/api/nft/testnetv1/stat'
            )
        .then(res => {
            setCount(res.data)
            console.log(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }

    useEffect(() => {
        fetchData()
    },[])

    return(
    <div className="flat-title-page"style={{backgroundSize:'cover'}}>
        <img className="bgr-gradient gradient1" src={shape1} alt="AxelarSea" />
        <img className="bgr-gradient gradient2" src={shape2} alt="AxelarSea" />
        <img className="bgr-gradient gradient3" src={shape3} alt="AxelarSea" />
        {/* <div className="shape item-w-16"></div>
        <div className="shape item-w-22"></div>
        <div className="shape item-w-32"></div>
        <div className="shape item-w-48"></div>
        <div className="shape style2 item-w-51"></div>
        <div className="shape style2 item-w-51 position2"></div>
        <div className="shape item-w-68"></div> */}
        <div className="overlay-style2"></div>
        <div className="swiper-container mainslider home">
            <div className="swiper-wrapper">
                <div className="swiper-slide">
                    <div className="slider-item">	
                        <div className="themesflat-container top-page-containner">
                            <div className="wrap-heading flat-slider flex">
                                <div className="content">
                                    <h1 className="heading">{props.item.title_1}</h1>
                                    <h1 className="heading"><span className='fill'>{props.item.title_2}</span></h1>	
                                    <h2 className="heading mb-style"><span style={{fontSize:'30px'}}>{props.item.title_3}</span></h2>
                                    <p className="sub-heading">{props.item.description}
                                    </p>
                                    <div className="flat-bt-slider flex style2">
                                        <Link to="/Explore" className="sc-button header-slider style style-1 rocket fl-button pri-1"><span>Explore
                                        </span></Link>
                                        <Link to="/create-item" className="sc-button header-slider style style-1 note fl-button pri-1"><span>Create
                                        </span></Link>
                                    </div>
                                    {props.item.status == null ? ''
                                        :
                                        <div className="flat-bt-slider flex style2 showlist">
                                            <div>
                                                <h6 className='data-showlist'>{count.nftCount}</h6>
                                                <h6 className='title-showlist'>Minted</h6>
                                            </div>
                                            <div style={{marginLeft:'4rem'}}>
                                                <h6 className='data-showlist'>{count.listedCount}</h6>
                                                <h6 className='title-showlist'>Listed</h6>
                                            </div>
                                            <div style={{marginLeft:'4rem'}}>
                                                <h6 className='data-showlist'>{count.buyCount}</h6>
                                                <h6 className='title-showlist'>Purchased</h6>
                                            </div>
                                            <div style={{marginLeft:'4rem'}}>
                                                <h6 className='data-showlist'>{count.bridgeCount}</h6>
                                                <h6 className='title-showlist'>Bridged</h6>
                                            </div>
                                            <div style={{marginLeft:'4rem'}}>
                                                <h6 className='data-showlist'>{count.walletCount}</h6>
                                                <h6 className='title-showlist'>Wallet</h6>
                                            </div>
                                        </div>
                                    }
                                </div>
                                <div className="image" style={{marginInline:'2rem'}}>
                                    <img src={props.item.img} alt="AxelarSea"  width='600px'/>
                                </div>
                            </div>   
                        </div>					                           
                    </div>
                </div>
            </div>
        </div>        
    </div>
    )
    
}
export default SliderStyle1;
