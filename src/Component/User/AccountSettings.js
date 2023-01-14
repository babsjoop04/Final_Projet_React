import Header from "./../HeaderAndFooter/Header";
import Footer from "./../HeaderAndFooter/Footer";
import { connect } from "react-redux";
import { useState } from "react";
import createChangeSimpleAccountInfo from "../../Redux/Actions/createChangeSimpleAccountInfo";
import createChangeAdminAccountInfo from "../../Redux/Actions/createChangeAdminAccountInfo";
import { useNavigate } from "react-router-dom";
import createDeleteSimpleAccount from "../../Redux/Actions/createDeleteSimpleAccount";
import createDeleteAdminAccount from "../../Redux/Actions/createDeleteAdminAccount";


const mapStateToProps = ({ connectedUser, userIsLoggedIn, userIsAdmin, AllAdminUsers }) => {
    return {
        connectedUser: connectedUser,
        userIsLoggedIn: userIsLoggedIn,
        userIsAdmin: userIsAdmin,
        AllAdminUsers: AllAdminUsers
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        dispatchChangeSimpleAccountInfo: (payload) =>
            dispatch(createChangeSimpleAccountInfo(payload)),
        dispatchChangeAdminAccountInfo: (payload) =>
            dispatch(createChangeAdminAccountInfo(payload)),
        dispatchDeleteSimpleAccount: (payload) => dispatch(createDeleteSimpleAccount(payload)),
        dispatchDeleteAdminAccount: (payload) => dispatch(createDeleteAdminAccount(payload))

    };
};

