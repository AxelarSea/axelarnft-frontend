import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Explore from "../components/layouts/explore-04/Explore";
import widgetSidebarData from "../assets/fake-data/data-widget-sidebar";
import satoshi from "../assets/images/avatar/satoshi.svg";
import axios from 'axios'

import HeaderStyle2 from "../components/header/HeaderStyle2";
import { calculateSelectedTokensFromFilter, crossChainTokenLabel, fetchAllListedItems } from "../utils/api";
import ExploreItem from "../components/layouts/explore-04/ExploreItem";
import { chainLabel } from "../utils/address";

const Explore04 = () => {
  const [items, setItems] = useState([]);
  const [defaultItems, setDefaultItems] = useState([]);
  const [selectedTokens, setSelectedTokens] = useState([]);

  const [currentCursor, setCurrentCursor] = useState(0);

  const [count,setCount] = useState({})


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

  function formatItems(items) {
    return items.map((x) => ({
      id: x.collection.contractAddress + "-" + x.tokenId,
      img: x.metadata.image,
      title: x.collection.name + " #" + x.tokenId,
      tags: chainLabel(x.collection.chainId),
      imgAuthor: "/assets/images/satoshi.svg",
      nameAuthor: x.owner,
      price:
        x.listPrice +
        " " +
        crossChainTokenLabel(x.collection.chainId, x.listTokenAddress),
      priceChange: "$12.246",
      wishlist: "100",
      imgCollection: x.metadata.image,
      nameCollection: x.collection.name,
      tokenId: x.tokenId,
      collectionAddress: x.collection.contractAddress,
      chainId: x.collection.chainId,
      listPrice: x.listPrice,
      priceTag: crossChainTokenLabel(x.collection.chainId, x.listTokenAddress),
    }));
  }

  async function loadMore(pageSize = 18, skip = currentCursor) {
    const selectedTokensLength = selectedTokens.length;

    console.log("Refresh Start");
    let items = await fetchAllListedItems({
      limit: pageSize,
      page: skip / pageSize + 1,
      listTokenAddress: selectedTokens,
    });
    console.log(items);

    if (selectedTokens.length != selectedTokensLength) return;

    if (skip != currentCursor) {
      setDefaultItems(formatItems(items));
    } else {
      setDefaultItems([...defaultItems, ...formatItems(items)]);
    }
    
    setCurrentCursor(skip + pageSize);
  }

  async function filterChange(filter) {
    setSelectedTokens(calculateSelectedTokensFromFilter(filter));
  }

  useEffect(() => {
    setCurrentCursor(0);
    loadMore(18, 0)
    fetchData()
  }, [selectedTokens]);

  return (
    <div>
      <HeaderStyle2 />
      <section className="flat-title-page inner">
        <div className="overlay"></div>
        <div className="themesflat-container">
          <div className="row">
            <div
              className="col-md-12"
              style={{ marginTop: "6rem", marginBottom: "2rem" }}
            >
              <div className="page-title-heading mg-bt-12">
                <h1 className="heading text-center">Explore</h1>
              </div>
              <div style={{ marginTop: "2rem" }}>
                <h6 className='data-showlist'>{count.currentlyListedCount}</h6>
                <h6 className="text-center">NFT Currently Listed</h6>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Explore
        data={widgetSidebarData}
        setItems={setItems}
        items={items}
        defaultItems={defaultItems}
        formatItems={formatItems}
        filterChange={filterChange}
      >
        <div className="col-xl-9 col-lg-9 col-md-12">
          <ExploreItem data={items} loadMore={loadMore} />
        </div>
      </Explore>
      <Footer />
    </div>
  );
};

export default Explore04;
