import Header from "../HeaderAndFooter/Header";
import Footer from "../HeaderAndFooter/Footer";
import AddOrDeleteForm from "./AddOrDeleteForm";
import { connect } from "react-redux";
import createDeleteSimpleAccount from "../../Redux/Actions/createDeleteSimpleAccount";

const mapStateToProps = ({ storage, AllSimpleUsersAccount, AllUserCart }) => {
    return {
        storage: storage,
        AllSimpleUsersAccount: AllSimpleUsersAccount,
        AllUserCart: AllUserCart
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatchDeleteSimpleAccount: (payload) => dispatch(createDeleteSimpleAccount(payload))

    }
}
const Dashboard = ({ storage, AllUserCart, AllSimpleUsersAccount, dispatchDeleteSimpleAccount }) => {

    const deleteSimpleAccount = (id) => {
        if (document.getElementById(`confirmCheckDeleteAll${id}`).checked) {
            dispatchDeleteSimpleAccount({
                id: id
            })
        }
    }

    return (
        <>
            <Header />

            <div className="container-fluid text-center mt-3 mb-5">
                <div className="row mb-2">
                    <div className="col-9">
                        <h3>List of all products</h3>
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th>#(id)</th>
                                    <th>Product title</th>
                                    <th>Description</th>
                                    <th>Price</th>
                                    <th>Category</th>
                                    <th>Image</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    [...storage].map((product) => {
                                        return <tr key={product.id}>
                                            <td>{product.id}</td>
                                            <td>{product.title}</td>
                                            <td>{product.description}</td>
                                            <td>{product.price * 655}</td>
                                            <td>{product.category.name}</td>
                                            <td>
                                                <img src={product.images[0]} alt="imgProduct" className="img-fluid" />
                                            </td>
                                        </tr>
                                    })
                                }
                            </tbody>
                        </table>
                        <div >

                        </div>
                    </div>
                    <AddOrDeleteForm />

                </div>
                <div className="row mb-2">
                    <div className="col">
                        <h3>All simple user account</h3>
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th>#(id)</th>
                                    <th>firstname</th>
                                    <th>Lastname</th>
                                    <th>Email</th>
                                    <th>@(Username)</th>
                                    <th>Gender</th>
                                    <th>Delete account</th>
                                </tr>
                            </thead>
                            <tbody>

                                {

                                    [...AllSimpleUsersAccount].map((account) => {
                                        return <tr key={account.id}>
                                            <td>{account.id}</td>
                                            <td>{account.firstName}</td>
                                            <td>{account.lastName}</td>
                                            <td>{account.email}</td>
                                            <td>{account.username}</td>
                                            <td>{account.gender}</td>
                                            <td>
                                                <div className="form-check mb-2">
                                                    <input type="checkbox" className="form-check-input" id={`confirmCheckDeleteAll${account.id}`} />
                                                    <button className="btn btn-danger" onClick={() => deleteSimpleAccount(account.id)}>Delete</button>
                                                </div>
                                            </td>

                                        </tr>

                                    })
                                }
                            </tbody>
                        </table>
                        <div className="alert alert-danger">To delete an account do not forget to check the box in front of the delete button</div>
                    </div>
                </div>
                <div className="row mb-2">
                    <h3>List of all user commands</h3>
                    {
                        [...AllUserCart].map((userCart) => {
                            return <>
                                <h5>Username : @{userCart.user.username}</h5>
                                {
                                    [...userCart.command].map((command, idx) => {

                                        return <div key={idx} className="my-4">
                                            <h6>Invoice N°{idx + 1}</h6>
                                            <table className="table table-hover ">
                                                <thead>
                                                    <tr>
                                                        <th>#(id)</th>
                                                        <th>Product title</th>
                                                        <th>Price per unit</th>
                                                        <th>Qte</th>
                                                        <th>Total per product</th>
                                                    </tr>
                                                </thead>
                                                <tbody>

                                                    {
                                                        [...command.products].map((OrderedProduct, idx) => {
                                                            return <tr key={idx}>
                                                                <td>{idx + 1}</td>
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
                                                        <td></td>
                                                        <td>Total</td>
                                                        <td>{command.total}</td>
                                                    </tr>





                                                </tbody>

                                                <tfoot>
                                                    <tr>
                                                        <td></td>
                                                        <td></td>
                                                        <td></td>
                                                        <td></td>
                                                        <td>
                                                            Date : {command.date}
                                                        </td>
                                                    </tr>
                                                </tfoot>

                                            </table>
                                        </div>
                                    })
                                }

                            </>
                        })
                    }



                </div>

            </div>



            <Footer />
        </>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);