import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Modal } from "react-bootstrap";
import checkcircle from "../../assets/images/icon/check-circle.svg";
import tool from "../../assets/images/icon/tool.svg";
import axios from 'axios'


const TestnetCheck = (props) => {

  const [data,setData] = useState({})
  
  const [wallet , setWallet] = useState('')

  const [metamaskAccount, setMetamaskAccount] = useState("");

 

  const connectWalletHandler = () => {
    if (window.ethereum && window.ethereum.isMetaMask) {
      console.log("MetaMask Here!");

      window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then((result) => {
         setWallet(result[0]);
          // setConnButtonText("Wallet Connected");
        })
        .catch((error) => {
          console.log(error)
        });
    } else {
      console.log("Need to install MetaMask");
      // setErrorMessage("Please install MetaMask browser extension to interact");
    }
  };



  // const fetchData = async() => {
  //   await axios.get(
  //     process.env.REACT_APP_API_HOST+'/api/nft/testnetv1/0x5ea89D6f46be3E783E45D094FF860f353e9C9c0c'
  //     ).then(res => {
  //       setData(res.data)
  //       console.log(res.data)
  //     }).catch(err => {
  //       console.log(err)
  //     })
  // }
  const walletSubmit = async(e)=>{
    e.preventDefault()
    await axios.get(
      process.env.REACT_APP_API_HOST+`/api/nft/testnetv1/${wallet}`
      ).then(res => {
        setData(res.data)
        console.log(res.data)
      }).catch(err => {
        console.log(err)
      })
  }



  const handleWalletChange = e => {
    setWallet(e.target.value)
  }

  useEffect(() => {
    // connectWallet()
    connectWalletHandler()
  },[])

  // useEffect(() => {
  //   fetchData()
  // },[])

    return (
        <Modal show={props.onShow} onHide={props.onHide}>
      <Modal.Header closeButton></Modal.Header>
      <div className="modal-body space-y-20 pd-40">
      <h5>Please enter your MetaMask wallet address:</h5>
      <form className="search-form" onSubmit={e => walletSubmit(e)}>         
       <input onChange={e =>handleWalletChange(e)} value={wallet} className="search-wallet" placeholder="Paste your MetaMask address and Enter." required="" />
       <button className="search search-submit d-flex align-items-center " style={{height:'38px'}}type="submit" value="submit">
        <i className="icon-fl-search-filled" ></i>
      </button>
      </form>
        <h5 className="testnetquest">Quest : Mint at least 1 NFT in all five supported EVM chains</h5>
          <ul className="questlist">
            <li className={data.mint_3 > 0 ? 'green' : 'questlist-text'}><img  src={checkcircle} width='20px' style={{marginRight:'1rem'}}/>Minted NFT on Ethereum Testnet (Ropsten)</li>
            <li className={data.mint_43113 > 0 ? 'green ' : 'questlist-text'}><img src={checkcircle} width='20px' style={{marginRight:'1rem'}}/>Minted NFT on Avalanche Fuji Testnet</li>
            <li className={data.mint_4002 > 0 ? 'green' : 'questlist-text'}><img src={checkcircle} width='20px' style={{marginRight:'1rem'}}/>Minted NFT on Fantom Testnet</li>
            <li className={data.mint_1287 > 0 ? 'green ' : 'questlist-text'}><img src={checkcircle} width='20px' style={{marginRight:'1rem'}}/>Minted NFT on Moonbeam Alpha Testnet</li>
            <li className={data.mint_80001 > 0 ? 'green ' : 'questlist-text'}><img src={checkcircle} width='20px' style={{marginRight:'1rem'}}/>Minted NFT on Polygon Mumbai Testnet</li>
          </ul>
        <h5 className="testnetquest">Quest : Place NFT on sale on at least one of the five supported EVM chain</h5>
          <ul className="questlist">
            <li className={data.list_3 > 0 ? 'green' : data.list_1287 > 0 ?  'green' : data.list_4002 > 0 ? 'green' : data.list_43113 > 0 ? 'green' : data.list_80001 > 0 ? 'green' : 'questlist-text'}><img src={checkcircle} width='20px' style={{marginRight:'1rem'}}/>Placed NFT on sale at least once.</li>
          </ul>
        <h5 className="testnetquest">Quest: Bought at least one NFT on AxelarSea (Optional)</h5>
          <ul className="questlist">
            <li className={data.buy_3 > 0 ? 'green' : data.buy_1287 > 0 ?  'green' : data.buy_4002 > 0 ? 'green' : data.buy_43113 > 0 ? 'green' : data.buy_80001 > 0 ? 'green' : 'questlist-text'}><img src={tool} width='20px' style={{marginRight:'1rem'}}/>Bought an NFT using UST or LUNA</li>
          </ul>
        </div>

      </Modal>
    )
}
export default TestnetCheck
