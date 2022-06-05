import React,{useState , useEffect} from 'react';
import axios from 'axios'
import { _fetchData } from 'ethers/lib/utils';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';


import HeaderStyle2 from '../components/header/HeaderStyle2';
import Footer from '../components/footer/Footer';

ChartJS.register(ArcElement, Tooltip, Legend);


const Dashboard = () => {

    

  const [count,setCount] = useState({})
  const [limit,setLimit] = useState({})
  const [stat,setStat] = useState({})

  let FromData = {
    labels: ['Bridge from ETH', 'Bridge from AVAX', 'Bridge from Polygon', 'Bridge from Moonbeam', 'Bridge from FTM'],
    datasets: [
      {
        label: '# of Votes',
        data: [stat.bridge_lock_3, stat.bridge_lock_43113, stat.bridge_lock_80001, stat.bridge_lock_1287, stat.bridge_lock_4002],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  let ToData = {
    labels: ['Bridge to ETH', 'Bridge to AVAX', 'Bridge to Polygon', 'Bridge to Moonbeam', 'Bridge to FTM'],
    datasets: [
      {
        label: '# of Votes',
        data: [stat.bridge_unlock_3, stat.bridge_unlock_43113, stat.bridge_unlock_80001, stat.bridge_unlock_1287, stat.bridge_unlock_4002],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const fetchData = async() => {
    await axios.get(
        process.env.REACT_APP_API_HOST +'/api/nft/testnetv1/stat'
        )
    .then(res => {
        setCount(res.data)
        console.log(res.data)
    })
    .catch(err => {
        console.log(err)
    })
}
  const ratelimit = async() => {
    await axios.get(
        process.env.REACT_APP_API_HOST +'/api/nft/ratelimit/1'
        )
    .then(res => {
        setLimit(res.data)
        console.log(res.data)
    })
    .catch(err => {
        console.log(err)
    })
}

  const statData = async() => {
    await axios.get(
        process.env.REACT_APP_API_HOST +'/api/nft/testnetv1/stat_deep'
        )
    .then(res => {
        setStat(res.data)
        console.log(res.data)
    })
    .catch(err => {
        console.log(err)
    })
}

useEffect(() => {
    fetchData()
    ratelimit()
    statData()
},[])

    return (
          <div>
            <HeaderStyle2 />
            <section className="flat-title-page inner">
                <div className="overlay"></div>
                <div className="themesflat-container">
                    <div className="row">
                        <div className="col-md-12" style={{marginTop:'6rem', marginBottom:'2rem'}}>
                            <div className="page-title-heading mg-bt-12" >
                                <h1 className="heading text-center">Admin</h1>
                            </div>
                        </div>
                    </div>
                </div>                    
            </section>
            <div className="tf-connect-wallet tf-section">
                <div className="themesflat-container">
                <h2 className="heading text-center">Overall</h2>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="sc-box-icon-inner style-2 pd-20">
                                <div className="sc-box-icon d-flex flex-column align-items-center justify-content-center ">
                                    <h6 className='data-showlist'>{count.nftCount}</h6>
                                    <h6 className='title-showlist'>Mint Count</h6>    
                                </div>   
                                <div className="sc-box-icon d-flex flex-column align-items-center justify-content-center ">
                                    <h6 className='data-showlist'>{count.listedCount}</h6>
                                    <h6 className='title-showlist'>Listed Count</h6>    
                                </div>   
                                <div className="sc-box-icon d-flex flex-column align-items-center justify-content-center ">
                                    <h6 className='data-showlist'>{count.buyCount}</h6>
                                    <h6 className='title-showlist'>Buy Count</h6>    
                                </div>   
                                <div className="sc-box-icon d-flex flex-column align-items-center justify-content-center ">
                                    <h6 className='data-showlist'>{count.bridgeCount}</h6>
                                    <h6 className='title-showlist'>Bridge Count</h6>    
                                </div>   
                                <div className="sc-box-icon d-flex flex-column align-items-center justify-content-center ">
                                    <h6 className='data-showlist'>{count.walletCount}</h6>
                                    <h6 className='title-showlist'>Wallet Count</h6>    
                                </div>   
                                <div className="sc-box-icon d-flex flex-column align-items-center justify-content-center ">
                                    <h6 className='data-showlist'>{limit.rate}</h6>
                                    <h6 className='title-showlist'>Rate Limit</h6>    
                                </div>   
                            </div>  
                        </div>    
                    </div>              
                </div>
            </div>
            <div className="tf-connect-wallet tf-section">
                <div className="themesflat-container">
                <h2 className="heading text-center">Minting</h2>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="sc-box-icon-inner style-2 pd-20">
                                <div className="sc-box-icon d-flex flex-column align-items-center justify-content-center ">
                                    <h6 className='data-showlist'>{stat.mint_3}</h6>
                                    <h6 className='title-showlist'>Mint on Ethereum</h6>    
                                </div>   
                                <div className="sc-box-icon d-flex flex-column align-items-center justify-content-center ">
                                    <h6 className='data-showlist'>{stat.mint_43113}</h6>
                                    <h6 className='title-showlist'>Mint on Avalanche</h6>    
                                </div>   
                                <div className="sc-box-icon d-flex flex-column align-items-center justify-content-center ">
                                    <h6 className='data-showlist'>{stat.mint_80001}</h6>
                                    <h6 className='title-showlist'>Mint on Polygon</h6>    
                                </div>
                                <div className="sc-box-icon d-flex flex-column align-items-center justify-content-center ">
                                    <h6 className='data-showlist'>{stat.mint_1287}</h6>
                                    <h6 className='title-showlist'>Mint on Moonbeam</h6>    
                                </div>      
                                <div className="sc-box-icon d-flex flex-column align-items-center justify-content-center ">
                                    <h6 className='data-showlist'>{stat.mint_4002}</h6>
                                    <h6 className='title-showlist'>Mint on Fantom</h6>    
                                </div>   
                            </div>  
                        </div>    
                    </div>              
                </div>
            </div>
            <div className="tf-connect-wallet tf-section">
                <div className="themesflat-container">
                <h2 className="heading text-center">Listing</h2>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="sc-box-icon-inner style-2 pd-20">
                            <div className="sc-box-icon d-flex flex-column align-items-center justify-content-center ">
                                    <h6 className='data-showlist'>{stat.list_3}</h6>
                                    <h6 className='title-showlist'>List on Ethereum</h6>    
                                </div>   
                                <div className="sc-box-icon d-flex flex-column align-items-center justify-content-center ">
                                    <h6 className='data-showlist'>{stat.list_43113}</h6>
                                    <h6 className='title-showlist'>List on Avalanche</h6>    
                                </div>   
                                <div className="sc-box-icon d-flex flex-column align-items-center justify-content-center ">
                                    <h6 className='data-showlist'>{stat.list_80001}</h6>
                                    <h6 className='title-showlist'>List on Polygon</h6>    
                                </div>
                                <div className="sc-box-icon d-flex flex-column align-items-center justify-content-center ">
                                    <h6 className='data-showlist'>{stat.list_1287}</h6>
                                    <h6 className='title-showlist'>List on Moonbeam</h6>    
                                </div>      
                                <div className="sc-box-icon d-flex flex-column align-items-center justify-content-center ">
                                    <h6 className='data-showlist'>{stat.list_4002}</h6>
                                    <h6 className='title-showlist'>List on Fantom</h6>    
                                </div>   
                            </div>  
                        </div>    
                    </div>              
                </div>
            </div>
            <div className="tf-connect-wallet tf-section">
                <div className="themesflat-container">
                <h2 className="heading text-center">Buying</h2>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="sc-box-icon-inner style-2 pd-20">
                            <div className="sc-box-icon d-flex flex-column align-items-center justify-content-center ">
                                    <h6 className='data-showlist'>{stat.buy_3}</h6>
                                    <h6 className='title-showlist'>buy on Ethereum</h6>    
                                </div>   
                                <div className="sc-box-icon d-flex flex-column align-items-center justify-content-center ">
                                    <h6 className='data-showlist'>{stat.buy_43113}</h6>
                                    <h6 className='title-showlist'>buy on Avalanche</h6>    
                                </div>   
                                <div className="sc-box-icon d-flex flex-column align-items-center justify-content-center ">
                                    <h6 className='data-showlist'>{stat.buy_80001}</h6>
                                    <h6 className='title-showlist'>buy on Polygon</h6>    
                                </div>
                                <div className="sc-box-icon d-flex flex-column align-items-center justify-content-center ">
                                    <h6 className='data-showlist'>{stat.buy_1287}</h6>
                                    <h6 className='title-showlist'>buy on Moonbeam</h6>    
                                </div>      
                                <div className="sc-box-icon d-flex flex-column align-items-center justify-content-center ">
                                    <h6 className='data-showlist'>{stat.buy_4002}</h6>
                                    <h6 className='title-showlist'>buy on Fantom</h6>    
                                </div> 
                            </div>  
                        </div>    
                    </div>              
                </div>
            </div>
            <div className="tf-connect-wallet tf-section">
                <div className="themesflat-container">
                <h2 className="heading text-center" style={{marginBottom:'2rem'}}>NFT Bridge</h2>
                    <div className="row">
                        <div className="col-md-12">
                            {/* <div className="sc-box-icon-inner style-2 pd-20">
                                <div className="sc-box-icon d-flex flex-column align-items-center justify-content-center ">
                                    <h6 className='data-showlist'>{stat.bridge_lock_3}</h6>
                                    <h6 className='title-showlist'>Bridge from Ethereum</h6>    
                                </div>   
                                <div className="sc-box-icon d-flex flex-column align-items-center justify-content-center ">
                                    <h6 className='data-showlist'>{stat.bridge_lock_43113}</h6>
                                    <h6 className='title-showlist'>Bridge from Avalanche</h6>    
                                </div>   
                                <div className="sc-box-icon d-flex flex-column align-items-center justify-content-center ">
                                    <h6 className='data-showlist'>{stat.bridge_lock_80001}</h6>
                                    <h6 className='title-showlist'>Bridge from Polygon</h6>    
                                </div>
                                <div className="sc-box-icon d-flex flex-column align-items-center justify-content-center ">
                                    <h6 className='data-showlist'>{stat.bridge_lock_1287}</h6>
                                    <h6 className='title-showlist'>Bridge from Moonbeam</h6>    
                                </div>      
                                <div className="sc-box-icon d-flex flex-column align-items-center justify-content-center ">
                                    <h6 className='data-showlist'>{stat.bridge_lock_4002}</h6>
                                    <h6 className='title-showlist'>Bridge from Fantom</h6>    
                                </div>   
                                <div className="sc-box-icon d-flex flex-column align-items-center justify-content-center ">
                                    <h6 className='data-showlist'>{stat.bridge_unlock_3}</h6>
                                    <h6 className='title-showlist'>Bridge to Ethereum</h6>    
                                </div>   
                                <div className="sc-box-icon d-flex flex-column align-items-center justify-content-center ">
                                    <h6 className='data-showlist'>{stat.bridge_unlock_43113}</h6>
                                    <h6 className='title-showlist'>Bridge to Avalanche</h6>    
                                </div>   
                                <div className="sc-box-icon d-flex flex-column align-items-center justify-content-center ">
                                    <h6 className='data-showlist'>{stat.bridge_unlock_80001}</h6>
                                    <h6 className='title-showlist'>Bridge to Polygon</h6>    
                                </div>
                                <div className="sc-box-icon d-flex flex-column align-items-center justify-content-center ">
                                    <h6 className='data-showlist'>{stat.bridge_unlock_1287}</h6>
                                    <h6 className='title-showlist'>Bridge to Moonbeam</h6>    
                                </div>      
                                <div className="sc-box-icon d-flex flex-column align-items-center justify-content-center ">
                                    <h6 className='data-showlist'>{stat.bridge_unlock_4002}</h6>
                                    <h6 className='title-showlist'>Bridge to Fantom</h6>    
                                </div>   
                            </div> */}
                            <div className='d-flex align-items-center justify-content-around'>
                                <div style={{width:'40%'}}>
                                    <h5 className='text-center' style={{marginBottom:'1rem'}}>Source Chains</h5>
                                    <Pie data={FromData} />;
                                </div>
                                <div style={{width:'40%'}}>
                                <h5 className='text-center' style={{marginBottom:'1rem'}}>Destination Chains</h5>
                                    <Pie data={ToData} />;
                                </div>
                            </div>  
                        </div>    
                    </div>              
                </div>
            </div>
            <Footer />
          </div>

    );
}

export default Dashboard;
