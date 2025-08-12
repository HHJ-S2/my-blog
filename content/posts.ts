import post3 from "../notion-data/19b23707-3698-807f-ae00-ff565d26e7a5.json";

const posts = [
  {
    title: "'Semantic Tag'와 'Semantic Web'",
    slug: "SemanticTag-and-Semantic-Web",
    content: post3,
    date: "2025-02-15",
    description: "테스트용 블로그 포스트",
    categories: ["WEB"],
    image: undefined,
  },
] as Post[];

export default posts;

type Category = "WEB" | "APP";

export type Post = {
  title: string;
  slug: string;
  content: { blocks: any[] };
  date: string;
  description: string;
  categories: Category[];
  image?: string;
};
