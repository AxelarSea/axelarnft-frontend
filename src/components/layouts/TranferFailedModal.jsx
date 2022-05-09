import { Modal } from "react-bootstrap";
import closeImg from '../../assets/images/icon/close.svg'


const TransferFailedModal = (props) => {
    return (
        <Modal show={props.onShow} onHide={props.onHide}>
        <Modal.Header closeButton></Modal.Header>
        <div className="center pd-20">
            <img src={closeImg} alt="" width="200px"/>
            <h2 style={{color:'grey' , marginTop:'3rem'}}>Transfer Failed</h2>
            <p style={{color:'grey' , marginTop:'3rem' , marginBottom:'3rem'}}>The NFT is no longer available for sale.</p>
            <button onClick={props.onHide}>
                Refresh
            </button>
        </div>
        
        </Modal>
    )
}

export default TransferFailedModal;