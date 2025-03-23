"use server";

import { apiUrl } from "@/config";
import { redirect } from "next/navigation";

export const createBlog = async (data: FormData) => {
	const blogData = Object.fromEntries(data.entries());

	const res = await fetch(`${apiUrl}/blogs`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(blogData),
	});

	const blogInfo = await res.json();

	if (blogInfo) {
		redirect(`/blogs/${blogInfo.id}`);
	}

	return blogInfo;
};
