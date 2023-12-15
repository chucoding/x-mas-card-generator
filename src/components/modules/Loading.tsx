import React from "react";
import Lottie from "react-lottie-player";
import lottieJson from "../../resources/loading.json";

export default function Loading(): JSX.Element {
  return (
    <div
      className="inline-block text-center w-full h-full bg-red-400"
      style={{ fontFamily: "KCCChassam" }}
    >
      <h1 className="absolute top-[16%] text-[45px] text-white animate-fadein">
        카드를 만들고 있습니다...
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
