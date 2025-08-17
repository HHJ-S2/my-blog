import Image from "next/image";

const skills = ["Typescript", "React", "React Native", "iOS", "Swift"];

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">About</h1>
      <div className="flex items-center mb-8">
        <div className="space-y-0.5">
          <p className="text-lg font-medium text-gray-400">Frontend Developer</p>
          <p className="text-2xl font-semibold text-gray-900 dark:text-white">HONG HYO JEONG</p>
        </div>
      </div>
      <p className="text-gray-900 dark:text-white font-semibold">안녕하세요. 프론트엔드 개발자 홍효정입니다.</p>
      <p className="mt-2 ">
        저는 제가 개발한 웹/앱 어플리케이션을 배포하여 사용자에게 피드백을 받고,
        <br />
        수정과 보완을 통해 완성도 있는 서비스를 만드는 것을 목표로 끊임없이 정진하고 있습니다.
      </p>
      <div className="flex space-x-2 mt-4">
        {skills.map((category) => (
          <span
            key={category}
            className="inline-flex items-center rounded-md bg-gray-50 dark:bg-gray-600/80 px-2 py-1 text-xs inset-ring inset-ring-gray-500"
          >
            {category}
          </span>
        ))}
      </div>
      <div className="mt-8">
        <h3 className="text-sm font-medium text-gray-900 dark:text-white">Contact</h3>
        <div className="mt-2">
          <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
            <li>
              <span>Email : berdle0122@gmail.com</span>
            </li>
            <li>
              <span>PH : (82+) 010-9954-3732</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-20">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white">Work</h3>
        <div className="flex mt-8">
          <div className="basis-1/3">
            <p className="text-base text-gray-700 font-medium">슬로그업</p>
            <p className="mt-1 text-xs text-gray-500">2021. 04 ~ 현재</p>
            <p className="text-xs text-gray-500">사원</p>
          </div>
          <div className="basis-2/3">
            <p className="text-base">React Native 앱 프론트엔드 개발을 담당하였습니다.</p>
            <p className="text-base">
              킥보드 주차 서비스부터 컨테이너 현장 직원용 앱까지 다양한 도메인의 서비스를 개발하며, 크로스 플랫폼 앱에
              대한 이해와 경험을 넓힐 수 있었습니다.
            </p>
          </div>
        </div>
        <div className="flex mt-8">
          <div className="basis-1/3">
            <p className="text-base text-gray-700 font-medium">EnerDot</p>
            <p className="mt-1 text-xs text-gray-500">2021. 01 ~ 2021. 03</p>
            <p className="text-xs text-gray-500">인턴</p>
          </div>
          <div className="basis-2/3">
            <p className="text-base">
              태양열 발전소 모니터링 홈페이지인 Razzler 신규 관제실 모니터링 웹 프론트엔드 개발을 담당하였습니다. Chart
              js 라이브러리와 SVG를 활용하여 차트와 그래프로 데이터시각화를 위해 노력했습니다.
            </p>
          </div>
        </div>
        <div className="flex mt-8">
          <div className="basis-1/3">
            <p className="text-base text-gray-700 font-medium">10 page</p>
            <p className="mt-1 text-xs text-gray-500">2019. 08. 05 ~ 2020. 08</p>
            <p className="text-xs text-gray-500">프리랜서</p>
          </div>
          <div className="basis-2/3">
            <p className="text-base">
              기업 홍보 및 소개를 전문으로 하는 웹사이트 퍼블리싱 업무를 담당했습니다. HTML, CSS, Bootstrap로 반응형
              레이아웃 구현하였으며, Jquery를 사용하여 UI 개발을 하였습니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
