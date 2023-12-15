import React, { useEffect, useState } from "react";
import Loading from "../../components/modules/Loading";
import JSON from "../../resources/prompt.json";

interface ResultProps {
  data: {
    select: keyof typeof JSON;
    input: string;
    text: string;
  };
}

export default function Result({ data }: ResultProps) {
  const [loading, setLoading] = useState(true);

  const generate = async () => {
    setLoading(true);
    try {
      console.log(JSON[data.select]);
    } catch (err) {
      //alert(err);
    }
  };

  useEffect(() => {
    generate();
  }, []);

  if (loading) return <Loading />;
  else {
    return <div>완성!</div>;
  }
}
