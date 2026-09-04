"use client";

import { useState } from "react";
import { AppShell } from "@/components/AppShell";
import { knowHow } from "@/lib/data";

export default function KnowHowPage() {
  const [active, setActive] = useState(knowHow[0].id);
  const current = knowHow.find((k) => k.id === active) ?? knowHow[0];

  return (
    <AppShell path="/know-how">
      <h1 className="text-2xl font-semibold tracking-tight">Know-how versionado</h1>
      <p className="mt-1 text-sm text-slate-500">MD / reglas como fuente de verdad. Preview stub.</p>
      <div className="mt-6 grid gap-4 md:grid-cols-5">
        <div className="md:col-span-2 space-y-2">
          {knowHow.map((k) => (
            <button
              key={k.id}
              type="button"
              onClick={() => setActive(k.id)}
              className={`w-full rounded-lg border px-3 py-3 text-left text-sm ${active === k.id ? "border-brand-500 bg-brand-50" : "border-slate-200 bg-white hover:bg-slate-50"}`}
            >
              <div className="font-medium text-slate-900">{k.title}</div>
              <div className="text-xs text-slate-500">{k.slug}@{k.version}</div>
            </button>
          ))}
        </div>
        <div className="md:col-span-3 rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="text-xs font-medium text-brand-600">{current.slug}@{current.version}</div>
          <pre className="mt-3 whitespace-pre-wrap font-sans text-sm leading-relaxed text-slate-700">{current.body}</pre>
        </div>
      </div>
    </AppShell>
  );
}
