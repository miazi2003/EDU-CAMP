import React, { useContext } from "react";
import register from "../../../assets/lottie/register.json";
import Lottie from "lottie-react";
import { AuthContext } from "../../../Context/AuthContext";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";
const SignUp = () => {
  const { signUpUser, updateUser } = useContext(AuthContext);
const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.photo.value;

    console.log(name, email, password, photo);

    //password validation
    if (password.length < 6) {
      console.log("not met 6");
      toast.error("Password Must Have 6 Character");
      return;
    }
    if (!/[A-Z]/.test(password)) {
      console.log("not met A");
      toast.error("Password Must Have An Uppercase Letter");
      return;
    }
    if (!/[a-z]/.test(password)) {
      console.log("not met a");
      toast.error("Password Must Have A Lowercase Letter");
      return;
    }

    //create account

    signUpUser(email, password)
      .then((res) => {
        console.log(res.user);
        updateUser(name, photo)
          .then(() => {})
          .catch((err) => {
            console.log(err.message);
          });

          toast.success('Successfully Signed Up')

           navigate(location.state?.pathname || '/')
      })
      .catch((err) => {
        console.log(err.message);
        toast.error(err.message)
      });
  };

  return (
    <div className=" md:flex md:flex-row min-h-screen p-4">
      <div className="md:w-1/2 md:flex hidden flex-col items-center justify-center   text-center">
        <h1 className="text-5xl text-green-800 ">
          EduCamp <span className="text-gray-500 textWhite">Web</span>
        </h1>
        <p className="text-lg text-gray-500 mt-2 font">
          Sign Up Here To Start Your Learning Journey
        </p>

        <Lottie
          style={{ width: "400px" }}
          animationData={register}
          loop={true}
        ></Lottie>
      </div>

      <div className="md:w-1/2 flex items-center justify-center md:mt-0 mt-4">
        <div className="card bg-base-100 w-full max-w-sm  shrink-0 shadow-sm shadow-white">
          <div className="card-body">
            <h1 className="text-4xl text-center text-gray-500 py-2">
              Sign Up Here
            </h1>
            <form onSubmit={handleSubmit}>
              <fieldset className="fieldset">
                <label className="label">Name</label>
                <input
                  type="text"
                  className="input border-green-800 text"
                  placeholder="Name"
                  name="name"
                />
                <label className="label">Email</label>
                <input
                  type="email"
                  required
                  className="input border-green-800 text"
                  placeholder="Email"
                  name="email"
                />
                <label className="label">Photo Url</label>
                <input
                  type="url"
                  className="input border-green-800 text"
                  placeholder="Photo URL"
                  name="photo"
                />
                <label className="label">Password</label>
                <input
                  type="password"
                  required
                  className="input border-green-800 text"
                  placeholder="Password"
                  name="password"
                />
                <button className="btn bg-green-800 mt-4 text-white hover:bg-white hover:text-green-800 hover:border-green-800 ">
                  Sign Up
                </button>
                <a
                  href="/signIn"
                  className="text-center text-gray-500 underline"
                >
                  {" "}
                  Already have an account?{" "}
                </a>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
