/* eslint-disable react/prop-types */
import { IoCheckmarkCircle } from "react-icons/io5";
import { FaAngleRight } from "react-icons/fa6";
const VeriyProcess = ({ item }) => {
  return (
    <div className="step flex items-center justify-between py-3 border-b-[0.5px] border-primary-mainBlue">
      <div className="checked">
        <IoCheckmarkCircle className="text-3xl" />
      </div>

      <div className="md:w-[80%] font-light">
        <p className="text-lg">{item.title}</p>
        <p className=" text-xs">{item.details}</p>
      </div>

      <div className="flex items-center gap-1">
        <p className=" text-xs">{item.status}</p>
        <FaAngleRight />
      </div>
    </div>
  );
};

export default VeriyProcess;