const AccountSettings = ({ connectedUser, userIsAdmin, AllAdminUsers, dispatchChangeSimpleAccountInfo, dispatchChangeAdminAccountInfo, dispatchDeleteSimpleAccount, dispatchDeleteAdminAccount }) => {
    const changeUrl = useNavigate();
    const [wouldChangeInfo, setWouldChangeInfo] = useState(false);

    const [messageAlert, changeMessage] = useState("");
    const [classAlert, changeClass] = useState("");


    const [messageAlert2, changeMessage2] = useState("");
    const [classAlert2, changeClass2] = useState("");




    const Update = () => {
        if (document.getElementById("updateCheck").checked) {
            if (
                document.getElementById("currentPassword").value ===
                connectedUser[0].password
            ) {
                const newFirstName = document.getElementById("newFirstName").value;
                const newLastName = document.getElementById("newLastName").value;
                const newGenderTab = document.getElementsByName("gender");
                let newGender;
                // eslint-disable-next-line
                [...newGenderTab].map((gender) => {
                    if (gender.checked) newGender = gender.id;
                });
                const newBirthDate = document.getElementById("newBirthDate").value;
                const newAddress = document.getElementById("newAddress").value;
                const newEmail = document.getElementById("newEmail").value;
                const newUsename = document.getElementById("newUsename").value;
                const newPassword = document.getElementById("newPassword").value;
                const newConfirmPassword = document.getElementById("newConfirmPassword").value;

                if (newConfirmPassword === newPassword) {

                    changeMessage("Information has been changed");
                    changeClass("alert alert-primary");

                    setTimeout(() => {

                        userIsAdmin ?
                            dispatchChangeAdminAccountInfo(
                                {
                                    id: connectedUser[0].id,
                                    firstName: newFirstName,
                                    lastName: newLastName,
                                    gender: newGender || connectedUser[0].gender,
                                    email: newEmail,
                                    username: newUsename,
                                    password: newPassword || connectedUser[0].password,
                                    birthDate: newBirthDate,
                                    address: newAddress
                                })

                            :
                            dispatchChangeSimpleAccountInfo({
                                id: connectedUser[0].id,
                                firstName: newFirstName,
                                lastName: newLastName,
                                gender: newGender || connectedUser[0].gender,
                                email: newEmail,
                                username: newUsename,
                                password: newPassword || connectedUser[0].password,
                                birthDate: newBirthDate,
                                address: newAddress
                            })


                        changeUrl("/");
                    }, 1500);
                } else {
                    changeMessage("New password and confirm password don't match");
                    changeClass("alert alert-danger");
                }
            } else {
                changeMessage("Incorrect current password");
                changeClass("alert alert-danger");
            }
        } else {
            changeMessage("Please confirm permission to change your account info!!");
            changeClass("alert alert-danger");
        }
    };


    const deleteAccount = () => {

        if (document.getElementById("deleteCheck").checked) {

            if (userIsAdmin) {

                if ([...AllAdminUsers].length === 1) {
                    changeMessage2("To delete an admin account, there must be at least 1 other admin account left, there is only 1 registered admin account")
                    changeClass2("alert alert-danger");
                } else {
                    changeMessage2("Successful deletion")
                    changeClass2("alert alert-primary");

                    setTimeout(() => {

                        dispatchDeleteAdminAccount({ id: connectedUser[0].id })

                        changeUrl("/")
                    }, 1500)

                }


            } else {
                changeMessage2("Successful deletion")
                changeClass2("alert alert-primary");

                setTimeout(() => {

                    dispatchDeleteSimpleAccount({ id: connectedUser[0].id })

                    changeUrl("/")
                }, 1500)
            }


        }
        else {
            changeMessage2("Please confirm permssion to delete your account !!")
            changeClass2("alert alert-danger");

        }

    }
    return (
        <>
            <Header />

            <div className="container-fluid text-center  mt-3 mb-5">
                <h2>Account settings</h2>
                <div className=" mt-4 d-flex  justify-content-center">
                    {
                        wouldChangeInfo ?
                            <div className="">
                                <div className="row">
                                    <div className="col col-sm col-md col-lg col-xl col-xxl">
                                        <fieldset>
                                            <legend>Personal info</legend>
                                            <div className="input-group mb-3">
                                                <span className="input-group-text">Your name</span>
                                                &nbsp;&nbsp;
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="First Name"
                                                    id="newFirstName"
                                                    defaultValue={connectedUser[0].firstName}
                                                />
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Last Name"
                                                    id="newLastName"
                                                    defaultValue={connectedUser[0].lastName}
                                                />
                                            </div>

                                            <div className="input-group mx-3  mb-3">
                                                <span className=" mx-1">Change your gender :</span>
                                                &nbsp;&nbsp;
                                                <span className="form-check">
                                                    <input
                                                        type="radio"
                                                        className="form-check-input"
                                                        name="gender"
                                                        id="man"
                                                    />
                                                    <span className="form-check-label">Man</span>
                                                </span>
                                                <span className="form-check mx-3 ">
                                                    <input
                                                        type="radio"
                                                        className="form-check-input"
                                                        name="gender"
                                                        id="woman"
                                                    />
                                                    <span className="form-check-label">Woman</span>
                                                </span>
                                            </div>
                                            <div className="input-group  mb-3">
                                                <span className="input-group-text">Your birthdate :</span>
                                                &nbsp;&nbsp;
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    name="newBirthDate"
                                                    id="newBirthDate"
                                                    defaultValue={connectedUser[0].birthDate}
                                                />
                                            </div>
                                            <div className="input-group  mb-3">
                                                <span className="input-group-text">Your address </span>
                                                &nbsp;&nbsp;
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    name="address"
                                                    id="newAddress"
                                                    placeholder="your address or delivery address"
                                                    defaultValue={connectedUser[0].address}
                                                />
                                            </div>
                                        </fieldset>
                                    </div>
                                    <div className="col col-sm col-md col-lg col-xl col-xxl">
                                        <fieldset>
                                            <legend>Login info</legend>
                                            <div className="input-group mb-3">
                                                <span className="input-group-text">Your email</span>
                                                <input
                                                    type="email"
                                                    className="form-control"
                                                    placeholder="example@example.com"
                                                    id="newEmail"
                                                    defaultValue={connectedUser[0].email}
                                                />
                                            </div>

                                            <div className="input-group mb-3">
                                                <span className="input-group-text">@</span>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="your username"
                                                    id="newUsename"
                                                    defaultValue={connectedUser[0].username}
                                                />
                                            </div>

                                            <div className="mt-4">
                                                <p>
                                                    <em>
                                                        NB : If you do not want to change your current
                                                        password, leave the following 2 fields empty
                                                    </em>
                                                </p>
                                            </div>

                                            <div className="input-group  mb-3">
                                                <span className="input-group-text">New password</span>
                                                <input
                                                    type="password"
                                                    className="form-control"
                                                    name="newPassword"
                                                    id="newPassword"
                                                />
                                            </div>
                                            <div className="input-group mb-3 ">
                                                <span className="input-group-text">Confirm password</span>
                                                <input
                                                    type="password"
                                                    className="form-control"
                                                    name="newConfirmPassword"
                                                    id="newConfirmPassword"
                                                />
                                            </div>
                                        </fieldset>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col col-sm col-md col-lg col-xl col-xxl">

                                        <div className="mb-3">
                                            <input
                                                type="checkbox"
                                                name="updateCheck"
                                                className="form-check-input"
                                                id="updateCheck"
                                            />{" "}
                                            <span>
                                                Yes I confirm I want to change my account information
                                            </span>
                                        </div>
                                        <div className="input-group">
                                            <span className="input-group-text">
                                                Confirm your current password
                                            </span>
                                            <input
                                                type="password"
                                                className="form-control"
                                                name="currentPassword"
                                                id="currentPassword"
                                            />

                                            <button
                                                className="btn btn-info"
                                                id="updateBtn"
                                                onClick={Update}
                                            >
                                                Update changes
                                            </button>
                                            <button
                                                className="btn btn-danger"
                                                id="cancelBtn"
                                                onClick={() => setWouldChangeInfo(!wouldChangeInfo)}
                                            >
                                                Cancel
                                            </button>
                                        </div>
                                        <div className="my-4 ">
                                            <span className={classAlert}>{messageAlert}</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="row mb-3">
                                    <h2>Delete account</h2>
                                    <div className="col">
                                        <div className="mb-2">
                                            <input type="checkbox" name="deleteCheck" id="deleteCheck" />{" "}
                                            <span>Yes I am sure I want to delete my account</span>
                                        </div>
                                        <button className="btn btn-danger" id="deleteAccBtn"
                                            onClick={deleteAccount}>
                                            Delete
                                        </button>
                                    </div>
                                    <div className="mt-4">
                                        <span className={classAlert2}>{messageAlert2}</span>
                                    </div>
                                </div>
                            </div>
                            :

                            <div className="card" id="userCart">
                                <img src={connectedUser[0].gender === "man" ? "/img/Profil/manProfil.png" : "/img/Profil/womanprofil.png"} className="card-img-top " alt="imgProfil" id="imgProfil" />
                                <div className="card-body">
                                    <div className="mb-2">
                                        <span className="h3" id="currentFirstName">
                                            {connectedUser[0].firstName}{" "}
                                            {connectedUser[0].lastName}
                                        </span>
                                    </div>
                                    <div className="mb-2">
                                        <span className="h5">
                                            @{connectedUser[0].username}
                                        </span>
                                    </div>

                                    <div className="mb-2">
                                        <p >
                                            <span className="h5">Gender :</span>{" "}
                                            {connectedUser[0].gender}
                                        </p>
                                    </div>
                                    <div className="mb-2">
                                        <p>
                                            <span className="h5">Birthdate :</span>{" "}
                                            {connectedUser[0].birthDate}
                                        </p>
                                    </div>
                                    <div className="mb-2">
                                        <p>
                                            <span className="h5">Address :</span>{" "}
                                            {connectedUser[0].address}
                                        </p>
                                    </div>
                                    <div className="mb-2">
                                        <p>
                                            <span className="h5">Email :</span>{" "}
                                            {connectedUser[0].email}
                                        </p>
                                    </div>
                                </div>
                                <div>

                                    <button
                                        className="btn btn-warning mx-2"
                                        id="updateBtn"
                                        onClick={() => setWouldChangeInfo(!wouldChangeInfo)}
                                    >
                                        Change information
                                    </button>
                                </div>
                            </div>
                    }



                </div>


            </div>

            <Footer />
        </>
    )
};

export default connect(mapStateToProps, mapDispatchToProps)(AccountSettings);
