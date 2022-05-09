import Countdown from "react-countdown";
import { Modal } from "react-bootstrap";

const WaitingModal = (props) => {

    return (
    <Modal show={props.onShow} onHide={props.onHide}>
      <Modal.Header closeButton></Modal.Header>
      <div className="d-flex flex-column  pd-20">
        <h1 className="center">Time remaining</h1>
        <Countdown className="center countdown" date={Date.now() + 300000}>
          <span  className="center countdown">Please keep this window open.</span>
          </Countdown>
      </div>  
    </Modal>
    )
}
export default WaitingModal;