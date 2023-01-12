import Header from "./../HeaderAndFooter/Header";
import Footer from "./../HeaderAndFooter/Footer";
import { connect } from "react-redux";
import { useState } from "react";
import createChangeSimpleAccountInfo from "../../Redux/Actions/createChangeSimpleAccountInfo";
import createChangeAdminAccountInfo from "../../Redux/Actions/createChangeAdminAccountInfo";
import { useNavigate } from "react-router-dom";


const mapStateToProps = ({ connectedUser, userIsLoggedIn, userIsAdmin }) => {
    return {
        connectedUser: connectedUser,
        userIsLoggedIn: userIsLoggedIn,
        userIsAdmin: userIsAdmin,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        dispatchChangeSimpleAccountInfo: (payload) =>
            dispatch(createChangeSimpleAccountInfo(payload)),
        dispatchChangeAdminAccountInfo: (payload) =>
            dispatch(createChangeAdminAccountInfo(payload)),
    };
};

const AccountSettings = ({ connectedUser, userIsLoggedIn, userIsAdmin, dispatchChangeSimpleAccountInfo, dispatchChangeAdminAccountInfo, }) => {
    const changeUrl = useNavigate();
    const [wouldChangeInfo, setWouldChangeInfo] = useState(false);

    const [messageAlert, changeMessage] = useState("");
    const [classAlert, changeClass] = useState("");




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
    return (
        <>
            <Header />

            <div className="container-fluid text-center mt-3 mb-5">
                <h1>Account Settings</h1>
                <form autoComplete="off">
                    <div className="row">
                        <div className="col col-sm col-md col-lg col-xl col-xxl ">
                            <fieldset>
                                <legend className="h3">Personal information</legend>
                                {wouldChangeInfo ? (
                                    <>
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
                                    </>
                                ) : (
                                    <>
                                        <div className="mb-3">
                                            <div className="mb-2">
                                                <p id="currentFirstName">
                                                    <span className="h5">Your firstName :</span>{" "}
                                                    {connectedUser[0].firstName}
                                                </p>
                                            </div>
                                            <div className="mb-2">
                                                <p id="currentLastName">
                                                    <span className="h5">Your lastName :</span>{" "}
                                                    {connectedUser[0].lastName}
                                                </p>
                                            </div>
                                            <div className="mb-2">
                                                <p id="currentGender">
                                                    <span className="h5">Your gender :</span>{" "}
                                                    {connectedUser[0].gender}
                                                </p>
                                            </div>
                                            <div className="mb-2">
                                                <p id="currentBirthDate">
                                                    <span className="h5">Your birthdate :</span>{" "}
                                                    {connectedUser[0].birthDate}
                                                </p>
                                            </div>
                                            <div className="mb-2">
                                                <p id="currentAddress">
                                                    <span className="h5">Your address :</span>{" "}
                                                    {connectedUser[0].address}
                                                </p>
                                            </div>
                                        </div>
                                    </>
                                )}
                            </fieldset>
                        </div>
                        <div className="col col-sm col-md col-lg col-xl col-xxl">
                            <fieldset>
                                <legend className="h3">Login information</legend>
                                {wouldChangeInfo ? (
                                    <>
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
                                    </>
                                ) : (
                                    <div className="mb-3">
                                        <div className="mb-2">
                                            <p>
                                                <span className="h5">Your email :</span>{" "}
                                                {connectedUser[0].email}
                                            </p>
                                        </div>
                                        <div className="mb-2">
                                            <p>
                                                <span className="h5">Your username :</span>{" "}
                                                {connectedUser[0].username}
                                            </p>
                                        </div>

                                        <div className="mb-2 ">
                                            <p>
                                                <span className="h5">Your actual password :</span>{" "}
                                                {connectedUser[0].password}
                                            </p>
                                        </div>
                                    </div>
                                )}
                            </fieldset>
                        </div>
                    </div>
                </form>
                <div className="row mb-5 text-center">
                    <div className="col col-sm col-md col-lg col-xl col-xxl">
                        {wouldChangeInfo ? (
                            <>
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
                                <div className="mt-4">
                                    <span className={classAlert}>{messageAlert}</span>
                                </div>
                            </>
                        ) : (
                            <button
                                className="btn btn-info mx-2"
                                id="updateBtn"
                                onClick={() => setWouldChangeInfo(!wouldChangeInfo)}
                            >
                                Change information
                            </button>
                        )}
                    </div>
                </div>
                <div className="row mb-3">
                    <h3>Delete account</h3>
                    <div className="col">
                        <input type="checkbox" name="deleteCheck" id="deleteCheck" />
                        <span>Yes I am sure I want to delete my account</span>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <button className="btn btn-danger" id="deleteAccBtn">
                            Delete
                        </button>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
};

export default connect(mapStateToProps, mapDispatchToProps)(AccountSettings);
