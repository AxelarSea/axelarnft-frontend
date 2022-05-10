import { Modal } from "react-bootstrap";
import closeImg from "../../assets/images/icon/close.svg";

const TransferFailedModal = (props) => {
  return (
    <Modal show={props.onShow} onHide={props.onHide}>
      <Modal.Header closeButton></Modal.Header>
      <div className="center pd-20">
        <img src={closeImg} alt="" width="200px" />
        <h2 style={{ color: "grey", marginTop: "3rem" }}>
          {props.status < 1
            ? "Axelar Error"
            : props.status < 2
            ? "Insufficient fund or gas!"
            : props.status < 4
            ? "Axelar Network Unresponsive"
            : "Transfer Failed"}
        </h2>
        <p style={{ color: "grey", marginTop: "3rem", marginBottom: "3rem" }}>
          {props.status < 1
            ? "Axelar Network Unresponsive Fail to get a deposit address. Please try again later in 30 minutes."
            : props.status < 2
            ? "Please request luna from faucet and swap some luna to ust! Or you have cancelled your transaction."
            : props.status < 4
            ? "Axelar Network Unresponsive It takes longer than expected for Axelar Network to transfer your funds. Your assets are safe on the destination chain and available for purchase in the next transaction. Please try again later in 30 minutes."
            : "NFT is no longer available Oh no! Someone else just snatch the NFT. Your funds are safe on the destination chain and available for your next purchase."}
        </p>
        <button onClick={props.onHide}>Refresh</button>
      </div>
    </Modal>
  );
};

export default TransferFailedModal;
