import Link from 'next/link';

type ServicePageSectionProps = {
  eyebrow: string;
  title: string;
  description: string;
  highlights: string[];
  scopes: string[];
};

const ServicePageSection = ({
  description,
  eyebrow,
  highlights,
  scopes,
  title,
}: ServicePageSectionProps) => {
  return (
    <section className="mx-auto w-full max-w-7xl px-6 py-24 sm:px-8 lg:px-10">
      <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
        <div>
          <p className="text-sm font-semibold tracking-[0.18em] text-primary">
            {eyebrow}
          </p>
          <h1 className="mt-4 text-4xl font-black leading-tight tracking-[-0.04em] text-slate-950 sm:text-5xl">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600">
            {description}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="rounded-full bg-primary px-6 py-3 text-center text-sm font-semibold text-white transition-colors duration-200 hover:bg-primary-dark"
            >
              상담 문의하기
            </Link>
            <Link
              href="/cases"
              className="rounded-full border border-slate-200 bg-white px-6 py-3 text-center text-sm font-semibold text-slate-700 transition-colors duration-200 hover:border-primary hover:text-primary"
            >
              작업사례 보기
            </Link>
          </div>
        </div>

        <div className="grid gap-6">
          <div>
            <h2 className="text-2xl font-black tracking-[-0.03em] text-slate-950">
              서비스 핵심
            </h2>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {highlights.map(item => (
                <article
                  key={item}
                  className="rounded-[22px] border border-slate-200 bg-white p-5 shadow-[0_18px_50px_rgba(37,99,235,0.08)]"
                >
                  <p className="text-sm leading-7 text-slate-600">{item}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="rounded-[26px] border border-slate-200 bg-slate-50 p-6">
            <h2 className="text-2xl font-black tracking-[-0.03em] text-slate-950">
              작업 범위
            </h2>
            <ul className="mt-5 grid gap-3">
              {scopes.map(item => (
                <li
                  key={item}
                  className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicePageSection;
