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
import { useWallet } from "@terra-money/wallet-provider";
import { maskAddress } from "../utils/address";

const WalletConnect = () => {
  const [errorMessage, setErrorMessage] = useState(null);
  const [web3Account, setWeb3Account] = useState(null);
  const [userBalance, setUserBalance] = useState(null);
  const [connButtonText, setConnButtonText] = useState("Connect Wallet");
  const [keplrAddress, setKeplrAddress] = useState("");
  const [terraWallet, setTerraWallet] = useState(window.localStorage.getItem("TERRA_WALLET") || "TERRA_STATION")

  const {
    status,
    network,
    wallets,
    availableConnectTypes,
    availableInstallTypes,
    availableConnections,
    supportFeatures,
    connect,
    install,
    disconnect,
  } = useWallet();

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
    if (Array.isArray(newAccount)) {
      newAccount = newAccount[0] || "";
    }
    setWeb3Account(newAccount);
    getAccountBalance(newAccount.toString());
    // window.location.reload();

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
    // window.location.reload();
  };

  // listen for account changes
  window.ethereum.on("accountsChanged", accountChangedHandler);

  window.ethereum.on("chainChanged", chainChangedHandler);

  // console.log(web3.eth.accounts[0]);
  console.log(web3Account);

  function connectTerra() {
    connect("EXTENSION");
    window.localStorage.setItem("TERRA_WALLET", "TERRA_STATION");
    setTerraWallet("TERRA_STATION")
  }

  async function refreshKeplr() {
    const chainId = "bombay-12";
    const offlineSigner = window.keplr.getOfflineSigner(chainId);
    const accounts = await offlineSigner.getAccounts();
    setKeplrAddress(accounts[0]?.address || "");
    window.localStorage.setItem("TERRA_WALLET", "KEPLR");
    setTerraWallet("KEPLR")
  }

  async function connectKeplr() {
    if (!window.keplr) {
      window.alert("Please install Keplr wallet");
      return;
    }

    const chainId = "bombay-12";

    window.keplr.experimentalSuggestChain({
      // Chain-id of the Cosmos SDK chain.
      chainId,
      // The name of the chain to be displayed to the user.
      chainName: "Terra Bombay-12",
      // RPC endpoint of the chain.
      rpc: "https://bombay.stakesystems.io:2053",
      // REST endpoint of the chain.
      rest: "https://bombay-lcd.terra.dev",
      // Staking coin information
      stakeCurrency: {
          // Coin denomination to be displayed to the user.
          coinDenom: "LUNA",
          // Actual denom (i.e. uatom, uscrt) used by the blockchain.
          coinMinimalDenom: "uluna",
          // # of decimal points to convert minimal denomination to user-facing denomination.
          coinDecimals: 6,
          // (Optional) Keplr can show the fiat value of the coin if a coingecko id is provided.
          // You can get id from https://api.coingecko.com/api/v3/coins/list if it is listed.
          coinGeckoId: "terra-luna"
      },
      // (Optional) If you have a wallet webpage used to stake the coin then provide the url to the website in `walletUrlForStaking`.
      // The 'stake' button in Keplr extension will link to the webpage.
      // walletUrlForStaking: "",
      // The BIP44 path.
      bip44: {
          // You can only set the coin type of BIP44.
          // 'Purpose' is fixed to 44.
          coinType: 118,
      },
      // Bech32 configuration to show the address to user.
      // This field is the interface of
      // {
      //   bech32PrefixAccAddr: string;
      //   bech32PrefixAccPub: string;
      //   bech32PrefixValAddr: string;
      //   bech32PrefixValPub: string;
      //   bech32PrefixConsAddr: string;
      //   bech32PrefixConsPub: string;
      // }
      bech32Config: {
          bech32PrefixAccAddr: "terra",
          bech32PrefixAccPub: "terrapub",
          bech32PrefixValAddr: "terravaloper",
          bech32PrefixValPub: "terravaloperpub",
          bech32PrefixConsAddr: "terravalcons",
          bech32PrefixConsPub: "terravalconspub"
      },
      // List of all coin/tokens used in this chain.
      currencies: [{
          // Coin denomination to be displayed to the user.
          coinDenom: "LUNA",
          // Actual denom (i.e. uatom, uscrt) used by the blockchain.
          coinMinimalDenom: "uluna",
          // # of decimal points to convert minimal denomination to user-facing denomination.
          coinDecimals: 6,
          // (Optional) Keplr can show the fiat value of the coin if a coingecko id is provided.
          // You can get id from https://api.coingecko.com/api/v3/coins/list if it is listed.
          coinGeckoId: "terra-luna",
      },
      {
          // Coin denomination to be displayed to the user.
          coinDenom: "UST",
          // Actual denom (i.e. uatom, uscrt) used by the blockchain.
          coinMinimalDenom: "uusd",
          // # of decimal points to convert minimal denomination to user-facing denomination.
          coinDecimals: 6,
          // (Optional) Keplr can show the fiat value of the coin if a coingecko id is provided.
          // You can get id from https://api.coingecko.com/api/v3/coins/list if it is listed.
          // coinGeckoId: "terra-luna",
      }
      ],
      // List of coin/tokens used as a fee token in this chain.
      feeCurrencies: [{
          // Coin denomination to be displayed to the user.
          coinDenom: "LUNA",
          // Actual denom (i.e. uatom, uscrt) used by the blockchain.
          coinMinimalDenom: "uluna",
          // # of decimal points to convert minimal denomination to user-facing denomination.
          coinDecimals: 6,
          // (Optional) Keplr can show the fiat value of the coin if a coingecko id is provided.
          // You can get id from https://api.coingecko.com/api/v3/coins/list if it is listed.
          coinGeckoId: "terra-luna"
      }],
      // (Optional) The number of the coin type.
      // This field is only used to fetch the address from ENS.
      // Ideally, it is recommended to be the same with BIP44 path's coin type.
      // However, some early chains may choose to use the Cosmos Hub BIP44 path of '118'.
      // So, this is separated to support such chains.
      coinType: 118,
      // (Optional) This is used to set the fee of the transaction.
      // If this field is not provided, Keplr extension will set the default gas Price as (low: 0.01, average: 0.025, high: 0.04).
      // Currently, Keplr doesn't support dynamic calculation of the gas Prices based on on-chain data.
      // Make sure that the gas Prices are higher than the minimum gas Prices accepted by chain validators and RPC/REST endpoint.
      gasPriceStep: {
          low: 0.01,
          average: 0.015,
          high: 0.04
      }
    });

    await window.keplr.enable(chainId);

    refreshKeplr();
  }

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
      onClick: connectTerra,
      address: terraWallet == "TERRA_STATION" ? wallets[0]?.terraAddress : "",
    },
    {
      img: img3,
      title: "Keplr",
      description: "Terra Testnet",
      onClick: connectKeplr,
      address: terraWallet == "KEPLR" ? keplrAddress : "",
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
    if (terraWallet == "KEPLR") {
      refreshKeplr();
    }
  }, [])

  return (
    <div>
      <HeaderStyle2 />
      <section className="flat-title-page inner">
        <div className="overlay"></div>
        <div className="themesflat-container">
          <div className="row">
            <div className="col-md-12">
              <div className="page-title-heading mg-bt-12" style={{marginTop:'6rem', marginBottom:'2rem'}}>
                <h1 className="heading text-center">Connect Wallet</h1>
              </div>
              {/* <div className="breadcrumbs style2">
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li><Link to="#">Pages</Link></li>
                  <li>Connect Wallet</li>
                </ul>
              </div> */}
            </div>
          </div>
        </div>
      </section>
      <div className="tf-connect-wallet tf-section">
        <div className="themesflat-container">
          <div className="row">
            <div className="col-12">
              {/* <h2 className="tf-title-heading ct style-2 mg-bt-12">
                Connect Your Wallet
              </h2> */}
              <h5 className="sub-title ct style-1 pad-400">
              Connect with one or more of our available wallet providers below in order to unlock the features of AxelarSea.
              </h5>
            </div>
            <div className="col-md-12">
              <div className="sc-box-icon-inner style-2">
                {data.map((item, index) => (
                  <div key={index} className="sc-box-icon d-flex flex-column align-items-center justify-content-center " 
                  style={{cursor:'pointer'}}
                  onClick={item.onClick}
                  >
                    <div className="img">
                      <img src={item.img} alt="AxelarSea" />
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
