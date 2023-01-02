import Header from "./../HeaderAndFooter/Header";
import Footer from "./../HeaderAndFooter/Footer";
const AccountSettings = () => {
    return (
        <>
            <Header />

            <div className="container-fluid text-center mt-3 mb-5">
                <h1>Account Settings</h1>
                <form action="">
                    <div className="row">
                        <div className="col col-sm col-md col-lg col-xl col-xxl ">
                            <fieldset>
                                <legend>Personal information</legend>
                                <div className="input-group mb-3">
                                    <span className="input-group-text">Your name</span>
                                    &nbsp;&nbsp;
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="First Name"
                                        id="newFirstName"
                                    />
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Last Name"
                                        id="newLastName"
                                    />
                                </div>
                                <div className="input-group mx-3  mb-3">
                                    <span className=" mx-1">Your gender :</span>&nbsp;&nbsp;
                                    <span className="form-check">
                                        <input
                                            type="radio"
                                            className="form-check-input"
                                            name="gender"
                                            id="manGender"
                                        />
                                        <span className="form-check-label">Man</span>
                                    </span>
                                    <span className="form-check mx-3 ">
                                        <input
                                            type="radio"
                                            className="form-check-input"
                                            name="gender"
                                            id="womanGender"
                                        />
                                        <span className="form-check-label">Woman</span>
                                    </span>
                                </div>
                                <div className="input-group  mb-3">
                                    <span className="input-group-text">Your birthdate :</span>
                                    &nbsp;&nbsp;
                                    <input
                                        type="date"
                                        className="form-control"
                                        name="birthDate"
                                        id="newBirthDate"
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
                                    />
                                </div>
                            </fieldset>
                        </div>
                        <div className="col col-sm col-md col-lg col-xl col-xxl">
                            <fieldset>
                                <legend>Login information</legend>
                                <div className="input-group mb-3">
                                    <span className="input-group-text">Your email</span>
                                    <input
                                        type="email"
                                        className="form-control"
                                        placeholder="example@example.com"
                                        id="newEmail"
                                    />
                                </div>

                                <div className="input-group mb-3">
                                    <span className="input-group-text">@</span>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="your username"
                                        id="newUsename"
                                    />
                                </div>
                                <div className="input-group  mb-3">
                                    <span className="input-group-text">Current password</span>
                                    <input
                                        type="password"
                                        className="form-control"
                                        name="currentPassword"
                                        id="currentPassword"
                                    />
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
                </form>
                <div className="row mb-5">
                    <div className="col col-sm col-md col-lg col-xl col-xxl">
                        <button className="btn btn-info mx-2" id="updateBtn">
                            Update changes
                        </button>
                        <button className="btn btn-primary mx-2" id="cancelBtn">
                            Cancel
                        </button>
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
    );
};

export default AccountSettings;
