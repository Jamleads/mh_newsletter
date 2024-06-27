import { api } from "./api";

const campaignsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getCampaign: builder.query({
      query: () => ({
        url: "/campaigns/list",
        method: "GET",
      }),
    }),
    getCampaignById: builder.query({
      query: ({ id }) => ({
        url: `/campaigns/find/id/${id}`,
        method: "GET",
      }),
    }), // TODO: NO USE CASE
    createCampaign: builder.mutation({
      query: (data) => ({
        url: "/campaigns/create",
        method: "POST",
        body: data,
      }),
    }),
    editCampaign: builder.mutation({
      query: ({ data, id }) => ({
        url: `/campaigns/edit/${id}`,
        method: "PATCH",
        body: data,
      }),
    }), // TODO: ERROR
    deleteCampaign: builder.mutation({
      query: (id) => ({
        url: `/campaigns/delete/${id}`,
        method: "DELETE",
      }),
    }),
    approveCampaign: builder.mutation({
      query: (id) => ({
        url: `/campaigns/approve/${id}`,
        method: "PATCH",
      }),
    }),
    publishCampaign: builder.mutation({
      query: (id) => ({
        url: `/campaigns/publish/${id}`,
        method: "PATCH",
      }),
    }),
    rejectCampaign: builder.mutation({
      query: (id) => ({
        url: `/campaigns/reject/${id}`,
        method: "PATCH",
      }),
    }),
  }),
});

export const {
  useGetCampaignQuery,
  useGetCampaignByIdQuery,
  useCreateCampaignMutation,
  useEditCampaignMutation,
  useDeleteCampaignMutation,
  useApproveCampaignMutation,
  usePublishCampaignMutation,
  useRejectCampaignMutation,
} = campaignsApi;
