import { useEffect, useState } from "react";
import Button from "../components/Button";
import PageName from "../components/PageName";
import { useGetUsersQuery } from "../services/userApi";
import TopNav from "./TopNav";
import CreateUser from "./CreateUser";
const tHead = "text-[16px] border-r border-gray-400 text-white py-2";
const tData = "border-r border-gray-400 py-2";

const Users = () => {
  const [form, setForm] = useState(false);
  const [allUsers, setAllUsers] = useState([]);
  const { data, isLoading, isFetching } = useGetUsersQuery();

  useEffect(() => {
    if (isLoading || isFetching) return;
    setAllUsers(data?.data);
  }, [data, isFetching, isLoading]);

  return (
    <>
      <div className="nav fixed top-0 right-0 left-0 bg-white shadow-2xl rounded-b-lg px-5 py-2">
        <TopNav />
      </div>

      {form ? (
        <div className="">
          <CreateUser closeForm={() => setForm()} />
        </div>
      ) : (
        <>
          <div className="flex flex-col gap-10">
            <PageName pageNmae={"Users"} />

            <div className="flex items-center justify-end gap-5">
              <p className="text-2xl">Add users</p>
              <Button btnText={"Add user"} btnClick={() => setForm(true)} />
            </div>

            <div className="bg-white shadow-xl">
              <div className="px-5 py-2 text-primary-mainBlue flex items-center justify-between">
                <div className="flex items-center justify-end gap-5">
                  <Button btnText={"All"} />
                  <Button btnText={"Admins"} />
                  <Button btnText={"Marketers"} />
                </div>
                <p>Total users ({allUsers?.length})</p>
              </div>
              <table className="table  divide-y  divide-gray-200 w-full">
                <thead>
                  <tr className="text-center bg-primary-mainBlue">
                    <th className={`${tHead}`}>S/N</th>
                    <th className={`${tHead}`}>Username</th>
                    <th className={`${tHead}`}>Email</th>
                    <th className={`${tHead}`}>Verified</th>
                    <th className={`${tHead}`}>Role</th>
                    <th className={`${tHead}`}>Last modified</th>
                  </tr>
                </thead>

                <tbody>
                  {allUsers?.map((item, index) => (
                    <tr
                      className={`text-center border-b cursor-pointer`}
                      key={index}
                    >
                      <td className={`${tData}`}>{index + 1}</td>

                      <td className={`${tData}`}>{item?.username}</td>
                      <td className={`${tData}`}>{item?.email}</td>
                      <td className={`${tData}`}>
                        {item?.emailVerified === true
                          ? "Verified"
                          : "unverified"}
                      </td>
                      <td className={`${tData}`}>{item.role}</td>
                      <td className={`${tData}`}>
                        {new Date(item.lastModifiedAt).toDateString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Users;
