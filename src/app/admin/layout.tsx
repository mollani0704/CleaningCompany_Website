import {AdminSidebar} from './_components/admin-sidebar';

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-linear-to-b from-page-top via-white to-page-base">
      <section className="mx-auto w-full max-w-7xl px-6 py-12 sm:px-8 lg:px-10">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start">
          <AdminSidebar />
          <div className="min-w-0 flex-1">{children}</div>
        </div>
      </section>
    </div>
  );
}
