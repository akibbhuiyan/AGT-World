import { useContext, useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import loginImg from "../../assets/login.png";
import { AuthContext } from "../Context/UserContext";
const LoginModal = () => {
  const [newUser, setNewUser] = useState(true);
  const [showPass, setShowPass] = useState(false);
  const [showConPass, setShowConPass] = useState(false);
  const { setuserName, googleSignin, user, fbSignIn } = useContext(AuthContext);
  console.log(user);
  return (
    <div className="main-modal">
      <div className="modal-top">
        <p className="text-success">
          Lets learn, share & inspire each other with our passion for computer
          engineering. Sign up now 🤘🏼
        </p>
      </div>
      <div className="modal-main-body">
        <div className="d-flex justify-content-between align-items-center login-middle">
          <h1 className="login-title">
            {newUser ? "Sign In" : "Create Account"}
          </h1>

          {newUser ? (
            <span className="tab-change">
              Don’t have an account yet?
              <a onClick={() => setNewUser(!newUser)}>Create new for free!</a>
            </span>
          ) : (
            <span className="tab-change">
              Already have an account?{" "}
              <a onClick={() => setNewUser(!newUser)}>Sign In</a>
            </span>
          )}
        </div>

        <div className="row">
          <div className="col-md-6 col-sm-12">
            <form className="login-form">
              <div className="row">
                {!newUser && (
                  <>
                    <div className="col-md-6">
                      <input type="text" placeholder="First Name" />
                    </div>
                    <div className="col-md-6">
                      <input type="text" placeholder="Last Name" />
                    </div>
                  </>
                )}
                <div className="col-md-12">
                  <input type="email" placeholder="Email" />
                </div>
                <div className="col-md-12 passtoShow">
                  <input
                    type={showPass ? "password" : "text"}
                    placeholder="Password"
                  />
                  {showPass ? (
                    <AiOutlineEye onClick={() => setShowPass(!showPass)} />
                  ) : (
                    <AiOutlineEyeInvisible
                      onClick={() => setShowPass(!showPass)}
                    />
                  )}
                </div>
                {!newUser && (
                  <div className="col-md-12 passtoShow">
                    <input
                      type={showConPass ? "password" : "text"}
                      placeholder="Password"
                    />
                    {showPass ? (
                      <AiOutlineEye
                        onClick={() => setShowConPass(!showConPass)}
                      />
                    ) : (
                      <AiOutlineEyeInvisible
                        onClick={() => setShowConPass(!showConPass)}
                      />
                    )}
                  </div>
                )}
                <button
                  className="submit-btn"
                  onClick={() => setuserName("Your Name")}
                >
                  {newUser ? "Sign In" : "Create Account"}
                </button>
                <button className="facebookLogin-btn" onClick={fbSignIn}>
                  <BsFacebook />
                  Sign up with Facebook
                </button>
                <button className="googleLogin-btn" onClick={googleSignin}>
                  <FcGoogle />
                  Sign up with Google
                </button>
                {newUser && (
                  <a href="" className="forgot-pass">
                    Forgot Password?
                  </a>
                )}
              </div>
            </form>
          </div>
          <div className="col-md-6 d-md-block d-none ">
            <div className="showcase">
              <img src={loginImg} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
