import { configureStore } from "@reduxjs/toolkit";
import { baseApi } from "./apis/blog.slice";

export const store = configureStore({
	reducer: {
		// Add the generated reducer as a specific top-level slice
		[baseApi.reducerPath]: baseApi.reducer,
	},

	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(baseApi.middleware),
});
