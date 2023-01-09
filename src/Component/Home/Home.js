import Footer from "../HeaderAndFooter/Footer";
import Header from "../HeaderAndFooter/Header";
import WaitingPage from "../WaitingPage";
import MerchandiseCardHome from "../MerchandiseComp/MerchandiseCardHome";
import { VscCircleFilled } from "react-icons/vsc";
import { connect } from "react-redux";
import createFilter from "../../Redux/Actions/createFilter";

const mapStateToProps = ({ AllProducts, AllCategories, isLoading }) => {
    return {
        AllProducts: AllProducts,
        AllCategories: AllCategories,
        isLoading: isLoading,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        dispatchFilter: (payload) => dispatch(createFilter(payload))
    };
};

const Home = ({ AllProducts, AllCategories, isLoading, dispatchFilter }) => {


    const Filter = () => {

        const AllcategoriesChecked = [...document.getElementsByName("categories")].filter((category) => category.checked)

        AllcategoriesChecked.forEach((category, idx) => {
            AllcategoriesChecked[idx] = category.id
        })

        const minPrice = Math.ceil(parseInt(document.getElementById("minPrice").value) / 655)
        const maxPrice = Math.ceil(parseInt(document.getElementById("maxPrice").value) / 655)

        dispatchFilter({
            categories: [...AllcategoriesChecked],
            minPrice: minPrice,
            maxPrice: maxPrice
        })

    }

    return isLoading ? (
        <WaitingPage />

    ) : (
        <>
            <Header />

            <div
                className=" pt-3 pb-5 d-flex justify-content-between"
                id="BodyOfHome"
            >
                <div className="py-3" id="filterForm">
                    <h2 id="titleFilter">Filter</h2>
                    <h3>
                        <VscCircleFilled />
                        Categories
                    </h3>
                    {/* (a faire pour chaque categorie) */}
                    {[...AllCategories].map((category) => {
                        return (
                            <div className="form-check form-switch" key={category.id}>
                                <div>
                                    <input
                                        type="checkbox"
                                        className="form-check-input"
                                        name="categories"
                                        id={category.name}
                                    />
                                    <span>{category.name}</span>
                                </div>
                            </div>
                        );
                    })}
                    <hr />

                    <div>
                        <h3>
                            <VscCircleFilled />
                            Price (F CFA)
                        </h3>
                        <span className="btn-group">
                            <input
                                type="number"
                                className="form-control form-control-sm"
                                name=""
                                id="minPrice"
                                placeholder="Min"
                                min={500}
                            />
                            -
                            <input
                                type="number"
                                className="form-control form-control-sm"
                                name=""
                                id="maxPrice"
                                placeholder="Max"
                                min={750}
                            />
                        </span>
                    </div>
                    <br />
                    <div className="d-flex justify-content-center">
                        <button className="btn btn-primary btn-sm" onClick={Filter}>Filter</button>
                    </div>
                </div>
                <div className="container-fluid">
                    <div
                        className="row d-flex justify-content-around"
                        id="viewMarchandise"
                    >
                        {/* (sert affichage des biens) */}
                        {[...AllProducts].map((product) => {
                            return (
                                <MerchandiseCardHome
                                    key={product.id}
                                    id={product.id}
                                    title={product.title}
                                    price={product.price * 655}
                                    imageSrc={[...product.images][0]}
                                    category={product.category.name}
                                />
                            );
                        })}
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
