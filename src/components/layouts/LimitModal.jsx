import { Modal } from "react-bootstrap";
import limitSign from "../../assets/images/icon/icon-limit.svg";

const LimitModal = (props) => {
  return (
    <Modal show={props.onShow} onHide={props.onHide}>
      <Modal.Header closeButton></Modal.Header>
      <div className="center pd-20">
        <img src={limitSign}
             alt="" width="200px" />
        <h3 style={{ color: "grey", marginTop: "3rem", padding:'0rem 2rem'}}>
        Hourly Transaction Quota Has Been Reached.
        </h3>
        <div>
          <p>We have placed a limit of <a className="animation-gradient" style={{fontWeight:'600'}}>100 transactions per hour</a> to ensure</p>
          <p>a smoother experience.This is due to the infrastructure of</p>
          <p>Testnet RPC and maximum load of Axelar Testnet Network.</p>
          <p><a className="animation-gradient" style={{fontWeight:'600'}}>There will be NO limit in the Mainnet version.</a></p>
        </div>
        <div>
          <p>The transaction quota will be refreshed at the start</p>
          <p>of each hour. Please try again later</p>
        </div>
      </div>
    </Modal>
  );
};

export default LimitModal;
