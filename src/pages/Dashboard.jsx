import React,{useState , useEffect} from 'react';
import axios from 'axios'
import { _fetchData } from 'ethers/lib/utils';

import HeaderStyle2 from '../components/header/HeaderStyle2';

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
            <div>
              
            </div>
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
