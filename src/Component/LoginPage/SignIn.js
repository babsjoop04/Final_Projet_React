import { FcGoogle } from "react-icons/fc";
import { BsFacebook, BsApple } from "react-icons/bs";
const SignIn = () => {
    return (
        <div className="col" id="SignInPage">
            <h3>Sign in</h3>
            <div className="row">
                <form>
                    <div className="input-group input-group-sm mb-4">
                        <span className=" input-group-text">Email address</span>
                        <input
                            type="email"
                            className="form-control form-control-sm"
                            id="emailForLogin"
                            placeholder="example@example.com"
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
            <div className="row">
                <div className="col col-sm col-md col-lg col-xl col-xxl">
                    <button className="btn btn-outline-primary ">Log in</button>
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
                </div>
            </div>
        </div>
    );
};

export default SignIn;
