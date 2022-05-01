import React  from 'react';
import HeaderStyle2 from '../components/header/HeaderStyle2';
import heroSliderData from '../assets/fake-data/data-slider-2';
import SliderStyle1 from '../components/slider/SliderStyle1';
import Footer from '../components/footer/Footer';
import TopSeller from '../components/layouts/home-7/TopSeller';
import SliderStyle4 from '../components/slider/SliderStyle4';
import TodayPicks from '../components/layouts/home-7/TodayPicks';
import Create from '../components/layouts/home-7/CreateBottom';
import CreateTop from '../components/layouts/home-2/Create';
import PopularCollection from '../components/layouts/home-7/PopularCollection';

const Home = () => {
    return (
        <div className='home-7'>
            <HeaderStyle2 />
            <SliderStyle1 data={heroSliderData} />
            <CreateTop />
            <PopularCollection />
            <TopSeller />
            <TodayPicks />
            <Create />
            <Footer />
        </div>
    );
}

export default Home;
