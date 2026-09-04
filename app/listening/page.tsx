import { AppShell } from "@/components/AppShell";
import { listeningFeed } from "@/lib/data";

export default function ListeningPage() {
  return (
    <AppShell path="/listening">
      <h1 className="text-2xl font-semibold tracking-tight">Social listening</h1>
      <p className="mt-1 text-sm text-slate-500">Feed placeholder + espacio para scripts de Camila.</p>
      <div className="mt-6 space-y-3">
        {listeningFeed.map((m) => (
          <div key={m.id} className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
            <div className="flex items-center justify-between text-xs text-slate-500">
              <span className="font-medium text-slate-700">{m.source}</span>
              <span>{m.when}</span>
            </div>
            <p className="mt-2 text-sm text-slate-700">{m.text}</p>
          </div>
        ))}
      </div>
      <div className="mt-6 rounded-xl border border-dashed border-brand-500/40 bg-brand-50/50 p-5">
        <h2 className="text-sm font-semibold text-brand-700">Scripts de Camila (próximo)</h2>
        <p className="mt-1 text-sm text-slate-600">Slot reservado para scrapers / alertas / playbooks propios. Hoy es placeholder a propósito.</p>
      </div>
    </AppShell>
  );
}
