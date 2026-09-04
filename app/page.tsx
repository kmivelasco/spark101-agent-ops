import { AppShell } from "@/components/AppShell";
import { agents, connectors, initialApprovals, knowHow } from "@/lib/data";

export default function HomePage() {
  const pending = initialApprovals.filter((a) => a.status === "pendiente").length;
  const activeAgents = agents.filter((a) => a.status === "activo").length;
  const connected = connectors.filter((c) => c.status === "conectado").length;
  const latestKh = knowHow[0];

  const cards = [
    { label: "Aprobaciones pendientes", value: String(pending) },
    { label: "Agentes activos", value: `${activeAgents}/${agents.length}` },
    { label: "Último know-how", value: `${latestKh.slug}@${latestKh.version}` },
    { label: "Conectores OK", value: `${connected}/${connectors.length}` },
  ];

  return (
    <AppShell path="/">
      <div className="mb-8">
        <h1 className="text-2xl font-semibold tracking-tight">Tablero Agent Ops</h1>
        <p className="mt-1 text-sm text-slate-500">Ops de marketing Spark101 en un solo lugar. Nada sale sin GO.</p>
      </div>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {cards.map((c) => (
          <div key={c.label} className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
            <div className="text-xs font-medium uppercase tracking-wide text-slate-500">{c.label}</div>
            <div className="mt-2 text-2xl font-semibold text-slate-900">{c.value}</div>
          </div>
        ))}
      </div>
      <div className="mt-8 rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
        <h2 className="text-sm font-semibold text-slate-900">Demo en 2 minutos</h2>
        <ol className="mt-3 list-decimal space-y-1 pl-5 text-sm text-slate-600">
          <li>Revisá agentes y su última acción.</li>
          <li>En Aprobaciones, probá GO / ESPERA / KILL.</li>
          <li>Abrí un know-how versionado.</li>
          <li>Mirál listening + slot de scripts.</li>
          <li>Chequeá conectores (conectado / pendiente).</li>
        </ol>
      </div>
    </AppShell>
  );
}
