import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  ClipboardCheck,
  Home,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const workStandards = [
  {
    title: "현장 상태를 먼저 확인합니다",
    description:
      "공사 범위와 공간의 상태를 살핀 뒤, 필요한 청소 범위와 우선순위를 안내합니다.",
    icon: ClipboardCheck,
  },
  {
    title: "공간별 오염에 맞춰 작업합니다",
    description:
      "분진, 자재 흔적, 생활 오염처럼 공간마다 다른 상태를 고려해 꼼꼼하게 진행합니다.",
    icon: Sparkles,
  },
  {
    title: "입주 전 마지막까지 점검합니다",
    description:
      "눈에 잘 띄지 않는 구석까지 다시 살피며, 새 공간의 첫날을 준비합니다.",
    icon: ShieldCheck,
  },
];

const serviceAreas = [
  {
    title: "리모델링 후 청소",
    description:
      "공사 뒤 남은 분진과 자재 흔적을 정리해 공간의 완성도를 높입니다.",
  },
  {
    title: "인테리어 후 청소",
    description:
      "새로 손본 공간이 바로 생활을 시작할 수 있도록 세심하게 마무리합니다.",
  },
  {
    title: "입주·이사 청소",
    description:
      "새 공간의 첫 시작이 쾌적하도록 생활 먼지와 잔여 오염을 정리합니다.",
  },
];

const featuredCases = [
  {
    location: "부산 범일풍림아이원",
    type: "리모델링 입주청소",
    detail: "리모델링을 마친 주거 공간의 입주 전 마감 작업",
  },
  {
    location: "센텀파크",
    type: "리모델링 입주청소",
    detail: "공사 후 남은 오염을 공간별로 점검한 현장",
  },
  {
    location: "해운대 아델리스 74평",
    type: "인테리어 청소",
    detail: "넓은 평형의 인테리어 후 입주 준비 현장",
  },
];

