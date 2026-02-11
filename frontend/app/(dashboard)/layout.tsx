import type { ReactNode } from 'react';

import { Header } from '@/components/layout/Header';
import { Sidebar } from '@/components/layout/Sidebar';

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-50">
      <Header />

      <div className="flex flex-col md:flex-row">
        <Sidebar />

        <main className="flex-1 p-6">
          <div className="mx-auto w-full max-w-5xl rounded-lg border bg-white p-6 shadow-sm">{children}</div>
        </main>
      </div>
    </div>
  );
}
