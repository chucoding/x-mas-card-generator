"use client";

import "./globals.css";
import Head from "./head";
import Script from "next/script";
import { useEffect } from "react";

declare global {
  interface Window {
    adsbygoogle: any;
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {}
  }, []);

  return (
    <html lang="ko" style={{ fontFamily: "GangwonEdu_OTFBoldA" }}>
      <head>
        <Head />
        <Script
          defer
          src="https://cdn.swygbro.com/public/widget/swyg-widget.js"
        ></Script>
      </head>
      <body>
        <main
          className={`
        absolute
        min-w-full
        min-h-full
        w-full
        h-full
        overflow-auto
        justify-center
        flex
      `}
        >
          <div className="text-center w-[375px] h-full relative">
            <div className="w-full h-full absolute top-0 bottom-0 align-middle">
              {children}
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
