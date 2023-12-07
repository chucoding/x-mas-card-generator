"use client";

import CloudCardBig from "../modules/cloudCardBig";

export default function OnBoarding({ setRoute }: any) {
  return (
    <div>
      <CloudCardBig>
        <h2 className="text-[23px] absolute mt-[35px] left-[110px]">
          오늘도 피곤한 하루를 마치고
          <br /> 침대에 뛰어든 당신!
          <br />
          지금부터 자신이 꿈을 꾸는 환경을
          <br />
          떠올리며 테스트에 임해주세요.
        </h2>
      </CloudCardBig>
      <button
        className="absolute top-[70%] animate-pulse text-gray-100"
        onClick={() => setRoute("scenario")}
      >
        ▶
      </button>
    </div>
  );
}
