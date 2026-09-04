"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const nav = [
  { href: "/", label: "Overview", hint: "Home" },
  { href: "/agentes", label: "Agentes", hint: "Roles" },
  { href: "/aprobaciones", label: "Aprobaciones", hint: "GO · ESPERA · KILL" },
  { href: "/know-how", label: "Know-how", hint: "Versionado" },
  { href: "/listening", label: "Listening", hint: "Social stub" },
  { href: "/conectores", label: "Conectores", hint: "Integraciones" },
];

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="flex min-h-screen bg-slate-100 text-slate-900">
      <aside className="flex w-60 shrink-0 flex-col border-r border-slate-800 bg-slate-950 text-slate-100">
        <div className="border-b border-slate-800 px-4 py-4">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-indigo-500 text-xs font-bold text-white">
              S1
            </div>
            <div>
              <p className="text-sm font-semibold leading-tight">Spark101</p>
              <p className="text-[11px] text-slate-400">Agent Ops Stack</p>
            </div>
          </div>
          <span className="mt-3 inline-flex rounded-full bg-indigo-500/15 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-indigo-300 ring-1 ring-inset ring-indigo-400/30">
            Bosquejo MVP
          </span>
        </div>
        <nav className="flex-1 space-y-0.5 px-2 py-3">
          {nav.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`block rounded-md px-3 py-2 transition-colors ${
                  active
                    ? "bg-indigo-500/20 text-white"
                    : "text-slate-300 hover:bg-slate-900 hover:text-white"
                }`}
              >
                <span className="block text-sm font-medium">{item.label}</span>
                <span className="block text-[11px] text-slate-500">
                  {item.hint}
                </span>
              </Link>
            );
          })}
        </nav>
        <div className="border-t border-slate-800 px-4 py-3 text-[11px] text-slate-500">
          Demo Spark101 · ES AR/LatAm
        </div>
      </aside>
      <main className="min-w-0 flex-1 px-6 py-6">{children}</main>
    </div>
  );
}
