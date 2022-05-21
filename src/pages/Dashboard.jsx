import React,{useState , useEffect} from 'react';
import axios from 'axios'
import { _fetchData } from 'ethers/lib/utils';

import HeaderStyle2 from '../components/header/HeaderStyle2';
import Footer from '../components/footer/Footer';

const Dashboard = () => {

  const [count,setCount] = useState({})
  const [limit,setLimit] = useState({})

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

useEffect(() => {
    fetchData()
    ratelimit()
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
            <Footer />
          {/* 
          {count.nftCount}
          {count.listedCount}
          {count.buyCount}
          {count.bridgeCount}
          {count.walletCount}
          {limit.rate} 
          */}
          </div>

    );
}

export default Dashboard;
