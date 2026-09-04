"use client";

import { useMemo, useState } from "react";
import { AppShell } from "@/components/AppShell";
import {
  initialApprovals,
  type ApprovalItem,
  type ApprovalStatus,
} from "@/lib/data";

type Decision = Exclude<ApprovalStatus, "pendiente">;

const actions: Decision[] = ["GO", "ESPERA", "KILL"];

const actionClass: Record<Decision, string> = {
  GO: "bg-emerald-600 hover:bg-emerald-500 text-white",
  ESPERA: "bg-amber-500 hover:bg-amber-400 text-slate-900",
  KILL: "bg-rose-600 hover:bg-rose-500 text-white",
};

const statusClass: Record<ApprovalStatus, string> = {
  pendiente: "bg-slate-100 text-slate-700 ring-slate-200",
  GO: "bg-emerald-50 text-emerald-800 ring-emerald-200",
  ESPERA: "bg-amber-50 text-amber-800 ring-amber-200",
  KILL: "bg-rose-50 text-rose-800 ring-rose-200",
};

const riskClass: Record<"bajo" | "medio" | "alto", string> = {
  bajo: "bg-slate-100 text-slate-600 ring-slate-200",
  medio: "bg-indigo-50 text-indigo-700 ring-indigo-200",
  alto: "bg-rose-50 text-rose-700 ring-rose-200",
};

export default function AprobacionesPage() {
  const [items, setItems] = useState<ApprovalItem[]>(initialApprovals);

  const counts = useMemo(
    () => ({
      pendiente: items.filter((i) => i.status === "pendiente").length,
      GO: items.filter((i) => i.status === "GO").length,
      ESPERA: items.filter((i) => i.status === "ESPERA").length,
      KILL: items.filter((i) => i.status === "KILL").length,
    }),
    [items],
  );

  function setStatus(id: string, status: ApprovalStatus) {
    setItems((prev) =>
      prev.map((i) => (i.id === id ? { ...i, status } : i)),
    );
  }

  return (
    <AppShell>
      <h1 className="text-xl font-semibold tracking-tight">Aprobaciones</h1>
      <p className="mt-1 text-sm text-slate-500">
        Cola interactiva — GO / ESPERA / KILL (estado local en el cliente)
      </p>

      <div className="mt-4 grid grid-cols-2 gap-3 md:grid-cols-4">
        {(
          [
            ["Pendientes", counts.pendiente, "text-amber-700"],
            ["GO", counts.GO, "text-emerald-700"],
            ["ESPERA", counts.ESPERA, "text-amber-600"],
            ["KILL", counts.KILL, "text-rose-700"],
          ] as const
        ).map(([label, value, color]) => (
          <div
            key={label}
            className="rounded-lg border border-slate-200 bg-white px-3 py-2 shadow-sm"
          >
            <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">
              {label}
            </p>
            <p className={`text-xl font-semibold ${color}`}>{value}</p>
          </div>
        ))}
      </div>

      <div className="mt-5 space-y-3">
        {items.map((item) => (
          <div
            key={item.id}
            className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm"
          >
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <h2 className="text-sm font-semibold text-slate-900">
                    {item.title}
                  </h2>
                  <span
                    className={`rounded-md px-2 py-0.5 text-[10px] font-semibold uppercase ring-1 ${riskClass[item.risk]}`}
                  >
                    Riesgo {item.risk}
                  </span>
                  <span
                    className={`rounded-md px-2 py-0.5 text-[10px] font-semibold uppercase ring-1 ${statusClass[item.status]}`}
                  >
                    {item.status}
                  </span>
                </div>
                <p className="mt-1 text-sm text-slate-600">{item.preview}</p>
                <p className="mt-2 text-[11px] text-slate-500">
                  {item.agent} · {item.channel}
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {actions.map((action) => (
                  <button
                    key={action}
                    type="button"
                    onClick={() => setStatus(item.id, action)}
                    className={`rounded-md px-3 py-1.5 text-xs font-bold tracking-wide transition ${actionClass[action]} ${
                      item.status === action
                        ? "ring-2 ring-slate-400 ring-offset-1"
                        : "opacity-90"
                    }`}
                  >
                    {action}
                  </button>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </AppShell>
  );
}
