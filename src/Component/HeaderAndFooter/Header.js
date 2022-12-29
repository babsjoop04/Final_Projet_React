import { FaUserAlt, FaShoppingCart, FaSearch } from "react-icons/fa"
import { AiFillDashboard } from "react-icons/ai"

const Header = () => {
    return (
        <div className="container-fluid text-center" id="Header">
            <div className="d-flex justify-content-between">
                <div className="m-2">
                    <img src={"/img/Logo/LogoKayyDieund2-removebg-preview2.png"} id="MyLogoHeader" alt="MyLogo" />
                </div>
                <div>
                    <div className="input-group m-2">
                        <span className="input-group-text">
                            <FaSearch />
                        </span>
                        <input type="text" className="form-control" id="inputChearch" placeholder="search" />
                        <button className="btn btn-primary btn-sm" id="search" >Search</button>
                    </div>
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
                    <div className="me-3" id="buttAcc">
                        <button className="btn">
                            <span className="h5" >
                                <FaUserAlt />&nbsp;
                                Account
                            </span>
                        </button>
                    </div>
                    <div className="me-3">
                        <button className="btn">
                            <span className="h5" >
                                <AiFillDashboard />&nbsp;
                                DashBoard
                            </span>
                        </button>
                    </div>
                    <div className="h5">
                        <button className="btn btn-primary" id="loginButton">Login</button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Header;