import { Modal } from "react-bootstrap";


const TransferFailedModal = (props) => {
    return (
        <Modal show={props.onShow} onHide={props.onHide}>
        <Modal.Header closeButton></Modal.Header>
        Transfer Failed
        <button onClick={props.onHide}>
            Refresh
        </button>
        </Modal>
    )
}

export default TransferFailedModal;