"use client";
import { useState } from "react";
import Home from "../components/templates/home";
import OnBoarding from "../components/templates/onboarding";
import Scenario from "../components/templates/scenario";

export default function Main() {
  const [route, setRoute] = useState("");

  switch (route) {
    case "onboarding":
      return <OnBoarding setRoute={setRoute} />;
    case "scenario":
      return <Scenario setRoute={setRoute} />;
    default:
      return <Home setRoute={setRoute} />;
  }
}
