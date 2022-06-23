import { createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import { Users } from "./currentUsersSlice";

export type UpdateUser = {
  newUser: FormData,
  token: any,
};

type GetToken = {
  success: string,
  token: any,
}

export const usersApi = createApi({
	reducerPath: "usersApi",
	baseQuery: fetchBaseQuery({baseUrl: "https://frontend-test-assignment-api.abz.agency/api/v1"}),
	tagTypes: ["Users"],
	endpoints: (builder) => ({
		getUsers: builder.query<Users, Users>({
			query: (users) => {
				if (users.links.next_url) {
					return (users.links.next_url);
				}

				return (`users?page=${users.page}&count=${users.count}`)
			},
			providesTags: [{type: "Users", id: "List"}],
		}),
		getToken: builder.query<GetToken, void>({
			query: () => {
				return ("token")
			},
      keepUnusedDataFor: 40,
      providesTags: [{type: "Users", id: "List"}],
		}),
    addUser: builder.mutation<any, UpdateUser>({
      query: (user) => {
        return {
          url: "users",
          method: "POST",
          body: user.newUser,
          headers: {"Token": user.token},
        };
      },
      invalidatesTags: [{type: "Users", id: "List"}],
    }),
	}),
});

export const { useGetUsersQuery, useGetTokenQuery, useAddUserMutation } = usersApi;