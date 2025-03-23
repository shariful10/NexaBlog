import BlogDetailsCard from "@/components/ui/BlogDetailsCard";
import { apiUrl } from "@/config";
import { TBlog } from "@/types";

type TBlogId = {
	blogId: string;
};

export const generateStaticParams = async () => {
	const res = await fetch(`${apiUrl}/blogs`);
	const blogs = await res.json();

	return blogs.slice(0, 3).map((blog: TBlog) => ({
		blogId: blog.id,
	}));
};

export async function generateMetadata({
	params,
}: {
	params: Promise<TBlogId>;
}) {
	const { blogId } = await params;

	const res = await fetch(`${apiUrl}/blogs/${blogId}`);
	const blog = await res.json();

	return {
		title: `NexaBlog | ${blog.title}`,
		description: blog.description,
	};
}

const BlogDetailsPage = async ({ params }: { params: Promise<TBlogId> }) => {
	const { blogId } = await params;

	const res = await fetch(`${apiUrl}/blogs/${blogId}`);
	const blog = await res.json();

	return (
		<>
			<BlogDetailsCard blog={blog} />
		</>
	);
};

export default BlogDetailsPage;
