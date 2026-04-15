const miscCards = [
  {
    title: '문의 등록',
    description: '관리자가 외부에서 들어온 문의를 수동 등록하거나 메모를 남길 수 있는 영역입니다.',
  },
  {
    title: '상담 상태 관리',
    description: '신규, 진행 중, 완료 같은 상태값을 두고 문의 흐름을 관리할 수 있습니다.',
  },
  {
    title: '기타 운영 메모',
    description: '공지, 비고, 후속 작업 메모처럼 본문 수정 외의 운영 항목을 담는 공간입니다.',
  },
];

export default function AdminEtcPage() {
  return (
    <div className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-[0_18px_50px_rgba(37,99,235,0.08)] sm:p-10">
      <p className="text-sm font-semibold tracking-[0.18em] text-primary">
        ETC ADMIN
      </p>
      <h1 className="mt-4 text-3xl font-black tracking-[-0.03em] text-slate-950 sm:text-5xl">
        기타 관리
      </h1>
      <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600">
        이 메뉴는 문의 등록, 운영 메모, 향후 추가될 관리자 기능들을 담아두는
        확장 영역입니다. 현재는 관리자 목적에 맞는 기본 블록만 준비했습니다.
      </p>

      <div className="mt-10 grid gap-4 xl:grid-cols-3">
        {miscCards.map(card => (
          <article
            key={card.title}
            className="rounded-2xl border border-slate-200 bg-slate-50 p-5"
          >
            <p className="text-xs font-bold tracking-[0.2em] text-primary">
              MISC
            </p>
            <h2 className="mt-3 text-xl font-bold text-slate-950">
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
