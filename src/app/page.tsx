import HeroImageSlider from './_components/hero-image-slider';
import Image from 'next/image';
import {
  CheckCircle2,
  ClipboardCheck,
  ClipboardList,
  Home as HomeIcon,
  MessageCircle,
  PhoneCall,
  ShieldCheck,
  SprayCan,
  Wrench,
} from 'lucide-react';

const strengths = [
  {
    value: '01',
    title: '체계적인 현장 체크',
    description:
      '공간 유형에 맞춘 체크리스트로 청소 범위와 우선순위를 명확하게 관리합니다.',
    image: '/images/main/main_intro_doc.png',
    imageWrapClass:
      'right-3 bottom-4 h-[80%] w-[48%] sm:right-5 sm:h-[86%] lg:right-3 lg:h-[78%] xl:right-5 xl:h-[86%]',
  },
  {
    value: '02',
    title: '단정한 서비스 인상',
    description:
      '대주종합청소의 블루 앤 화이트 톤처럼 깔끔하고 신뢰감 있는 응대를 지향합니다.',
    image: '/images/main/main_intro_people.png',
    imageWrapClass:
      'right-0 bottom-0 h-[94%] w-[54%] sm:w-[50%] lg:h-[86%] lg:w-[62%] xl:h-[94%] xl:w-[54%]',
  },
  {
    value: '03',
    title: '빠른 상담 연결',
    description:
      '전화와 카카오톡 CTA로 고객이 고민 없이 바로 문의할 수 있게 설계했습니다.',
    image: '/images/main/main_intro_call.png',
    imageWrapClass:
      'right-0 bottom-0 h-[92%] w-[45%] sm:right-2 sm:h-[98%] lg:right-0 lg:h-[88%] lg:w-[52%] xl:h-[98%] xl:w-[45%]',
  },
];

const workflow = [
  {
    step: '상담 접수',
    detail: '전화와 카카오톡으로 빠르게 상담을 접수합니다.',
    icon: PhoneCall,
    accentIcon: MessageCircle,
  },
  {
    step: '현장 및 범위 안내',
    detail: '공간 상태를 확인하고 청소 범위와 예상 시간을 안내합니다.',
    icon: ClipboardList,
    accentIcon: ClipboardCheck,
  },
  {
    step: '전문 장비 청소 진행',
    detail: '전문 장비와 체크리스트 기반으로 꼼꼼하게 작업을 진행합니다.',
    icon: SprayCan,
    accentIcon: Wrench,
  },
  {
    step: '최종 점검 및 완료',
    detail: '작업 완료 후 고객과 함께 최종 상태를 확인합니다.',
    icon: ShieldCheck,
    accentIcon: CheckCircle2,
  },
];

const processHighlights = [
  {
    title: '당일 상담 가능',
    detail: '빠른 응대로 신속하게 안내',
    icon: MessageCircle,
  },
  {
    title: '공간별 맞춤 청소',
    detail: '공간 특성에 맞춘 맞춤형 솔루션',
    icon: HomeIcon,
  },
  {
    title: '전문 장비 사용',
    detail: '전문 장비와 친환경 세제로 꼼꼼하게',
    icon: Wrench,
  },
  {
    title: '작업 후 최종 점검',
    detail: '고객과 함께 완벽히 확인',
    icon: ShieldCheck,
  },
];

