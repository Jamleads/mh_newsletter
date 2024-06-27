import Button from "../components/Button";
import PageName from "../components/PageName";
import PaginationComp from "../components/PaginationComp";
import { dummySubscribers } from "../utilities/dataUse";
import TopNav from "./TopNav";

const Subscribers = () => {
  const tHead = "text-[16px] border-r border-gray-400 text-white py-2";
  const tData = "border-r border-gray-400 capitalize py-2";
  return (
    <>
      <div className="nav fixed top-0 right-0 left-0 bg-white shadow-2xl rounded-b-lg px-5 py-2">
        <TopNav />
      </div>

      <>
        <div className="flex flex-col gap-10">
          <PageName pageNmae={"Subscribers"} />

          <div className="flex items-center justify-end gap-5">
            <p className="text-2xl">Add more subscribers</p>
            <Button btnText={"CSV"} />
            <Button btnText={"Copy & Paste"} />
            <Button btnText={"Import"} />
            <Button btnText={"Conect"} />
          </div>

          <div className="bg-white shadow-xl">
            <div className="px-5 py-2 text-primary-mainBlue flex items-center justify-between">
              <p>List of subscribers</p>
              <p>Total Subscribers(1000)</p>
            </div>
            <table className="table  divide-y  divide-gray-200 w-full">
              <thead>
                <tr className="text-center bg-primary-mainBlue">
                  <th className={`${tHead}`}>S/N</th>
                  <th className={`${tHead}`}>First name</th>
                  <th className={`${tHead}`}>Email</th>
                  <th className={`${tHead}`}>Opens</th>
                  <th className={`${tHead}`}>Clicks</th>
                  <th className={`${tHead}`}>Phone number</th>
                  <th className={`${tHead}`}>Country</th>
                  <th className={`${tHead}`}>Status</th>
                </tr>
              </thead>
              <tbody>
                {dummySubscribers.map((item, index) => (
                  <tr
                    className={`text-center border-b cursor-pointer`}
                    key={index}
                  >
                    <td className={`${tData}`}>{index + 1}</td>

                    <td className={`${tData}`}>{item.firstname}</td>
                    <td className={`${tData}`}>{item.email}</td>
                    <td className={`${tData}`}>{"10"}</td>
                    <td className={`${tData}`}>{"5"}</td>
                    <td className={`${tData}`}>{item.phoneNmuber}</td>
                    <td className={`${tData}`}>{item.county}</td>
                    <td className={`${tData}`}>
                      {item.status ? "Active" : "Inactive"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="pagination flex items-end justify-end">
              <PaginationComp />
            </div>
          </div>
        </div>
      </>
    </>
  );
};

export default Subscribers;
