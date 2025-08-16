import post1 from "../notion-data/19b23707-3698-807f-ae00-ff565d26e7a5.json";
import post2 from "../notion-data/24ed25a0-465e-8060-8df0-de16d3b05ec8.json";

const posts = [
  {
    title: "'Semantic Tag'와 'Semantic Web'",
    slug: "SemanticTag-and-Semantic-Web",
    content: post1,
    date: "2025-02-15",
    description: "테스트용 블로그 포스트",
    categories: ["WEB"],
    image: undefined,
  },
  {
    title: "React Native iOS 네이티브 모듈",
    slug: "react-native-ios-native-module",
    content: post2,
    date: "2025-08-16",
    description: "공식문서를 따라 React Native iOS 네이티브 모듈을 만들어보자",
    categories: ["APP"],
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
