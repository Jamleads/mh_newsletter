import { Link } from "react-router-dom";
import PageName from "../components/PageName";
import { boardData, dashVeriicationProces } from "../utilities/dataUse";
import VeriyProcess from "../components/VeriyProcess";
import TopNav from "./TopNav";
import { useSelector } from "react-redux";

const DashBoard = () => {
  const state = useSelector((state) => state);
  console.log("the state", state);
  return (
    <>
      <div className="nav fixed top-0 right-0 left-0 bg-white shadow-2xl rounded-b-lg px-5 py-2">
        <TopNav />
      </div>

      <>
        <div className="flex flex-col gap-10">
          <PageName pageNmae={"Dashboard"} />

          <div className="grid grid-cols-3 gap-5 text-primary-mainBlue">
            {boardData.map((item, index) => (
              <div
                key={index}
                className="shadow-xl bg-white p-5 flex flex-col gap-2"
              >
                <p className="text-lg">Total {item.name}</p>
                <p className="text-2xl font-bold">{item.total}</p>
                <p className="text-xs">
                  {item.note} <br />
                  <Link
                    to="/campainSignform"
                    className=" underline text-primary-mainGreen"
                  >
                    {item.action}
                  </Link>
                </p>
              </div>
            ))}
          </div>

          <div className="getStatte flex items-center bg-white shadow-xl">
            <div className="w-[40%] h-[330px] md:p-10 border-primary-mainBlue flex flex-col justify-between border-r-[1px]">
              <div className="flex flex-col gap-5">
                <p className="text-2xl font-bold">Ready to get started?</p>
                <p className=" text-xs">
                  You are ready to start building your campaigns, automations,
                  sites and explore the app!
                </p>
                <p className=" text-xs">
                  Cross off the final item from the checklist in order to be
                  able to send campaigns and publish sites.
                </p>
              </div>

              <div>
                <p className="text-2xl font-bold">Ready to get started?</p>
                <p className="underline text-xs text-primary-mainGreen">
                  <Link to="/">Read this guide to set up your account.</Link>{" "}
                </p>
              </div>
            </div>

            <div className="w-[60%] md:p-10">
              <div className="flex flex-col gap-3">
                {dashVeriicationProces.map((item, index) => (
                  <VeriyProcess key={index} item={item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  );
};

export default DashBoard;
