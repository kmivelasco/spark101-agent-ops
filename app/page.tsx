import Link from "next/link";
import { AppShell } from "@/components/AppShell";
import { agents, connectors, initialApprovals, knowHow } from "@/lib/data";

export default function HomePage() {
  const pending = initialApprovals.filter((a) => a.status === "pendiente").length;
  const activeAgents = agents.filter((a) => a.status === "activo").length;
  const connected = connectors.filter((c) => c.status === "conectado").length;
  const latestKh = knowHow[0];

  const cards = [
    {
      label: "Aprobaciones pendientes",
      value: String(pending),
      hint: "Cola GO / ESPERA / KILL",
    },
    {
      label: "Agentes activos",
      value: `${activeAgents}/${agents.length}`,
      hint: "Roles del stack",
    },
    {
      label: "Último know-how",
      value: `${latestKh.slug}@${latestKh.version}`,
      hint: "tono-marca versionado",
    },
    {
      label: "Salud conectores",
      value: `${connected}/${connectors.length} OK`,
      hint: "HubSpot · Apollo · WhatsApp · OpenRouter",
    },
  ];

  return (
    <AppShell>
      <div className="mb-5 flex items-start justify-between gap-4">
        <div>
          <h1 className="text-xl font-semibold tracking-tight text-slate-900">
            Overview
          </h1>
          <p className="mt-1 text-sm text-slate-500">
            Panel operativo Spark101 — bosquejo MVP demo-ready
          </p>
        </div>
        <span className="shrink-0 rounded-md bg-white px-2 py-1 text-[11px] font-medium text-slate-600 ring-1 ring-slate-200">
          Spark101 sample data
        </span>
      </div>

      <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
        {cards.map((c) => (
          <div
            key={c.label}
            className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm"
          >
            <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">
              {c.label}
            </div>
            <div className="mt-2 text-2xl font-semibold text-slate-900">
              {c.value}
            </div>
            <div className="mt-1 text-xs text-slate-500">{c.hint}</div>
          </div>
        ))}
      </div>

      <div className="mt-6 grid gap-4 lg:grid-cols-2">
        <section className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
          <div className="mb-3 flex items-center justify-between">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              Cola reciente
            </h2>
            <Link
              href="/aprobaciones"
              className="text-xs font-medium text-indigo-600 hover:text-indigo-500"
            >
              Ver cola →
            </Link>
          </div>
          <ul className="divide-y divide-slate-100">
            {initialApprovals.slice(0, 3).map((item) => (
              <li
                key={item.id}
                className="flex items-start justify-between gap-3 py-2.5"
              >
                <div>
                  <p className="text-sm font-medium text-slate-900">
                    {item.title}
                  </p>
                  <p className="text-[11px] text-slate-500">
                    {item.agent} · {item.channel}
                  </p>
                </div>
                <span className="rounded-md bg-amber-50 px-2 py-0.5 text-[10px] font-semibold uppercase text-amber-700 ring-1 ring-amber-200">
                  {item.status}
                </span>
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
          <div className="mb-3 flex items-center justify-between">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              Conectores
            </h2>
            <Link
              href="/conectores"
              className="text-xs font-medium text-indigo-600 hover:text-indigo-500"
            >
              Detalle →
            </Link>
          </div>
          <ul className="space-y-2">
            {connectors.map((c) => (
              <li
                key={c.id}
                className="flex items-center justify-between rounded-md bg-slate-50 px-3 py-2"
              >
                <div>
                  <p className="text-sm font-medium text-slate-900">{c.name}</p>
                  <p className="text-[11px] text-slate-500">{c.note}</p>
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
              </li>
            ))}
          </ul>
        </section>
      </div>
    </AppShell>
  );
}
