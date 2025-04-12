"use client";
import { useEffect } from "react";

declare global {
  interface Window {
    adsbygoogle?: unknown[];
  }
}

export default function AdsComponent() {
  useEffect(() => {
    try {
      if (typeof window !== "undefined") {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      }
    } catch (e) {
      console.error("AdSense yüklenemedi", e);
    }
  }, []);

  return (
    <>
      {/* Google AdSense scripti */}
      <script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1464195965921155"
        crossOrigin="anonymous"
      ></script>

      {/* Reklam birimi */}
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-1464195965921155"
        data-ad-slot="2977466793"
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
    </>
  );
}
