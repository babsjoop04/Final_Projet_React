import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import AccountSettings from "./AccountSettings";
import Header from "../HeaderAndFooter/Header";
import Footer from "../HeaderAndFooter/Footer";

const mapStateToProps = ({ userIsLoggedIn }) => {
    return {
        userIsLoggedIn: userIsLoggedIn
    }
}

const PrivateAccountSettings = ({ userIsLoggedIn }) => {
    const changeUrl = useNavigate()
    return (

        userIsLoggedIn ?
            <AccountSettings />

            :
            <>
                <Header />

                <div className="container-fluid py-5 text-center">
                    <h5>you cannot access this page, you are not logged in</h5>
                    <button className="btn btn-outline-primary mx-2 mt-3"
                        onClick={() => changeUrl("/")}>Return to the home page</button>

                </div>

                <Footer />

            </>
    );
};

export default connect(mapStateToProps)(PrivateAccountSettings);