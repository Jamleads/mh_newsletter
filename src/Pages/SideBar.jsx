/* eslint-disable react/prop-types */
import { BiLogOut } from "react-icons/bi";
import { Link, useLocation } from "react-router-dom";
import { sideBarData } from "../utilities/dataUse";
import { useSelector } from "react-redux";
import { MdOutlineMapsHomeWork } from "react-icons/md";

const SideBar = ({ sidebarOpen }) => {
  const userRole = useSelector((state) => state.auth?.user?.role);
  const { pathname } = useLocation();

  const logout = (e) => {
    e.preventDefault();
    localStorage.clear;
    window.location.reload;
  };

  return (
    <div className="flex flex-col md:w-[70%] mx-auto h-[100vh] py-5">
      <div className="flex flex-col gap-16 h-[95%]">
        <div className="brandAndName flex items-center gap-3">
          <div className="w-[30px] h-[30px] flex items-center justify-center">
            <MdOutlineMapsHomeWork className="text text-3xl" />
          </div>
          {sidebarOpen ? (
            <p className="text-3xl text-primary-mainBlue">NEWSLETTER</p>
          ) : (
            ""
          )}
        </div>

        {userRole === "ADMIN" ? (
          <div className="navPage flex flex-col gap-8">
            {sideBarData.map((item, index) => (
              <Link to={item.pageLink} key={index}>
                <div
                  className={`flex items-center gap-5 py-2 text-primary-mainBlue hover:border-b-2 border-primary-mainGreen hover:text-primary-mainGreen ${
                    pathname === item?.pageLink
                      ? "border-primary-mainGreen text-primary-mainGreen border-b-2"
                      : ""
                  }`}
                >
                  <div className="text-3xl">{<item.pageIcon />}</div>
                  {sidebarOpen ? (
                    <div className="page text-xl uppercase">
                      {item.pageName}
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="navPage flex flex-col gap-8">
            {sideBarData.slice(0, 5).map((item, index) => (
              <Link to={item.pageLink} key={index}>
                <div
                  className={`flex items-center gap-5 py-2 text-primary-mainBlue hover:border-b-2 border-primary-mainGreen hover:text-primary-mainGreen ${
                    pathname === item?.pageLink
                      ? "border-primary-mainGreen text-primary-mainGreen border-b-2"
                      : ""
                  }`}
                >
                  <div className="text-3xl">{<item.pageIcon />}</div>
                  {sidebarOpen ? (
                    <div className="page text-xl uppercase">
                      {item.pageName}
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>

      <div className="logout ">
        <div className="flex items-center gap-5 py-2 text-primary-mainBlue hover:bg-primary-mainGreen hover:text-white rounded-lg shadow-sm">
          <BiLogOut className="text-3xl" />
          {sidebarOpen ? (
            <div className="page uppercase text-xl" onClick={logout}>
              Logout
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
