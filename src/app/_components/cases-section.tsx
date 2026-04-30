const caseStudies = [
  {
    label: "OFFICE",
    title: "사무실 정기 청소",
    description:
      "업무 공간의 책상, 유리, 바닥, 공용 구역을 정기적으로 관리해 늘 정돈된 인상을 유지합니다.",
  },
  {
    label: "STORE",
    title: "매장 오픈 전후 관리",
    description:
      "고객이 가장 먼저 보는 입구와 쇼윈도, 진열 주변을 중심으로 깔끔한 브랜드 이미지를 만듭니다.",
  },
  {
    label: "HOME",
    title: "입주·이사 청소",
    description:
      "생활 먼지와 잔여 오염을 세심하게 정리해 새 공간의 첫 시작을 더 쾌적하게 준비합니다.",
  },
];

const CasesSection = () => {
  return (
    <section className="mx-auto w-full max-w-7xl px-6 py-24 sm:px-8 lg:px-10">
      <div className="flex flex-col gap-4 sm:max-w-2xl">
        <p className="text-sm font-semibold tracking-[0.18em] text-primary">
          CASES
        </p>
        <h1 className="text-3xl font-black tracking-[-0.03em] text-slate-950 sm:text-5xl">
          다양한 공간에 맞춘 작업사례를
          <br />
          신뢰감 있게 보여드립니다.
        </h1>
        <p className="text-base leading-8 text-slate-600">
          공간의 쓰임새와 고객 동선을 고려해 현장마다 다른 기준으로 청소를
          진행합니다. 아래 예시는 대주종합청소가 소개페이지에서 보여주기 좋은 대표
          작업 유형입니다.
        </p>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {caseStudies.map((item) => (
          <article
            key={item.title}
            className="overflow-hidden rounded-xl border border-slate-200 bg-slate-50"
          >
            <div className="h-44 bg-linear-to-br from-primary via-secondary to-primary-muted" />
            <div className="p-6">
              <p className="text-xs font-bold tracking-[0.2em] text-primary">
                {item.label}
              </p>
              <h2 className="mt-3 text-xl font-bold text-slate-950">
                {item.title}
              </h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                {item.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default CasesSection;
