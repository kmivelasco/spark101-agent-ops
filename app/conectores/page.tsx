import { AppShell } from "@/components/AppShell";
import { connectors } from "@/lib/data";

export default function ConectoresPage() {
  return (
    <AppShell path="/conectores">
      <h1 className="text-2xl font-semibold tracking-tight">Conectores</h1>
      <p className="mt-1 text-sm text-slate-500">Cards de estado. En el bosquejo no hay wiring real.</p>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {connectors.map((c) => (
          <div key={c.id} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <h2 className="font-semibold text-slate-900">{c.name}</h2>
              <span className={`rounded-full px-2 py-0.5 text-[11px] font-medium ring-1 ${c.status === "conectado" ? "bg-emerald-50 text-emerald-800 ring-emerald-200" : "bg-slate-100 text-slate-600 ring-slate-200"}`}>{c.status}</span>
            </div>
            <p className="mt-2 text-sm text-slate-600">{c.note}</p>
          </div>
        ))}
      </div>
    </AppShell>
  );
}
