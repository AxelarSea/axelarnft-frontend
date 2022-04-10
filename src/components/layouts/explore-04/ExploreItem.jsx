import React, { useState, Fragment } from "react";
import { Link } from "react-router-dom";
import { maskAddress } from "../../../utils/address";
import { fetchAllListedItems } from "../../../utils/api";
import CardModal from "../CardModal";

import ethLogo from '../../../assets/images/icon/eth-logo.svg'
import polygonLogo from '../../../assets/images/icon/polygon-logo.svg'
import avaxLogo from '../../../assets/images/icon/avax-logo.svg'
import moonbeamLogo from '../../../assets/images/icon/moonbeam-logo.svg'
import fantomLogo from '../../../assets/images/icon/fantom-logo.svg'

const ExploreItem = (props) => {
  const data = props.data;

  const [visible, setVisible] = useState(6);
  const showMoreItems = () => {
    setVisible((prevValue) => prevValue + 6);
  };

  const [modalShow, setModalShow] = useState(false);
  return (
    <Fragment>
      <div className="explore">
        <div className="box-epxlore">
          {data.slice(0, visible).map((item, index) => (
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
                <img src={item.img} alt="AxelarNFT" />
                <div className="button-place-bid">
                  <button
                    onClick={() => setModalShow(true)}
                    className="sc-button style-place-bid style bag fl-button pri-3"
                  >
                    <span>Buy Now</span>
                  </button>
                </div>
                <Link to="/login" className="wishlist-button heart">
                  <span className="number-like">{item.wishlist}</span>
                </Link>
                <div className="coming-soon">{item.feature}</div>
              </div>
              <div className="card-title">
                <h5>{item.title}</h5>
              </div>
              <div className="meta-info">
                <div className="author">
                  {/* <div className="avatar">
                    <img src={item.imgAuthor} alt="Axies" />
                  </div>
                  <div className="card-title">
                    <h5>{item.title}</h5>
                  </div> */}
                  <div className="meta-info">
                    <div className="author">
                      <div className="avatar">
                        <img src={item.imgAuthor} alt="AxelarNFT" />
                      </div>
                      <div className="info">
                        <span>Owned By</span>
                        <h6> {maskAddress(item.nameAuthor)} </h6>
                      </div>
                    </div>
                    {/* <div className="tags">{item.tags}</div> */}
                  </div>
                  {/* <div className="card-bottom style-explode">
                    <div className="price">
                      <span>Price</span>
                      <div className="price-details">
                        <h5>{item.price}</h5>
                        <span>= {item.priceChange}</span>
                      </div>
                    </div>
                    <Link to="/activity-01" className="view-history reload">View History</Link>
                  </div> */}
                </div>
                <div className="d-flex align-items-center justify-content-around" style={{width:'8rem'}}>
                <img src={item.tags === 'ETH' ? ethLogo : item.tags === 'AVAX' ? avaxLogo : item.tags === 'FTM' ? fantomLogo : item.tags === '' ? moonbeamLogo : item.tags === 'MATIC' ? polygonLogo : ''} alt=""  width="40px"/>
                  {/* <h5 style={{fontSize:'11px'}}>{item.tags}</h5> */}
                  
                  </div>
              </div>
              <div className="card-bottom style-explode">
                <div className="price">
                  <span>Price</span>
                  <div className="price-details mt-1">
                    <h5>{item.price}</h5>
                    {/* <span>= {item.priceChange}</span> */}
                  </div>
                </div>
                {/* <Link to="/activity-01" className="view-history reload">View History</Link> */}
              </div>
            </Link>
          ))}
        </div>
        {visible < data.length && (
          <div className="btn-auction center">
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
