import { connect } from "react-redux";
import Dashboard from "./Dashboard";
import NoAuthorizationPage from "../User/NoAuthorizationPage";
const mapStateToProps = ({ userIsAdmin }) => {
    return {
        userIsAdmin: userIsAdmin

    }
}
const PrivateDashboard = ({ userIsAdmin }) => {
    return (
        userIsAdmin ?
            <Dashboard />

            :
            <NoAuthorizationPage />

    );
};

export default connect(mapStateToProps)(PrivateDashboard);