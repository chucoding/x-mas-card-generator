"use client";
import CloudCardBig from "../modules/cloudCardBig";

export default function Home({ setRoute }: any) {
  return (
    <>
      <div
        className="inline-block text-center"
        style={{ fontFamily: "KCCChassam" }}
      >
        <CloudCardBig>
          <div className="absolute top-[36%] left-[35%]">
            <h1 className="text-[45px] text-white tracking-[-2px]">
              크리스마스
              <br />
              카드 만들기
            </h1>
          </div>
        </CloudCardBig>
      </div>
      <div className="relative top-[70%]" style={{ fontFamily: "KCCChassam" }}>
        <button
          className="bg-white hover:bg-[#808080] text-black font-bold py-[10px] px-[35px] rounded-full text-[20px]"
          onClick={() => {
            alert("🚧 죄송합니다. 아직 준비중입니다😂 🚧");
            //setRoute("onboarding");
          }}
        >
          시작하기
          <br />
        </button>
        <p className="mt-[2px] text-gray-100 text-[12px]">
          모바일 환경을 추천합니다
        </p>
      </div>
    </>
  );
}
