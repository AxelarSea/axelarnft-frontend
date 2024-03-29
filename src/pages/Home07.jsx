import React  from 'react';
import HeaderStyle2 from '../components/header/HeaderStyle2';
import Footer from '../components/footer/Footer';
import Category from '../components/layouts/home-7/Category';
import LiveAuction from '../components/layouts/home-7/LiveAuction';
import TopSeller from '../components/layouts/home-7/TopSeller';
import SliderStyle4 from '../components/slider/SliderStyle4';
import TodayPicks from '../components/layouts/home-7/TodayPicks';
import Create from '../components/layouts/home-7/Create';
import PopularCollection from '../components/layouts/home-7/PopularCollection';
import bg from '../assets/images/backgroup-secsion/bghome.jpg'

const Home07 = () => {
    return (
        <div className='home-7'>
            <Header />
                <SliderStyle1 />
                    <PopularCollection />
                    <TopSeller />
                    {/* <LiveAuction /> */}
                    {/* <Category /> */}
                    <TodayPicks />
                    <Create />   
            <Footer />
        </div>
    );
}

export default Home07;
