import Link from "next/link";

const quickLinks = [
  {
    href: "/company",
    label: "회사소개",
    title: "청남방의 기준과 철학 보기",
    description:
      "브랜드가 어떤 방식으로 청소 품질과 신뢰를 관리하는지 소개합니다.",
  },
  {
    href: "/cases",
    label: "작업사례",
    title: "공간별 대표 작업사례 보기",
    description:
      "사무실, 매장, 주거 공간 등 현장별 작업 유형을 한눈에 살펴볼 수 있습니다.",
  },
  {
    href: "/contact",
    label: "문의",
    title: "상담 채널과 운영시간 확인",
    description:
      "전화와 카카오톡 등 실제 상담으로 이어지는 문의 정보를 빠르게 확인할 수 있습니다.",
  },
];

const strengths = [
  {
    value: "01",
    title: "체계적인 현장 체크",
    description:
      "공간 유형에 맞춘 체크리스트로 청소 범위와 우선순위를 명확하게 관리합니다.",
  },
  {
    value: "02",
    title: "단정한 서비스 인상",
    description:
      "청남방의 블루 앤 화이트 톤처럼 깔끔하고 신뢰감 있는 응대를 지향합니다.",
  },
  {
    value: "03",
    title: "빠른 상담 연결",
    description:
      "전화와 카카오톡 CTA로 고객이 고민 없이 바로 문의할 수 있게 설계했습니다.",
  },
];

const workflow = [
  {
    step: "상담 접수",
    detail: "공간 유형과 희망 일정을 간단히 확인합니다.",
  },
  {
    step: "작업 범위 안내",
    detail: "청소 범위와 예상 소요 시간을 명확하게 전달합니다.",
  },
  {
    step: "현장 진행",
    detail: "우선 구역부터 정리하며 깔끔한 결과를 완성합니다.",
  },
  {
    step: "마무리 확인",
    detail: "고객과 함께 결과를 확인하고 필요한 부분을 점검합니다.",
  },
];

export default function Home() {
  return (
    <div className="bg-[linear-gradient(180deg,#EFF6FF_0%,#FFFFFF_42%,#F8FBFF_100%)]">
      <section className="mx-auto flex min-h-[calc(100vh-81px)] w-full max-w-7xl items-center px-6 py-20 sm:px-8 lg:px-10">
        <div className="grid w-full gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="max-w-3xl">
            <p className="mb-5 inline-flex rounded-full border border-[#BFDBFE] bg-white px-4 py-1.5 text-sm font-semibold text-[#2563EB] shadow-sm">
              BlueShirt Clean Service
            </p>
            <h1 className="text-4xl font-black leading-tight tracking-[-0.04em] text-slate-950 sm:text-5xl">
              청남방의 첫인상은
              <br />
              깨끗하고 믿음직한 파란색에서 시작됩니다.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              청남방은 공간을 말끔하게 정리하는 것을 넘어, 고객이 안심하고 맡길 수
              있는 청소 경험을 만드는 브랜드를 지향합니다. 이제 메인페이지는 각
              소개 페이지로 이동하는 시작점 역할을 하도록 구성했습니다.
            </p>
          </div>

          <div className="grid gap-4">
            {quickLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-[24px] border border-slate-200 bg-white p-6 shadow-[0_18px_50px_rgba(37,99,235,0.08)] transition-transform duration-200 hover:-translate-y-1"
              >
                <p className="text-xs font-bold tracking-[0.2em] text-[#2563EB]">
                  {item.label}
                </p>
                <h2 className="mt-3 text-2xl font-bold tracking-[-0.03em] text-slate-950">
                  {item.title}
                </h2>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {item.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 py-24 sm:px-8 lg:px-10">
        <div className="flex flex-col gap-4 sm:max-w-2xl">
          <p className="text-sm font-semibold tracking-[0.18em] text-[#2563EB]">
            WHY BLUE SHIRT
          </p>
          <h2 className="text-3xl font-black tracking-[-0.03em] text-slate-950 sm:text-4xl">
            청남방이 메인페이지에서
            <br />
            먼저 보여줘야 할 신뢰 요소들입니다.
          </h2>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {strengths.map((item) => (
            <article
              key={item.value}
              className="rounded-[24px] border border-slate-200 bg-white p-7 shadow-[0_18px_50px_rgba(37,99,235,0.08)]"
            >
              <p className="text-sm font-black tracking-[0.24em] text-[#2563EB]">
                {item.value}
              </p>
              <h3 className="mt-4 text-2xl font-bold tracking-[-0.03em] text-slate-950">
                {item.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-slate-200/80 bg-white/75 py-24 backdrop-blur">
        <div className="mx-auto grid w-full max-w-7xl gap-12 px-6 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:px-10">
          <div>
            <p className="text-sm font-semibold tracking-[0.18em] text-[#2563EB]">
              PROCESS
            </p>
            <h2 className="mt-4 text-3xl font-black tracking-[-0.03em] text-slate-950 sm:text-4xl">
              문의부터 작업 완료까지
              <br />
              흐름이 한눈에 보이도록 구성합니다.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-slate-600">
              소개페이지에서는 복잡한 설명보다 고객이 어떻게 진행되는지 빠르게
              이해할 수 있어야 합니다. 메인에서 이 흐름을 보여주면 문의 전환에도
              도움이 됩니다.
            </p>
          </div>

          <div className="grid gap-4">
            {workflow.map((item, index) => (
              <div
                key={item.step}
                className="flex gap-5 rounded-[22px] border border-slate-200 bg-slate-50 p-5"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#2563EB] text-sm font-black text-white">
                  {index + 1}
                </div>
                <div>
                  <h3 className="text-xl font-bold tracking-[-0.02em] text-slate-950">
                    {item.step}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    {item.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 py-24 sm:px-8 lg:px-10">
        <div className="rounded-[30px] bg-[linear-gradient(135deg,#0F172A_0%,#1D4ED8_52%,#60A5FA_100%)] px-8 py-10 text-white shadow-[0_25px_80px_rgba(37,99,235,0.24)] sm:px-10 sm:py-12">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold tracking-[0.18em] text-blue-100">
                QUICK CONTACT
              </p>
              <h2 className="mt-4 text-3xl font-black tracking-[-0.03em] sm:text-4xl">
                급한 상담이 필요한 고객도
                <br />
                바로 행동할 수 있게 만듭니다.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-blue-50/90">
                우측 하단 CTA 버튼과 함께, 메인페이지에서도 상담 유도를 한 번 더
                강조해 전환 흐름을 자연스럽게 이어갑니다.
              </p>
            </div>

            <div className="grid gap-4">
              <Link
                href="/contact"
                className="rounded-2xl bg-white px-6 py-5 text-slate-950 transition-transform duration-200 hover:-translate-y-0.5"
              >
                <p className="text-xs font-bold tracking-[0.2em] text-[#2563EB]">
                  CONTACT PAGE
                </p>
                <p className="mt-2 text-xl font-bold tracking-[-0.02em]">
                  문의 페이지 바로가기
                </p>
              </Link>
              <Link
                href="/cases"
                className="rounded-2xl border border-white/20 bg-white/10 px-6 py-5 text-white transition-transform duration-200 hover:-translate-y-0.5"
              >
                <p className="text-xs font-bold tracking-[0.2em] text-blue-100">
                  CASES PAGE
                </p>
                <p className="mt-2 text-xl font-bold tracking-[-0.02em]">
                  작업사례 먼저 살펴보기
                </p>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
