import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import Explore from '../components/layouts/explore-04/Explore';
import widgetSidebarData from '../assets/fake-data/data-widget-sidebar'

import HeaderStyle2 from '../components/header/HeaderStyle2';
import { crossChainTokenLabel, fetchAllListedItems } from '../utils/api';
import ExploreItem from '../components/layouts/explore-04/ExploreItem';
import { chainLabel } from '../utils/address';
    
const Explore04 = () => {
    const [items, setItems] = useState([]);

    function formatItems(items) {
        return items.map((x) => ({
          id: x.collection.contractAddress + "-" + x.tokenId,
          img: x.metadata.image,
          title: x.collection.name + " #" + x.tokenId,
          tags: chainLabel(x.collection.chainId),
          imgAuthor: "/assets/images/satoshi.svg",
          nameAuthor: x.owner,
          price: x.listPrice + " " + crossChainTokenLabel(x.collection.chainId, x.listTokenAddress),
          priceChange: "$12.246",
          wishlist: "100",
          imgCollection: x.metadata.image,
          nameCollection: x.collection.name,
          tokenId: x.tokenId,
          collectionAddress: x.collection.contractAddress,
          chainId: x.collection.chainId,
        }));
      }
    
      async function refreshData() {
        console.log("Refresh Start");
        let items = await fetchAllListedItems();
        console.log(items);
        setItems(formatItems(items));
      }
    
      useEffect(() => {
        refreshData();
      }, []);

    return (
        <div>
            <HeaderStyle2 />
            <section className="flat-title-page inner">
                <div className="overlay"></div>
                <div className="themesflat-container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="page-title-heading mg-bt-12">
                                <h1 className="heading text-center">Explore</h1>
                            </div>
                            {/* <div className="breadcrumbs style2">
                                <ul>
                                    <li><Link to="/">Home</Link></li>
                                    <li><Link to="#">Explore</Link></li>
                                    <li>Explore 4</li>
                                </ul>
                            </div> */}
                        </div>
                    </div>
                </div>                    
            </section>
            <Explore data={widgetSidebarData} setItems={setItems} items={items} formatItems={formatItems} >
                <div className="col-xl-9 col-lg-9 col-md-12">
                    <ExploreItem data={items} />
                </div>
            </Explore>
            <Footer />
        </div>
    );
}

export default Explore04;
