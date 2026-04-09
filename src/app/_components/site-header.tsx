import Link from "next/link";

const navigationItems = [
  { label: "회사소개", href: "#about" },
  { label: "작업사례", href: "#cases" },
  { label: "문의", href: "#contact" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/20 bg-[#2563EB] text-white shadow-[0_14px_40px_rgba(15,23,42,0.18)]">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4 sm:px-8 lg:px-10">
        <Link
          href="/"
          className="flex items-center gap-3 transition-transform duration-200 hover:-translate-y-0.5"
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/35 bg-white/14 shadow-[inset_0_1px_0_rgba(255,255,255,0.24)] backdrop-blur">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white text-sm font-black tracking-[0.18em] text-[#2563EB]">
              CN
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-white/70">
              Clean Service
            </span>
            <span className="text-xl font-bold tracking-[-0.02em]">청남방</span>
          </div>
        </Link>

        <nav aria-label="주요 메뉴">
          <ul className="flex items-center gap-2 sm:gap-3">
            {navigationItems.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="rounded-full px-4 py-2 text-sm font-medium text-white/88 transition-colors duration-200 hover:bg-white/12 hover:text-white"
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
