import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Modal } from "react-bootstrap";
import checkcircle from "../../assets/images/icon/check-circle.svg";
import greenCheck from "../../assets/images/icon/green-check.svg";
import tool from "../../assets/images/icon/tool.svg";
import axios from 'axios'
import { ethers } from "ethers";


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
    if (e) e.preventDefault()
    await axios.get(
      process.env.REACT_APP_API_HOST+`/api/nft/testnetv1/${ethers.utils.getAddress(wallet)}`
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

  useEffect(() => {
    walletSubmit()
  }, [wallet]);

  // useEffect(() => {
  //   fetchData()
  // },[])

  const bridgePassed = (
    data.bridge_unlock_1287 +
      data.bridge_unlock_3 +
      data.bridge_unlock_4002 +
      data.bridge_unlock_43113 +
      data.bridge_unlock_80001 >
      0 &&
    data.bridge_back_1287 +
      data.bridge_back_3 +
      data.bridge_back_4002 +
      data.bridge_back_43113 +
      data.bridge_back_80001 >
      0 &&
    data.bridge_lock_mirror_1287 +
      data.bridge_lock_mirror_3 +
      data.bridge_lock_mirror_4002 +
      data.bridge_lock_mirror_43113 +
      data.bridge_lock_mirror_80001 -
      (data.bridge_back_1287 +
        data.bridge_back_3 +
        data.bridge_back_4002 +
        data.bridge_back_43113 +
        data.bridge_back_80001) >
      0
  )

  const [networkStatus , setNetWorkStatus] = useState('')

  useEffect(() => {
    if (!parseInt(process.env.REACT_APP_UNDER_MAINTENANCE)){
      setNetWorkStatus(false)
    }
    else{
      setNetWorkStatus(true)
    }
    console.log(!parseInt(process.env.REACT_APP_UNDER_MAINTENANCE))
  },[])

    return (
        <Modal show={props.onShow} onHide={props.onHide}>
      <Modal.Header closeButton></Modal.Header>
      <div className="modal-body space-y-20 pd-20">
      <h5 className="center" style={{marginTop:'-15px'}}>Your connected MetaMask wallet address</h5>
      <form className="search-form" onSubmit={e => walletSubmit(e)}>         
       <input onChange={e =>handleWalletChange(e)} style={{width:'100%'}} value={wallet} className="search-wallet" placeholder="Paste your MetaMask address and Enter." required="" />
       <button className="search search-submit d-flex align-items-center " style={{height:'38px'}}type="submit" value="submit">
        <i className="icon-fl-search-filled" ></i>
       </button>
      </form>
      <div 
      className="d-flex aligh-items-center justify-content-between"
      style={{marginTop:'0.5rem'}}
      >
        <p 
        className="d-flex align-items-center justify-content-center"
        style={{fontSize:'12px', fontWeight:'700'}}
        >
          Network Status:
          <a style={{marginLeft:'0.3rem'}}>{networkStatus ? 'Operational': 'Under Maintenance'}</a>
          <div 
          className={networkStatus ? "animation-piont-green": "animation-piont-red"} 
          style={{marginLeft:'0.2rem'}}
          >
          </div>
        </p>
        <p 
        className="d-flex align-items-center justify-content-center"
        style={{fontSize:'12px', fontWeight:'700', marginRight:'6rem'}}
        >
          Campaign Duration: <a style={{marginLeft:'0.3rem'}}>{networkStatus ? 'Now-TBD': 'Now-TBD'}</a>
        </p>
      </div>
        <h5 className="testnetquest" style={{marginTop:'0.5rem'}}>Mint NFTs on at least three supported EVM chains.</h5>
          <ul className="questlist" style={{marginTop:'0.75rem'}}>
            <li className={data.mint_3 > 0 ? 'green' : 'questlist-text'}><img  src={data.mint_3 > 0 ? greenCheck : checkcircle} width='20px' style={{marginRight:'1rem', marginLeft:'0.5rem'}}/>Minted NFT on Ethereum Testnet (Ropsten)</li>
            <li className={data.mint_43113 > 0 ? 'green ' : 'questlist-text'}><img src={data.mint_43113 > 0 ? greenCheck : checkcircle} width='20px' style={{marginRight:'1rem', marginLeft:'0.5rem'}}/>Minted NFT on Avalanche Fuji Testnet</li>
            <li className={data.mint_4002 > 0 ? 'green' : 'questlist-text'}><img src={data.mint_4002 > 0 ? greenCheck : checkcircle} width='20px' style={{marginRight:'1rem', marginLeft:'0.5rem'}}/>Minted NFT on Fantom Testnet</li>
            <li className={data.mint_1287 > 0 ? 'green ' : 'questlist-text'}><img src={data.mint_1287 > 0 ? greenCheck : checkcircle} width='20px' style={{marginRight:'1rem', marginLeft:'0.5rem'}}/>Minted NFT on Moonbeam Alpha Testnet</li>
            <li className={data.mint_80001 > 0 ? 'green ' : 'questlist-text'}><img src={data.mint_80001 > 0 ? greenCheck : checkcircle} width='20px' style={{marginRight:'1rem', marginLeft:'0.5rem'}}/>Minted NFT on Polygon Mumbai Testnet</li>
          </ul>
        <h5 className="testnetquest d-flex align-items-center" style={{marginTop:'1.5rem'}}>Place an NFT on sale <a href="https://youtu.be/sysSofNXAPk"  target="_blank" style={{marginLeft:'1rem', fontSize:'14px', cursor:'pointer', color:'gray', backgroundColor:'#f8f8f8', padding:'1.5px', borderRadius:'5px', border:'0.5px solid gray'}}>Guide</a></h5>
          <ul className="questlist" style={{marginTop:'0.75rem'}}>
            <li className={data.list_3 > 0 ? 'green' : data.list_1287 > 0 ?  'green' : data.list_4002 > 0 ? 'green' : data.list_43113 > 0 ? 'green' : data.list_80001 > 0 ? 'green' : 'questlist-text'}><img src={data.list_3 > 0 ? greenCheck : data.list_1287 > 0 ?  greenCheck : data.list_4002 > 0 ? greenCheck : data.list_43113 > 0 ? greenCheck : data.list_80001 > 0 ? greenCheck : checkcircle} width='20px' style={{marginRight:'1rem', marginLeft:'0.5rem'}}/>Placed NFT on sale at least once.</li>
          </ul>
        <h5 className="testnetquest d-flex align-items-center" style={{marginTop:'1.5rem'}}>Buy an NFT on AxelarSea<a href="https://youtu.be/1Bh89jYzy-8"  target="_blank" style={{marginLeft:'1rem', fontSize:'14px', cursor:'pointer', color:'gray', backgroundColor:'#f8f8f8', padding:'1.5px', borderRadius:'5px', border:'0.5px solid gray'}}>Guide</a></h5>
          <ul className="questlist" style={{marginTop:'0.75rem'}}>
            <li className={data.buy_3 > 0 ? 'green' : data.buy_1287 > 0 ?  'green' : data.buy_4002 > 0 ? 'green' : data.buy_43113 > 0 ? 'green' : data.buy_80001 > 0 ? 'green' : 'questlist-text'}><img src={data.buy_3 > 0 ? greenCheck : data.buy_1287 > 0 ?  greenCheck : data.buy_4002 > 0 ? greenCheck : data.buy_43113 > 0 ? greenCheck : data.buy_80001 > 0 ? greenCheck : checkcircle} width='20px' style={{marginRight:'1rem', marginLeft:'0.5rem'}}/>Bought an NFT using UST or LUNA (Optional)</li>
          </ul>
          <hr style={{marginTop:'1rem', marginBottom:'-1rem'}}/>
        <h5 className="testnetquest d-flex align-items-center" style={{marginTop:'1.5rem'}}>Bridge an NFT on AxelarSea<a href="https://youtu.be/mRK8HH_diH4"  target="_blank" style={{marginLeft:'1rem', fontSize:'14px', cursor:'pointer', color:'gray', backgroundColor:'#f8f8f8', padding:'1.5px', borderRadius:'5px', border:'0.5px solid gray'}}>Guide</a><a className="newpage-title" style={{marginLeft:'1rem'}}>New!</a></h5>
          <ul className="questlist" style={{marginTop:'0.75rem'}}>
            <li className={bridgePassed ? 'green' : "questlist-text"}><img className="align-self-start" src={bridgePassed ? greenCheck : checkcircle} width='20px' style={{marginRight:'1rem', marginLeft:'0.5rem'}}/>Bridge one of your NFTs in a loop with at least 2 side chains.</li>
            <p className="center" style={{fontSize:'12px', marginTop:'0.5rem', lineHeight: '18px'}}>For example, users can bridge an NFT from Avalanche &gt; Fantom &gt; Moonbeam &gt; Avalanche to complete the loop.</p>
          </ul>
          {/* <p className="center" style={{fontSize:'14px', marginTop:'1rem'}}>Guide: How to place a sale - <a href="https://youtu.be/sysSofNXAPk"  target="_blank">here</a></p>
          <p className="center" style={{marginTop:'0.5rem', fontSize:'14px', marginTop:'1rem'}}>Guide: How to make a buy - <a href="https://youtu.be/1Bh89jYzy-8" target="_blank">here</a></p>
          <p className="center" style={{marginTop:'0.5rem', fontSize:'14px', marginTop:'1rem'}}>Guide: How to bridge - <a href="https://youtu.be/mRK8HH_diH4" target="_blank">here</a></p> */}
        </div>
      </Modal>
    )
}
export default TestnetCheck
