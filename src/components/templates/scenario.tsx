"use client";

import CloudCard from "../modules/cloudCard";
import ButtonList from "../modules/buttonList";
import { useEffect, useState } from "react";
import CountBadge from "../modules/countBadge";
import ResultCarculator from "./resultCarculator";

export default function Scenario({ setNext }: any) {
  const [list, setList] = useState([]);
  const [page, setPage] = useState(0);
  const [scoreList, setScoreList] = useState([]);
  useEffect(() => {
    fetch("/api/scenario.json")
      .then((response) => response.json())
      .then((data) => {
        setList(data);
      });
  }, []);
  return page != 0 && page === list.length ? (
    <ResultCarculator scoreList={scoreList} />
  ) : (
    <div className="p-[30px]">
      <button
        className={`bg-[url('/img/reply.png')] bg-cover h-[30px] w-[30px] absolute z-10 left-[10px]`}
        onClick={() => {
          if (page === 0) {
            setNext(false);
          } else {
            setPage(page - 1);
            scoreList.pop();
            setScoreList(scoreList);
          }
        }}
      />
      <CloudCard
        text={list && list[page] && list[page]["text"]}
        style={list && list[page] && list[page]["style"]}
      />
      <ButtonList
        list={list && list[page] && list[page]["buttonList"]}
        page={page}
        setPage={setPage}
        setScoreList={setScoreList}
      />
      <CountBadge count={page + 1} totalCount={list.length} />
    </div>
  );
}
