import { AppShell } from "@/components/AppShell";
import { agents } from "@/lib/data";

export default function AgentesPage() {
  return (
    <AppShell>
      <h1 className="text-xl font-semibold tracking-tight">Agentes</h1>
      <p className="mt-1 text-sm text-slate-500">
        Roles operativos Spark101 — estado y última acción
      </p>
      <div className="mt-5 grid gap-4 md:grid-cols-2">
        {agents.map((a) => (
          <article
            key={a.id}
            className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <h2 className="text-base font-semibold text-slate-900">
                  {a.name}
                </h2>
                <p className="mt-0.5 text-sm text-slate-500">{a.role}</p>
              </div>
              <span
                className={`rounded-md px-2 py-0.5 text-[10px] font-semibold uppercase ring-1 ${
                  a.status === "activo"
                    ? "bg-emerald-50 text-emerald-700 ring-emerald-200"
                    : "bg-amber-50 text-amber-700 ring-amber-200"
                }`}
              >
                {a.status === "en_pausa" ? "En pausa" : a.status}
              </span>
            </div>
            <div className="mt-4 rounded-md border border-slate-100 bg-slate-50 px-3 py-2">
              <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                Última acción Spark101
              </p>
              <p className="mt-1 text-sm text-slate-800">{a.last}</p>
            </div>
          </article>
        ))}
      </div>
    </AppShell>
  );
}
