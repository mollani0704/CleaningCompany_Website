import Link from "next/link";

const ctaItems = [
  {
    label: "전화 문의",
    description: "지금 바로 상담 연결",
    href: "tel:010-1234-5678",
    className:
      "bg-[#2563EB] text-white shadow-[0_20px_45px_rgba(37,99,235,0.28)] hover:bg-[#1D4ED8]",
  },
  {
    label: "카카오톡 상담",
    description: "실시간 톡 문의",
    href: "https://open.kakao.com/",
    className:
      "bg-[#FEE500] text-slate-950 shadow-[0_18px_40px_rgba(15,23,42,0.14)] hover:bg-[#FACC15]",
  },
];

export function FloatingCta() {
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-4 z-50 px-4 sm:inset-x-auto sm:right-6 sm:bottom-6 sm:px-0">
      <div className="mx-auto flex max-w-md flex-col gap-3 sm:mx-0 sm:w-[280px]">
        {ctaItems.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            target={item.href.startsWith("http") ? "_blank" : undefined}
            rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
            className={`pointer-events-auto flex items-center justify-between rounded-2xl px-5 py-4 transition-transform duration-200 hover:-translate-y-0.5 ${item.className}`}
          >
            <div>
              <p className="text-base font-bold tracking-[-0.02em]">
                {item.label}
              </p>
              <p className="mt-1 text-sm opacity-85">{item.description}</p>
            </div>
            <span className="text-xl font-black">+</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
