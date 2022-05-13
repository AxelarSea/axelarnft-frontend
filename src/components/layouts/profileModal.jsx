import { Modal } from "react-bootstrap";
import closeImg from "../../assets/images/icon/close.svg";
import deposit from "../../assets/images/icon/icon-deposit.svg";
import fund from "../../assets/images/icon/icon-fund.svg";
import network from "../../assets/images/icon/icon-network.svg";
import nolonger from "../../assets/images/icon/icon-nolonger.svg";
import warningSign from "../../assets/images/icon/unavailable.svg";

const profileModal = (props) => {
  return (
    <Modal show={props.onShow} onHide={props.onHide}>
      <Modal.Header closeButton></Modal.Header>
      <div className="center pd-20">
        <img src={warningSign}
             alt="" width="200px" />
        <h3 style={{ color: "grey", marginTop: "3rem", padding:'0rem 2rem'}}>
        LUNA and UST listings are currently not supported
        </h3>
        <p style={{ color: "grey", marginTop: "2rem", marginBottom: "3rem", fontSize:'16px', lineHeight:'20px'}}>
        Please delist and relist NFT with price in AVAX
        </p>
        
      </div>
    </Modal>
  );
};

export default profileModal;
