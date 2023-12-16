"use client";

import { useState, useEffect } from "react";

export default function StartButton({
  count,
  onClick,
}: {
  count: number;
  onClick: () => void;
}) {
  const [render, setRender] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setRender(true);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  if (!render) return <></>;
  return (
    <div className="absolute top-[81%] left-[25%] animate-fadein">
      <button
        className="animate-bounce bg-white hover:bg-[#808080] text-black font-bold py-[10px] px-[35px] rounded-full text-[20px]"
        onClick={onClick}
      >
        시작하기
        <br />
      </button>
      <p className="mt-[10px] text-gray-100 text-[12px]">
        지금까지 총 <b className="text-orange-200 text-[14px]">{count}</b>개의
        토큰을 생성했어요!
        <br />
        모바일 환경을 추천합니다
      </p>
    </div>
  );
}
