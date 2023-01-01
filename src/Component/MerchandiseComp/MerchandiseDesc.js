import Header from "../HeaderAndFooter/Header";
import Footer from "../HeaderAndFooter/Footer";
import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";

const MerchandiseDesc = ({ id, title, brand, rating, price, desciption, imgsSrc, }) => {
    // creation state var to store product image
    const [srcImg, setSrc] = useState(imgsSrc[0]);

    // and image swap function
    const changeImgSrc = (e) => {
        setSrc(e.target.src);
    };

    // initialization number of ordered products
    // and functions to change it
    const [orderedProduct, setOrderedProduct] = useState(0);

    const increaseOrders = () => {
        setOrderedProduct(orderedProduct + 1);
    };

    const reduceOrders = () => {
        orderedProduct > 0
            ? setOrderedProduct(orderedProduct - 1)
            : setOrderedProduct(0);
    };

    return (
        <>
            <Header />

            <div
                className="container-fluid text-center my-4"
                id={`MerchandiseDesc-${id}`}
            >
                <div className="row">
                    <div className="col col-sm col-md col-lg col-xl col-xxl">
                        <div className="row my-3">
                            <div className="col col-sm col-md col-lg col-xl col-xxl">
                                <img src={srcImg} className="img-fluid" alt="img" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col col-sm col-md col-lg col-xl col-xxl">
                                <div className="row" id="pictureShow" onClick={changeImgSrc}>
                                    {imgsSrc.map((imgSrc, idx) => {
                                        return (
                                            <div
                                                className="col-3 col-sm-3 col-lg-3 col-xl clo-xxl "
                                                key={idx}
                                            >
                                                <img
                                                    src={imgSrc}
                                                    className="imgProduct img-fluid"
                                                    alt="imgProduct"
                                                />
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col col-sm col-md col-lg col-xl col-xxl">
                        <div className="row">
                            <div className="col col-sm col-md col-lg col-xl col-xxl">
                                <h2>{title}</h2>
                                <p>
                                    Brand : <strong className="h4">{brand}</strong>
                                </p>
                                <p>
                                    Rating : <strong className="h4">{rating}/5</strong>
                                </p>
                                <p>
                                    Price : <strong className="h4">{price} F CFA</strong>
                                </p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col col-sm col-md col-lg col-xl col-xxl">
                                <h5>Number of ordered products</h5>
                                <div className="mb-3">
                                    <button
                                        className="btn btn-primary h3"
                                        id="minusBtn"
                                        onClick={reduceOrders}
                                    >
                                        -
                                    </button>
                                    <span className="h2 mx-4">{orderedProduct}</span>
                                    <button
                                        className="btn btn-primary h3"
                                        id="plusBtn"
                                        onClick={increaseOrders}
                                    >
                                        +
                                    </button>
                                </div>
                                <div className="">
                                    <button className="btn btn-primary" id="AddToCard">
                                        <FaShoppingCart />
                                        &nbsp; Add to card
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col col-sm col-md col-lg col-xl col-xxl">
                                <h5>Description</h5>
                                <p>{desciption}</p>
                            </div>
                            <div className="col col-sm col-md col-lg col-xl col-xxl">
                                <h5>Technical sheet</h5>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
                                    doloremque, temporibus, non architecto veniam illo error
                                    dolorem velit dicta aliquid facere, voluptates quia ipsum
                                    consectetur obcaecati possimus quos sint! Minima.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
};

MerchandiseDesc.defaultProps = {
    id: 1,
    title: "Iphone XR",
    brand: "Iphone",
    rating: 4.8,
    price: 300000,
    desciption:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam doloremque, temporibus, non architecto veniam illo error dolorem velit dicta aliquid facere, voluptates quia ipsum consectetur obcaecati possimus quos sint! Minima.",
    imgsSrc: [
        "/img/DefaultProduct/xr0.jpg",
        "/img/DefaultProduct/xr1.jpg",
        "/img/DefaultProduct/xr4.jpg",
        "/img/DefaultProduct/xr2.jpg",
    ],
};

export default MerchandiseDesc;
