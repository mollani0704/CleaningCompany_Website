const caseItems = [
  '사무실 정기 청소 카드',
  '매장 오픈 전후 관리 카드',
  '입주·이사 청소 카드',
  '추가 작업사례 등록 영역',
];

export default function AdminCasesPage() {
  return (
    <div className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-[0_18px_50px_rgba(37,99,235,0.08)] sm:p-10">
      <p className="text-sm font-semibold tracking-[0.18em] text-primary">
        CASES ADMIN
      </p>
      <h1 className="mt-4 text-3xl font-black tracking-[-0.03em] text-slate-950 sm:text-5xl">
        작업사례 관리
      </h1>
      <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600">
        작업사례 페이지에 들어가는 사례 카드, 대표 문구, 추가 등록 항목을
        관리하는 화면입니다. 추후 이미지 업로드나 사례 추가 기능과 연결하기 좋은
        구조로 준비했습니다.
      </p>

      <div className="mt-10 grid gap-4 lg:grid-cols-2">
        {caseItems.map(item => (
          <div
            key={item}
            className="rounded-2xl border border-slate-200 bg-slate-50 p-5"
          >
            <p className="text-xs font-bold tracking-[0.2em] text-primary">
              CASE ITEM
            </p>
            <h2 className="mt-3 text-xl font-bold text-slate-950">{item}</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              사례별 설명, 노출 순서, 이미지 연결 기능 등을 이 영역에 붙일 수
              있습니다.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
