import { Modal } from "react-bootstrap";

import maintainImg from "../../assets/images/icon/maintain.svg";

const MaintainModal = (props) => {
  return (
    <Modal show={props.onShow} onHide={props.onHide}>
      <Modal.Header closeButton></Modal.Header>
      <div className="center p-4">
        <img src={maintainImg} alt="" width="200px" />
        <h2 className="my-4">Axelar Network is under maintenance</h2>
        <p>
          Buying and Bridging features are currently unavailable.
        </p>
        <p>
          Please try again later.
        </p>
        <button 
        style={{width:'100%', marginTop:'2rem'}}
        onClick={props.onHide}>Close</button>
      </div>
    </Modal>
  );
};
export default MaintainModal;


