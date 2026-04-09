export default function Home() {
  return (
    <div className="bg-[linear-gradient(180deg,#EFF6FF_0%,#FFFFFF_42%,#F8FBFF_100%)]">
      <section className="mx-auto flex min-h-[calc(100vh-81px)] w-full max-w-7xl items-center px-6 py-20 sm:px-8 lg:px-10">
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
            있는 청소 경험을 만드는 브랜드를 지향합니다. 다음 단계에서는 이
            헤더를 기준으로 소개 섹션과 작업사례 섹션을 자연스럽게 이어갈 수
            있습니다.
          </p>
        </div>
      </section>

      <section
        id="about"
        className="mx-auto w-full max-w-7xl px-6 py-24 sm:px-8 lg:px-10"
      >
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold tracking-[0.18em] text-[#2563EB]">
              COMPANY
            </p>
            <h2 className="mt-4 text-3xl font-black tracking-[-0.03em] text-slate-950 sm:text-4xl">
              청남방은 깔끔함을 넘어
              <br />
              신뢰까지 정리합니다.
            </h2>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {[
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
            ].map((item) => (
              <article
                key={item.title}
                className="rounded-xl border border-slate-200 bg-white p-6 shadow-[0_18px_50px_rgba(37,99,235,0.08)]"
              >
                <h3 className="text-xl font-bold text-slate-950">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="cases"
        className="border-y border-slate-200/80 bg-white/80 py-24 backdrop-blur"
      >
        <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-10">
          <div className="flex flex-col gap-4 sm:max-w-2xl">
            <p className="text-sm font-semibold tracking-[0.18em] text-[#2563EB]">
              CASES
            </p>
            <h2 className="text-3xl font-black tracking-[-0.03em] text-slate-950 sm:text-4xl">
              다양한 공간에 맞춘 작업사례를
              <br />
              신뢰감 있게 보여줄 수 있습니다.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {[
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
            ].map((item) => (
              <article
                key={item.title}
                className="overflow-hidden rounded-xl border border-slate-200 bg-slate-50"
              >
                <div className="h-44 bg-[linear-gradient(135deg,#2563EB_0%,#60A5FA_55%,#DBEAFE_100%)]" />
                <div className="p-6">
                  <p className="text-xs font-bold tracking-[0.2em] text-[#2563EB]">
                    {item.label}
                  </p>
                  <h3 className="mt-3 text-xl font-bold text-slate-950">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="mx-auto w-full max-w-7xl px-6 py-24 sm:px-8 lg:px-10"
      >
        <div className="rounded-[28px] bg-[linear-gradient(135deg,#0F172A_0%,#1D4ED8_55%,#60A5FA_100%)] px-8 py-10 text-white shadow-[0_25px_80px_rgba(37,99,235,0.24)] sm:px-10 sm:py-12">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-end">
            <div>
              <p className="text-sm font-semibold tracking-[0.18em] text-blue-100">
                CONTACT
              </p>
              <h2 className="mt-4 text-3xl font-black tracking-[-0.03em] sm:text-4xl">
                문의 섹션은 빠르고 간결하게,
                <br />
                신뢰감 있게 이어집니다.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-blue-50/90">
                전화, 문자, 이메일 등 편한 방식으로 문의를 받을 수 있도록
                구성했습니다. 이후 실제 연락처와 상담 문구를 넣으면 바로 소개페이지
                구조로 활용할 수 있습니다.
              </p>
            </div>

            <div className="grid gap-4 rounded-2xl bg-white/12 p-6 backdrop-blur">
              <div className="rounded-xl border border-white/15 bg-white/10 p-4">
                <p className="text-xs font-semibold tracking-[0.16em] text-blue-100">
                  PHONE
                </p>
                <p className="mt-2 text-lg font-bold">010-1234-5678</p>
              </div>
              <div className="rounded-xl border border-white/15 bg-white/10 p-4">
                <p className="text-xs font-semibold tracking-[0.16em] text-blue-100">
                  EMAIL
                </p>
                <p className="mt-2 text-lg font-bold">
                  hello@cheongnambang.kr
                </p>
              </div>
              <div className="rounded-xl border border-white/15 bg-white/10 p-4">
                <p className="text-xs font-semibold tracking-[0.16em] text-blue-100">
                  HOURS
                </p>
                <p className="mt-2 text-lg font-bold">평일 09:00 - 18:00</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
