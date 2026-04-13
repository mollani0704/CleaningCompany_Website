import Image from "next/image";
import Link from "next/link";

const navigationItems = [
  { label: "회사소개", href: "/company" },
  { label: "작업사례", href: "/cases" },
  { label: "문의", href: "/contact" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/15 bg-primary text-white shadow-[0_14px_40px_rgba(15,23,42,0.22)]">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4 sm:px-8 lg:px-10">
        <Link
          href="/"
          className="flex items-center gap-4 transition-transform duration-200 hover:-translate-y-0.5"
        >
          <div className="relative flex h-20 w-20 items-center justify-center">
            <div className="absolute inset-[0.7rem] rounded-full bg-white/96 shadow-[0_10px_20px_rgba(15,23,42,0.12)]" />
            <Image
              src="/images/company_logo.png"
              alt="대주종합청소 로고"
              width={72}
              height={72}
              className="relative z-10 h-[4.6rem] w-[4.6rem] object-contain drop-shadow-[0_8px_16px_rgba(15,23,42,0.12)]"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-white/70">
              Total Cleaning
            </span>
            <span className="text-xl font-bold tracking-[-0.02em]">
              대주종합청소
            </span>
          </div>
        </Link>

        <nav aria-label="주요 메뉴">
          <ul className="flex items-center gap-2 sm:gap-3">
            {navigationItems.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="rounded-full px-4 py-2 text-sm font-medium text-white/88 transition-colors duration-200 hover:bg-white/10 hover:text-white"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
