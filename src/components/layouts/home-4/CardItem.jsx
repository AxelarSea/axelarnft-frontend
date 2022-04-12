import React from 'react';
import img1 from '../../../assets/images/box-item/img_cart_item.jpg'
import img2 from '../../../assets/images/box-item/img_cart_item2.jpg'
import img3 from '../../../assets/images/box-item/img_cart_item3.png'
import img4 from '../../../assets/images/box-item/img_cart_item4.jpg'
import img5 from '../../../assets/images/box-item/img_cart_item5.jpg'
import img6 from '../../../assets/images/box-item/img_cart_item6.jpg'
import img7 from '../../../assets/images/box-item/img_cart_item7.jpg'

const CardItem = () => {

    return (
        <section className="flat-cart-item">
            <div className="overlay"></div>
            <div className="themesflat-container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="wrap-cart flex">
                            <div className="cart_item">                                   
                                <div className="inner-cart">
                                    <div className="overlay"></div>
                                    <img src={img1} alt="AxelarSea" />
                                    <div className="content">
                                        <div className="fs-16"><a href="/ItemDetails">"Hamlet Contemplates Hamlet Contemplates</a></div>
                                        <p>Graphic Art 3D</p>
                                    </div>
                                </div>
                                <div className="inner-cart">
                                    <div className="overlay"></div>
                                    <img src={img2} alt="AxelarSea" />
                                    <div className="content">
                                        <div className="fs-16"><a href="/ItemDetails">"Hamlet Contemplates ...</a></div>
                                        <p>Graphic Art 3D</p>
                                    </div>
                                </div>
                            </div>
                            <div className="cart_item style2">
                                <div className="inner-cart">
                                    <div className="overlay"></div>
                                    <img src={img3} alt="AxelarSea" />
                                    <div className="content">
                                        <div className="fs-16"><a href="/ItemDetails">CYBER ART</a></div>
                                        <p>Graphic Art 3D</p>
                                    </div>   
                                    <div className="progress">
                                        <div className="progress-bar"></div>      
                                    </div>
                                </div>
                            </div>
                            <div className="cart_item">
                                <div className="inner-cart">
                                    <div className="overlay"></div>
                                    <img src={img4} alt="AxelarSea" />
                                    <div className="content">
                                        <div className="fs-16"><a href="/ItemDetails">"Hamlet Contemplates ...</a></div>
                                        <p>Graphic Art 3D</p>
                                    </div>
                                </div>
                                <div className="inner-cart">
                                    <div className="overlay"></div>
                                    <img src={img5} alt="AxelarSea" />
                                    <div className="content">
                                        <div className="fs-16"><a href="/ItemDetails">"Hamlet Contemplates ...</a></div>
                                        <p>Graphic Art 3D</p>
                                    </div>
                                </div>
                            </div>
                            <div className="cart_item">
                                <div className="inner-cart mg-bt-30">
                                    <div className="overlay"></div>
                                    <img src={img6} alt="AxelarSea" />
                                    <div className="content">
                                        <div className="fs-16"><a href="/ItemDetails">"Hamlet Contemplates ...</a></div>
                                        <p>Graphic Art 3D</p>
                                    </div>
                                </div>
                                <div className="inner-cart">
                                    <div className="overlay"></div>
                                    <img src={img7} alt="AxelarSea" />
                                    <div className="content">
                                        <div className="fs-16"><a href="/ItemDetails">"Hamlet Contemplates ...</a></div>
                                        <p>Graphic Art 3D</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CardItem;
