import { useState } from "react";
import { connect } from "react-redux";
import createAddNewProduct from "../../Redux/Actions/createAddNewProduct";
import createDeleteAllProductsOfCategory from "../../Redux/Actions/createDeleteAllProductsOfCategory";
import createDeleteOnlyOneProduct from "../../Redux/Actions/createDeleteOnlyOneProduct";


const mapStateToProps = ({ AllCategories }) => {
    return {
        AllCategories: AllCategories
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatchDeleteOnlyOneProduct: (payload) => dispatch(createDeleteOnlyOneProduct(payload)),
        dispatchDeleteAllProductOfCategory: (payload) => dispatch(createDeleteAllProductsOfCategory(payload)),
        dispatchAddNewProduct: (payload) => dispatch(createAddNewProduct(payload))

    }
}

const AddOrDeleteForm = ({ AllCategories, dispatchDeleteOnlyOneProduct, dispatchDeleteAllProductOfCategory, dispatchAddNewProduct }) => {

    const [wouldAdd, setWouldAdd] = useState(true)
    const [message, setMessage] = useState("Add new product ?")

    const [classAlert, setClassAlert] = useState("")
    const [messageAlert, setMessageAlert] = useState("")








    const DeleteOnlyOneProduct = () => {

        if (document.getElementById("confirmCheckDeleteOne").checked) {

            const productTitle = document.getElementById("productTitle").value
            const productCategory = document.getElementById("productCategory").value

            if (productTitle !== "" && productCategory !== "") {
                dispatchDeleteOnlyOneProduct({
                    productTitle: productTitle,
                    productCategory: productCategory
                })

                document.getElementById("productTitle").value = ""
                document.getElementById("productCategory").value = ""
                setTimeout(() => {

                    setClassAlert("alert alert-primary")
                    setMessageAlert("The product has been successfully deleted!")
                }, 1500)
            } else {

                setClassAlert("alert alert-danger")
                setMessageAlert("Please complete the form!")

            }
        } else {
            setClassAlert("alert alert-danger")
            setMessageAlert("Please confirm your decision!")
        }

    }

    const DeleteAllProduct = () => {
        if (document.getElementById("confirmCheckDeleteAll").checked) {
            const categoryTitle = document.getElementById("categoryTitle").value
            if (categoryTitle !== "") {

                dispatchDeleteAllProductOfCategory({
                    categoryTitle: categoryTitle
                })

                document.getElementById("categoryTitle").value = ""

                setTimeout(() => {

                    setClassAlert("alert alert-primary")
                    setMessageAlert("Category and its products have been successfully deleted!")
                }, 1500)

            } else {
                setClassAlert("alert alert-danger")
                setMessageAlert("Please complete the form!")
            }
        } else {
            setClassAlert("alert alert-danger")
            setMessageAlert("Please confirm your decision!")

        }
    }

    const AddNewProduct = () => {
        const newProductTitle = document.getElementById("newProductTitle").value
        const newProductDescription = document.getElementById("newProductDescription").value
        const newProductPrice = document.getElementById("newProductPrice").value
        const newProductImage1 = document.getElementById("newProductImage1").value
        const newProductImage2 = document.getElementById("newProductImage2").value
        const categoriesTab = document.getElementsByName("categories")
        let productCategory
        // eslint-disable-next-line
        [...categoriesTab].map((category) => {
            if (category.checked)
                productCategory = category.id
        })

        if (productCategory === undefined)
            productCategory = document.getElementById("newCategoryName").value




        if (newProductTitle === "" || newProductDescription === "" || newProductImage1 === "" || newProductImage2 === "" || newProductPrice === "" || productCategory === "") {
            setClassAlert("alert alert-danger")
            setMessageAlert("Please complete the form!")

        } else {


            dispatchAddNewProduct({
                newProduct: {
                    id: Date.now(),
                    title: newProductTitle,
                    price: newProductPrice,
                    description: newProductDescription,
                    images: [
                        newProductImage1,
                        newProductImage2
                    ],
                    category: {
                        name: productCategory
                    }
                },
                newCategory: {
                    name: productCategory,
                    id: Date.now()
                }

            })

            setTimeout(() => {

                setClassAlert("alert alert-primary")
                setMessageAlert("The product has been successfully added!")
            }, 1500)
        }
    }
    return (
        <div className='col-3 text-center'>
            {
                wouldAdd ?

                    <>

                        <h3>Add new product</h3>
                        <h5>New product info</h5>
                        <div className="input-group mb-3">
                            <span className="input-group-text">Title</span>
                            <input type="text" className="form-control" id="newProductTitle" />
                        </div>
                        <div className=" mb-3">
                            <span className="h6">Description :</span>
                            <textarea id="newProductDescription" className="form-control" rows="3"></textarea>
                        </div>
                        <div className="input-group mb-3">
                            <span className="input-group-text">Price</span>
                            <input type="number" className="form-control" id="newProductPrice" min={0} />
                        </div>
                        <div className="input-group mb-3">
                            <span className="input-group-text">Image 1 of product</span>
                            <input type="text" className="form-control" id="newProductImage1" name="newProductImages" />

                        </div>
                        <div className="input-group mb-3">
                            <span className="input-group-text">Image 2 of product</span>
                            <input type="text" className="form-control" id="newProductImage2" name="newProductImages" />
                        </div>
                        <h6>Product category </h6>
                        <div className="row">
                            {
                                [...AllCategories].map((category) => {
                                    return <span className="form-check mb-2 col-5"
                                        key={category.id}

                                    >
                                        <input
                                            type="radio"
                                            className="form-check-input"
                                            name="categories"
                                            id={category.name}

                                        />
                                        <span className="form-check-label">
                                            {
                                                category.name
                                            }
                                        </span>
                                    </span>
                                })
                            }
                            <h6>Or</h6>
                            <div className="input-group mb-3">
                                <span className="input-group-text">New category's name</span>
                                <input type="text" className="form-control" id="newCategoryName" />

                            </div>
                        </div>
                        <button className="btn btn-primary"
                            onClick={AddNewProduct}>
                            Add
                        </button>
                    </>
                    :
                    <>
                        <h3>Delete form</h3>
                        <div className="mb-4">
                            <h5>* Only one product</h5>
                            <div className="input-group mb-3">
                                <span className="input-group-text">Product title</span>
                                <input type="text" className="form-control" id="productTitle" />
                            </div>
                            <div className="input-group mb-3">
                                <span className="input-group-text">Product category</span>
                                <input type="text" className="form-control" id="productCategory" />
                            </div>
                            <div className="form-check mb-2">
                                <input type="checkbox" className="form-check-input" id="confirmCheckDeleteOne" />
                                <span className="">Are you sure to remove this product?</span>
                            </div>
                            <button className="btn btn-danger" onClick={DeleteOnlyOneProduct}>Delete</button>
                        </div>
                        <h6>Or</h6>
                        <div>
                            <h5>* A category and all its products </h5>
                            <div className="input-group mb-3">
                                <span className="input-group-text">Category title</span>
                                <input type="text" className="form-control" id="categoryTitle" />
                            </div>
                            <div className="form-check mb-2">
                                <input type="checkbox" className="form-check-input" id="confirmCheckDeleteAll" />
                                <span className="">Are you sure to delete this category and its products?</span>
                            </div>
                            <button className="btn btn-danger" onClick={DeleteAllProduct}>Delete</button>
                        </div>
                    </>
            }




            <div className={classAlert + " my-2"}>
                {messageAlert}
            </div>





            <div className="">
                <button className="btn btn-link"
                    onClick={() => {
                        message === "Add new product ?" ? setMessage("Delete product ?") : setMessage("Add new product ?")
                        setWouldAdd(wouldAdd => !wouldAdd)
                    }}>

                    {message}
                </button>
            </div>
        </div>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(AddOrDeleteForm);