import Footer from "../HeaderAndFooter/Footer";
import Header from "../HeaderAndFooter/Header";
import { VscCircleFilled } from "react-icons/vsc"

const Home = () => {
    return (
        <>
            <Header />

            <div className="container-fluid pt-3 pb-5 d-flex justify-content-between" id="BodyOfHome">
                <div className="py-3" id="filterForm">
                    <h2>Filter merchandise on sale</h2>
                    <h3>
                        <VscCircleFilled />
                        Categories
                    </h3>
                    (a faire pour chaque categorie)
                    <div className="form-check form-switch">
                        <div>
                            <input type="checkbox" className="form-check-input" name="#category" id="category" />
                            <span>
                                #categorie
                            </span>
                        </div>
                    </div>
                    <hr />
                    <div>
                        <h3>
                            <VscCircleFilled />
                            Price (F CFA)
                        </h3>
                        <span className="btn-group">
                            <input type="number" className="form-control form-control-sm" name="" id="minPrice" placeholder="Min" min={500} />
                            -
                            <input type="number" className="form-control form-control-sm" name="" id="MaxPrice" placeholder="Max" min={750} />
                        </span>
                    </div>
                    <br />
                    <div className="d-flex justify-content-center" >
                        <button className="btn btn-primary btn-sm">Filter</button>
                    </div>
                </div>
                <div className="d-flex justify-content-between">
                    (sert affichage des biens)
                </div>
            </div>

            <Footer />
        </>
    );
};

export default Home;
