import Link from 'next/link';

const PhoneIcon = () => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    className="h-7 w-7"
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2.3"
  >
    <path d="M22 16.92v2.12a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 3.3 2 2 0 0 1 4.11 1.1h2.13a2 2 0 0 1 2 1.72c.13 1 .36 1.98.7 2.92a2 2 0 0 1-.45 2.11L7.6 8.74a16 16 0 0 0 7.66 7.66l.89-.89a2 2 0 0 1 2.11-.45c.94.34 1.92.57 2.92.7A2 2 0 0 1 22 16.92Z" />
  </svg>
);

const KakaoIcon = () => (
  <svg aria-hidden="true" viewBox="0 0 64 64" className="h-9 w-9">
    <path
      fill="currentColor"
      d="M32 13C18.75 13 8 21.34 8 31.62c0 6.6 4.43 12.4 11.1 15.7l-2.08 7.5a1.2 1.2 0 0 0 1.82 1.3l9.1-6.08c1.32.13 2.67.2 4.06.2 13.25 0 24-8.34 24-18.62S45.25 13 32 13Z"
    />
    <path
      fill="#fee500"
      d="M22.55 33.95h-2.22v-8.1h-2.97v-1.9h8.17v1.9h-2.98v8.1Zm8.63 0-.62-1.92h-3.42l-.62 1.92h-2.28l3.48-10h2.34l3.48 10h-2.36Zm-3.45-3.78h2.24l-1.12-3.48-1.12 3.48Zm7.05 3.78v-10h2.23v8.1h4.05v1.9h-6.28Zm8.01 0v-10h2.22v4.17l3.32-4.17h2.62l-3.58 4.42 3.82 5.58h-2.68l-2.63-3.9-.87 1.04v2.86h-2.22Z"
    />
  </svg>
);

const ctaItems = [
  {
    label: '전화 문의',
    href: 'tel:010-1234-5678',
    icon: <PhoneIcon />,
    className:
      'bg-primary text-white shadow-[0_18px_38px_rgba(13,148,136,0.28)] hover:bg-primary-dark',
  },
  {
    label: '카카오톡 상담',
    href: 'https://open.kakao.com/',
    icon: <KakaoIcon />,
    className:
      'bg-kakao text-slate-950 shadow-[0_18px_38px_rgba(15,23,42,0.16)] hover:bg-kakao-hover',
  },
];

const FloatingCta = () => {
  return (
    <div className="pointer-events-none fixed right-4 bottom-4 z-50 flex flex-col gap-3 sm:right-6 sm:bottom-6">
      {ctaItems.map(item => (
        <Link
          key={item.label}
          href={item.href}
          target={item.href.startsWith('http') ? '_blank' : undefined}
          rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
          aria-label={item.label}
          title={item.label}
          className={`pointer-events-auto flex h-16 w-16 items-center justify-center rounded-full transition-transform duration-200 hover:-translate-y-0.5 focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-primary-border sm:h-[68px] sm:w-[68px] ${item.className}`}
        >
          {item.icon}
        </Link>
      ))}
    </div>
  );
};

export default FloatingCta;
