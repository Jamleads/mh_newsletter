import { api } from "./api";

const mediaApi = api.injectEndpoints({
  endpoints: (builder) => ({
    mediaFileUpload: builder.mutation({
      query: (data) => ({
        url: "media-files/upload",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useMediaFileUploadMutation } = mediaApi;
