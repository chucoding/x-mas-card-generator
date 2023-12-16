"use client";
import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import Home from "../components/templates/home";
import Generator from "../components/templates/generator";
import Result from "../components/templates/result";

interface Data {
  select: any;
  input: string;
  text: string;
}

const supabase = createClient(
  "https://cmtftnbrogwczvoghbrm.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNtdGZ0bmJyb2d3Y3p2b2doYnJtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDEyMjE5OTQsImV4cCI6MjAxNjc5Nzk5NH0.sNNICyb_WWm2SpXWQhuFQCojZMNa32jXJJ6D1B0IN64"
);

export default function Main() {
  const [count, setCount] = useState(0);
  const [route, setRoute] = useState("");
  const [data, setData] = useState<Data>({
    select: "",
    input: "",
    text: "",
  });

  useEffect(() => {
    if (count > 0) {
      console.log(count);
      supabase
        .from("hyperclova")
        .update({ token: count })
        .gte("token", 0)
        .select()
        .then((res: any) => {
          if (count < res.data.token) {
            setCount(res.data.token);
          }
        });
    } else {
      supabase
        .from("hyperclova")
        .select("token")
        .single()
        .then((res: any) => {
          setCount(res.data.token);
        });
    }
  }, [count]);

  switch (route) {
    case "generator":
      return <Generator setRoute={setRoute} setData={setData} />;
    case "result":
      return <Result data={data} setCount={setCount} />;
    default:
      return <Home count={count} setRoute={setRoute} />;
  }
}
