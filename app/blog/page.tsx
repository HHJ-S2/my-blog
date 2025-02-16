import { BlogPosts } from "components/posts";

export const metadata = {
  title: "글 목록",
  description: "블로그 글 목록",
};

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Posts</h1>
      <BlogPosts />
    </section>
  );
}
