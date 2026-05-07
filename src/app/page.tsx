import HeroImageSlider from './_components/hero-image-slider';
import Link from 'next/link';

const strengths = [
  {
    value: '01',
    title: '체계적인 현장 체크',
    description:
      '공간 유형에 맞춘 체크리스트로 청소 범위와 우선순위를 명확하게 관리합니다.',
    imageLabel: '체크리스트 이미지 영역',
  },
  {
    value: '02',
    title: '단정한 서비스 인상',
    description:
      '대주종합청소의 블루 앤 화이트 톤처럼 깔끔하고 신뢰감 있는 응대를 지향합니다.',
    imageLabel: '청소 현장 이미지 영역',
  },
  {
    value: '03',
    title: '빠른 상담 연결',
    description:
      '전화와 카카오톡 CTA로 고객이 고민 없이 바로 문의할 수 있게 설계했습니다.',
    imageLabel: '상담 연결 이미지 영역',
  },
];

const workflow = [
  {
    step: '상담 접수',
    detail: '공간 유형과 희망 일정을 간단히 확인합니다.',
  },
  {
    step: '작업 범위 안내',
    detail: '청소 범위와 예상 소요 시간을 명확하게 전달합니다.',
  },
  {
    step: '현장 진행',
    detail: '우선 구역부터 정리하며 깔끔한 결과를 완성합니다.',
  },
  {
    step: '마무리 확인',
    detail: '고객과 함께 결과를 확인하고 필요한 부분을 점검합니다.',
  },
];

