import Image from "next/image";
import { BlogPosts } from "components/posts";

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">About</h1>
      <div className="flex items-center mb-8">
        <Image
          src="/profile.png"
          alt="profile image"
          width={100}
          height={100}
          className="rounded-full mr-4 ring ring-gray-900/5"
        />
        <div className="space-y-0.5">
          <p className="text-lg font-semibold text-black dark:text-white">Hong hyo jeong</p>
          <p className="font-medium text-gray-500">Frontend Developer</p>
        </div>
      </div>
      <p className="text-gray-900 dark:text-white font-medium tracking-tight">
        안녕하세요. 프론트엔드 개발자 홍효정입니다.
      </p>
      <p className="text-gray-500 dark:text-gray-400 mt-2 ">
        저는 제가 개발한 웹/앱 어플리케이션을 배포하여 사용자에게 피드백을 받고, 수정과 보완을 통해
        완성도 있는 서비스를 만드는 것을 목표로 끊임없이 정진하고 있습니다.
      </p>

      <div className="mt-10">
        <h3 className="text-sm font-medium text-gray-900 dark:text-white">Contact</h3>

        <div className="mt-4">
          <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
            <li className="text-gray-400">
              <span className="text-gray-600">Email : berdle0122@gmail.com</span>
            </li>
            <li className="text-gray-400">
              <span className="text-gray-600">PH : (82+) 010-9954-3732</span>
            </li>
          </ul>
        </div>
      </div>

      {/* <div className="my-8">
        <BlogPosts />
      </div> */}
    </section>
  );
}
