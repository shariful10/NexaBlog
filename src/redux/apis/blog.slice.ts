import { apiUrl } from "@/config";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
	reducerPath: "baseApi",
	baseQuery: fetchBaseQuery({ baseUrl: apiUrl }),
	endpoints: (build) => ({
		getBlogs: build.query({
			query: () => "/blogs",
		}),
	}),
});

export const { useGetBlogsQuery } = baseApi;
