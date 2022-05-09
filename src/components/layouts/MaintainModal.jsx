import { Modal } from "react-bootstrap";

import maintainImg from '../../assets/images/icon/maintain.svg'


const MaintainModal = (props) => {
  if (!parseInt(process.env.REACT_APP_UNDER_MAINTENANCE)) return <div></div>

    return (
        <Modal show={props.onShow} >
      <Modal.Header ></Modal.Header>
      <div className="center">
      <img src={maintainImg} alt="" width="200px"/>
        <h1>Axelar network
        Under maintenance</h1>
        <p>We are currently facing some issues with our system and our team is working hard to resolve it.</p>
      </div>
       
      </Modal>
    )
}
export default MaintainModal;