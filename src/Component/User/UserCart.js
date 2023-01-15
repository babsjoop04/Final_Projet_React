import Header from "../HeaderAndFooter/Header";
import Footer from "../HeaderAndFooter/Footer";
import MerchandiseCardCart from "../MerchandiseComp/MerchandiseCardCart";
import { connect } from "react-redux";
import { useEffect, useState } from "react";
import createCommand from "../../Redux/Actions/createCommand";
import { useNavigate } from "react-router-dom";

const mapStateToProps = ({ userCart, userIsLoggedIn, connectedUser, AllUserCart }) => {

    return {
        userCart: userCart,
        userIsLoggedIn: userIsLoggedIn,
        connectedUser: connectedUser,
        AllUserCart: AllUserCart
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatchCommand: (payload) => dispatch(createCommand(payload))

    }
}



const UserCart = ({ userCart, dispatchCommand, userIsLoggedIn, connectedUser, AllUserCart }) => {
    const changeUrl = useNavigate()
    const [classAlert, setClass] = useState("")
    const [messageAlert, setMessage] = useState("")





    const [subtotal, setSub] = useState(0)
    const [shippingCost, setShippingCost] = useState(0)
    const [total, setTotal] = useState(0)
    
    const [idxUser, setIdx] = useState(-1)

    useEffect(() => {

        const sub = [...userCart].reduce((acc, card) => { return acc += (card.orderedQuantity * card.product.price * 655) }, 0)
        const ship = [...userCart].reduce((acc, card) => { return acc += (card.orderedQuantity * 1550) }, 0)
        setSub(sub)
        setShippingCost(ship)
        setTotal(sub + ship)



        // eslint-disable-next-line
    }, [userCart])

    useEffect(() => {


        const idx = userIsLoggedIn ?
            [...AllUserCart].findIndex((userCard) => userCard.user.username === connectedUser[0].username && userCard.user.email === connectedUser[0].email)
            :
            -1
        setIdx(idx)

    }, [AllUserCart, connectedUser])


    const command = () => {
        if ([...userCart].length > 0) {

            if (userIsLoggedIn) {

                setClass("alert alert-primary")
                setMessage("Command completed")

                setTimeout(() => {

                    dispatchCommand({
                        user: connectedUser[0],
                        command: [{
                            products: [...userCart],
                            date: new Date().toDateString(),
                            total: total
                        }
                        ]

                    })
                }, 2000);

            } else {
                setClass("alert alert-danger")
                setMessage("You must log in to be able to order")

                setTimeout(() => {
                    // redirection to login page
                    changeUrl("/login")
                }, 2000)

            }
        } else {
            setClass("alert alert-danger")
            setMessage("You must add products to your cart to be able to command")
        }

    }


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
                        {
                            [...userCart].length > 0 ?

                                [...userCart].map((cart) => {
                                    return <MerchandiseCardCart
                                        key={cart.product.id}
                                        id={cart.product.id}
                                        title={cart.product.title}
                                        price={cart.product.price}
                                        imgSrc={cart.product.images[0]}
                                        description={cart.product.description}
                                        category={cart.product.category.name}
                                        orderedQuantity={cart.orderedQuantity}
                                    />
                                })
                                :
                                <div className="col col-sm col-md col-lg col-xl col-xxl mx-1 mb-3 ">
                                    <h3>
                                        No product has been added to cart yet
                                    </h3>
                                </div>

                        }


                    </div>
                    <div className="col col-sm col-md" id="cartSummary">
                        <h2>Cart summary</h2>
                        <p>Subtotal :{" "}
                            {

                                subtotal

                            }{" "}
                            F CFA</p>
                        <p>shipping cost :{" "}
                            {

                                shippingCost

                            }{" "}
                            F CFA</p>
                        <hr />
                        <p>Total :{" "}
                            {

                                total

                            }{" "}
                            F CFA</p>
                        <button className="btn btn-primary" id="commandbtn"
                            onClick={command}>
                            Command
                        </button>
                        <div className={classAlert + " mt-3"}>{messageAlert}</div>

                    </div>
                </div>

                <div className="row mt-3">
                    <h3>List of orders you have already made</h3>
                    <div className="col">

                        {userIsLoggedIn ?
                            <>
                                {
                                    [...AllUserCart].length > 0 && idxUser >= 0 ?

                                        [...[...AllUserCart][idxUser].command].map((command, idx) => {
                                            return <div key={idx}>
                                                <h5>Invoice N°{idx + 1}</h5>
                                                <table className="table table-hover" >
                                                    <thead>
                                                        <tr>
                                                            <th>Product's title</th>
                                                            <th>Price per unit</th>
                                                            <th>Qte</th>
                                                            <th>Total per product</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {
                                                            [...command.products].map((OrderedProduct, idx) => {
                                                                return <tr key={idx}>
                                                                    <td>{OrderedProduct.product.title}</td>
                                                                    <td>{OrderedProduct.product.price}</td>
                                                                    <td>{OrderedProduct.orderedQuantity}</td>
                                                                    <td>{OrderedProduct.orderedQuantity * OrderedProduct.product.price}</td>

                                                                </tr>
                                                            })
                                                        }
                                                        <tr>
                                                            <td></td>
                                                            <td></td>
                                                            <td>Total :</td>
                                                            <td>{command.total}</td>
                                                        </tr>
                                                    </tbody>

                                                    <tfoot>
                                                        <tr>
                                                            <td></td>
                                                            <td></td>
                                                            <td>

                                                            </td>
                                                            <td>
                                                                Date : {command.date}

                                                            </td>

                                                        </tr>
                                                    </tfoot>
                                                </table>

                                            </div>

                                        })


                                        :
                                        <p>You have never ordered products</p>


                                }


                            </>

                            :

                            <p>
                                you must be logged in to see the list of your past orders
                            </p>
                        }
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(UserCart);