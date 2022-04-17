import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Modal } from "react-bootstrap";

const TestnetCheck = (props) => {
    return (
        <Modal show={props.onShow} onHide={props.onHide}>
      <Modal.Header closeButton></Modal.Header>
      <div className="modal-tesnetcheck">
      <h5>Waiting for transaction, follow these steps:</h5>
          <input className="search-wallet" placeholder="0x5Fb622a85C7C8f3C3E03Cc751aBfAc1331b0C0A6" required="" />
        <h5 className="testnetquest">Quest : Mint at least 1 NFT in all five supported EVM chains</h5>
          <ul className="questlist">
            <li>Minted NFT on Ethereum Testnet (Ropsten)</li>
            <li>Minted NFT on Avalanche Fuji Testnet</li>
            <li>Minted NFT on Fantom Testnet</li>
            <li>Minted NFT on Moonbeam Alpha Testnet</li>
            <li>Minted NFT on Polygon Mumbai Testnet</li>
          </ul>
        <h5 className="testnetquest">Quest : Place NFT on sale on at least one of the five supported EVM chain</h5>
          <ul className="questlist">
            <li>Placed NFT on sale at least once.</li>
          </ul>
        <h5 className="testnetquest">Quest: Bought at least one NFT on AxelarSea (Optional)</h5>
          <ul className="questlist">
            <li>Bought an NFT using UST or LUNA</li>
          </ul>
        </div>

      </Modal>
    )
}
export default TestnetCheck
