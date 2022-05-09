import Countdown from "react-countdown";
import { Modal } from "react-bootstrap";

import arrowbridge from "../../assets/images/backgroup-secsion/arrow-bridge.svg";

const WaitingModal = (props) => {

    return (
    <Modal show={props.onShow} onHide={props.onHide}>
      <Modal.Header closeButton></Modal.Header>
      <div className="modal-body space-y-20 pd-20" style={{paddingTop:'1rem'}}>
        <h2 className="center congratulation-title">Bridging</h2>
        
        <p className="center">Processing</p>
        <p className="center" style={{marginTop:'auto'}}>the destination chain</p>
        <div className="count-box pd-20">
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
        </div>
        <p className="center">If the specified time is not successful</p>
        <p className="center" style={{marginTop:'auto'}}>you can report the Transaction ID via <a href="https://discord.gg/shGx3VZZ" target='_blank'>Discord.</a></p>
      </div>
    </Modal>
    )
}
export default WaitingModal;