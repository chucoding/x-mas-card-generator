import React, { useEffect, useState } from "react";
import Loading from "../../components/modules/Loading";
import json from "../../resources/prompt.json";

interface ResultProps {
  data: {
    select: keyof typeof json;
    input: string;
    text: string;
  };
}

export default function Result({ data }: ResultProps) {
  const [loading, setLoading] = useState(true);

  const generate = async () => {
    setLoading(true);
    try {
      const ncloud_api_options: RequestInit = {
        method: "POST",
        headers: {
          "X-NCP-CLOVASTUDIO-API-KEY":
            process.env.NEXT_PUBLIC_X_NCP_CLOVASTUDIO_API_KEY || "",
          "X-NCP-APIGW-API-KEY":
            process.env.NEXT_PUBLIC_X_NCP_APIGW_API_KEY || "",
          "Content-Type": "application/json; charset=utf-8",
        },
        body: JSON.stringify({
          message: [
            {
              role: "system",
              content: json[data.select],
            },
            {
              role: "user",
              content: "크리스마스 카드 만들어줘",
            },
          ],
          topP: 0.8,
          topK: 0,
          maxTokens: 256,
          temperature: 0.5,
          repeatPenalty: 5.0,
          stopBefore: [],
          includeAiFilters: true,
        }) as string,
      };

      const response = await fetch(
        "/testapp/v1/chat-completions/HCX-002",
        ncloud_api_options
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const resultData = await response.json();
      console.log(resultData);

      // 다음 작업 수행...
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
    return <div>완성!</div>;
  }
}
