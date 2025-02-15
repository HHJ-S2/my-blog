import post3 from "../notion-data/19b23707-3698-807f-ae00-ff565d26e7a5.json";

const posts = [
  {
    title: "첫 번째 블로그 포스트",
    slug: "first-post",
    content: post3,
    date: "2025-02-15",
    description: "테스트용 블로그 포스트",
    image: undefined,
  },
] as Post[];

export default posts;

export type Post = {
  title: string;
  slug: string;
  content: { blocks: any[] };
  date: string;
  description: string;
  image?: string;
};
