import Countdown from "react-countdown";
import { Modal } from "react-bootstrap";

import arrowbridge from "../../assets/images/backgroup-secsion/arrow-bridge.svg";
import spin from '../../assets/images/icon/processing.gif'
import one from "../../assets/images/icon/1.svg";
import two from "../../assets/images/icon/2.svg";
import three from "../../assets/images/icon/3.svg";
import greenCheck from "../../assets/images/icon/green-check.svg";
import axelarIcon from "../../assets/images/icon/axelar-Icon.svg";
import oneWhite from "../../assets/images/icon/oneWhite.svg";
import twoWhite from "../../assets/images/icon/twoWhite.svg";
import threeWhite from "../../assets/images/icon/threeWhite.svg";

const WaitingModal = (props) => {

    return (
    <Modal show={props.onShow} onHide={props.onHide}>
      <Modal.Header closeButton></Modal.Header>
      <div className="modal-body space-y-20 pd-20" style={{paddingTop:'1rem'}}>
        <h3 className="center congratulation-title">Bridging in progress</h3>
        
        <p className="center" style={{fontSize:'14px', marginTop:'auto'}}>Your NFT is safe! Let's see where it is now.</p>
        <div>
          <div className="transaction-step-box d-flex p-2 align-items-center">
          <img src={oneWhite} style={{marginRight:'1rem'}}/>
            <div className="p-2">
              <h6>NFT leaves the source chain.</h6>
              {/* <p style={{fontSize:'14px'}}>Transaction ID.</p> */}
            </div>
            <img
              className="ml-auto p-2"
              style={{marginRight:'1rem'}}
              src={props.myNftOnImg == null ? "" : props.myNftOnImg}
              alt=""
              width="45px"
            />
          </div>
        </div>
        <div>
          <div className="transaction-step-box d-flex align-items-center justify-content-between" style={{paddingTop:'1rem',paddingBottom:'1rem'}}>
              <div className="p-2 d-flex align-items-center">
              <img src={twoWhite} style={{marginRight:'1rem'}}/>
                <h6>Axelar Network receives & transfers the NFT.</h6>
              </div>
                  <div className="d-flex justify-content-end flex-column align-items-center" style={{width:'55px' , marginRight:'1rem'}}>
                    <img
                      className="center"
                      src={axelarIcon} style={{marginBottom:'0.25rem',width:'35px'}} alt="" />
                      <Countdown  
                        date={props.time}>
                      </Countdown>
                    
                  </div>
                  
          </div>
        </div>
        <div className="">
          <div className="transaction-step-box d-flex p-2 align-items-center">
            <img src={threeWhite} style={{marginRight:'1rem'}}/>
            <div className="p-2">
              <h6>NFT arrives at the destination chain.</h6>
              {/* <p style={{fontSize:'14px'}}>Transaction ID.</p> */}
            </div>
            <img
              className="ml-auto p-2"
              style={{marginRight:'1rem'}}
              src={
              props.destinationNftChainImg == null? "": props.destinationNftChainImg}
              alt=""
              width="45px"
            />
          </div>
        </div>

        {/* <div className="count-box pd-20">
          <p className="center" style={{fontSize:'16px'}}>Estimated Time</p>
          <div className="center">
            <Countdown className="center countdown" date={props.time}>
              <span  className="center countdown">Please keep this window open.</span>
            </Countdown>
          </div>
        </div>
        <div className="d-flex justify-content-around align-items-center">
          <div
            className="d-flex align-items-center flex-column"
            style={{ opacity: "0.6" }}
          >
            <img
              src={props.myNftOnImg == null ? "" : props.myNftOnImg}
              alt=""
              width="30px"
            />
            <h6 style={{ marginTop: "1.5rem" }}>Source Chain</h6>
          </div>
          <img src={arrowbridge} alt="" />
          <div className="d-flex align-items-center flex-column">
            <img
              src={
                props.destinationNftChainImg == null
                  ? ""
                  : props.destinationNftChainImg
              }
              alt=""
              width="30px"
            />
            <h6 style={{ marginTop: "1.5rem" }}>Destination</h6>
          </div>
        </div> */}
        <p className="center" style={{fontSize:'14px'}}>Keep this page open and we will notify when the process is done. You can mint and bridge another NFT on a new tab.</p>
      </div>
    </Modal>
    )
}
export default WaitingModal;