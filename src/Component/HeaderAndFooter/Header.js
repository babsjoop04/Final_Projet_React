import { FaUserAlt, FaShoppingCart, FaSearch } from "react-icons/fa"
import { AiFillDashboard } from "react-icons/ai"

const Header = () => {
    return (
        <div className="container-fluid text-center" id="Header">
            <div className="d-flex justify-content-between">
                <div className="me-2">
                    <img src={"/img/Logo/LogoKayyDieund.png"} alt="MyLogo" id="MyLogo" />
                </div>
                {/* <div className="mx-2">
                    <button className="btn btn-primary" id="buttonHome">Home</button>
                </div> */}
                <div className="d-flex justify-content-around m-2">
                    <div className="input-group">
                        <span className="input-group-text">
                            <FaSearch />

                        </span>
                        <input type="text" className="form-control" id="inputChearch" placeholder="search" />
                    </div>
                    <button className="btn btn-primary btn-sm" id="search" >Search</button>
                </div>
                <div className="m-2 d-flex justify-content-around">
                    <div className="ms-1 me-5" id="shoppingCart">
                        <button className="btn">
                            <span className="h5" >
                                <FaShoppingCart />&nbsp;
                                Shopping Cart
                            </span>
                        </button>
                    </div>
                    <div className="me-3 h5">
                        <button className="btn">
                            <span className="h5" >
                                <FaUserAlt />&nbsp;
                                Account
                            </span>

                        </button>
                    </div>
                    <div className="me-3 h5">
                        <button className="btn">
                            <span className="h5" >
                                <AiFillDashboard />&nbsp;
                                DashBoard
                            </span>
                        </button>
                    </div>
                    <div className="h5">
                        <button className="btn btn-primary btn-sm" id="login">Login</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;