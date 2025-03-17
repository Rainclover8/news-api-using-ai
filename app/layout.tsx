import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

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
// Reklam Eklemek Gerekiyor ve bazı geliştirmeler lazım
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      {/* Reklam Alamıyoruz!!!! */}
      <head>
        <link rel="shortcut icon" href="./news.png" type="image/x-icon" />
        {/* Google Search Console Verification */}
        <meta name="google-site-verification" content="4iJJCZDoJPBKHbFPfgHBByqwov4Z9TACiJwG_kaDg4g" />
        {/* Google Ads Script */}
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1464195965921155" crossOrigin="anonymous"></script>
        <meta name="google-adsense-account" content="ca-pub-1464195965921155"></meta>
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
