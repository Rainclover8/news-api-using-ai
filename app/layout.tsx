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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
