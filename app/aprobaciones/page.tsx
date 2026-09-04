"use client";

import { useState } from "react";
import { AppShell } from "@/components/AppShell";
import { initialApprovals, type ApprovalItem, type ApprovalStatus } from "@/lib/data";

const badge: Record<ApprovalStatus, string> = {
  pendiente: "bg-slate-100 text-slate-700 ring-slate-200",
  go: "bg-emerald-50 text-emerald-800 ring-emerald-200",
  espera: "bg-amber-50 text-amber-800 ring-amber-200",
  kill: "bg-rose-50 text-rose-800 ring-rose-200",
};

export default function AprobacionesPage() {
  const [items, setItems] = useState<ApprovalItem[]>(initialApprovals);

  function setStatus(id: string, status: ApprovalStatus) {
    setItems((prev) => prev.map((i) => (i.id === id ? { ...i, status } : i)));
  }

  return (
    <AppShell path="/aprobaciones">
      <h1 className="text-2xl font-semibold tracking-tight">Cola de aprobaciones</h1>
      <p className="mt-1 text-sm text-slate-500">HITL: GO sale · ESPERA itera · KILL descarta. Estado local (bosquejo).</p>
      <div className="mt-6 space-y-3">
        {items.map((item) => (
          <div key={item.id} className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <div className="flex items-center gap-2">
                  <h2 className="font-semibold text-slate-900">{item.title}</h2>
                  <span className={`rounded-full px-2 py-0.5 text-[11px] font-medium ring-1 ${badge[item.status]}`}>{item.status.toUpperCase()}</span>
                </div>
                <p className="mt-1 text-xs text-slate-500">{item.agent} · {item.channel}</p>
                <p className="mt-2 text-sm text-slate-600">{item.preview}</p>
              </div>
              <div className="flex gap-2">
                <button type="button" onClick={() => setStatus(item.id, "go")} className="rounded-md bg-emerald-600 px-3 py-1.5 text-xs font-semibold text-white hover:bg-emerald-700">GO</button>
                <button type="button" onClick={() => setStatus(item.id, "espera")} className="rounded-md bg-amber-500 px-3 py-1.5 text-xs font-semibold text-white hover:bg-amber-600">ESPERA</button>
                <button type="button" onClick={() => setStatus(item.id, "kill")} className="rounded-md bg-rose-600 px-3 py-1.5 text-xs font-semibold text-white hover:bg-rose-700">KILL</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </AppShell>
  );
}
