const dashboardCards = [
  {
    label: '메인 페이지',
    title: '홈 콘텐츠 수정 준비',
    description: '메인 배너, 신뢰 요소, CTA 영역 내용을 관리할 수 있도록 확장할 수 있습니다.',
  },
  {
    label: '문의 관리',
    title: '접수 내용 등록 흐름',
    description: '전화, 카카오톡, 이메일로 들어온 문의를 한곳에서 정리하는 용도로 확장 가능합니다.',
  },
  {
    label: '운영 상태',
    title: '관리자 페이지 기본 구조 완료',
    description: '사이드바는 유지되고 본문만 바뀌는 관리자 전용 레이아웃이 준비되었습니다.',
  },
];

export default function AdminPage() {
  return (
    <div className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-[0_18px_50px_rgba(37,99,235,0.08)] sm:p-10">
      <p className="text-sm font-semibold tracking-[0.18em] text-primary">
        ADMIN HOME
      </p>
      <h1 className="mt-4 text-3xl font-black tracking-[-0.03em] text-slate-950 sm:text-5xl">
        관리자 메인
      </h1>
      <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600">
        이 공간은 대주종합청소 사이트의 내용을 관리하기 위한 시작 화면입니다.
        왼쪽 사이드바를 눌러 회사소개, 작업사례, 기타 관리 화면으로 이동해도
        헤더, 푸터, 사이드바는 그대로 유지되고 오른쪽 본문만 바뀝니다.
      </p>

      <div className="mt-10 grid gap-4 xl:grid-cols-3">
        {dashboardCards.map(card => (
          <article
            key={card.title}
            className="rounded-2xl border border-slate-200 bg-slate-50 p-5"
          >
            <p className="text-xs font-bold tracking-[0.2em] text-primary">
              {card.label}
            </p>
            <h2 className="mt-3 text-xl font-bold tracking-[-0.02em] text-slate-950">
              {card.title}
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              {card.description}
            </p>
          </article>
        ))}
      </div>
    </div>
  );
}
