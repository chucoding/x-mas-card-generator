"use client";

import { useState } from "react";
import Result from "./result";
import Select from "../modules/Select";

export default function Generator({ setNext }: any) {
  const [complete, setComplete] = useState(false);
  const [theme, setTheme] = useState("default");

  return complete ? (
    <Result mode={1} />
  ) : (
    <div className="m-10">
      <Select />
    </div>
  );
}
