import Link from "next/link";
import posts from "../content/posts";

export function BlogPosts() {
  return (
    <div>
      {posts
        .sort((a, b) => {
          if (new Date(a.date) > new Date(b.date)) {
            return -1;
          }
          return 1;
        })
        .map((post) => (
          <Link
            key={post.slug}
            className="flex flex-row mb-4 px-6 py-8 rounded-xl bg-white dark:bg-gray-950 border border-gray-100 dark:border-gray-600 dark:bg-gray-800"
            href={`/blog/${post.slug}`}
          >
            <div className="w-full flex flex-col">
              <p className="text-gray-400 dark:text-gray-400 text-xs tabular-nums">{post.date}</p>
              <p className="text-gray-700 dark:text-gray-100 font-semibold text-lg text-ellipsis overflow-hidden whitespace-nowrap">
                {post.title}
              </p>
              <p className="mt-1 text-gray-600 dark:text-gray-100 text-base text-ellipsis overflow-hidden whitespace-nowrap">
                {post.description}
              </p>
              <div className="mt-2">
                {post.categories.map((category) => (
                  <span
                    key={category}
                    className="inline-flex items-center rounded-md bg-gray-50 dark:bg-gray-600/80 px-2 py-1 text-xs  text-gray-600 dark:text-gray-300 inset-ring inset-ring-gray-500"
                  >
                    {category}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
    </div>
  );
}
