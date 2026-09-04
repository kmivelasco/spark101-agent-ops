import { AppShell } from "@/components/AppShell";
import { connectors } from "@/lib/data";

export default function ConectoresPage() {
  return (
    <AppShell>
      <h1 className="text-xl font-semibold tracking-tight">Conectores</h1>
      <p className="mt-1 text-sm text-slate-500">
        Integraciones del Agent Ops Stack — datos sample Spark101
      </p>
      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        {connectors.map((c) => (
          <article
            key={c.id}
            className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <h2 className="text-base font-semibold text-slate-900">
                  {c.name}
                </h2>
                <p className="mt-1 text-sm text-slate-500">{c.note}</p>
              </div>
              <span
                className={`rounded-md px-2 py-0.5 text-[10px] font-semibold uppercase ring-1 ${
                  c.status === "conectado"
                    ? "bg-emerald-50 text-emerald-700 ring-emerald-200"
                    : "bg-amber-50 text-amber-700 ring-amber-200"
                }`}
              >
                {c.status}
              </span>
            </div>
            <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-slate-100">
              <div
                className={`h-full rounded-full ${
                  c.status === "conectado"
                    ? "w-full bg-indigo-500"
                    : "w-1/3 bg-amber-400"
                }`}
              />
            </div>
          </article>
        ))}
      </div>
    </AppShell>
  );
}
