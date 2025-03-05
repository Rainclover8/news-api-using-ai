import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Haber Sitesi - Baran Çiçek",
  description:
    "Baran Çiçek tarafından geliştirilen haber sitesi, en güncel haberleri ve gelişmeleri sunar. Güvenilir ve hızlı haber kaynağınız.",
  keywords: "haber, güncel haberler, Baran Çiçek, son dakika haberleri",
  creator: "Baran Çiçek",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <Head>

      {/* Google Ads Deneme - Oto reklam */}
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1464195965921155"
     crossOrigin="anonymous"></script>
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
