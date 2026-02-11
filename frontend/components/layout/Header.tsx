export function Header() {
  return (
    <header className="border-b bg-white/80 px-6 py-4 backdrop-blur">
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-semibold">Controle de Despesas</h1>
        <span className="text-sm text-slate-500">Área autenticada</span>
      </div>
    </header>
  );
}
