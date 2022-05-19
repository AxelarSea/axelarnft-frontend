import { Modal } from "react-bootstrap";
import limitSign from "../../assets/images/icon/icon-limit.svg";

const LimitModal = (props) => {
  return (
    <Modal show={props.onShow} onHide={props.onHide}>
      <Modal.Header closeButton></Modal.Header>
      <div className="center pd-20">
        <img src={limitSign}
             alt="" width="100px" />
        <h3 style={{fontSize:'20px', color: "grey", marginTop: "3rem", padding:'0rem 2rem', marginBottom:'1.5rem'}}>
        Hourly Transaction Quota Has Been Reached.
        </h3>
        <div className="d-flex flex-column justify-content-center">
          <p style={{fontSize:'16px', lineHeight:'25px'}}>We have placed a limit of <a className="animation-gradient" style={{fontWeight:'600'}}>100 transactions per hour</a> to ensure</p>
          <p style={{fontSize:'16px', lineHeight:'25px'}}>a smoother experience.This is due to the infrastructure of</p>
          <p style={{fontSize:'16px', lineHeight:'25px'}}>Testnet RPC and maximum load of Axelar Testnet Network.</p>
          <p style={{fontSize:'16px', lineHeight:'25px'}}><a className="animation-gradient" style={{fontWeight:'600'}}>There will be NO limit in the Mainnet version.</a></p>
        </div>
        <div className="d-flex flex-column justify-content-center" style={{marginTop:'1.5rem'}}>
          <p style={{fontSize:'16px', lineHeight:'25px'}}>The transaction quota will be refreshed at the start</p>
          <p style={{fontSize:'16px', lineHeight:'25px'}}>of each hour. Please try again later.</p>
        </div>
      </div>
    </Modal>
  );
};

export default LimitModal;
