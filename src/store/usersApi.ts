import { createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import { Users } from "./currentUsersSlice";

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
		})
	}),
});

export const { useGetUsersQuery, useLazyGetUsersQuery } = usersApi;