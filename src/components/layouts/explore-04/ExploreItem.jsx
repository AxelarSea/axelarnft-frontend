import React , { useState , Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom'
import { maskAddress } from '../../../utils/address';
import { fetchAllListedItems } from '../../../utils/api';
import CardModal from '../CardModal';

const ExploreItem = props => {
    const data = props.data

    const [visible , setVisible] = useState(6);
    const showMoreItems = () => {
        setVisible((prevValue) => prevValue + 6);
    }

    const [modalShow, setModalShow] = useState(false);
    return (
        <Fragment>
            <div className='explore'>
                <div className="box-epxlore">
                    {
                        data.slice(0,visible).map((item,index) => (
                            <Link to={"/item-details-01?chainId=" + item.chainId + "&collection=" + item.collectionAddress + "&tokenId=" + item.tokenId} className={`sc-card-product explode style2 mg-bt ${item.feature ? 'comingsoon' : '' } `} key={index}>
                                <div>
                                    <div className="card-media">
                                        <img src={item.img} alt="Axies" />
                                        <div className="button-place-bid">
                                            <button onClick={() => setModalShow(true)} className="sc-button style-place-bid style bag fl-button pri-3"><span>Buy Now</span></button>
                                        </div>
                                        <a className="wishlist-button heart"><span className="number-like">{item.wishlist}</span></a>
                                        <div className="coming-soon">{item.feature}</div>
                                    </div>
                                    <div className="card-title">
                                        <h5>{item.title}</h5>
                                    </div>
                                    <div className="meta-info">
                                        <div className="author">
                                            <div className="avatar">
                                                <img src={item.imgAuthor} alt="Axies" />
                                            </div>
                                            <div className="info">
                                                <span>Creator</span>
                                                <h6> {maskAddress(item.nameAuthor)} </h6>
                                            </div>
                                        </div>
                                        <div className="tags">{item.tags}</div>
                                    </div>
                                    <div className="card-bottom style-explode">
                                        <div className="price">
                                            <span>Price</span>
                                            <div className="price-details">
                                                <h5>{item.price}</h5>
                                                <span>= {item.priceChange}</span>
                                            </div>
                                        </div>
                                        {/* <Link to="/activity-01" className="view-history reload">View History</Link> */}
                                    </div>
                                </div>
                            </Link>
                        ))
                    }
                </div>
                {
                    visible < data.length && 
                    <div className="btn-auction center"> 
                        <Link to="#" id="load-more" className="sc-button loadmore fl-button pri-3" onClick={showMoreItems}><span>Load More</span></Link>
                    </div>
                }
            </div>
            <CardModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </Fragment>
    );
}

export default ExploreItem;
