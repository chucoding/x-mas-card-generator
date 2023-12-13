"use client";
import { useState } from "react";
import Home from "../components/templates/home";
import Generator from "../components/templates/generator";

export default function Main() {
  const [route, setRoute] = useState("");

  switch (route) {
    case "generator":
      return <Generator setRoute={setRoute} />;
    default:
      return <Home setRoute={setRoute} />;
  }
}
