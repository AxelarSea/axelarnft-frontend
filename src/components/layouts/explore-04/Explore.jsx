import React,{useEffect, useState} from 'react';
import { Accordion } from 'react-bootstrap-accordion'
import ExploreItem from './ExploreItem';
import todayPickData from '../../../assets/fake-data/data-today-pick';
import { fetchAllListedItems } from '../../../utils/api';

const Explore = props => {
    const data = props.data;
    const items = props.items;
    const defaultItems = props.defaultItems || [...(items || [])];
    const setItems = props.setItems;
    const formatItems = props.formatItems

    const [check,setCheck] = useState({
        eth:false,
        avax:false,
        ftm:false,
        polygon:false,
        moonbeam:false,
    })

    const setData = async () => {
        let chains = [];

        if (check.eth) chains.push(3);
        if (check.avax) chains.push(43113);
        if (check.ftm) chains.push(4002);
        if (check.polygon) chains.push(80001);
        if (check.moonbeam) chains.push(1287);

        if (chains.length == 0) {
            setItems(defaultItems);
        } else {
            setItems(defaultItems.filter(itemm => chains.indexOf(itemm.chainId) != -1))
        }
    }

    const handleCheck = (i) => {
        if(i === 0){
            setCheck({...check , eth:!check.eth})
            
        }
        
        if(i === 1){
            setCheck({...check , avax:!check.avax})
           
        }
        if(i === 2){
            setCheck({...check , ftm:!check.ftm})
        }
        if(i === 3){
            setCheck({...check , polygon:!check.polygon})
        }
        if(i === 4){
            setCheck({...check , moonbeam:!check.moonbeam})
        }
    }

    console.log(defaultItems)


    useEffect(() => {
        setData()
    },[check])

    // const items = props.items;
    return (
        <section className="tf-explore tf-section">
            <div className="themesflat-container">
                <div className="row">
                    <div className="col-xl-3 col-lg-3 col-md-12">
                        <div id="side-bar" className="side-bar style-3">
                            {
                                data.map((item,index) => (
                                    <div className="widget widget-category mgbt-24 boder-bt" key={index}>
                                        <div className="content-wg-category">
                                            <Accordion title={item.title} show={true}>
                                                <form action="#">
                                                    {
                                                        item.content.map((itemm , index) => (
                                                            <div key={index}>
                                                                <label>{itemm.field}
                                                                    <input type="checkbox" defaultChecked={itemm.checked} onChange={() => handleCheck(index)}/>
                                                                    <span className="btn-checkbox"></span>
                                                                </label><br/>
                                                            </div>
                                                        ))
                                                    }                                            
                                                </form>
                                            </Accordion>
                                        </div>
                                    </div>
                                ))
                            }
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
}

export default Explore;