const Home = () => {
  return (
    <div className="bg-linear-to-b from-page-top via-white to-page-base">
      <section className="mx-auto flex min-h-[calc(100vh-81px)] w-full max-w-7xl items-center px-6 py-20 sm:px-8 lg:px-10">
        <div className="grid w-full gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="max-w-3xl">
            <p className="mb-5 inline-flex rounded-full border border-primary-border bg-white px-4 py-1.5 text-sm font-semibold text-primary shadow-sm">
              Daeju Total Cleaning Service
            </p>
            <h1 className="text-4xl font-black leading-tight tracking-[-0.04em] text-slate-950 sm:text-5xl">
              대주종합청소의 첫인상은
              <br />
              깨끗하고 믿음직한 파란색에서 시작됩니다.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              대주종합청소는 공간을 말끔하게 정리하는 것을 넘어, 고객이 안심하고
              맡길 수 있는 청소 경험을 만드는 브랜드를 지향합니다. 이제
              메인페이지는 각 소개 페이지로 이동하는 시작점 역할을 하도록
              구성했습니다.
            </p>
          </div>

          <HeroImageSlider />
        </div>
      </section>

      <section className="relative overflow-hidden border-y border-primary-border/50 bg-primary-soft py-24">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(240,253,250,0.98)_0%,rgba(240,253,250,0.86)_45%,rgba(204,251,241,0.56)_100%)]" />
        <div className="relative mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-10">
          <div className="grid min-h-[540px] gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold tracking-[0.18em] text-primary">
                WHY BLUE SHIRT
              </p>
              <h2 className="mt-6 text-4xl font-black leading-tight text-slate-950 sm:text-5xl">
                대주종합청소가 메인페이지에서
                <br />
                먼저 보여줘야 할 신뢰 요소들입니다.
              </h2>
              <p className="mt-8 max-w-xl text-base leading-8 text-slate-600">
                청소는 보이지 않는 곳까지 완벽해야 합니다. 대주종합청소는
                체계적인 관리와 빠른 대응으로 고객의 공간을 언제나 쾌적하게
                만듭니다.
              </p>
            </div>

            <div className="relative min-h-[360px] overflow-hidden rounded-[32px] border border-white/70 bg-white/70 shadow-[0_30px_90px_rgba(13,148,136,0.18)]">
              <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.98),rgba(204,251,241,0.42))]" />
              <div className="absolute right-8 bottom-0 h-[88%] w-[54%] rounded-t-full bg-primary/15" />
              <div className="absolute right-16 bottom-0 h-[78%] w-[30%] rounded-t-[120px] bg-primary shadow-[0_28px_70px_rgba(13,148,136,0.22)]" />
              <div className="absolute right-[19%] top-[16%] h-20 w-20 rounded-full bg-primary-dark" />
              <div className="absolute right-[34%] top-[30%] h-8 w-36 rotate-[-18deg] rounded-full bg-primary" />
              <div className="absolute right-[8%] top-[24%] h-8 w-44 rotate-[-18deg] rounded-full bg-secondary" />
              <div className="absolute right-[3%] top-[15%] h-28 w-5 rotate-[-18deg] rounded-full bg-slate-300" />
              <div className="absolute right-[2%] top-[11%] h-7 w-24 rotate-[-18deg] rounded-md bg-white shadow-[0_12px_30px_rgba(15,23,42,0.12)]" />
              <div className="absolute left-8 bottom-8 rounded-full border border-primary-border bg-white/85 px-4 py-2 text-xs font-bold tracking-[0.16em] text-primary shadow-sm">
                대표 이미지 영역
              </div>
            </div>
          </div>

          <div className="relative z-10 mt-[-42px] grid gap-6 lg:grid-cols-3">
            {strengths.map(item => (
              <article
                key={item.value}
                className="grid min-h-[260px] overflow-hidden rounded-[26px] border border-white/80 bg-white shadow-[0_24px_70px_rgba(15,23,42,0.08)] sm:grid-cols-[1fr_0.9fr] lg:grid-cols-1 xl:grid-cols-[1fr_0.9fr]"
              >
                <div className="p-7">
                  <p className="text-sm font-black tracking-[0.24em] text-primary">
                    {item.value}
                  </p>
                  <h3 className="mt-5 text-2xl font-bold text-slate-950">
                    {item.title}
                  </h3>
                  <p className="mt-5 text-sm leading-7 text-slate-600">
                    {item.description}
                  </p>
                </div>

                <div className="relative min-h-44 bg-primary-soft">
                  <div className="absolute inset-4 rounded-[22px] border border-dashed border-primary-border bg-white/70" />
                  <div className="absolute inset-x-7 bottom-7 rounded-2xl bg-primary/10 px-4 py-3 text-center text-xs font-bold text-primary">
                    {item.imageLabel}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200/80 bg-white/75 py-24 backdrop-blur">
        <div className="mx-auto grid w-full max-w-7xl gap-12 px-6 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:px-10">
          <div>
            <p className="text-sm font-semibold tracking-[0.18em] text-primary">
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
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary text-sm font-black text-white">
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
        <div className="rounded-[30px] bg-linear-to-br from-slate-950 via-primary to-secondary px-8 py-10 text-white shadow-[0_25px_80px_rgba(30,58,138,0.24)] sm:px-10 sm:py-12">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold tracking-[0.18em] text-primary-muted">
                QUICK CONTACT
              </p>
              <h2 className="mt-4 text-3xl font-black tracking-[-0.03em] sm:text-4xl">
                급한 상담이 필요한 고객도
                <br />
                바로 행동할 수 있게 만듭니다.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-primary-soft/90">
                우측 하단 CTA 버튼과 함께, 메인페이지에서도 상담 유도를 한 번 더
                강조해 전환 흐름을 자연스럽게 이어갑니다.
              </p>
            </div>

            <div className="grid gap-4">
              <Link
                href="/contact"
                className="rounded-2xl bg-white px-6 py-5 text-slate-950 transition-transform duration-200 hover:-translate-y-0.5"
              >
                <p className="text-xs font-bold tracking-[0.2em] text-primary">
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
                <p className="text-xs font-bold tracking-[0.2em] text-primary-muted">
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
};

export default Home;
