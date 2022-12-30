import { FaUserAlt, FaShoppingCart, FaSearch } from "react-icons/fa"
import { AiFillDashboard } from "react-icons/ai"

const Header = () => {
    return (
        <>
            <div>
                <img src="/img/Logo/afficheLogoKayDieund.gif" className="img-fluid" alt="gifCover" id="gifCover" />
            </div>
            <div className="container-fluid text-center" id="Header">
                <div className="row">
                    <div className="mt-3 col-2 col-sm-2 col-lg-2  col-xl col-xxl">
                        <img src={"/img/Logo/LogoKayyDieund2-removebg-preview2.png"} id="MyLogoHeader" alt="MyLogo" />
                    </div>
                    <div className="col-5 col-sm-5 col-lg-5 col-xl-5 col-xxl-5 mt-4">
                        <div className="row">
                            <div className="col input-group ">
                                <span className="input-group-text">
                                    <FaSearch />
                                </span>
                                <input type="text" className="form-control" placeholder="Search" />
                                <button className="btn btn-primary">Search</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-5 col-sm-5 col-lg-5 col-xl-5 col-xxl-5">
                        <div className="row">
                            <div className="col col-sm col-lg col-xxl">
                                <button className="btn btn-sm-5 mt-3" id="shoppingCart">
                                    <span className="h6" >
                                        <FaShoppingCart />&nbsp;
                                        Shopping Cart
                                    </span>
                                </button>
                            </div>
                            <div className="col col-sm col-lg col-xl col-xxl " id="buttAcc">
                                <div className="row">
                                    <div className="col col-sm col-lg-4 col-xl col-xxl">
                                        <button className="btn btn-sm mt-3">
                                            <span className="h6" >
                                                <FaUserAlt />&nbsp;
                                                Account
                                            </span>
                                        </button>
                                    </div>
                                    <div className="col col-sm col-lg col-xl col-xxl">
                                        <button className="btn btn-sm mt-3">
                                            <span className="h6" >
                                                Dashboard
                                                <AiFillDashboard />&nbsp;
                                            </span>
                                        </button>
                                    </div>
                                    <div className="col col-sm col-lg col-xl col-xxl">
                                        <button className="btn mt-3 btn-primary" id="loginButton">
                                            Login
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
};

export default Header;