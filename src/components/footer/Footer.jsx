import { getDefaultNormalizer } from '@testing-library/react';
import React, { useState ,useEffect } from 'react';
import { Link } from 'react-router-dom'
import logodark from '../../assets/images/logo/logoaxelarnft.svg'
import logofooter from '../../assets/images/logo/logoaxelarnft.svg'
const Footer = () => {

    const aboutList = [
        // {
        //     title:"Product",
        //     link:""
        // },
        {
            title:"Resource",
            link:"https://axelarnft.gitbook.io/axelarnft-docs/"
        },
        // {
        //     title:"Term & Condition",
        //     link:""
        // },
        // {
        //     title:"FAQ",
        //     link:""
        // },
    ]
    // const accountList = [
    //     {
    //         title: "Authors",
    //         link: ""
    //     },
    //     {
    //         title: "Collection",
    //         link: ""
    //     },
    //     {
    //         title: "Author Profile",
    //         link: ""
    //     },
    //     {
    //         title: "Create Item",
    //         link: ""
    //     },
    // ]
    // const resourcesList = [
    //     {
    //         title: "Help & Support",
    //         link: ""
    //     },
    //     {
    //         title: "Live Auctions",
    //         link: ""
    //     },
    //     {
    //         title: "Item Details",
    //         link: ""
    //     },
    //     {
    //         title: "Activity",
    //         link: ""
    //     },
    // ]
    // const companyList = [
    //     {
    //         title: "Our Team",
    //         link: ""
    //     },
    //     {
    //         title: "Partner With Us",
    //         link: ""
    //     },
    //     {
    //         title: "Privacy & Policy",
    //         link: ""
    //     },
    //     {
    //         title: "Features",
    //         link: ""
    //     },
    // ]

    const Contract = [
        // {
        //     title: "+012 3456789",
        //     link: "#"
        // },
        {
            title: "info@axelarnft.com",
            link: "#"
        },
    ]
    
    const socialList = [
        {
            icon: "fab fa-twitter",
            link: "#"
        },
        {
            icon: "fab fa-telegram-plane",
            link: "https://t.me/AxelarNFT"
        },
        {
            icon: "fab fa-telegram-plane",
            link: "https://t.me/axelarseaannouncement"
        },
        {
            icon: "fab fa-youtube",
            link: "#"
        },
        {
            icon: "icon-fl-vt",
            link: "https://discord.gg/dUwcAj7C46"
        },
        

    ]

    const [isVisible, setIsVisible] = useState(false);

    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    };
  
    useEffect(() => {
      const toggleVisibility = () => {
        if (window.pageYOffset > 500) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      };
  
      window.addEventListener("scroll", toggleVisibility);
  
      return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

      
    return (
        <div>
            <footer id="footer" className="footer-light-style clearfix bg-style ">
                <div className="themesflat-container">
                    <div className="row justify-content-center">
                        <div className="col-lg-3 col-md-12 col-12">
                            <div className="widget widget-logo">
                                <div className="logo-footer" id="logo-footer">
                                    <Link to="/">
                                        <img className='logo-dark' id="logo_footer" src={logodark} alt="nft-gaming" />
                                        <img className='logo-light' id="logo_footer" src={logofooter} alt="nft-gaming" />
                                        
                                    </Link>
                                </div>
                                <p className="sub-widget-logo">AxelarNFT is a one-stop interoperable NFT marketplace across chains where buyers can pay for an NFT on any supported chain using a token from a completely different chain, and sellers can list an NFT for sale on any supported chain while receiving payments on another chain.</p>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-4 col-sm-5 col-5">
                            <div className="widget widget-menu style-1">
                                <h5 className="title-widget">About</h5>
                                <ul>
                                    {
                                        aboutList.map((item,index) =>(
                                            <li key={index}><a to={item.link} href={item.link} target="_blank">{item.title}</a></li>
                                        ))
                                        //     <li key={index}><Link to={item.link} href={item.link} target="_blank">{item.title}</Link></li>
                                        // ))
                                    }
                                </ul>
                            </div>
                        </div>
                        {/* <div className="col-lg-2 col-md-4 col-sm-7 col-7">
                            <div className="widget widget-menu style-2">
                                <h5 className="title-widget">Resources</h5>
                                <ul>
                                    {
                                        resourcesList.map((item,index) =>(
                                            <li key={index}><Link to={item.link}>{item.title}</Link></li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div> */}
                        {/* <div className="col-lg-2 col-md-4 col-sm-5 col-5">
                            <div className="widget widget-menu fl-st-3">
                                <h5 className="title-widget">Company</h5>
                                <ul>
                                    {
                                        companyList.map((item,index) =>(
                                            <li key={index}><Link to={item.link}>{item.title}</Link></li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div> */}
                        <div className="col-lg-2 col-md-4 col-sm-5 col-5">
                            <div className="widget widget-menu fl-st-3">
                                <h5 className="title-widget">Contact</h5>
                                <ul>
                                    {
                                        Contract.map((item,index) =>(
                                            <li key={index}><Link to={item.link}>{item.title}</Link></li>
                                        )
                                        )
                                    }
                                    <div className="widget-social style-1 mg-t40" >
                                    <ul>
                                        {
                                            socialList.map((item,index) =>(
                                                <li key={index}><a to={item.link}  href={item.link} target="_blank"><i className={item.icon}></i></a></li>
                                            ))
                                        }
                                        {/* <div key={index} className="sc-box-icon d-flex flex-column align-items-center justify-content-center " style={{cursor:'pointer'}} target="_blank" onClick={() => goSite(item.website)}>
                                            <div className="img">
                                                <img src={item.img} alt="AxelarNFT" />
                                            </div>
                                            <h4 className="heading"><a href={item.website} target="_blank">{item.title}</a> </h4>
                                            
                                         </div> */}
                                    </ul>
                                    </div>
                                </ul>
                                {/* <div className="form-subcribe">
                                    <form id="subscribe-form" action="#" method="GET" acceptCharset="utf-8" className="form-submit">
                                        <input name="email"  className="email" type="email" placeholder="info@yourgmail.com" required />
                                        <button id="submit" name="submit" type="submit"><i className="icon-fl-send"></i></button>
                                    </form>
                                </div> */}
                                
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            {
                isVisible && 
                <Link onClick={scrollToTop}  to='#' id="scroll-top"></Link>
            }
            
            <div className="modal fade popup" id="popup_bid" tabIndex="-1" role="dialog" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                        <div className="modal-body space-y-20 pd-40">
                            <h3>Place a Bid</h3>
                            <p className="text-center">You must bid at least <span className="Price color-popup">4.89 ETH</span>
                            </p>
                            <input type="text" className="form-control"
                                placeholder="00.00 ETH" />
                            <p>Enter quantity. <span className="color-popup">5 available</span>
                            </p>
                            <input type="number" className="form-control" placeholder="1" />
                            <div className="hr"></div>
                            <div className="d-flex justify-content-between">
                                <p> You must bid at least:</p>
                                <p className="text-right Price color-popup"> 4.89 ETH </p>
                            </div>
                            <div className="d-flex justify-content-between">
                                <p> Service free:</p>
                                <p className="text-right Price color-popup"> 0,89 ETH </p>
                            </div>
                            <div className="d-flex justify-content-between">
                                <p> Total bid amount:</p>
                                <p className="text-right Price color-popup"> 4 ETH </p>
                            </div>
                            <Link to="#" className="btn btn-primary" data-toggle="modal" data-target="#popup_bid_success" data-dismiss="modal" aria-label="Close"> Place a bid</Link>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    );
}

export default Footer;
