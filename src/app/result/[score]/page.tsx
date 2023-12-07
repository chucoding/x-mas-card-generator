"use client";

import { usePathname, redirect, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { Heart } from "@brightlayer-ui/react-progress-icons";

export default function Result() {
  const router = useRouter();
  const [wait, setWait] = useState(true);
  const [data, setData] = useState({
    title: "",
    description: "",
    tip: "",
  });
  const path = usePathname() || "";
  const score = parseInt(path.substring(8), 10);
  if (isNaN(score) || score < 40 || score > 100) {
    redirect("/");
  }

  useEffect(() => {
    fetch("/api/result.json")
      .then((response) => response.json())
      .then((data) => {
        if (score >= 40 && score < 56) {
          setData(data[0]);
        } else if (score >= 56 && score < 71) {
          setData(data[1]);
        } else if (score >= 71 && score < 86) {
          setData(data[2]);
        } else if (score >= 86 && score < 101) {
          setData(data[3]);
        }
        setWait(false);
      });
  }, []);

  return wait ? (
    <></>
  ) : (
    <div>
      <p className="text-[30px] font-black mt-[40px]">당신의 꿈력이</p>
      <p className="text-[45px] font-black">
        <span className="tracking-[-5px]">{score}% 충</span>전되었습니다
      </p>
      <div className="pt-[15px] pb-[10px]">
        <Heart percent={score} size={200} color={"#DA7777"} />
      </div>
      <div className="bg-white rounded-md	p-[10px] m-[5px]">
        <p className="m-[15px] text-[23px] tracking-[-1px]">{data.title}</p>
        <p className="p-[5px] text-[20px] text-left">
          {data.description.split("\n").map((line, key) => {
            if (line.includes("&nbsp;"))
              line = line.replaceAll("&nbsp;", "\u00A0");
            return (
              <span key={key}>
                {line}
                <br />
              </span>
            );
          })}
        </p>
      </div>
      <div className="bg-white rounded-md	p-[10px] m-[5px]">
        <p className="pt-[10px] pb-[8px] flex flex-start font-black text-[22px]">
          &nbsp;💤당신을 위한 드림 팁
        </p>
        <p className="p-[5px] text-[20px]">
          {data.tip.split("\n").map((line, key) => {
            return (
              <span key={key}>
                {line}
                <br />
              </span>
            );
          })}
        </p>
      </div>
      <button
        className="bg-white hover:bg-[#808080] font-medium py-[10px] px-[35px] mt-[10px] rounded-full text-[25px]"
        onClick={() => router.push("/")}
      >
        테스트 다시하기
      </button>
      <br />
      <br />
      <br />
    </div>
  );
}
