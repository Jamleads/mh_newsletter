import { api } from "./api";

export const userApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => ({
        url: "/users/list",
        method: "GET",
      }),
    }),
    createUser: builder.mutation({
      query: (data) => ({
        url: "/users/create",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useGetUsersQuery, useCreateUserMutation } = userApi;
