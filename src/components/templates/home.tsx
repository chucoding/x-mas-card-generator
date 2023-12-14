"use client";
import Lottie from "react-lottie-player";
import lottieJson from "../../resources/christmas-tree.json";
import { useState } from "react";
import StartButton from "../modules/startButton";

export default function Home({ setRoute }: any) {
  const [render, setRender] = useState(false);
  return (
    <div
      className="inline-block text-center w-full h-full bg-red-400"
      style={{ fontFamily: "KCCChassam" }}
    >
      {render && (
        <h1 className="absolute top-[16%] left-[24%] text-[45px] text-white animate-fadein">
          크리스마스
          <br />
          카드 만들기
        </h1>
      )}
      <Lottie
        className="absolute top-[36%] left-[10%]"
        animationData={lottieJson}
        play
        style={{ width: "300px" }}
        onEnterFrame={() => setRender(true)}
      />
      <StartButton onClick={() => setRoute("generator")} />
    </div>
  );
}
