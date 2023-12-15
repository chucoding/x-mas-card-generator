"use client";
import { useState } from "react";
import Home from "../components/templates/home";
import Generator from "../components/templates/generator";
import Result from "../components/templates/result";

interface Data {
  select: any;
  input: string;
  text: string;
}

export default function Main() {
  const [route, setRoute] = useState("");
  const [data, setData] = useState<Data>({
    select: "",
    input: "",
    text: "",
  });

  switch (route) {
    case "generator":
      return <Generator setRoute={setRoute} setData={setData} />;
    case "result":
      return <Result data={data} />;
    default:
      return <Home setRoute={setRoute} />;
  }
}
