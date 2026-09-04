import { AppShell } from "@/components/AppShell";
import { agents } from "@/lib/data";

export default function AgentesPage() {
  return (
    <AppShell path="/agentes">
      <h1 className="text-2xl font-semibold tracking-tight">Agentes / roles</h1>
      <p className="mt-1 text-sm text-slate-500">Roles del stack de marketing. Algunos son stub; el bosquejo muestra el mapa.</p>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {agents.map((a) => (
          <div key={a.id} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <h2 className="font-semibold text-slate-900">{a.name}</h2>
              <span className={`rounded-full px-2 py-0.5 text-[11px] font-medium ring-1 ${a.status === "activo" ? "bg-emerald-50 text-emerald-800 ring-emerald-200" : "bg-amber-50 text-amber-800 ring-amber-200"}`}>{a.status === "en_pausa" ? "en espera" : a.status}</span>
            </div>
            <p className="mt-2 text-xs text-slate-500">{a.role}</p>
            <p className="mt-3 text-sm text-slate-600"><span className="font-medium text-slate-700">Última acción: </span>{a.last}</p>
          </div>
        ))}
      </div>
    </AppShell>
  );
}
