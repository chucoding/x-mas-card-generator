"use client";

import Button from "../atoms/button";

export default function Card({ list, page, setPage, setScoreList }: any) {
  const moveNext = (score: any) => {
    setPage(page + 1);
    setScoreList((list: any) => [...list, score]);
  };

  return (
    <div className="animate-fadein" key={page}>
      {list &&
        list.map((data: any, key: any) => {
          return (
            <Button
              key={key}
              text={data?.text}
              onClick={() => moveNext(data?.score)}
            />
          );
        })}
    </div>
  );
}
