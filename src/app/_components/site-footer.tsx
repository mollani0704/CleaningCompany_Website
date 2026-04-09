import Link from "next/link";

const footerLinks = [
  { label: "회사소개", href: "#about" },
  { label: "작업사례", href: "#cases" },
  { label: "문의", href: "#contact" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-white">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-6 py-14 sm:px-8 lg:grid-cols-[1.2fr_0.8fr] lg:px-10">
        <div>
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#2563EB] text-sm font-black tracking-[0.18em] text-white">
              CN
            </div>
            <div>
              <p className="text-lg font-bold tracking-[-0.02em]">청남방</p>
              <p className="text-sm text-slate-300">
                공간의 첫인상을 정리하는 청소 전문 서비스
              </p>
            </div>
          </div>
          <p className="mt-5 max-w-xl text-sm leading-7 text-slate-400">
            청남방은 사무실, 상업 공간, 주거 공간까지 깔끔하고 믿을 수 있는
            청소 경험을 제공합니다. 파란 셔츠처럼 단정하고 신뢰감 있는 서비스를
            만드는 것이 우리의 기준입니다.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2">
          <div>
            <p className="text-sm font-semibold tracking-[0.16em] text-slate-400">
              MENU
            </p>
            <ul className="mt-4 space-y-3 text-sm text-slate-200">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="transition-colors duration-200 hover:text-[#93C5FD]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold tracking-[0.16em] text-slate-400">
              CONTACT
            </p>
            <div className="mt-4 space-y-3 text-sm text-slate-200">
              <p>대표번호 010-1234-5678</p>
              <p>이메일 hello@cheongnambang.kr</p>
              <p>운영시간 평일 09:00 - 18:00</p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4 text-xs text-slate-400 sm:px-8 lg:px-10">
          <p>© 2026 청남방. All rights reserved.</p>
          <p>Blue & White Cleaning Brand</p>
        </div>
      </div>
    </footer>
  );
}
