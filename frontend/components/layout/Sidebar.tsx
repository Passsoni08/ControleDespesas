import Link from 'next/link';

const menuItems = [
  { href: '/dashboard', label: 'Dashboard' },
  { href: '/despesas', label: 'Despesas' },
  { href: '/categorias', label: 'Categorias' },
];

export function Sidebar() {
  return (
    <aside className="w-full border-b bg-white p-4 md:w-64 md:border-b-0 md:border-r">
      <nav className="space-y-2">
        {menuItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="block rounded-md px-3 py-2 text-sm text-slate-700 transition hover:bg-slate-100"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
