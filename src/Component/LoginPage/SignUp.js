import { FcGoogle } from "react-icons/fc";
import { BsFacebook, BsApple } from "react-icons/bs";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import createCreateNewAccount from "../../Redux/Actions/createCreateNewAccount";

const mapStateToProps = ({ AllAdminUsers, AllSimpleUsersAccount }) => {
  return {
    AllAdminUsers: AllAdminUsers,
    AllSimpleUsersAccount: AllSimpleUsersAccount

  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    dispatchCreateNewAccount: (payload) => dispatch(createCreateNewAccount(payload))

  }
}

const SignUp = ({ AllAdminUsers, AllSimpleUsersAccount, dispatchCreateNewAccount }) => {
  const changeUrl = useNavigate()

  const [classAlert, changeClass] = useState("");
  const [message, setMessage] = useState("");




  const CheckMatching = () => {

    if (document.getElementById("confirmPassword").value === document.getElementById("password").value) {
      setMessage("Passwords match");
      changeClass("alert alert-success");
    } else {
      setMessage("Please check passwords they don't match");
      changeClass("alert alert-danger");
    }
  }

  const createAccount = () => {
    // recovery of input data

    const firstName = document.getElementById("firstName").value
    const lastName = document.getElementById("lastName").value
    const genderTab = document.getElementsByName("gender")
    let userGender

    // eslint-disable-next-line
    [...genderTab].map((gender) => {

      if (gender.checked)
        userGender = gender.id
    })
    const birthDate = document.getElementById("birthDate").value
    const address = document.getElementById("address").value

    const email = document.getElementById("email").value
    const userName = document.getElementById("userName").value
    const password = document.getElementById("password").value
    const confirmPassword = document.getElementById("confirmPassword").value


    if (firstName === "" || lastName === "" || userGender === undefined || birthDate === "" || address === "" || email === "" || userName === "") {
      setMessage("Please complete the form!!");
      changeClass("alert alert-danger");
    }
    else {

      const accountAlreadyExists = [...AllAdminUsers, ...AllSimpleUsersAccount].findIndex((account) => {
        return account.email === email || account.username === userName
      })

      if (accountAlreadyExists >= 0) {

        setMessage("An account identified with this email or this username already exists, log in!!");

        changeClass("alert alert-danger");

      } else {
        if (password === confirmPassword) {

          dispatchCreateNewAccount({
            id: Date.now,
            firstName: firstName,
            lastName: lastName,
            gender: userGender,
            email: email,
            username: userName,
            password: password,
            birthDate: birthDate,
            address: address
          })

          changeUrl("/")

        } else {

          setMessage("Please check passwords they don't match");

          changeClass("alert alert-danger");

        }

      }

    }




  }


  return (
    <div className="col col-sm col-md col-lg col-xl col-xxl" id="SignUpPage">
      <h3>Create account</h3>
      <form autoComplete="off" className="mb-3">
        <fieldset className="mb-1">
          <legend>Personal info</legend>
          <div className="row">
            <div className="input-group mb-3">
              <span className="input-group-text">Your name</span>&nbsp;&nbsp;
              <input
                type="text"
                className="form-control"
                placeholder="First Name"
                id="firstName"
              />
              <input
                type="text"
                className="form-control"
                placeholder="Last Name"
                id="lastName"
              />
            </div>
            <div className="input-group mx-3  mb-3">
              <span className=" mx-1">Your gender :</span>&nbsp;&nbsp;
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
                type="date"
                className="form-control"
                name="birthDate"
                id="birthDate"
              />
            </div>
            <div className="input-group  mb-3">
              <span className="input-group-text">Your address </span>
              &nbsp;&nbsp;
              <input
                type="text"
                className="form-control"
                name="address"
                id="address"
                placeholder="your address or delivery address"
              />
            </div>


          </div>
        </fieldset>
        <fieldset>
          <legend>Login information</legend>
          <div className="input-group mb-3">
            <span className="input-group-text">Your email</span>
            <input
              type="email"
              className="form-control"
              placeholder="example@example.com"
              id="email"
            />
          </div>

          <div className="input-group mb-3">
            <span className="input-group-text">@</span>
            <input
              type="text"
              className="form-control"
              placeholder="your username"
              id="userName"
            />
          </div>
          <div className="input-group  mb-3">
            <span className="input-group-text">Password</span>
            <input
              type="password"
              className="form-control"
              name="password"
              id="password"

            />
          </div>
          <div className="input-group mb-3 ">
            <span className="input-group-text">Confirm password</span>
            <input
              type="password"
              className="form-control"
              name="confirmPassword"
              id="confirmPassword"
              onKeyUp={CheckMatching}
            />
          </div>
          <div className="row">
            <strong className={classAlert}>{message}</strong>
          </div>
        </fieldset>
      </form>
      <button
        className="btn btn-outline-primary mt-2"
        id="createAccountBtn"
        onClick={createAccount}
      >
        Create and login
      </button>
      <div className="row">
        <div className="col">
          <button className="btn btn-outline-primary mx-2 my-3"
            onClick={() => changeUrl("/")}
          >Return to the home page</button>

        </div>
      </div>
      <div className="row">
        <div className="col col-sm col-md col-lg col-xl col-xxl">
          <div className=" btn-group mt-3">
            <button className="btn btn-outline-primary mx-2 ">
              Sign up with <FcGoogle />
            </button>
            <button className="btn btn-outline-primary mx-2">
              Sign up with <BsFacebook />
            </button>
            <button className="btn btn-outline-primary mx-2">
              Sign up with <BsApple />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
