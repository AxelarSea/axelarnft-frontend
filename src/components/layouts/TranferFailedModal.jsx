import { Modal } from "react-bootstrap";
import closeImg from "../../assets/images/icon/close.svg";
import deposit from "../../assets/images/icon/icon-deposit.svg";
import fund from "../../assets/images/icon/icon-fund.svg";
import network from "../../assets/images/icon/icon-network.svg";
import nolonger from "../../assets/images/icon/icon-nolonger.svg";

import ethLogo from "../../assets/images/icon/eth-logo.svg";
import polygonLogo from '../../assets/images/icon/polygon-logo.svg'
import avaxLogo from '../../assets/images/icon/avax-logo.svg'
import moonbeamLogo from '../../assets/images/icon/moonbeam-logo.svg'
import fantomLogo from '../../assets/images/icon/fantom-logo.svg'

const TransferFailedModal = (props) => {
  return (
    <Modal show={props.onShow} onHide={props.onHide}>
      <Modal.Header closeButton></Modal.Header>
      <div className="center pd-20">
        <img src={props.status < 1
            ? deposit
            : props.status < 2
            ? fund
            : props.status < 4
            ? network
            : props.status < 5
            ? fund
            : nolonger}
             alt="" width="200px" />
        <h3 style={{ color: "grey", marginTop: "3rem" }}>
          {props.status < 1
            ? "Axelar Network Unresponsive"
            : props.status < 2
            ? "Insufficient fund or gas!"
            : props.status < 4
            ? "Axelar Network Unresponsive"
            : props.status < 5
            ? "Our testnet relayer is running out of gas"
            : "This NFT is no longer available"}
        </h3>
        <p style={{ color: "grey", marginTop: "2rem", marginBottom: "3rem", fontSize:'13px', lineHeight:'20px'}}>
          {props.status < 1
            ? <div className="d-flex flex-column align-items-center">
                <a>Fail to get a deposit address.</a>
                <a>Please try again later in 30 minutes.</a>
              </div>
            : props.status < 2
            ? <a>Please request more LUNA from <a className="animation-gradient" style={{fontWeight:'600',cursor:'pointer'}} href="https://faucet.terra.money/">Faucet</a></a>
            : props.status < 4
            ? <div className="d-flex flex-column align-items-center">
                <a>It takes longer than expected for Axelar Network to transfer your funds.<a className="animation-gradient" style={{fontWeight:'600'}}>Your assets are safe on the destination chain</a> and available for purchase in the next transaction.</a>
                <a>Please try again later in 30 minutes.</a>
              </div>
            : props.status < 5
            ? <div className="d-flex flex-column align-items-center">
                <a>Your purchase is almost complete. In this Testnet deployment, our system pays the gas for users and we are running out of test token.</a>
                <a>Please consider donate some of your unused {props.chainId === 3 ? 'ETH(Robsten)' :props.chainId === 43113 ? 'AVAX(Fuji)' : props.chainId === 80001 ? 'MATIC' : props.chainId === 1287 ? 'Moonbeam(DEV)' : props.chainId === 4002 ? 'FTM' : ""}</a>
              </div>
            : <a>Oh no! Someone else just snatched the NFT.</a>}
        </p>
        <button onClick={props.onHide}>Refresh</button>
      </div>
    </Modal>
  );
};

export default TransferFailedModal;
