import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Modal } from "react-bootstrap";
import { maskAddress } from "../../utils/address";

import avt from "../../assets/images/avatar/satoshi.svg";
import arrowbridge from "../../assets/images/backgroup-secsion/arrow-bridge.svg";
import ethLogo from "../../assets/images/icon/eth-logo.png";
import moonbeamLogo from "../../assets/images/icon/moonbeam-logo.png";
import polygonLogo from "../../assets/images/icon/polygon-logo.png";
import avaxLogo from "../../assets/images/icon/avax-logo.png";
import fantomLogo from "../../assets/images/icon/fantom-logo.png";
import { getDestinationNftAddress } from "../../utils/api";

const CongratBridgeModal = (props) => {
  console.log(props.nftSelect);
  const viewDetail = async (
    sourceChainId,
    collectionAddress,
    destChainId,
    tokenId
  ) => {
    let destAddress = await getDestinationNftAddress(
      sourceChainId,
      collectionAddress,
      destChainId
    );
    window.open(
      "/ItemDetails?chainId=" +
        destChainId +
        "&collection=" +
        destAddress +
        "&tokenId=" +
        tokenId,
        "_self"
    );
  };

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
          Your NFT Bridge is finish!
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
        <div className="d-flex justify-content-around align-items-center">
          <div
            className="d-flex align-items-center flex-column"
            style={{ opacity: "0.6" }}
          >
            <img
              src={props.myNftOnImg == null ? "" : props.myNftOnImg}
              alt=""
              width="30px"
            />
            <h6 style={{ marginTop: "1.5rem" }}>Source Chain</h6>
          </div>
          <img src={arrowbridge} alt="" />
          <div className="d-flex align-items-center flex-column">
            <img
              src={
                props.destinationNftChainImg == null
                  ? ""
                  : props.destinationNftChainImg
              }
              alt=""
              width="30px"
            />
            <h6 style={{ marginTop: "1.5rem" }}>Destination</h6>
          </div>
        </div>

        <div className="d-flex justify-content-center">
          <button
            onClick={() =>
              viewDetail(
                props.nftSelect.chainId,
                props.nftSelect.collectionAddress,
                props.destinationNftChainId,
                props.nftSelect.tokenId
              )
            }
          >
            View Detail
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default CongratBridgeModal;
