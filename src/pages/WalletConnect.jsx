import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

import img1 from "../assets/images/icon/connect-1.png";
import img2 from "../assets/images/icon/connect-2.png";
import img3 from "../assets/images/icon/connect-3.png";
import img4 from "../assets/images/icon/connect-4.png";
import img5 from "../assets/images/icon/connect-5.png";
import img6 from "../assets/images/icon/connect-6.png";
import img7 from "../assets/images/icon/connect-7.png";
import img8 from "../assets/images/icon/connect-8.png";
import HeaderStyle2 from "../components/header/HeaderStyle2";

import { ethers } from "ethers";
import web3 from "../hooks/web3";

function maskAddress(address) {
  return address.substring(0, 6) + '...' + address.substring(address.length - 4);
}

const WalletConnect = () => {
  const [errorMessage, setErrorMessage] = useState(null);
  const [web3Account, setWeb3Account] = useState(null);
  const [userBalance, setUserBalance] = useState(null);
  const [connButtonText, setConnButtonText] = useState("Connect Wallet");

  const connectWalletHandler = () => {
    if (window.ethereum && window.ethereum.isMetaMask) {
      console.log("MetaMask Here!");

      window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then((result) => {
          accountChangedHandler(result[0]);
          setConnButtonText("Wallet Connected");
          getAccountBalance(result[0]);
        })
        .catch((error) => {
          setErrorMessage(error.message);
        });
    } else {
      console.log("Need to install MetaMask");
      setErrorMessage("Please install MetaMask browser extension to interact");
    }
  };

  // update account, will cause component re-render
  const accountChangedHandler = (newAccount) => {
    // console.log(newAccount);
    setWeb3Account(newAccount);
    getAccountBalance(newAccount.toString());

    // console.log(web3.eth.accounts[0]);
  };

  const getAccountBalance = (account) => {
    window.ethereum
      .request({ method: "eth_getBalance", params: [account, "latest"] })
      .then((balance) => {
        setUserBalance(ethers.utils.formatEther(balance));
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  };

  const chainChangedHandler = () => {
    // reload the page to avoid any errors with chain change mid use of application
    window.location.reload();
  };

  // listen for account changes
  window.ethereum.on("accountsChanged", accountChangedHandler);

  window.ethereum.on("chainChanged", chainChangedHandler);

  // console.log(web3.eth.accounts[0]);
  console.log(web3Account);

  const data = [
    {
      img: img1,
      title: "Metamask",
      description: "ETH (Ropsten), AVAX, Fantom Testnet",
      onClick: connectWalletHandler,
      address: web3Account,
    },
    {
      img: img2,
      title: "Terra Station",
      description: "Terra Testnet",
    },
    // {
    //     img: img3,
    //     title: 'Fortmatic',
    //     description: 'Potenti eleifend faucibus quo vero nibh netus suspendisse unde? Consectetuer aspernatur'
    // },
    // {
    //     img: img4,
    //     title: 'Wallet Connect',
    //     description: 'Metus corrupti itaque reiciendis, provident condimentum, reprehenderit numquam, mi'
    // },
    // {
    //     img: img5,
    //     title: 'Coinbase Wallet',
    //     description: 'Sollicitudin iure conubia vivamus habitasse aptent, eligendi deserunt excepteur tellus non'
    // },
    // {
    //     img: img6,
    //     title: 'Authereum',
    //     description: 'Purus irure lacinia eiusmod inventore bibendum habitant potenti non sint rem! Felis, asper'
    // },
    // {
    //     img: img7,
    //     title: 'Kaikas',
    //     description: 'Varius culpa, aspernatur accusantium? Corporis rhoncus, voluptatibus incididunt, velit '
    // },
    // {
    //     img: img8,
    //     title: 'Torus',
    //     description: ' Soluta fuga nihil, mollitia, ad reprehenderit qui viverra culpa posuere labore inventore'
    // },
  ];

  useEffect(() => {
    connectWalletHandler();
  }, [])

  return (
    <div>
      <HeaderStyle2 />
      <section className="flat-title-page inner">
        <div className="overlay"></div>
        <div className="themesflat-container">
          <div className="row">
            <div className="col-md-12">
              <div className="page-title-heading mg-bt-12">
                <h1 className="heading text-center">Connect Wallet</h1>
              </div>
              <div className="breadcrumbs style2">
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  {/* <li><Link to="#">Pages</Link></li> */}
                  <li>Connect Wallet</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="tf-connect-wallet tf-section">
        <div className="themesflat-container">
          <div className="row">
            <div className="col-12">
              <h2 className="tf-title-heading ct style-2 mg-bt-12">
                Connect Your Wallet
              </h2>
              <h5 className="sub-title ct style-1 pad-400">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Laborum obcaecati dignissimos quae quo ad iste ipsum officiis
                deleniti asperiores sit.
              </h5>
            </div>
            <div className="col-md-12">
              <div className="sc-box-icon-inner style-2">
                {data.map((item, index) => (
                  <div
                    key={index}
                    className="sc-box-icon"
                    onClick={item.onClick}
                  >
                    <div className="img">
                      <img src={item.img} alt="Axies" />
                    </div>
                    <h4 className="heading">{item.title}</h4>
                    <p className="content" style={{ marginBottom: 8 }}>
                      {item.address ? maskAddress(item.address) : "Not Connected"}
                    </p>
                    <p className="content">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default WalletConnect;
