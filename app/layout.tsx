import type { Metadata } from "next";

import "./globals.css";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  metadataBase: new URL("https://iamvibecoder.cn"),
  title: "人人都是程序员 | https://iamvibecoder.cn",
  description:
    "在大模型与 vibe 编程时代，每个人都可以把需求直接变成软件。想要什么工具，不必到处找，直接 vibe 一个。",
  openGraph: {
    title: "人人都是程序员",
    description: "从下载软件，到生成软件。每个人都能用大模型把需求变成应用。",
    url: "https://iamvibecoder.cn",
    siteName: "人人都是程序员"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body className="font-sans" suppressHydrationWarning>
        <div className="relative min-h-screen overflow-hidden">
          <SiteHeader />
          <main>{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
