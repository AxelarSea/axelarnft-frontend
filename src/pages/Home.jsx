import React  from 'react';
import HeaderStyle2 from '../components/header/HeaderStyle2';
import heroSliderData from '../assets/fake-data/data-slider-2';
import SliderStyle1 from '../components/slider/SliderStyle1';
import Footer from '../components/footer/Footer';
import TopSeller from '../components/layouts/home-7/TopSeller';
import RecentlyListed from '../components/layouts/home-7/RecentlyListed';
import Create from '../components/layouts/home-7/CreateBottom';
import CreateTop from '../components/layouts/home-2/Create';
import PopularCollection from '../components/layouts/home-7/PopularCollection';
import Support from '../components/layouts/home-7/chainSupport';

const Home = () => {
    return (
        <div className='home-7'>
            <HeaderStyle2 />
            <SliderStyle1 data={heroSliderData} />
            <CreateTop />
            <PopularCollection />
            <TopSeller />
            <RecentlyListed />
            <Create />
            <Support />
            <Footer />
        </div>
    );
}

export default Home;