const CompanySection = () => {
  return (
    <>
      <section className="relative isolate overflow-hidden border-b border-primary-border/55 bg-page-base">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_13%_14%,rgba(20,184,166,0.17),transparent_28%),radial-gradient(circle_at_88%_82%,rgba(13,148,136,0.13),transparent_24%)]" />
        <div className="relative mx-auto grid min-h-[620px] w-full max-w-[1560px] gap-12 px-4 py-18 sm:px-6 sm:py-24 lg:grid-cols-[0.88fr_1.12fr] lg:items-center lg:px-8">
          <div className="relative z-10 max-w-2xl lg:py-12">
            <p className="inline-flex rounded-full border border-primary-border bg-white/90 px-4 py-1.5 text-sm font-semibold tracking-[0.12em] text-primary shadow-sm">
              ABOUT DAEJU CLEANING
            </p>
            <h1 className="mt-6 text-4xl font-black leading-[1.15] tracking-[-0.05em] text-slate-950 sm:text-5xl lg:text-6xl">
              새롭게 완성된 공간의
              <br />
              <span className="text-primary">마지막 시작</span>을
              <br />
              함께 준비합니다.
            </h1>
            <p className="mt-7 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
              대주종합청소는 리모델링과 인테리어 후 남은 분진과 오염을 세심하게
              정리해, 입주 전 공간을 쾌적하게 준비합니다. 정돈된 과정과 믿음직한
              마무리로 새로운 공간의 첫날을 돕겠습니다.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-bold text-white shadow-[0_14px_26px_rgba(13,148,136,0.25)] transition hover:bg-primary-dark"
              >
                상담 문의하기
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/cases"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3.5 text-sm font-bold text-slate-700 transition hover:border-primary hover:text-primary"
              >
                작업사례 보기
              </Link>
            </div>
          </div>

          <div className="relative min-h-[400px] sm:min-h-[500px] lg:min-h-[560px]">
            <div className="absolute inset-0 overflow-hidden rounded-[34px] border border-white/85 bg-primary/10 shadow-[0_28px_80px_rgba(15,23,42,0.16)]">
              <Image
                src="/images/main/main_intro_background.png"
                alt="대주종합청소 작업자가 유리창을 청소하는 모습"
                fill
                priority
                sizes="(min-width: 1024px) 56vw, 100vw"
                className="object-cover object-[62%_center]"
              />
              <div className="absolute inset-0 bg-linear-to-tr from-slate-950/48 via-slate-950/5 to-transparent" />
            </div>
            <div className="absolute right-4 bottom-4 left-4 rounded-[24px] border border-white/25 bg-slate-950/72 p-5 text-white shadow-xl backdrop-blur-md sm:right-7 sm:bottom-7 sm:left-auto sm:w-[300px]">
              <p className="text-xs font-bold tracking-[0.2em] text-primary-muted">
                DAEJU STANDARD
              </p>
              <p className="mt-3 text-lg font-bold leading-7">
                공간의 상태를 먼저 살피고,
                <br />
                마지막까지 기준 있게 마무리합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1560px] px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
          <div className="max-w-xl">
            <p className="text-sm font-semibold tracking-[0.18em] text-primary">
              OUR STANDARD
            </p>
            <h2 className="mt-5 text-3xl font-black leading-tight tracking-[-0.04em] text-slate-950 sm:text-5xl">
              보이는 곳부터
              <br />
              보이지 않는 곳까지,
              <br />
              기준 있게 마무리합니다.
            </h2>
            <p className="mt-6 text-base leading-8 text-slate-600">
              청소의 완성도는 마지막 확인에서 결정됩니다. 대주종합청소는 공간의
              쓰임과 상태를 고려해, 고객이 편안하게 새 일상을 시작할 수 있도록
              작업합니다.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {workStandards.map((item, index) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="group relative min-h-[260px] overflow-hidden rounded-[26px] border border-slate-200/90 bg-white p-7 shadow-[0_20px_55px_rgba(15,23,42,0.07)]"
                >
                  <span className="text-sm font-black tracking-[0.2em] text-primary/55">
                    0{index + 1}
                  </span>
                  <div className="mt-10 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition duration-300 group-hover:scale-105 group-hover:bg-primary group-hover:text-white">
                    <Icon className="h-7 w-7" strokeWidth={1.8} />
                  </div>
                  <h3 className="mt-7 text-xl font-black tracking-[-0.03em] text-slate-950">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {item.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-y border-primary-border/45 bg-[linear-gradient(135deg,#f7fffd_0%,#ffffff_48%,#ecfdf8_100%)] py-20 sm:py-24">
        <div className="absolute -right-24 top-6 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
        <div className="relative mx-auto w-full max-w-[1560px] px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold tracking-[0.18em] text-primary">
              SPECIALTY
            </p>
            <h2 className="mt-5 text-3xl font-black tracking-[-0.04em] text-slate-950 sm:text-5xl">
              새 공간의 시작을 준비하는 청소
            </h2>
            <p className="mt-6 text-base leading-8 text-slate-600">
              리모델링과 인테리어 뒤에는 눈에 잘 보이지 않는 분진과 잔여 오염이
              남습니다. 대주종합청소는 입주 전 필요한 마지막 정리를 돕습니다.
            </p>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {serviceAreas.map((item) => (
              <article
                key={item.title}
                className="rounded-[26px] border border-white/90 bg-white/90 p-7 shadow-[0_18px_50px_rgba(15,23,42,0.07)] backdrop-blur-sm"
              >
                <Home className="h-9 w-9 text-primary" strokeWidth={1.7} />
                <h3 className="mt-6 text-2xl font-black tracking-[-0.03em] text-slate-950">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1560px] px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <div className="flex flex-col gap-5 sm:max-w-2xl">
          <p className="text-sm font-semibold tracking-[0.18em] text-primary">
            FEATURED CASES
          </p>
          <h2 className="text-3xl font-black tracking-[-0.04em] text-slate-950 sm:text-5xl">
            실제 현장으로 보여드리는
            <br />
            대주종합청소의 기록
          </h2>
          <p className="text-base leading-8 text-slate-600">
            리모델링과 인테리어 후 입주를 준비한 부산 지역의 현장 기록입니다.
            공간마다 다른 상태를 살피며 차분하게 마무리해 왔습니다.
          </p>
        </div>

        <div className="mt-11 grid gap-5 lg:grid-cols-3">
          {featuredCases.map((item, index) => (
            <article
              key={item.location}
              className="group relative overflow-hidden rounded-[26px] border border-slate-200 bg-white p-7 shadow-[0_18px_50px_rgba(15,23,42,0.07)]"
            >
              <div className="absolute inset-x-0 top-0 h-2 bg-linear-to-r from-primary via-secondary to-primary-muted" />
              <p className="mt-5 text-xs font-black tracking-[0.2em] text-primary">
                CASE 0{index + 1}
              </p>
              <h3 className="mt-4 text-2xl font-black tracking-[-0.03em] text-slate-950">
                {item.location}
              </h3>
              <p className="mt-4 inline-flex rounded-full bg-primary-soft px-3 py-1.5 text-xs font-bold text-primary-dark">
                {item.type}
              </p>
              <p className="mt-5 text-sm leading-7 text-slate-600">{item.detail}</p>
              <Link
                href="/cases"
                className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-slate-700 transition group-hover:text-primary"
              >
                작업사례 보기
                <ArrowRight className="h-4 w-4" />
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1560px] px-4 pb-20 sm:px-6 sm:pb-24 lg:px-8">
        <div className="overflow-hidden rounded-[32px] bg-linear-to-br from-slate-950 via-primary-dark to-primary px-7 py-10 text-white shadow-[0_26px_75px_rgba(15,23,42,0.2)] sm:px-10 sm:py-14">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-sm font-semibold tracking-[0.18em] text-primary-muted">
                CONTACT DAEJU
              </p>
              <h2 className="mt-4 text-3xl font-black tracking-[-0.04em] sm:text-5xl">
                입주 전, 공간 상태와 일정에 맞춰
                <br className="hidden sm:block" /> 상담해 드립니다.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-white/78">
                편한 방식으로 문의를 남겨주시면 필요한 청소 범위와 진행 방향을
                안내해 드리겠습니다.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-primary-dark transition hover:bg-primary-soft"
            >
              상담 문의하기
              <CheckCircle2 className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default CompanySection;
