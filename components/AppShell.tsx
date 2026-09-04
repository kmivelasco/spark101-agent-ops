import Link from "next/link";

const nav = [
  { href: "/", label: "Home" },
  { href: "/agentes", label: "Agentes" },
  { href: "/aprobaciones", label: "Aprobaciones" },
  { href: "/know-how", label: "Know-how" },
  { href: "/listening", label: "Listening" },
  { href: "/conectores", label: "Conectores" },
];

export function AppShell({ children, path }: { children: React.ReactNode; path: string }) {
  return (
    <div className="min-h-screen flex bg-slate-50">
      <aside className="w-60 shrink-0 border-r border-slate-200 bg-white px-4 py-6 flex flex-col gap-6">
        <div>
          <div className="text-xs font-semibold uppercase tracking-wider text-brand-600">Spark101</div>
          <div className="text-sm font-semibold text-slate-900">Agent Ops Stack</div>
          <span className="mt-2 inline-flex rounded-full bg-amber-50 px-2 py-0.5 text-[11px] font-medium text-amber-800 ring-1 ring-amber-200">Bosquejo MVP</span>
        </div>
        <nav className="flex flex-col gap-1">
          {nav.map((item) => {
            const active = path === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-md px-3 py-2 text-sm ${active ? "bg-brand-50 text-brand-700 font-medium" : "text-slate-600 hover:bg-slate-100"}`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <p className="mt-auto text-[11px] leading-relaxed text-slate-400">Dogfood marketing ops · gates humanos · know-how versionado</p>
      </aside>
      <main className="flex-1 p-8 max-w-5xl">{children}</main>
    </div>
  );
}
