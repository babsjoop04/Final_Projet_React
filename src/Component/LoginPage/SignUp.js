import { FcGoogle } from "react-icons/fc";
import { BsFacebook, BsApple } from "react-icons/bs";
import { useEffect, useState } from "react";

const SignUp = () => {
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


  return (
    <div className="col col-sm col-md col-lg col-xl col-xxl" id="SignUpPage">
      <h3>Create account</h3>
      <form action="" className="mb-3">
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
              autoComplete="email"
            />
          </div>

          <div className="input-group mb-3">
            <span className="input-group-text">@</span>
            <input
              type="text"
              className="form-control"
              placeholder="your username"
              autoComplete="username"
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
        <button
          className="btn submit btn-outline-primary mt-2"
          id="createAccountBtn"
        >
          Create
        </button>
      </form>
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

export default SignUp;
