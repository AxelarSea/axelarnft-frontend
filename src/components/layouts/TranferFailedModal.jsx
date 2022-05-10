import { Modal } from "react-bootstrap";
import closeImg from '../../assets/images/icon/close.svg'


const TransferFailedModal = (props) => {
    return (
        <Modal show={props.onShow} onHide={props.onHide}>
        <Modal.Header closeButton></Modal.Header>
        <div className="center pd-20">
            <img src={closeImg} alt="" width="200px"/>
            <h2 style={{color:'grey' , marginTop:'3rem'}}>{props.status < 1 ? "Axelar Error" : (props.status < 2 ? "Insufficient fund or gas!" : "Transfer Failed")}</h2>
            <p style={{color:'grey' , marginTop:'3rem' , marginBottom:'3rem'}}>{props.status < 1 ? "Cannot get deposit address!" : (props.status < 2 ? "Please request luna from faucet and swap some luna to ust!" : "The NFT is no longer available for sale.")}</p>
            <button onClick={props.onHide}>
                Refresh
            </button>
        </div>
        
        </Modal>
    )
}

export default TransferFailedModal;