import Header from "../HeaderAndFooter/Header";
import Footer from "../HeaderAndFooter/Footer";
import WaitingPage from "../WaitingPage";
import { useEffect, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import createAddToCart from "../../Redux/Actions/createAddToCart";

const mapStateToProps = ({ storage, AllProducts }) => {
    return {
        storage: storage,
        AllProducts: AllProducts
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        dispatchAddToCard: (payload) => dispatch(createAddToCart(payload))

    }
}

const MerchandiseDesc = ({ storage, AllProducts, dispatchAddToCard }) => {
    const params = useParams();

    const [idx, setIdx] = useState(-1)



    useEffect(() => {

        const idxProduct = [...storage].findIndex((product) => {
            return product.category.name === params.category && product.title === params.title
        })

        idxProduct >= 0 && setIdx(idxProduct)

    }, [storage, params.category, params.title])


    //  image swap function
    const changeImgSrc = (e) => {
        document.getElementById("imgPlace").src = e.target.src
    };

    // initialization number of ordered products
    const [orderedProduct, setOrderedProduct] = useState(0);
    // and functions to change it
    const increaseOrders = () => {
        setOrderedProduct(orderedProduct + 1);
    };

    const reduceOrders = () => {
        orderedProduct > 0
            ? setOrderedProduct(orderedProduct - 1)
            : setOrderedProduct(0);
    };



    const AddToCard = () => {

        if (orderedProduct > 0) {
            const product = [...AllProducts].filter((product) => product.title === params.title && product.category.name === params.category)
            dispatchAddToCard({
                product: [...product][0],
                orderedQuantity: orderedProduct
            })

            setOrderedProduct(0)
        }



    }








    return idx === -1 ? (
        <WaitingPage />
    ) : (
        <>
            <Header />

            <div
                className="container-fluid text-center my-4"
                id={`MerchandiseDesc-${[...storage][idx]}`}
            >
                <div className="row">
                    <div className="col col-sm col-md col-lg col-xl col-xxl">
                        <div className="row my-3">
                            <div className="col col-sm col-md col-lg col-xl col-xxl">
                                <img src={
                                    [...storage][idx].images[0]
                                } className="img-fluid" alt="img" id="imgPlace" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col col-sm col-md col-lg col-xl col-xxl">
                                <div className="row" id="pictureShow" onClick={changeImgSrc}>
                                    {
                                        [...storage][idx].images.map((imgSrc, idx) => {

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
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col col-sm col-md col-lg col-xl col-xxl">
                        <div className="row">
                            <div className="col col-sm col-md col-lg col-xl col-xxl">
                                <h2>{
                                    [...storage][idx].title
                                }</h2>
                                <p>
                                    Brand : <strong className="h4">Undefined</strong>
                                </p>
                                <p>
                                    Rating : <strong className="h4">4.8/5</strong>
                                </p>
                                <p>
                                    Price :&nbsp;
                                    <strong className="h4">
                                        {
                                            [...storage][idx].price * 655
                                        }

                                        &nbsp;F CFA
                                    </strong>
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
                                    <button className="btn btn-primary" id="AddToCard"
                                        onClick={AddToCard}>
                                        <FaShoppingCart />
                                        &nbsp; Add to card
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col col-sm col-md col-lg col-xl col-xxl">
                                <h5>Description</h5>
                                <p>
                                    {
                                        [...storage][idx].description
                                    }
                                </p>
                            </div>
                            <div className="col col-sm col-md col-lg col-xl col-xxl">
                                <h5>Technical sheet</h5>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
                                    doloremque, temporibus, non architecto veniam illo error
                                    dolorem velit dicta aliquid facere
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
    brand: "Undefined",
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

export default connect(mapStateToProps, mapDispatchToProps)(MerchandiseDesc);
