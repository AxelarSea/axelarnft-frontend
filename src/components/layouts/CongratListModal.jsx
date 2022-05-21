import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Modal } from "react-bootstrap";
import { maskAddress } from "../../utils/address";

import ethLogo from '../../assets/images/icon/eth-logo.svg'
import polygonLogo from '../../assets/images/icon/polygon-logo.svg'
import avaxLogo from '../../assets/images/icon/avax-logo.svg'
import moonbeamLogo from '../../assets/images/icon/moonbeam-logo.svg'
import fantomLogo from '../../assets/images/icon/fantom-logo.svg'

import avt from "../../assets/images/avatar/satoshi.svg";


const CongratListModal = (props) => {
  
  return (
    <Modal show={props.onShow} onHide={props.onHide}>
      <Modal.Header closeButton></Modal.Header>
      <div className="modal-body space-y-20 pd-20">
        <h2 className="d-flex justify-content-center congratulation-title" style={{marginTop:'-1.5rem'}}>
        Listing Successful
        </h2>
        <div className="d-flex justify-content-center">
          <div className="nftbridge-card pd-10">
            <div className="nftbridge-nft-img-box d-flex justify-content-center">
              <img
                className="nftbridge-nft-img"
                src={props.img == null ? "" : props.img}
                alt="AxelarSea"
                width="200px"
              />
              {/* style={{height:'200px'}} */}
            </div>
            <div className="card-title mg-bt-6" style={{ marginTop: "10px" }}>
              <h5 className="nft-text-l">
                {props.name == null ? "" : props.name}
              </h5>
            </div>
            <div className="meta-info d-flex justify-content-between align-items-center">
              <div className="author d-flex align-items-center">
                <div className="avatar">
                  <img
                    className="avt-img"
                    src={avt}
                    alt="AxelarSea"
                    width="30px"
                  />
                </div>
                <div className="info" style={{ marginLeft: "1rem" }}>
                  <span className="nft-text-s">Owned By</span>
                  <h6 className="nft-text-m">
                    {props.owner == null
                      ? ""
                      : maskAddress(props.owner)}
                  </h6>
                </div>
              </div>
              <div className="">
              <img src={props.chainId === '3' ? ethLogo : props.chainId === '1287' ? moonbeamLogo : props.chainId === '43113' ? avaxLogo : props.chainId === '80001' ? polygonLogo : props.chainId === '4002' ? fantomLogo : ''} alt="" width="30" height="30" />
              </div>
            </div>
            <hr style={{border:'0.5px solid #c4c4c4'}}/>
            <div>
              <p style={{marginTop:'-2rem', fontSize:'12px'}}>Price</p>
              <p className="d-flex align-items-center" style={{margintop:'-1rem', fontSize:'16px'}}>
                <img src={avaxLogo} style={{width:'25px', marginRight:'1rem'}}/>
                {props.listPrice}
                </p>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center">
          
            
          
          
            <button 
            style={{width:'100%'}}
            onClick={() => window.open("/ItemDetails?chainId=" +
            props.chainId +
            "&collection=" +
            props.collectionAddress +
            "&tokenId=" +
            props.tokenId)}>
              View Detail
            </button>
          
          
        </div>
      </div>
    </Modal>
  );
};

export default CongratListModal;
