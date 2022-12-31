import { useEffect, useState } from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

const LogInPage = () => {
  const [haveAccount, setHaveAccount] = useState(true);
  const [message1, changeMessage1] = useState("Don't have an account");
  const [message2, changeMessage2] = useState("sign up");

  useEffect(() => {
    document
      .getElementById("buttonChangeForm")
      .addEventListener("click", () => {
        setHaveAccount(!haveAccount);
        message1 === "Don't have an account"
          ? changeMessage1("Already have an account")
          : changeMessage1("Don't have an account");
        message2 === "sign up"
          ? changeMessage2("sign in")
          : changeMessage2("sign up");
      });
  });

  return (
    <div className="container-fluid text-center py-5" id="loginPage">
      <div className="row">
        <div className="col col-sm col-md col-lg col-xl col-xxl pt-2">
          <img
            src="/img/Logo/afficheLogo.gif"
            alt="logoPoster"
            className="img-fluid "
            id="logoPoster"
          />
        </div>
        <div
          className="col col-sm col-md col-lg col-xl col-xxl "
          id="SignInOrSignUp"
        >
          <div className="row">
            <div className="col col-sm col-md col-lg col-xl col-xxl">
              <img
                src="/img/Logo/LogoKayyDieund2-removebg-preview2.png"
                alt="MyLogo"
                id="MyLogoLogIn"
              />
            </div>
          </div>
          <div className="row">{haveAccount ? <SignIn /> : <SignUp />}</div>
          <div className="row my-3">
            <div className="col col-sm col-md col-lg col-xl col-xxl">
              {message1},
              <button className="btn btn-link" id="buttonChangeForm">
                {message2}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogInPage;
