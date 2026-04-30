const contactItems = [
  {
    label: "PHONE",
    value: "010-1234-5678",
  },
  {
    label: "EMAIL",
    value: "hello@daeju-cleaning.kr",
  },
  {
    label: "HOURS",
    value: "평일 09:00 - 18:00",
  },
];

const ContactSection = () => {
  return (
    <section className="mx-auto w-full max-w-7xl px-6 py-24 sm:px-8 lg:px-10">
      <div className="rounded-[28px] bg-linear-to-br from-slate-950 via-primary to-secondary px-8 py-10 text-white shadow-[0_25px_80px_rgba(30,58,138,0.24)] sm:px-10 sm:py-12">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-end">
          <div>
              <p className="text-sm font-semibold tracking-[0.18em] text-primary-muted">
                CONTACT
              </p>
            <h1 className="mt-4 text-3xl font-black tracking-[-0.03em] sm:text-5xl">
              빠르고 간결한 상담으로
              <br />
              문의를 신뢰감 있게 연결합니다.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-primary-soft/90">
              전화, 문자, 이메일, 카카오톡 등 편한 방식으로 문의를 받을 수 있도록
              구성했습니다. 실제 운영 시에는 상담 가능 시간과 응답 채널을 이
              페이지에 집중해서 안내하면 됩니다.
            </p>
          </div>

          <div className="grid gap-4 rounded-2xl bg-white/12 p-6 backdrop-blur">
            {contactItems.map((item) => (
              <div
                key={item.label}
                className="rounded-xl border border-white/15 bg-white/10 p-4"
              >
                <p className="text-xs font-semibold tracking-[0.16em] text-primary-muted">
                  {item.label}
                </p>
                <p className="mt-2 text-lg font-bold">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
