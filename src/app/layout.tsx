import type {Metadata} from 'next';
import './globals.css';
import {FloatingCta} from './_components/floating-cta';
import {SiteHeader} from './_components/site-header';
import {SiteFooter} from './_components/site-footer';
import {Providers} from './providers';

export const metadata: Metadata = {
  title: '대주종합청소 | 청소회사 소개페이지',
  description:
    '대주종합청소의 전문 청소 서비스와 작업 철학을 소개하는 페이지입니다.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="h-full antialiased">
      <body className="m-0 min-h-screen bg-background text-foreground">
        <Providers>
          <div className="flex min-h-screen flex-col">
            <SiteHeader />
            <main className="flex-1">{children}</main>
            <SiteFooter />
          </div>
          <FloatingCta />
        </Providers>
      </body>
    </html>
  );
}
