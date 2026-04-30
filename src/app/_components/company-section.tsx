const companyStrengths = [
  {
    title: "전문성",
    description:
      "현장 유형에 맞는 청소 기준과 체크리스트로 일관된 품질을 유지합니다.",
  },
  {
    title: "정직한 소통",
    description:
      "작업 범위와 예상 시간을 명확하게 안내해 부담 없이 맡길 수 있습니다.",
  },
  {
    title: "단정한 브랜드 경험",
    description:
      "파란색과 흰색이 주는 믿음직한 인상을 서비스 전반에 담아냅니다.",
  },
  {
    title: "세심한 마무리",
    description:
      "눈에 잘 띄지 않는 구석까지 살펴 공간의 완성도를 높입니다.",
  },
];

const CompanySection = () => {
  return (
    <section className="mx-auto w-full max-w-7xl px-6 py-24 sm:px-8 lg:px-10">
      <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
        <div>
          <p className="text-sm font-semibold tracking-[0.18em] text-primary">
            COMPANY
          </p>
          <h1 className="mt-4 text-3xl font-black tracking-[-0.03em] text-slate-950 sm:text-5xl">
            대주종합청소는 깔끔함을 넘어
            <br />
            신뢰까지 정리합니다.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-8 text-slate-600">
            대주종합청소는 사무실, 상업 공간, 주거 공간까지 다양한 현장에 맞춘 청소
            서비스를 제공합니다. 파란 셔츠처럼 단정하고 믿음직한 인상을 남기는
            것이 브랜드의 기준입니다.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {companyStrengths.map((item) => (
            <article
              key={item.title}
              className="rounded-xl border border-slate-200 bg-white p-6 shadow-[0_18px_50px_rgba(37,99,235,0.08)]"
            >
              <h2 className="text-xl font-bold text-slate-950">{item.title}</h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanySection;
