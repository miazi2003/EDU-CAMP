import React, { useContext } from "react";
import loginLottie from "../../../assets/lottie/login.json";
import Lottie from "lottie-react";
import { AuthContext } from "../../../Context/AuthContext";
import { useLocation, useNavigate } from "react-router";
import toast from "react-hot-toast";
const SignIn = () => {
  const { signInUser, googleLogin } = useContext(AuthContext);
  const location = useLocation()
  const navigate = useNavigate()
  console.log(location)

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    // login account

    signInUser(email, password)
      .then((res) => {
        console.log(res.user);
        toast.success('Successfully Signed in')
         navigate(location.state?.pathname || '/')
      })
      .catch((err) => {
        console.log(err.message);
        toast.error(err.message)
      });
  };

  const handleGoogleLogin = () => {
    googleLogin()
      .then((res) => {
        console.log(res.user);
        toast.success("Successfully Signed In")
           navigate(location.state?.pathname || '/')
      })
      .catch((err) => {
        console.log(err.message);
        toast.error(err.message)
      });
  };

  return (
    <div className=" lg:flex lg:flex-row flex-col-revers min-h-screen">
      <div className="md:w-1/2 md:flex flex-col hidden  items-center justify-center  pt-4 text-center">
        <h1 className="text-5xl text-green-800 ">
          EduCamp <span className="text-gray-500 textWhite">Web</span>
        </h1>
        <p className="text-lg text-gray-500 mt-2 font">
          Login Here To Restart Your Learning Journey
        </p>

        <Lottie
          style={{ width: "440px" }}
          animationData={loginLottie}
          loop={true}
        ></Lottie>
      </div>

      <div className="md:w-1/2 flex items-center justify-center lg:mt-0 mt-6 p-4">
        <div className="card bg-base-100 w-full max-w-sm  shrink-0 shadow-sm shadow-white">
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <fieldset className="fieldset">
                <h1 className="text-4xl text-center text-gray-500 py-8">
                  Login Here
                </h1>
                <label className="label">Email</label>
                <input
                  type="email"
                  className="input border-green-700 text"
                  placeholder="Email"
                  name="email"
                />

                <label className="label">Password</label>
                <input
                  type="password"
                  className="input border-green-700 text"
                  placeholder="Password"
                  name="password"
                />
                <div>
                  <a className="link link-hover">Forgot password?</a>
                </div>
                <button
                  className="btn bg-green-800 mt-4 text-white hover:bg-white hover:text-green-800 hover:border-green-800 "
                  type="submit"
                >
                  Login
                </button>
                <div className="divider">OR</div>
                <button
                  className="btn bg-white text-black border-[#e5e5e5]"
                  onClick={() => {
                    handleGoogleLogin();
                  }}
                >
                  <svg
                    aria-label="Google logo"
                    width="16"
                    height="16"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <g>
                      <path d="m0 0H512V512H0" fill="#fff"></path>
                      <path
                        fill="#34a853"
                        d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                      ></path>
                      <path
                        fill="#4285f4"
                        d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                      ></path>
                      <path
                        fill="#fbbc02"
                        d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                      ></path>
                      <path
                        fill="#ea4335"
                        d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                      ></path>
                    </g>
                  </svg>
                  Login with Google
                </button>
                <a
                  href="/signUp"
                  className="text-center text-gray-500 underline mt-2"
                >
                  {" "}
                  Want To Create Account?{" "}
                </a>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
