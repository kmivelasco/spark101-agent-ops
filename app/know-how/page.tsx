"use client";

import { useState } from "react";
import { AppShell } from "@/components/AppShell";
import { knowHow } from "@/lib/data";

export default function KnowHowPage() {
  const [active, setActive] = useState(knowHow[0].id);
  const current = knowHow.find((k) => k.id === active) ?? knowHow[0];

  return (
    <AppShell>
      <h1 className="text-xl font-semibold tracking-tight">Know-how</h1>
      <p className="mt-1 text-sm text-slate-500">
        Documentos versionados Spark101 — click para vista markdown
      </p>
      <div className="mt-5 grid gap-4 lg:grid-cols-[280px_1fr]">
        <div className="space-y-2">
          {knowHow.map((k) => (
            <button
              key={k.id}
              type="button"
              onClick={() => setActive(k.id)}
              className={`w-full rounded-lg border px-3 py-3 text-left transition ${
                active === k.id
                  ? "border-indigo-300 bg-indigo-50 shadow-sm"
                  : "border-slate-200 bg-white hover:border-slate-300"
              }`}
            >
              <div className="font-mono text-sm font-semibold text-slate-900">
                {k.slug}@{k.version}
              </div>
              <div className="mt-1 text-xs text-slate-500">{k.title}</div>
            </button>
          ))}
        </div>
        <article className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
          <div className="mb-3 flex items-center justify-between border-b border-slate-100 pb-3">
            <div className="font-mono text-sm font-semibold text-indigo-700">
              {current.slug}@{current.version}
            </div>
            <span className="text-[11px] text-slate-500">Vista markdown</span>
          </div>
          <pre className="whitespace-pre-wrap font-sans text-sm leading-relaxed text-slate-700">
            {current.body}
          </pre>
        </article>
      </div>
    </AppShell>
  );
}
