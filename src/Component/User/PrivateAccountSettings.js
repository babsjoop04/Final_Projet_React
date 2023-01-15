import { connect } from "react-redux";
import AccountSettings from "./AccountSettings";
import NoAuthorizationPage from "./NoAuthorizationPage";
const mapStateToProps = ({ userIsLoggedIn }) => {
    return {
        userIsLoggedIn: userIsLoggedIn
    }
}

const PrivateAccountSettings = ({ userIsLoggedIn }) => {
    return (

        userIsLoggedIn ?
            <AccountSettings />

            :
            <NoAuthorizationPage />

    );
};

export default connect(mapStateToProps)(PrivateAccountSettings);