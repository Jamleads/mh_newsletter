import { useEffect, useState } from "react";
import TopNav from "./TopNav";
import PageName from "../components/PageName";
import Button from "../components/Button";
import BoardCard from "../components/BoardCard";
import CampaignForm from "../components/CampaignForm";
import { useSelector } from "react-redux";
import { BiDotsHorizontal } from "react-icons/bi";
import {
  useApproveCampaignMutation,
  useDeleteCampaignMutation,
  useGetCampaignQuery,
  usePublishCampaignMutation,
  useRejectCampaignMutation,
} from "../services/campaignApi";
import { errorToast, successToast } from "../utilities/ToastMessages";
import BarsLoader from "../utilities/BarsLoader";
const tHead = "text-[16px] border-r border-gray-400 text-white py-2";
const tData = "border-r border-gray-400 capitalize py-2";

const Campaign = () => {
  const [form, setForm] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [allCampaign, setAllCampaign] = useState([]);
  const [openItemId, setOpenItemId] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);

  const [deleteCampaign, { isLoading: isDeletingCamp }] =
    useDeleteCampaignMutation();
  const [publishCampaign, { isLoading: isPublishingCamp }] =
    usePublishCampaignMutation();
  const [approveCampaign, { isLoading: isAprovingCamp }] =
    useApproveCampaignMutation();
  const [rejectCampaign, { isLoading: isRejectingCamp }] =
    useRejectCampaignMutation();

  const userRole = useSelector((state) => state.auth?.user?.role);
  const { data, isLoading, refetch, isFetching } = useGetCampaignQuery();

  useEffect(() => {
    if (isLoading || isFetching) return;
    setAllCampaign(data?.data);
  }, [data, isFetching, isLoading]);
  const action = (item) => {
    setOpenItemId((prevOpenItemId) =>
      prevOpenItemId === item.id ? null : item.id
    );
    setSelectedItem(item);
  };
  const closeAction = () => {
    setOpenItemId(null);
  };

  // edit{}
  const openEdit = () => {
    setForm(true);
    setEditMode(true);
  };
  // Delete{}
  const handleDeleteCampaign = async (e) => {
    e.preventDefault();
    try {
      await deleteCampaign(selectedItem?.id).unwrap();
      successToast("Campaign deleted successfully");
      refetch();
    } catch (error) {
      errorToast(error.data?.message || "Something went wrong");
    }
  };
  // publish{}
  const handlePublishCampaign = async (e) => {
    e.preventDefault();
    try {
      await publishCampaign(selectedItem?.id).unwrap();
      successToast("Campaign published successfully");
      refetch();
      closeAction();
    } catch (error) {
      errorToast(error.data?.message || "Something went wrong");
    }
  };
  // Approve{}
  const handleApproveCampaign = async (e) => {
    e.preventDefault();
    try {
      await approveCampaign(selectedItem?.id).unwrap();
      successToast("Campaign approved successfully");
      refetch();
      closeAction();
    } catch (error) {
      errorToast(error.data?.message || "Something went wrong");
    }
  };
  // Reject{}
  const handleRejectCampaign = async (e) => {
    e.preventDefault();
    try {
      await rejectCampaign(selectedItem?.id).unwrap();
      successToast("Campaign rejected successfully");
      refetch();
      closeAction();
    } catch (error) {
      errorToast(error.data?.message || "Something went wrong");
    }
  };

  return (
    <>
      <div className="nav fixed top-0 right-0 left-0 bg-white shadow-2xl rounded-b-lg px-5 py-2">
        <TopNav />
      </div>

      {form ? (
        <div className="flex flex-col gap-10">
          <CampaignForm
            closeForm={() => setForm(false)}
            selectedItem={selectedItem}
            editMode={editMode}
          />
        </div>
      ) : (
        <div className="flex flex-col gap-10">
          <PageName pageNmae={"Campaign"} />

          {userRole === "ADMIN" ? (
            ""
          ) : (
            <div className="flex items-center justify-end gap-5">
              <p className="text-2xl">Create Campaign</p>
              <Button
                btnText={"Create Campaign"}
                btnClick={() => setForm(true)}
              />
            </div>
          )}

          <div className="grid grid-cols-3 gap-5 text-primary-mainBlue">
            <BoardCard name={"All"} total={allCampaign?.length} />
            <BoardCard
              name={"Approved"}
              total={
                allCampaign?.filter(
                  (campaign) => campaign.status === "APPROVED"
                ).length
              }
            />
            <BoardCard
              name={"Draft"}
              total={
                allCampaign?.filter((campaign) => campaign.status === "DRAFT")
                  .length
              }
            />
          </div>

          <div className="bg-white shadow-xl">
            <div className="px-5 py-2 text-primary-mainBlue flex items-center justify-between">
              {allCampaign?.length === 0 ? (
                <p className="text-red-600 text-xl">No campaign available</p>
              ) : (
                <p>Total campaign ({allCampaign?.length})</p>
              )}
            </div>
            <table className="table  divide-y  divide-gray-200 w-full">
              <thead>
                <tr className="text-center bg-primary-mainBlue">
                  <th className={`${tHead}`}>S/N</th>
                  <th className={`${tHead}`}>Title</th>
                  <th className={`${tHead}`}>Type</th>
                  <th className={`${tHead}`}>Status</th>
                  <th className={`${tHead}`}>Created by</th>
                  <th className={`${tHead}`}>Last modified</th>
                  <th className={`${tHead}`}>Action</th>
                </tr>
              </thead>

              <tbody>
                {allCampaign?.map((item, index) => (
                  <tr className={`text-center border-b`} key={index}>
                    <td className={`${tData}`}>{index + 1}</td>
                    <td className={`${tData}`}>{item?.title}</td>
                    <td className={`${tData}`}>{item?.type}</td>
                    <td className={`${tData}`}>{item?.status}</td>
                    <td className={`${tData}`}>
                      {"Author name" || item?.authorId}
                    </td>
                    <td className={`${tData}`}>
                      {new Date(item.lastModifiedAt).toDateString()}
                    </td>
                    <td
                      className={`${tData} cursor-pointer hover:bg-secondary-blue`}
                    >
                      <p
                        className="flex items-center justify-center text-3xl"
                        onClick={() => action(item)}
                      >
                        <BiDotsHorizontal />
                      </p>

                      <div
                        className={`${
                          openItemId === item.id ? "" : "hidden"
                        } py-2 px-3 bg-white flex flex-col gap-3 absolute right-5 shadow-lg z-[100]`}
                      >
                        <p
                          className="hover-effect text-xs cursor-pointer text-[#0F2851]"
                          onClick={() => closeAction()}
                        >
                          Close
                        </p>

                        {userRole === "ADMIN" && (
                          <p
                            className="hover-effect text-xs cursor-pointer text-blue-800"
                            onClick={handleApproveCampaign}
                          >
                            {isAprovingCamp ? (
                              <BarsLoader height={20} color={"#f1f5f9"} />
                            ) : (
                              "Approve"
                            )}
                          </p>
                        )}

                        {userRole === "ADMIN" && (
                          <p
                            className="text-xs cursor-pointer text-blue-800"
                            onClick={handleRejectCampaign}
                          >
                            {isRejectingCamp ? (
                              <BarsLoader height={20} color={"#f1f5f9"} />
                            ) : (
                              "Reject"
                            )}
                          </p>
                        )}

                        {!userRole === "ADMIN" && (
                          <p
                            className="hover-effect text-xs cursor-pointer text-blue-800"
                            onClick={openEdit}
                          >
                            Edit
                          </p>
                        )}

                        {!userRole === "ADMIN" && (
                          <p
                            className="hover-effect text-xs cursor-pointer text-blue-800"
                            onClick={handlePublishCampaign}
                          >
                            {isPublishingCamp ? (
                              <BarsLoader height={20} color={"#f1f5f9"} />
                            ) : (
                              "Publish"
                            )}
                          </p>
                        )}

                        <p
                          className="hover-effect text-xs cursor-pointer text-[#FF0101]"
                          onClick={handleDeleteCampaign}
                        >
                          {isDeletingCamp ? (
                            <BarsLoader height={20} color={"#f1f5f9"} />
                          ) : (
                            "Delete"
                          )}
                        </p>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </>
  );
};

export default Campaign;
