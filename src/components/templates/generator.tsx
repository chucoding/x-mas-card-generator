"use client";

import { useState } from "react";
import Snowfall from "react-snowfall";
import Lottie from "react-lottie-player";
import lottieJson from "../../resources/love-letter.json";
import Select from "../modules/Select";
import Textarea from "../modules/Textarea";
import Input from "../modules/Input";

export default function Generator({ setNext }: any) {
  const [select, setSelect] = useState("");
  const [input, setInput] = useState("");
  const [text, setText] = useState("");

  return (
    <div className="w-full h-full bg-[url('/img/background.jpg')] bg-cover">
      <Snowfall snowflakeCount={10} speed={[-0.5, 1.0]} wind={[0, 0.5]} />
      <Select value={select} setValue={setSelect} />
      <Input setValue={setInput} />
      <Textarea setValue={setText} />
      <Lottie
        animationData={lottieJson}
        play
        speed={0.5}
        style={{
          width: "75px",
          float: "right",
          marginRight: "2.5rem",
          cursor: "pointer",
        }}
        onClick={() => alert("hi")}
      />
    </div>
  );
}
