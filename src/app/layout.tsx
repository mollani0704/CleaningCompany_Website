import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "./_components/site-header";

export const metadata: Metadata = {
  title: "청남방 | 청소회사 소개페이지",
  description: "청남방의 전문 청소 서비스와 작업 철학을 소개하는 페이지입니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="h-full antialiased">
      <body className="min-h-full bg-background text-foreground">
        <div className="flex min-h-full flex-col">
          <SiteHeader />
          <main className="flex-1">{children}</main>
        </div>
      </body>
    </html>
  );
}
