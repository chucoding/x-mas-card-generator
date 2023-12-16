import React from "react";
import Lottie from "react-lottie-player";
import lottieJson from "../../resources/loading.json";

export default function Loading(): JSX.Element {
  return (
    <div
      className="inline-block text-center w-full h-full bg-red-400"
      style={{ fontFamily: "KCCChassam" }}
    >
      <h1 className="absolute top-[26%] left-[5%] text-[26px] text-white text-center animate-fadein">
        도우미가 카드를 만들기 시작했어요
        <br /> 잠시만 기다려주세요🪄
      </h1>
      <Lottie
        className="absolute top-[36%] left-[10%]"
        animationData={lottieJson}
        play
        style={{ width: "300px" }}
      />
    </div>
  );
}
