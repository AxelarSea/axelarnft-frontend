import React, { useEffect, useState } from "react";
import { Accordion } from "react-bootstrap-accordion";
import ExploreItem from "./ExploreItem";
import todayPickData from "../../../assets/fake-data/data-today-pick";
import { fetchAllListedItems } from "../../../utils/api";
import {useLocation} from 'react-router-dom'

const ExploreProfile = (props) => {
  const data = props.data;
  const items = props.items;
  const defaultItems = props.defaultItems || [...(items || [])];
  const setItems = props.setItems;
  const formatItems = props.formatItems;
  const filterChange = props.filterChange;

  const [check, setCheck] = useState({
    eth: false,
    avax: false,
    ftm: false,
    polygon: false,
    moonbeam: false,
    avaxCoin: false,
    lunaCoin: false,
    ustCoin: false,
  });

  const setData = async () => {
    let chains = [];
    let coin = [];

    if (check.eth) chains.push(3);
    if (check.avax) chains.push(43113);
    if (check.ftm) chains.push(4002);
    if (check.polygon) chains.push(80001);
    if (check.moonbeam) chains.push(1287);
    // if (check.lunaCoin) coin.push("LUNA");
    // if (check.avaxCoin) coin.push("AVAX");
    // if (check.ustCoin) coin.push("UST");

    if (chains.length == 0 && coin.length == 0) {
      setItems(defaultItems);
    } else {
      if (coin.length == 0) {
        setItems(
          defaultItems.filter((itemm) => chains.indexOf(itemm.chainId) != -1)
        );
      } else if (chains.length == 0) {
        setItems(
          defaultItems.filter((itemm) => coin.indexOf(itemm.priceTag) != -1)
        );
      }
    }
  };

  const setCoinData = async () => {
    let chains = [];

    if (chains.length == 0) {
      setItems(defaultItems);
    } else {
      setItems(
        defaultItems.filter((itemm) => chains.indexOf(itemm.chainId) != -1)
      );
    }
  };

  const handleCheck = (i, id) => {
    if (id === 1) {
      if (i === 0) {
        setCheck({ ...check, eth: !check.eth });
      }

      if (i === 1) {
        setCheck({ ...check, avax: !check.avax });
      }
      if (i === 2) {
        setCheck({ ...check, ftm: !check.ftm });
      }
      if (i === 3) {
        setCheck({ ...check, polygon: !check.polygon });
      }
      if (i === 4) {
        setCheck({ ...check, moonbeam: !check.moonbeam });
      }
    } else if (id === 2) {
      if (i === 0) {
        setCheck({ ...check, avaxCoin: !check.avaxCoin });
      }

      if (i === 1) {
        setCheck({ ...check, lunaCoin: !check.lunaCoin });
      }
      if (i === 2) {
        setCheck({ ...check, ustCoin: !check.ustCoin });
      }
    }
  };

  const handleCoinCheck = (i) => {};

  console.log(defaultItems);

  useEffect(() => {
 

    setData();
  }, [check, defaultItems]);

  useEffect(() => {
    if (filterChange) {
      filterChange(check);
    }
  }, [check]);

  // const items = props.items;
  return (
    <section className="tf-explore tf-section" style={{ paddingTop: "20px" }}>
      <div className="themesflat-container">
        <div className="row">
          <div className="col-xl-3 col-lg-3 col-md-12">
            <div id="side-bar" className="side-bar style-3">
              {data.map((item, index) => (
                <div
                  className="widget widget-category mgbt-24 boder-bt"
                  key={index}
                >
                  <div className="content-wg-category">
                    <Accordion title={item.title} show={true}>
                      <form action="#">
                        {item.content.map((itemm, index) => (
                          <div key={index}>
                            <label>
                              <img
                                src={itemm.img}
                                alt=""
                                width="17"
                                height="17"
                                style={{ marginRight: "0.5rem" }}
                              />
                              {itemm.field}
                              <input
                                type="checkbox"
                                defaultChecked={itemm.checked}
                                onChange={() => handleCheck(index, item.id)}
                              />
                              <span className="btn-checkbox"></span>
                            </label>
                            <br />
                          </div>
                        ))}
                      </form>
                    </Accordion>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {props.children}

          {/* <div className="col-xl-9 col-lg-9 col-md-12">
                        <ExploreItem data={items} />
                    </div> */}
        </div>
      </div>
    </section>
  );
};

export default ExploreProfile;
