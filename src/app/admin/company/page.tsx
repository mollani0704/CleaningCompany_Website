const companyFields = [
  '회사 소개 문구',
  '브랜드 철학',
  '핵심 강점 카드',
  '상단 헤드라인',
];

export default function AdminCompanyPage() {
  return (
    <div className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-[0_18px_50px_rgba(37,99,235,0.08)] sm:p-10">
      <p className="text-sm font-semibold tracking-[0.18em] text-primary">
        COMPANY ADMIN
      </p>
      <h1 className="mt-4 text-3xl font-black tracking-[-0.03em] text-slate-950 sm:text-5xl">
        회사소개 관리
      </h1>
      <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600">
        회사소개 페이지에 들어가는 제목, 설명, 강점 카드 같은 본문 콘텐츠를
        관리하는 영역입니다. 실제 기능 연결 전까지는 수정 대상 구조를 먼저
        정리해두었습니다.
      </p>

      <div className="mt-10 grid gap-4 lg:grid-cols-2">
        {companyFields.map(field => (
          <div
            key={field}
            className="rounded-2xl border border-slate-200 bg-slate-50 p-5"
          >
            <p className="text-xs font-bold tracking-[0.2em] text-primary">
              EDIT TARGET
            </p>
            <h2 className="mt-3 text-xl font-bold text-slate-950">{field}</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              이후 이 영역에 입력 폼이나 저장 버튼을 붙여 실제 편집 기능으로
              확장할 수 있습니다.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
