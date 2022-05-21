import { Modal } from "react-bootstrap";
import submitSign from "../../assets/images/icon/icon-submit.svg";

const transactionSubmitModal = (props) => {
  return (
    <Modal show={props.onShow} onHide={props.onHide}>
      <Modal.Header closeButton></Modal.Header>
      <div className="center pd-20">
        <img src={submitSign}
             alt="" width="200px" />
        <h3 style={{ color: "grey", marginTop: "3rem", padding:'0rem 2rem'}}>
        Transaction Submitted
        </h3>
        <p style={{ color: "grey", marginTop: "2rem", marginBottom: "3rem", fontSize:'16px', lineHeight:'20px'}}>
        Waiting for transaction confirm you can view status on Explorer
        </p>
        <button onClick={props.onHide}>Close</button>
      </div>
    </Modal>
  );
};

export default transactionSubmitModal;
