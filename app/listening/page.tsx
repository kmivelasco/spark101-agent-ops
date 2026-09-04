import { AppShell } from "@/components/AppShell";
import { listeningFeed } from "@/lib/data";

export default function ListeningPage() {
  return (
    <AppShell>
      <h1 className="text-xl font-semibold tracking-tight">Social listening</h1>
      <p className="mt-1 text-sm text-slate-500">
        Stub de menciones Spark101 + slot Scripts de Camila
      </p>

      <div className="mt-5 rounded-lg border border-dashed border-indigo-300 bg-indigo-50/60 p-4">
        <p className="text-[11px] font-semibold uppercase tracking-wider text-indigo-600">
          Slot reservado
        </p>
        <h2 className="mt-1 text-base font-semibold text-indigo-950">
          Scripts de Camila (próximo)
        </h2>
        <p className="mt-1 text-sm text-indigo-800/80">
          Acá va a vivir el feed de scripts y respuestas sugeridas. Por ahora es
          un placeholder del bosquejo MVP.
        </p>
      </div>

      <ul className="mt-4 space-y-3">
        {listeningFeed.map((m) => (
          <li
            key={m.id}
            className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm"
          >
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded bg-slate-900 px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white">
                {m.source}
              </span>
              <span
                className={`rounded-md px-2 py-0.5 text-[10px] font-semibold uppercase ring-1 ${
                  m.sentiment === "positivo"
                    ? "bg-emerald-50 text-emerald-700 ring-emerald-200"
                    : "bg-slate-100 text-slate-600 ring-slate-200"
                }`}
              >
                {m.sentiment}
              </span>
              <span className="text-[11px] text-slate-500">{m.when}</span>
            </div>
            <p className="mt-2 text-sm text-slate-700">{m.text}</p>
          </li>
        ))}
      </ul>
    </AppShell>
  );
}
