import { createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import { Position } from "../types/position";

export interface Positions {
	"success": boolean,
	"positions": Position[],
}

export const positionsApi = createApi({
	reducerPath: "positionsApi",
	baseQuery: fetchBaseQuery({baseUrl: "https://frontend-test-assignment-api.abz.agency/api/v1"}),
	tagTypes: ["Positions"],
	endpoints: (builder) => ({
		getPositions: builder.query<Positions, void>({
			query: () => {
				return ("positions")
			},
			providesTags: [{type: "Positions", id: "List"}],
		})
	}),
});

export const { useGetPositionsQuery } = positionsApi;