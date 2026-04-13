export default function AdminPage() {
  return (
    <div className="bg-linear-to-b from-page-top via-white to-page-base">
      <section className="mx-auto flex min-h-[calc(100vh-81px)] w-full max-w-7xl items-center px-6 py-20 sm:px-8 lg:px-10">
        <div className="w-full rounded-[28px] border border-slate-200 bg-white p-8 shadow-[0_18px_50px_rgba(37,99,235,0.08)] sm:p-10">
          <p className="text-sm font-semibold tracking-[0.18em] text-primary">
            ADMIN
          </p>
          <h1 className="mt-4 text-3xl font-black tracking-[-0.03em] text-slate-950 sm:text-5xl">
            관리자 페이지
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600">
            이 페이지는 헤더 메뉴에는 노출되지 않고, `/admin` 주소로 직접
            접근했을 때만 확인할 수 있도록 만든 기본 관리자 페이지입니다.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
              <p className="text-xs font-bold tracking-[0.2em] text-primary">
                STATUS
              </p>
              <p className="mt-2 text-lg font-bold text-slate-950">Ready</p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
              <p className="text-xs font-bold tracking-[0.2em] text-primary">
                ROUTE
              </p>
              <p className="mt-2 text-lg font-bold text-slate-950">/admin</p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
              <p className="text-xs font-bold tracking-[0.2em] text-primary">
                ACCESS
              </p>
              <p className="mt-2 text-lg font-bold text-slate-950">
                Direct URL Only
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
