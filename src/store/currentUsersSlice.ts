import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../types/user";
import { RootState } from "./store";

export interface Users {
	"page": number,
	"count": number,
	"links": {
		"next_url": string | null,
		"prev_url": string | null,
	},
	"users": User[],
};

const initialState: Users = {
  "page": 1,
	"count": 6,
	"links": {
		"next_url": null,
		"prev_url": null,
	},
	"users": [],
};

export const currentUsersSlice = createSlice({
  name: "currentUsers",
  initialState,
  reducers: {
    setCurrentUsers: (state, action: PayloadAction<Users>) => {
      return  { ...state, ...action.payload };
    },
		resetUsersOrder: (state) => {
      return  { ...state, ...initialState };
    },
  }
});

export const { setCurrentUsers, resetUsersOrder } = currentUsersSlice.actions;

export const selectCurrentUsers = (state: RootState) => state.currentUsers;

export default currentUsersSlice.reducer;
