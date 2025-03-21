import BlogDetailsCard from "@/components/ui/BlogDetailsCard";
import { baseApi } from "@/config";

type TBlogId = {
	blogId: string;
};

const BlogDetailsPage = async ({ params }: { params: Promise<TBlogId> }) => {
	const { blogId } = await params;

	const res = await fetch(`${baseApi}/blogs/${blogId}`);
	const blog = await res.json();

	return (
		<>
			<BlogDetailsCard blog={blog} />
		</>
	);
};

export default BlogDetailsPage;
