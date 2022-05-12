import { Modal } from "react-bootstrap";
import closeImg from "../../assets/images/icon/close.svg";

const TransferFailedModal = (props) => {
  return (
    <Modal show={props.onShow} onHide={props.onHide}>
      <Modal.Header closeButton></Modal.Header>
      <div className="center pd-20">
        <img src={closeImg} alt="" width="200px" />
        <h3 style={{ color: "grey", marginTop: "3rem" }}>
          {props.status < 1
            ? "Axelar Network Unresponsive"
            : props.status < 2
            ? "Insufficient fund or gas!"
            : props.status < 4
            ? "Axelar Network Unresponsive"
            : "Transfer Failed"}
        </h3>
        <p style={{ color: "grey", marginTop: "2rem", marginBottom: "3rem", fontSize:'13px', lineHeight:'20px'}}>
          {props.status < 1
            ? <a>Axelar Network Unresponsive Fail to get a deposit address. Please try again later in 30 minutes.</a>
            : props.status < 2
            ? <a>Please request luna from faucet and swap some luna to ust! Or you have cancelled your transaction.</a>
            : props.status < 4
            ? <a>Axelar Network Unresponsive It takes longer than expected for Axelar Network to transfer your funds. <a className="animation-gradient" style={{fontWeight:'600'}}>Your assets are safe on the destination chain</a> and available for purchase in the next transaction. Please try again later in 30 minutes.</a>
            : <a>NFT is no longer available Oh no! Someone else just snatch the NFT. Your funds are safe on the destination chain and available for your next purchase.</a>}
        </p>
        <button onClick={props.onHide}>Refresh</button>
      </div>
    </Modal>
  );
};

export default TransferFailedModal;
