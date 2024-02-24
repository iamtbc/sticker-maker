import { GoogleAnalytics } from "@next/third-parties/google";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { cn } from "@/lib/utils";
import { Footer } from "./_components/Footer";
import { Header } from "./_components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "StickerMaker",
  description: "簡単操作であなただけのステッカーを作成しよう。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className={cn(inter.className, "sticky-footer")}>
        <Header />
        {children}
        <Footer />
      </body>
      <GoogleAnalytics gaId="G-1LPJBMYJTM" />
    </html>
  );
}
