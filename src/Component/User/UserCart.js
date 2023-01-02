import Header from "../HeaderAndFooter/Header";
import Footer from "../HeaderAndFooter/Footer";
import MerchandiseCardCart from "../MerchandiseComp/MerchandiseCardCart";
const UserCart = () => {
    return (
        <>
            <Header />

            <div className="container-fluid text-center py-4" id="UserCart">
                <div className="row">
                    <div className="col-9 col-sm-6 col-md-9 " id="orderList" >
                        <div className="row">
                            <div className="col">
                                <h2>Cart</h2>
                            </div>
                        </div>
                        {/*  */}
                        <MerchandiseCardCart />
                        <MerchandiseCardCart />
                        <MerchandiseCardCart />


                    </div>
                    <div className="col col-sm col-md" id="cartSummary">
                        <h2>Cart summary</h2>
                        <p>Subtotal : F CFA</p>
                        <p>shipping cost : F CFA</p>
                        <hr />
                        <p>Total : F CFA</p>
                        <button className="btn btn-primary" id="commandbtn">
                            Command
                        </button>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
};

export default UserCart;