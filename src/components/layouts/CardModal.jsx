import React , {useState} from 'react';
import { Link } from 'react-router-dom'
import { Modal } from "react-bootstrap";

import AlunaLogo from '../../assets/images/icon/Luna.png'
import AustLogo from '../../assets/images/icon/UST.png'

const CardModal = (props) => {

    

    const [youPayPic , setYouPayPic] = useState(AustLogo)

    const [youPayType , setYouPayType] = useState('UST')

    const [pricePic , setPricePic] = useState(AlunaLogo)

    const [priceType , setPriceType] = useState('Luna')
    
return (

    <Modal
    show={props.show}
    onHide={props.onHide}
  >
    <Modal.Header closeButton></Modal.Header>

    <div className="modal-body space-y-20 pd-40" >
        <h2>Checkout</h2>
        <p className="">You are about to purchase a <span className="price color-popup">Cryptopunk #2</span>
        </p>
        <div className="d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center">
                <p>On</p>
                <div id="buy" className="dropdown" >
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
 
        <div className="d-flex justify-content-between" >
            <div className="w-50" style={{backgroundColor:'#343444' , borderRight:'0.5px solid grey'}}>
                <div className="d-flex justify-content-between align-items-center">
                    <p style={{fontSize:'14px' , marginLeft:'5px'}}>Price</p>
                    <p style={{fontSize:'14px' , marginRight:'5px'}}>-$24,055.16</p>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                    <div id="sort-by" className="dropdown" style={{marginLeft:'5px'}} >
                        <Link to="#" className="btn-selector nolink" style={{minWidth:'100px' }} >
                            <img width="15" height="15" src={pricePic} style={{marginRight:'14px'}}/>
                                {priceType}
                        </Link>
                    </div>
                    <p style={{fontSize:'14px' , fontWeight:'bold' , marginRight:'5px'}}>$5.89</p>
                </div>
            </div>
            <div className="w-50" style={{backgroundColor:'#343444'}}> 
                <div className="d-flex justify-content-between align-items-center" >
                    <p style={{fontSize:'14px' , marginLeft:'5px'}}>You pay</p>
                    <p style={{fontSize:'14px' , marginRight:'5px'}}>-$24,055.16</p>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                    <div id="sort-by" className="dropdown" style={{marginLeft:'5px'}} >
                    <Link to="#" className="btn-selector nolink" style={{minWidth:'100px' }} >
                        <img width="15" height="15" src={youPayPic} style={{marginRight:'14px'}}/>
                            {youPayType}
                    </Link>
                    <ul >
                                                                <li onClick={() => {setYouPayType('ALUNA') 
                                                                                    setYouPayPic(AlunaLogo)
                                                                                }
                                                                            }>
                                                                                    <span><img width="15" height="15" src={AlunaLogo} style={{marginRight:'14px'}} />ALUNA</span>
                                                                   
                                           
                                                                </li>
                                                                <li onClick={() => {setYouPayType('AUST')
                                                                                    setYouPayPic(AustLogo)
                                                                                }
                                                                        }><span><img width="15" height="15" src={AustLogo} style={{marginRight:'14px'}}/>AUST</span></li>
                                                            </ul>
                    </div>
                    <p style={{fontSize:'14px' , fontWeight:'bold' , marginRight:'5px'}}>$24,055.16</p>
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
