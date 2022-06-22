import { configureStore } from "@reduxjs/toolkit";
import { usersApi } from "./usersApi";
import { positionsApi } from "./positionsApi";
import { currentUsersSlice } from "../store/currentUsersSlice";

export const store = configureStore({
	reducer: {
		[usersApi.reducerPath]: usersApi.reducer,
		[positionsApi.reducerPath]: positionsApi.reducer,
		currentUsers: currentUsersSlice.reducer,
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware()
		.concat(usersApi.middleware, positionsApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
