/* eslint-disable react/prop-types */
const Button = ({ btnText, btnClick }) => {
  return (
    <button
      onClick={btnClick}
      className="hover-effect px-7 py-2 bg-primary-mainBlue text-white text-sm"
    >
      {btnText}
    </button>
  );
};

export default Button;
