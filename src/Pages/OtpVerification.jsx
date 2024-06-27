/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";
const OtpVerification = ({ reSendAuth, reEnterEmail }) => {
  const otpRef = useRef([]);
  const userEmail = localStorage.getItem("userEmail");
  const [resendTime, setResndTime] = useState(60);
  const [otp, setOtp] = useState(Array(5).fill(""));

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && otp[index] === "") {
      if (index > 0) {
        otpRef.current[index - 1].focus();
      }
    }
  };
  const handleChange = async (e, index) => {
    const value = e.target.value;
    if (isNaN(value)) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    if (index < otp.length - 1 && otpRef.current[index + 1]) {
      otpRef.current[index + 1].focus();
    }
    if (index === otp.length - 1 && !newOtp.includes("")) {
      const data = {
        token: newOtp.join(""),
        email: userEmail,
      };

      console.log("code got here", data);
      localStorage.setItem("userData", JSON.stringify(data));
      window.location.reload();
    }
  };

  // // // // // // count down for send code // // // // // // //
  useEffect(() => {
    if (resendTime <= 0) return;
    const intervalId = setInterval(() => {
      setResndTime(resendTime - 1);
    }, 1000);
    return () => clearInterval(intervalId);
  }, [resendTime]);

  return (
    <div
      className={`w-full md:w-[70%] py-20 bg-secondary px-10 rounded-xl md:shadow-custom flex flex-col gap-8 relative`}
    >
      <h2 className="text-2xl font-semibold text-center">
        Verify email address
      </h2>

      <p className="text-center">
        We have sent a 5 digit OTP to{" "}
        <span className="text-lg font-semibold">{userEmail}</span>
      </p>

      <div className="flex justify-center">
        {otp.map((data, index) => (
          <input
            className="w-14 h-14 mx-2 text-center border border-gray-300 rounded bg-transparent"
            type="text"
            name="otp"
            maxLength="1"
            key={index}
            value={data}
            onChange={(e) => handleChange(e, index)}
            onFocus={(e) => e.target.select()}
            onKeyDown={(e) => handleKeyDown(e, index)}
            ref={(ref) => otpRef.current.push(ref)}
          />
        ))}
      </div>

      <p
        className={`text-center text-theGray2 ${
          resendTime <= 0 ? "cursor-pointer" : ""
        }`}
        onClick={resendTime <= 0 ? reSendAuth : ""}
      >
        Resend <span className=" text-purple">{resendTime}</span>
      </p>

      <div>
        <p className="text-center text-theGray2">
          This is not your email address?{" "}
        </p>
        <p
          onClick={reEnterEmail}
          className="flex items-center justify-center font-bold text-purple cursor-pointer"
        >
          Re-enter email
        </p>
      </div>
    </div>
  );
};

export default OtpVerification;
// TODO: is_kyc_submitted: 1, kyc_status: "approved"
