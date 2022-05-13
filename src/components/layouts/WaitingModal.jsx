import Countdown from "react-countdown";
import { Modal } from "react-bootstrap";

import arrowbridge from "../../assets/images/backgroup-secsion/arrow-bridge.svg";
import spin from '../../assets/images/icon/processing.gif'
import one from "../../assets/images/icon/1.svg";
import two from "../../assets/images/icon/2.svg";
import three from "../../assets/images/icon/3.svg";
import oneWhiteSpin from "../../assets/images/icon/one-white-spin.gif";
import twoWhiteSpin from "../../assets/images/icon/two-white-spin.gif";
import threeWhiteSpin from "../../assets/images/icon/three-white-spin.gif";
import greenCheck from "../../assets/images/icon/green-check.svg";
import axelarIcon from "../../assets/images/icon/axelar-Icon.svg";
import oneWhite from "../../assets/images/icon/oneWhite.svg";
import twoWhite from "../../assets/images/icon/twoWhite.svg";
import threeWhite from "../../assets/images/icon/threeWhite.svg";
import linkIcon from "../../assets/images/icon/link-icon.svg";
import { getExplorerUrl } from "../../utils/switchChain";
import { useEffect, useState } from "react";
import { maskAddress } from "../../utils/address";

const WaitingModal = (props) => {

  const [topic,setTopic] = useState('Axelar Network receives & transfers the NFT.')

  const [subdetail,setSubDetail] = useState("")
  const [detail,setDetail] = useState("")

  const [time, setTime] = useState(0);

  const [color,setColor] = useState('black')

  useEffect(() => {
    if (props.status == 1) {
      if (props.chainId == 80001) {
        setTime(Date.now() + 1200000)
      } else {
        setTime(Date.now() + 300000)
      }
    }
  }, [props.status])

  console.log('Chain ID', props.chainId)

    return (
    <Modal show={props.onShow} onHide={props.onHide}>
      <Modal.Header closeButton></Modal.Header>
      <div className="modal-body space-y-20 pd-20" style={{paddingTop:'1rem'}}>
        <h3 className="center congratulation-title">Bridging in progress</h3>
        <div className="d-flex flex-column justify-content-center" style={{marginTop:'-0.5rem'}}>
          <p className="center" style={{fontSize:'14px', marginTop:'auto'}}>The bridging process is 100% guarantee success.</p>
          <p className="center" style={{fontSize:'17px', marginTop:'-0.75rem',fontWeight:'700'}}>Your NFT will NEVER be lost.</p>
        </div>

        <div>
          <div className="transaction-step-box d-flex p-2 align-items-center">
          <img src={props.status >= 1 ? greenCheck : props.status < 1 ? oneWhiteSpin : one} style={{marginRight:'1rem', width:'30px'}}/>
            <div className="p-2">
              <h6>NFT leaves the source chain.</h6>
              {props.lockTx && <p style={{fontSize:'14px'}}>Transaction Hash: <a href={getExplorerUrl(props.chainId) + "/tx/" + props.lockTx} target="_blank">{maskAddress(props.lockTx)}</a></p>}
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
              <img src={props.status >= 2 ? greenCheck : props.status == 1 ? twoWhiteSpin : two} style={{marginRight:'1rem', width:'30px'}}/>
              <div className="d-flex flex-column ">
              <h6 style={{color:color}}>{topic}</h6>
                {detail}
                {props.lockTx && <p style={{fontSize:'14px',color:'#FF4F0D'}}>Real Time Check: <a href={"https://testnet.axelarscan.io/gmp/" + props.lockTx} target="_blank">{maskAddress(props.lockTx)} <a className="animation-gradient" style={{fontWeight:'600'}}>Click Here!</a></a></p>}
              </div>
               
              </div>
              <div className="d-flex justify-content-end flex-column align-items-center" style={{width:'55px' , marginRight:'1rem'}}>
              <img
                className="center"
                src={axelarIcon} style={{marginBottom:'0.25rem',width:'35px'}} alt="" />
                {props.lockTx && time &&
                      <Countdown
                      style={{fontSize:'12px', fontWeight:'500'}}  
                        onComplete={() => {
                          setTopic('Axelar Network is taking longer than expected. ')
                          setDetail(<p className="process-detail" style={{fontSize:'12px',lineHeight:'auto'}}><a className="animation-gradient" style={{fontWeight:'600',marginLeft:'0.2rem'}}>Your NFT is not lost!</a> It is waiting in a queue. The transfer will be completed when Axelar Network catches up.</p>)
                          setColor('#FF4F0D')
                        }}
                        date={time}>
                      </Countdown>
                }
              </div>
          </div>
        </div>
        <div className="">
          <div className="transaction-step-box d-flex p-2 align-items-center">
            <img src={props.status == 2 ? threeWhite : three } style={{marginRight:'1rem', width:'30px'}}/>
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
        <div className="d-flex flex-column justify-content-center">
        <p className="center" style={{fontSize:'14px'}}>Keep this page open. We will notify when the process is completed.</p>
        <p className="center" style={{fontSize:'14px'}}>You can mint and bridge another NFT on a new tab.</p>
        </div>
      </div>
    </Modal>
    )
}
export default WaitingModal;