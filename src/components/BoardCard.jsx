import { MdOutlineCampaign } from "react-icons/md";

/* eslint-disable react/prop-types */
const BoardCard = ({ name, total }) => {
  return (
    <div className="shadow-xl bg-white p-5 flex flex-col gap-10">
      <div className="flex items-center gap-4">
        <div className="text-3xl p-2 flex items-center justify-center bg-secondary-blue">
          {<MdOutlineCampaign />}
        </div>

        <p className="text-lg">Total {name}</p>
      </div>
      <p className="text-2xl font-bold">{total}</p>
    </div>
  );
};

export default BoardCard;
