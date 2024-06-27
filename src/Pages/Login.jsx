/* eslint-disable react/prop-types */
import { useState } from "react";
import { errorToast } from "../utilities/ToastMessages";
import { Apple, Google, wallImage } from "../assets";
import OtpVerification from "./OtpVerification";
import InputTag from "../components/InputTag";

const Login = () => {
  const [readyToVerifyOtp, setReadyToVerifyOtp] = useState(false);
  const [formState, setFormState] = useState({
    email: "",
    other: "",
  });
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormState((prevData) => ({ ...prevData, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formState.email.includes("@") || !formState.email.includes(".")) {
      errorToast("Please enter a valid email address");
    } else {
      localStorage.setItem("userEmail", JSON.stringify(formState.email));
      setReadyToVerifyOtp(true);
    }
  };

  return (
    <div className="flex h-screen">
      <div
        className="relative h-full hidden w-1/2 bg-center bg-no-repeat bg-cover md:block"
        style={{
          backgroundImage: `url(${wallImage})`,
        }}
      >
        <div className="relative z-10 flex flex-col items-center justify-center h-full p-8 text-white">
          <div className="absolute bottom-[3rem]">
            <h1 className="mb-4 text-3xl font-bold px-10 text-center">
              Build with us
            </h1>
            <p className="text-center">
              We provide secure and reliable infrastructure for companies all
              over the world
            </p>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center w-full bg-white lg:w-1/2">
        {!readyToVerifyOtp ? (
          <div className="w-full max-w-xl bg-white rounded-xl py-9 md:shadow-custom">
            <h1 className="mb-10 text-3xl font-semibold text-center text-black">
              Log In or Sign Up
            </h1>

            <div className="flex flex-col items-center justify-between mt-4 ">
              <div className="w-[90%] md:w-[85%] mb-8 lg:w-[80%]">
                <button className="flex items-center justify-center w-full gap-2 py-2 font-bold border border-gray-400 xt-base rounded-3xl">
                  <img src={Google} alt="google" />
                  Continue with Google
                </button>
              </div>
              <div className="w-[90%] md:w-[85%] mb-8 lg:w-[80%]">
                <button className="flex items-center justify-center w-full gap-2 py-2 text-base font-bold border border-gray-400 rounded-3xl">
                  <img src={Apple} alt="apple" />
                  Continue with Apple
                </button>
              </div>
            </div>

            <div className="w-[90%] md:w-[85%] mb-8 lg:w-[80%] mx-auto flex items-center gap-2 mt-4 ">
              <hr className="w-full " />
              <p className="text-base font-semibold text-gray-600">or</p>
              <hr className="w-full " />
            </div>

            <form className="w-[90%] md:w-[85%] mb-8 lg:w-[80%] mx-auto space-y-4">
              <InputTag
                inputFor={"email"}
                inputLabel={"Email"}
                inputValue={formState.email}
                inputChange={(e) => handleChange(e)}
              />

              <div className="pt-4 pb-6">
                <button
                  className={`w-full py-2 text-white bg-red-500 rounded-3xl`}
                  onClick={handleSubmit}
                >
                  Continue
                </button>
              </div>
            </form>

            <div className="py-4">
              <p className="text-terniary text-base text-center">
                By clicking Continue, you agree to our <br />{" "}
                <span className="font-bold text-black">Terms of use </span>
                and <span className="font-bold text-black">Privacy Policy</span>
              </p>
            </div>
          </div>
        ) : (
          <OtpVerification reEnterEmail={() => setReadyToVerifyOtp(false)} />
        )}
      </div>
    </div>
  );
};

export default Login;
