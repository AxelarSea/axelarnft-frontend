import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Modal } from "react-bootstrap";
import { maskAddress } from "../../utils/address";

import avt from "../../assets/images/avatar/satoshi.svg";


const CongratBuyModal = (props) => {
  
  return (
    <Modal show={props.onShow} onHide={props.onHide}>
      <Modal.Header closeButton></Modal.Header>
      <div className="modal-body space-y-20 pd-40">
        <h2 className="d-flex justify-content-center congratulation-title">
          Congratulations
        </h2>
        <h6
          className="d-flex justify-content-center"
          style={{ marginTop: "10px" }}
        >
          Your NFT successful purchase!
        </h6>
        <div className="d-flex justify-content-center">
          <div className="nftbridge-card pd-10">
            <div className="nftbridge-nft-img-box d-flex justify-content-center">
              <img
                className="nftbridge-nft-img"
                src={props.nftSelect == null ? "" : props.nftSelect.img}
                alt="AxelarSea"
                width="200px"
              />
              {/* style={{height:'200px'}} */}
            </div>
            <div className="card-title mg-bt-6" style={{ marginTop: "10px" }}>
              <h5 className="nft-text-l">
                {props.nftSelect == null ? "" : props.nftSelect.title}
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
                    {props.nftSelect == null
                      ? ""
                      : maskAddress(props.nftSelect.nameAuthor)}
                  </h6>
                </div>
              </div>
              <div className="">
                <img
                  className="chain-icon"
                  src={
                    props.destinationNftChainImg == null
                      ? ""
                      : props.destinationNftChainImg
                  }
                  alt=""
                  width="25px"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <button>
            View Detail
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default CongratBuyModal;
