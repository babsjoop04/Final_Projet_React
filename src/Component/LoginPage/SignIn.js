import { FcGoogle } from "react-icons/fc";
import { BsFacebook, BsApple } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import createLoginAsAdmin from "../../Redux/Actions/createLoginAsAdmin";
import createLoginAsSimpleUser from "../../Redux/Actions/createLoginAsSimpleUser";
import { useState } from "react";


const mapStateToProps = ({ AllAdminUsers, AllSimpleUsersAccount }) => {
    return {
        AllAdminUsers: AllAdminUsers,
        AllSimpleUsersAccount: AllSimpleUsersAccount
    };
};
const mapDispachToProps = (dispatch) => {
    return {
        dispatchLoginAsAdmin: (payload) => dispatch(createLoginAsAdmin(payload)),
        dispatchLoginAsSimpleUser: (payload) => dispatch(createLoginAsSimpleUser(payload))

    };
};
const SignIn = ({ AllAdminUsers, AllSimpleUsersAccount, dispatchLoginAsAdmin, dispatchLoginAsSimpleUser }) => {

    const changeUrl = useNavigate();

    const [classAlert, setClass] = useState("")
    const [message, setMessage] = useState("")


    const Login = () => {
        const emailOrUsername = document.getElementById("emailOrUsernameForLogin").value
        const password = document.getElementById("passwordForLogin").value
        if (emailOrUsername !== "" && password !== "") {


            const isAdmin = [...AllAdminUsers].findIndex((userAccount) => {
                return (userAccount.email === emailOrUsername || userAccount.username === emailOrUsername) && userAccount.password === password
            })

            const isSimpleUser =
                [...AllSimpleUsersAccount].length > 0 ?
                    [...AllSimpleUsersAccount].findIndex((userAccount) => {
                        return (userAccount.email === emailOrUsername || userAccount.username === emailOrUsername) && userAccount.password === password
                    })
                    :
                    -1
            if (isAdmin >= 0) {

                dispatchLoginAsAdmin({
                    idx: isAdmin
                })

                changeUrl("/")

            } else if (isSimpleUser >= 0) {

                dispatchLoginAsSimpleUser({
                    idx: isSimpleUser
                })


                changeUrl("/")


            } else {
                setClass("alert alert-danger")
                setMessage("No registered account corresponds to this email/username and this password ")

            }
        }else{
            setClass("alert alert-danger")
            setMessage("Please enter your email/username and your password for login")
        }



    }

    return (
        <div className="col" id="SignInPage">
            <h3>Sign in</h3>
            <div className="row">
                <form autoComplete="off">
                    <div className="input-group input-group-sm mb-4">
                        <span className=" input-group-text">Email address or username</span>
                        <input
                            type="text"
                            className="form-control form-control-sm"
                            id="emailOrUsernameForLogin"
                            placeholder="example@example.com or example123"
                        />
                    </div>
                    <div className="input-group input-group-sm mb-4">
                        <span className="input-group-text">Password</span>
                        <input
                            type="password"
                            className="form-control form-control-sm"
                            id="passwordForLogin"
                            placeholder="password"
                        />
                    </div>
                </form>
            </div>
            <div className="row mb-4">
                <p className={classAlert}>{message}</p>
            </div>
            <div className="row">
                <div className="col col-sm col-md col-lg col-xl col-xxl">
                    <button className="btn btn-outline-primary mx-2" onClick={Login}>
                        Log in
                    </button>
                    <div className="row">
                        <div className="col">
                            <button
                                className="btn btn-outline-primary mx-2 mt-3"
                                onClick={() => changeUrl("/")}
                            >
                                Return to the home page
                            </button>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col col-sm col-md col-lg col-xl col-xxl">
                            <div className=" btn-group mt-3">
                                <button className="btn btn-outline-primary mx-2 ">
                                    Log in with <FcGoogle />
                                </button>
                                <button className="btn btn-outline-primary mx-2">
                                    Log in with <BsFacebook />
                                </button>
                                <button className="btn btn-outline-primary mx-2">
                                    Log in with <BsApple />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col col-sm col-md col-lg col-xl col-xxl">
                            <h3>Try the administrator account</h3>
                            {[...AllAdminUsers].length > 0 ? (
                                [...AllAdminUsers].map((account) => {
                                    return (
                                        <div key={account.id}>
                                            <h4>Email address : {account.email}</h4>
                                            <h4>Username : {account.username}</h4>
                                            <h4>Pasword : {account.password}</h4>
                                        </div>
                                    );
                                })
                            ) : (
                                <div className="spinner-border text-info"></div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default connect(mapStateToProps, mapDispachToProps)(SignIn);
