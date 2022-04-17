import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import Explore from '../components/layouts/explore-04/Explore';
import widgetSidebarData from '../assets/fake-data/data-widget-sidebar'
import satoshi from '../assets/images/avatar/satoshi.svg'

import HeaderStyle2 from '../components/header/HeaderStyle2';
import { crossChainTokenLabel, fetchAllListedItems } from '../utils/api';
import ExploreItem from '../components/layouts/explore-04/ExploreItem';
import { chainLabel } from '../utils/address';
    
const Explore04 = () => {
    const [items, setItems] = useState([]);
    const [defaultItems, setDefaultItems] = useState([]);

    const [currentCursor, setCurrentCursor] = useState(0);

    function formatItems(items) {
        return items.map((x) => ({
          id: x.collection.address + "-" + x.tokenId,
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
    
      async function loadMore(pageSize = 18) {
        console.log("Refresh Start");
        let items = await fetchAllListedItems({ limit: pageSize, skip: currentCursor });
        console.log(items);
        setDefaultItems([...defaultItems, ...formatItems(items)]);
        setCurrentCursor(currentCursor + pageSize);
      }
    
      useEffect(() => {
        loadMore();
      }, []);

    return (
        <div>
            <HeaderStyle2 />
            <section className="flat-title-page inner">
                <div className="overlay"></div>
                <div className="themesflat-container">
                    <div className="row">
                        <div className="col-md-12" style={{marginTop:'6rem', marginBottom:'2rem'}}>
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
            <Explore data={widgetSidebarData} setItems={setItems} items={items} defaultItems={defaultItems} formatItems={formatItems} >
                <div className="col-xl-9 col-lg-9 col-md-12">
                    <ExploreItem data={items} loadMore={loadMore} />
                </div>
            </Explore>
            <Footer />
        </div>
    );
}

export default Explore04;
