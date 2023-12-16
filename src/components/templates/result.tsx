import React, { useEffect, useState } from "react";
import Loading from "../../components/modules/Loading";
import json from "../../resources/prompt.json";
import InfoMessage from "../modules/InfoMessage";

interface ResultProps {
  data: {
    select: keyof typeof json;
    input: string;
    text: string;
  };
  setCount: React.Dispatch<React.SetStateAction<number>>;
}

export default function Result({ data, setCount }: ResultProps) {
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");

  const generate = async () => {
    setLoading(true);
    try {
      const option = {
        method: "POST",
        body: JSON.stringify({
          prompt: json[data.select],
          text: data.text,
        }),
      };

      const response = await fetch("/v1/json", option);

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const resultData = await response.json();
      setMessage(resultData.body.result.message.content);
      setCount((count) => {
        return count + resultData.body.result.outputLength;
      });
    } catch (err) {
      console.error("Error during fetch:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    generate();
  }, []);

  if (loading) return <Loading />;
  else {
    return (
      <div
        className="inline-block text-center w-full h-full bg-red-400"
        style={{ fontFamily: "KCCChassam" }}
      >
        <InfoMessage />
        <div className="relative top-[10%] bg-[url('/img/result.png')] bg-cover h-[400px] animate-fadein">
          <h1 className="absolute top-[45%] left-[25%]">To. {data.input}</h1>
          <p className="absolute top-[55%] left-[25%] w-[50%] text-xs">
            {message}
          </p>
        </div>
      </div>
    );
  }
}
