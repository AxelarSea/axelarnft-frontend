import React from 'react';
import { Link } from 'react-router-dom'
import { Modal } from "react-bootstrap";

const CardModal = (props) => {
    
return (

    <Modal
    show={props.show}
    onHide={props.onHide}
  >
    <Modal.Header closeButton></Modal.Header>

    <div className="modal-body space-y-20 pd-40">
        <h2>Checkout</h2>
        <p className="">You are about to purchase a <span className="price color-popup">Cryptopunk #2</span>
        </p>
        <div className="d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center">
                <p>On</p>
                <div id="buy" className="dropdown">
                <Link to="#" className="btn-selector nolink">Terra</Link>
                        {/* <ul >
                            <li><span>On Auction</span></li>
                            <li><span>Has Offers</span></li>
                        </ul> */}
                </div>
            </div>
            <p>Balance 10.330</p>
        </div >
        {/* <input type="text" className="form-control"
            placeholder="00.00 ETH" /> */}

        <div className="d-flex justify-content-between">
            <div className="">
                <div className="d-flex justify-content-between align-items-center">
                    <p>Price</p>
                    <p>-$24,055.16</p>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                    <p>Luna</p>
                    <p>$5.89</p>
                </div>
            </div>
            <div>
                <div className="d-flex justify-content-between align-items-center">
                    <p>You pay</p>
                    <p>-$24,055.16</p>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                    <div id="sort-by" className="dropdown">
                    <Link to="#" className="btn-selector nolink">Terra</Link>
                            {/* <ul >
                                <li><span>On Auction</span></li>
                                <li><span>Has Offers</span></li>
                            </ul> */}
                    </div>
                    <p>$24,055.16</p>
                </div>
            </div>
        </div>
        
        {/* <input type="number" className="form-control" placeholder="1" /> */}
        <div className="hr"></div>
        <div className="d-flex justify-content-between">
            <p> You want to Receive NFT</p>
        </div>
        <div className="d-flex justify-content-between">
            <p> To</p>
        </div>
        
        <Link to="/wallet-connect" className="btn btn-primary" data-toggle="modal" data-target="#popup_bid_success" data-dismiss="modal" aria-label="Close">Confirm</Link>
    </div>
    </Modal>
    
  );
};

export default CardModal;
