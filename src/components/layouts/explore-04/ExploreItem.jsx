import React, { useState, Fragment,useEffect } from "react";
import { Link } from "react-router-dom";
import { maskAddress } from "../../../utils/address";
import { fetchAllListedItems } from "../../../utils/api";
import CardModal from "../CardModal";

import ethLogo from '../../../assets/images/icon/eth-logo.svg'
import polygonLogo from '../../../assets/images/icon/polygon-logo.svg'
import avaxLogo from '../../../assets/images/icon/avax-logo.svg'
import moonbeamLogo from '../../../assets/images/icon/moonbeam-logo.svg'
import fantomLogo from '../../../assets/images/icon/fantom-logo.svg'
import axelarSeaLogo from '../../../assets/images/icon/icon-axelarsea.svg'
import lunaLogo from '../../../assets/images/icon/Luna.svg'
import ustLogo from '../../../assets/images/icon/UST.svg'
import verifyIcon from '../../../assets/images/icon/icon-verify.svg'

import imgTodayPick from '../../../assets/images/box-item/img-today-pick-demo.svg'
import nftLoading from '../../../assets/images/box-item/nft-loading.gif'
import imgAuthor from '../../../assets/images/avatar/satoshi.svg'
const ITEM_PER_PAGE = 18;

const ExploreItem = (props) => {

  const [data,setData] =  useState(
    [
        {
            img: nftLoading,
            title: "Loading...",
            imgAuthor: imgAuthor,
            nameAuthor: ".",
            wishlist: "100",
        },
        {
            img: nftLoading,
            title: "Loading...",
            imgAuthor: imgAuthor,
            nameAuthor: ".",
            wishlist: "100",
        },
        {
            img: nftLoading,
            title: "Loading...",
            imgAuthor: imgAuthor,
            nameAuthor: ".",
            wishlist: "100",
        },
        {
            img: nftLoading,
            title: "Loading...",
            imgAuthor: imgAuthor,
            nameAuthor: ".",
            wishlist: "100",
        },
        {
            img: nftLoading,
            title: "Loading...",
            imgAuthor: imgAuthor,
            nameAuthor: ".",
            wishlist: "100",
        },
        {
            img: nftLoading,
            title: "Loading...",
            imgAuthor: imgAuthor,
            nameAuthor: ".",
            wishlist: "100",
        },
        {
            img: nftLoading,
            title: "Loading...",
            imgAuthor: imgAuthor,
            nameAuthor: ".",
            wishlist: "100",
        },
        {
            img: nftLoading,
            title: "Loading...",
            imgAuthor: imgAuthor,
            nameAuthor: ".",
            wishlist: "100",
        },
        {
            img: nftLoading,
            title: "Loading...",
            imgAuthor: imgAuthor,
            nameAuthor: ".",
            wishlist: "100",
        },
        {
            img: nftLoading,
            title: "Loading...",
            imgAuthor: imgAuthor,
            nameAuthor: ".",
            wishlist: "100",
        },
        {
            img: nftLoading,
            title: "Loading...",
            imgAuthor: imgAuthor,
            nameAuthor: ".",
            wishlist: "100",
        },
        {
            img: nftLoading,
            title: "Loading...",
            imgAuthor: imgAuthor,
            nameAuthor: ".",
            wishlist: "100",
        },
    ]
)

  const [visible, setVisible] = useState(ITEM_PER_PAGE);
  const showMoreItems = () => {
    setVisible((prevValue) => prevValue + ITEM_PER_PAGE);
    if (props.loadMore) {
      props.loadMore(ITEM_PER_PAGE);
    }
  };

  const [modalShow, setModalShow] = useState(false);

  useEffect(() => {
    if(props.data.length > 0){
      setData(props.data)
      console.log(props.data)

    }
    console.log(props.data)

  },[props.data])
  return (
    <Fragment>
      <div className="explore">
        <div className="box-epxlore">
          {data.slice(0, visible).map((item, index) => (
            ((item.priceTag == "LUNA" && item.listPrice < 0.1) || (item.priceTag == "UST" && item.listPrice < 10) ?
            ""
            :
            <Link
              to={
                "/ItemDetails?chainId=" +
                item.chainId +
                "&collection=" +
                item.collectionAddress +
                "&tokenId=" +
                item.tokenId
              }
              className={`sc-card-product explode style2 mg-bt ${
                item.feature ? "comingsoon" : ""
              } `}
              key={index}
            >
              <div className="card-media">
                <img style={{position:'absolute', margin:'1rem', width:'40px', zIndex:'10'}} src={axelarSeaLogo} alt="" />
                <img src={item.img} alt="AxelarSea" style={{aspectRatio:'1',objectFit:'cover'}}/>
                <div className="button-place-bid">
                  <button
                    onClick={() => setModalShow(true)}
                    className="sc-button style-place-bid style bag fl-button pri-3"
                  >
                    <span>Buy Now</span>
                  </button>
                </div>
                <Link to="#" className="wishlist-button heart">
                  <span className="number-like">{item.wishlist}</span>
                </Link>
                <div className="coming-soon">{item.feature}</div>
              </div>
              <div className="d-flex align-items-center justify-content-between">
                <div>
                  <div className="d-flex align-items-center" style={{margin:'0.5rem 0rem'}}>
                    <h6>Axelar Robot</h6>
                    <img src={verifyIcon} alt="" style={{marginLeft:'0.2rem', width:'15px'}}/>
                  </div>
                  <div>
                    <h6>{item.title}</h6>
                  </div>
                </div>
                <img src={item.tags === 'ETH' ? ethLogo : item.tags === 'AVAX' ? avaxLogo : item.tags === 'FTM' ? fantomLogo : item.tags === 'MOONBEAM' ? moonbeamLogo : item.tags === 'POLYGON' ? polygonLogo : ''} alt=""  width="40px"/>
              </div>

              <div className="card-bottom style-explode">
                <div className="price" style={{marginTop:'0rem'}}>
                  <p>Price</p>
                  <div className="price-details mt-1 d-flex align-items-center">
                    <img src={item.priceTag === "AVAX" ? avaxLogo : item.priceTag === "LUNA" ? lunaLogo : item.priceTag === "UST" ? ustLogo : ''} alt="" width={'30px'}/>
                    <h5 style={{marginLeft:'0.5rem'}}>{item.price}</h5>
                    {/* <span>= {item.priceChange}</span> */}
                  </div>
                </div>
                {/* <Link to="/activity-01" className="view-history reload">View History</Link> */}
              </div>
            </Link>
          )))}
        </div>
        {(true || visible < data.length) && (
          <div className="btn-auction center" style={{marginBottom:'5rem'}}>
            <Link
              to="#"
              id="load-more"
              className="sc-button loadmore fl-button pri-3"
              onClick={showMoreItems}
            >
              <span >Load More</span>
            </Link>
          </div>
        )}
      </div>
      <CardModal show={modalShow} onHide={() => setModalShow(false)} />
    </Fragment>
  );
};

export default ExploreItem;