const Home = () => {
  return (
    <div className="bg-linear-to-b from-page-top via-white to-page-base">
      <section className="mx-auto flex min-h-[calc(100vh-81px)] w-full max-w-[1560px] items-center px-4 py-20 sm:px-6 lg:px-8">
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

      <section className="relative overflow-hidden border-y border-primary-border/50 bg-page-base py-20 sm:py-24">
        <div className="absolute inset-x-0 top-0 h-[600px] bg-[url('/images/main/main_intro_background.png')] bg-cover bg-[position:64%_top] bg-no-repeat sm:h-[660px] lg:h-[640px] lg:bg-[length:auto_100%] lg:bg-[position:right_top]" />
        <div className="absolute inset-x-0 top-0 h-[600px] bg-[linear-gradient(180deg,rgba(248,255,254,0.94)_0%,rgba(248,255,254,0.74)_56%,rgba(248,255,254,0.08)_100%)] sm:h-[660px] lg:h-[640px] lg:bg-[linear-gradient(90deg,rgba(248,255,254,0.99)_0%,rgba(248,255,254,0.96)_35%,rgba(248,255,254,0.58)_50%,rgba(248,255,254,0.08)_70%,rgba(248,255,254,0)_100%)]" />
        <div className="absolute inset-x-0 top-[360px] h-80 bg-linear-to-b from-transparent via-page-base/50 to-page-base sm:top-[420px] lg:top-[430px]" />
        <div className="relative mx-auto w-full max-w-[1560px] px-4 sm:px-6 lg:px-8">
          <div className="flex min-h-[430px] items-center pt-8 pb-20 sm:pb-24 lg:min-h-[500px]">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold tracking-[0.18em] text-primary">
                Why Daeju Cleaning Service
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
          </div>

          <div className="relative z-10 mt-[-58px] grid gap-6 lg:grid-cols-3">
            {strengths.map(item => (
              <article
                key={item.value}
                className="group relative min-h-[255px] overflow-hidden rounded-[26px] border border-white/85 bg-white/95 shadow-[0_24px_70px_rgba(15,23,42,0.08)] backdrop-blur-sm"
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_50%,rgba(14,165,233,0.12),transparent_46%)]" />
                <div
                  className={`absolute ${item.imageWrapClass} transition duration-500 group-hover:scale-[1.035]`}
                >
                  <Image
                    src={item.image}
                    alt=""
                    fill
                    sizes="(min-width: 1280px) 18vw, (min-width: 1024px) 22vw, 45vw"
                    className="object-contain object-right-bottom drop-shadow-[0_18px_28px_rgba(15,23,42,0.12)]"
                  />
                </div>
                <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.98)_0%,rgba(255,255,255,0.94)_42%,rgba(255,255,255,0.52)_64%,rgba(255,255,255,0)_100%)] lg:bg-[linear-gradient(90deg,rgba(255,255,255,0.98)_0%,rgba(255,255,255,0.95)_45%,rgba(255,255,255,0.56)_66%,rgba(255,255,255,0)_100%)]" />

                <div className="relative z-10 flex min-h-[255px] max-w-[58%] flex-col justify-between p-7 sm:max-w-[54%] lg:max-w-[64%] xl:max-w-[58%]">
                  <p className="text-sm font-black tracking-[0.24em] text-primary">
                    {item.value}
                  </p>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-950">
                      {item.title}
                    </h3>
                    <p className="mt-5 text-sm leading-7 text-slate-600">
                      {item.description}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-y border-primary-border/50 bg-[linear-gradient(135deg,#f7fffd_0%,#ffffff_48%,#effaf7_100%)] py-24 sm:py-28">
        <div className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-primary/8 blur-3xl" />
        <div className="absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-secondary/8 blur-3xl" />
        <div className="absolute left-0 top-0 h-44 w-56 bg-[radial-gradient(circle,rgba(45,151,139,0.2)_2px,transparent_3px)] bg-[length:28px_28px] opacity-60" />

        <div className="relative mx-auto grid w-full max-w-[1560px] gap-12 px-4 sm:px-6 lg:grid-cols-[0.95fr_72px_1.25fr] lg:items-center lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold tracking-[0.18em] text-primary">
              PROCESS
            </p>
            <h2 className="mt-5 text-4xl font-black leading-tight tracking-[-0.03em] text-slate-950 sm:text-5xl">
              상담부터 마무리 점검까지
              <br className="hidden sm:block" />
              <span className="text-primary">
                체계적인 청소 프로세스
              </span>를 제공합니다.
            </h2>
            <p className="mt-8 max-w-xl text-base leading-8 text-slate-600">
              대주종합청소는 단순 청소가 아닌 공간 특성과 오염 상태를 고려한
              맞춤형 작업을 진행합니다.
            </p>
            <p className="mt-6 max-w-xl text-base leading-8 text-slate-600">
              문의부터 작업 완료까지 고객이 안심할 수 있도록 모든 과정을
              명확하게 안내합니다.
            </p>

            <div className="mt-10 grid overflow-hidden rounded-[24px] border border-white/80 bg-white/90 shadow-[0_24px_70px_rgba(15,23,42,0.08)] sm:grid-cols-4">
              {processHighlights.map((item, index) => {
                const HighlightIcon = item.icon;

                return (
                  <div
                    key={item.title}
                    className={`p-5 text-center ${
                      index > 0
                        ? 'border-t border-slate-200/80 sm:border-t-0 sm:border-l'
                        : ''
                    }`}
                  >
                    <HighlightIcon
                      className="mx-auto h-10 w-10 text-primary"
                      strokeWidth={1.8}
                    />
                    <h3 className="mt-4 text-sm font-bold text-slate-950">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-xs leading-5 text-slate-500">
                      {item.detail}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="relative hidden h-[624px] justify-center lg:flex">
            <div className="absolute inset-y-9 left-1/2 w-px -translate-x-1/2 bg-primary/40" />
            {workflow.map((item, index) => (
              <div
                key={item.step}
                className="absolute left-1/2 flex h-16 w-16 -translate-x-1/2 items-center justify-center rounded-full border-[5px] border-white bg-primary text-2xl font-black text-white shadow-[0_10px_24px_rgba(45,151,139,0.28)]"
                style={{ top: `${index * 26.3 + 5.4}%` }}
              >
                {index + 1}
              </div>
            ))}
          </div>

          <div className="grid gap-8">
            {workflow.map((item, index) => {
              const StepIcon = item.icon;
              const AccentIcon = item.accentIcon;

              return (
                <article
                  key={item.step}
                  className="group relative overflow-hidden rounded-[24px] border border-white/85 bg-white/95 p-6 shadow-[0_18px_46px_rgba(15,23,42,0.08)] sm:min-h-[132px]"
                >
                  <div className="absolute -left-2 top-1/2 hidden h-6 w-6 -translate-y-1/2 rotate-45 border-b border-l border-white/85 bg-white/95 lg:block" />
                  <div className="absolute right-0 inset-y-0 w-[34%] bg-[linear-gradient(90deg,rgba(255,255,255,0)_0%,rgba(45,151,139,0.07)_100%)]" />
                  <AccentIcon
                    className="absolute right-8 top-1/2 hidden h-24 w-24 -translate-y-1/2 text-primary/18 transition duration-500 group-hover:scale-105 sm:block"
                    strokeWidth={1.6}
                  />
                  <div className="relative z-10 flex items-start gap-5">
                    <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-primary/12 text-primary">
                      <StepIcon className="h-10 w-10" strokeWidth={1.8} />
                    </div>
                    <div className="pt-1">
                      <div className="mb-2 flex items-center gap-3 lg:hidden">
                        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-black text-white">
                          {index + 1}
                        </span>
                        <span className="text-xs font-bold tracking-[0.18em] text-primary">
                          STEP
                        </span>
                      </div>
                      <h3 className="text-2xl font-black tracking-[-0.02em] text-slate-950">
                        {item.step}
                      </h3>
                      <p className="mt-3 max-w-md text-sm leading-7 text-slate-600">
                        {item.detail}
                      </p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
