import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Modal } from "react-bootstrap";
import Countdown from "react-countdown";
import one from "../../assets/images/icon/1.svg";
import oneWhite from "../../assets/images/icon/oneWhite.svg";
import twoWhite from "../../assets/images/icon/twoWhite.svg";
import oneGreen from "../../assets/images/icon/oneGreen.svg";
import twoGreen from "../../assets/images/icon/twoGreen.svg";
import threeWhite from "../../assets/images/icon/threeWhite.svg";

import two from "../../assets/images/icon/2.svg";
import three from "../../assets/images/icon/3.svg";
import four from "../../assets/images/icon/4.svg";
import five from "../../assets/images/icon/5.svg";

import FaqTestnetModal from "./FaqTestnetModal";

const ProcessModal = (props) => {


  const [faqModalShow,setFaqModalShow] = useState(false)

  const [time,setTime] = useState(Date.now() + 30000)

  useEffect(() => {
    if (props.status == 0 && props.onShow) {
      setTime(Date.now() + 30000)
    }
    if(props.status == 3){
      setTime(Date.now() + 30000)
    }
    else if(props.status == 5){
      setTime(Date.now() + 30000)
    }
  },[props.status, props.onShow])
    return (
        <Modal show={props.onShow} onHide={props.onHide}>
      <Modal.Header closeButton></Modal.Header>
      <div className="modal-body space-y-20 pd-20" style={{paddingTop:'1rem'}}>
          <div  className="transaction-warning-box">
            <h6 className="transaction-warning-detail">In future versions, users will be able to track the buying process in real time.</h6>
          </div>

          <div className="count-box pd-20">
            <p className="center" style={{fontSize:'16px'}}>Estimated Time</p>
            <div className="center">
              <Countdown className="center countdown" date={time} >
                <span  className="center countdown">Please keep this window open.</span>
              </Countdown>
            </div>
          </div>
          <h5 className="transaction-header">Please wait while the transaction is being processed.</h5>
          <div className="transaction-step-box">
            <h6 className="transaction-step-detail"><img src={props.status <= 1 ? oneWhite : oneGreen} style={{marginRight: '1rem'}}/>Approved transaction on Terra or Kepler wallet</h6>
          </div>
          <div className="transaction-step-box">
            <h6 className="transaction-step-detail"><img src={props.status == 3 ? twoWhite : props.status > 3 ? twoGreen : (props.status < 4 && props.status > 1) ? twoWhite : two} style={{marginRight: '1rem'}}/>Sign signature in metamask to confirm buying transaction</h6>
          </div>
          <div className="transaction-step-box">
            <h6 className="transaction-step-detail"><img src={props.status == 5 ? threeWhite : three} style={{marginRight: '1rem'}}/>Wait for transaction to complete </h6>
          </div>
         
          
          {/* <h5 className="transaction-note">Depending on network congestion, the entire process</h5>
          
          <h5 className="transaction-note" style={{marginTop: '5px'}}>could take up to 10 minutes.</h5> */}
          <div className="center">
          <button  onClick={() => setFaqModalShow(true)}>FAQ</button>

          </div>
      </div>
      <FaqTestnetModal 
      onShow={faqModalShow}
      onHide={() => setFaqModalShow(false)}
      />

      </Modal>
      
    )
}
export default ProcessModal
