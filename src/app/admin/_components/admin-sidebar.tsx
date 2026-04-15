'use client';

import Link from 'next/link';
import {usePathname} from 'next/navigation';

const menuItems = [
  {label: '메인', href: '/admin', exact: true},
  {label: '회사소개', href: '/admin/company'},
  {label: '작업사례', href: '/admin/cases'},
  {label: '기타', href: '/admin/etc'},
];

export function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-full rounded-[28px] border border-slate-200 bg-white p-5 shadow-[0_18px_50px_rgba(37,99,235,0.08)] lg:sticky lg:top-28 lg:w-[270px] lg:self-start">
      <p className="text-xs font-bold tracking-[0.24em] text-primary">
        ADMIN MENU
      </p>
      <h2 className="mt-3 text-2xl font-black tracking-[-0.03em] text-slate-950">
        관리자 패널
      </h2>
      <p className="mt-3 text-sm leading-7 text-slate-600">
        사이트 본문 수정과 문의 관리에 필요한 메뉴를 여기서 이동합니다.
      </p>

      <nav aria-label="관리자 메뉴" className="mt-8">
        <ul className="grid gap-2">
          {menuItems.map(item => {
            const isActive = item.exact
              ? pathname === item.href
              : pathname.startsWith(item.href);

            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`block rounded-2xl px-4 py-3 text-sm font-semibold transition-colors duration-200 ${
                    isActive
                      ? 'bg-primary text-white shadow-[0_14px_28px_rgba(30,58,138,0.2)]'
                      : 'bg-slate-50 text-slate-700 hover:bg-primary-soft hover:text-primary'
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}
