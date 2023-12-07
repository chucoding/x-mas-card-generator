"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import CloudCardBig from "../modules/cloudCardBig";

export default function ResultLoading({ scoreList }: any) {
  const router = useRouter();

  useEffect(() => {
    let sum = 0;
    for (let score of scoreList) {
      sum += score;
    }
    const average = Math.floor(sum / scoreList.length);
    setTimeout(() => router.push(`result/${average}`), 300);
  }, []);

  return (
    <div>
      <CloudCardBig>
        <div className="flex justify-center">
          <h1 className="text-[45px] font-medium absolute top-[150px] left-[115px] tracking-[-2px]">
            꿈력 충전 중...💤
          </h1>
        </div>
      </CloudCardBig>
    </div>
  );
}
