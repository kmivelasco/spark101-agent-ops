export type ApprovalStatus = "pendiente" | "go" | "espera" | "kill";

export type ApprovalItem = {
  id: string;
  title: string;
  agent: string;
  channel: string;
  preview: string;
  status: ApprovalStatus;
};

export const agents = [
  { id: "contenido", name: "Contenido", status: "activo", last: "Borrador LinkedIn: Equipos Digitales Spark101 — sesión de madurez IA" },
  { id: "nurturing", name: "Nurturing", status: "activo", last: "Secuencia WhatsApp para leads del quiz de madurez IA" },
  { id: "campanas", name: "Campañas", status: "en espera", last: "Propuesta ads LinkedIn workshop Equipos Digitales" },
  { id: "listening", name: "Social listening", status: "activo", last: "3 menciones nuevas sobre Spark101 / formación IA" },
] as const;

export const initialApprovals: ApprovalItem[] = [
  { id: "a1", title: "Post LinkedIn — dogfood Agent Ops", agent: "Contenido", channel: "LinkedIn", preview: "Estamos corriendo nuestro propio marketing con gates GO/ESPERA/KILL...", status: "pendiente" },
  { id: "a2", title: "Nurture WhatsApp — lead quiz", agent: "Nurturing", channel: "WhatsApp", preview: "Hola, vi que completaste el assessment de madurez IA de Spark101...", status: "pendiente" },
  { id: "a3", title: "Email — invitación sesión práctica", agent: "Campañas", channel: "Email", preview: "Te sumamos a la sesión de Equipos Digitales de esta semana...", status: "pendiente" },
  { id: "a4", title: "Carousel — 5 errores al adoptar IA", agent: "Contenido", channel: "Instagram/LinkedIn", preview: "Slide 1: No es falta de herramientas, es falta de sistema...", status: "pendiente" },
  { id: "a5", title: "Reply listening — mención UTN", agent: "Social listening", channel: "LinkedIn", preview: "Gracias por la mención a la cátedra — si querés armamos un office hours...", status: "pendiente" },
];

export const knowHow = [
  { id: "kh1", slug: "tono-marca", version: "1.2", title: "Tono de marca Spark101", body: "# Tono de marca\n\nClaro, cálido, experto sin pedantería.\n- Tutear.\n- Sin fluff de revolución IA.\n- Siempre: sistema, equipo, gates humanos." },
  { id: "kh2", slug: "playbook-nurturing", version: "0.4", title: "Playbook nurturing", body: "# Playbook nurturing\n\n1. Lead entra (quiz / web / WhatsApp)\n2. Mensaje de contexto en <24h\n3. Oferta de sesión o diagnóstico\n4. Nunca publicar sin GO" },
  { id: "kh3", slug: "gates-aprobacion", version: "1.0", title: "Gates GO / ESPERA / KILL", body: "# Gates\n\n- **GO**: salir\n- **ESPERA**: iterar con notas\n- **KILL**: descartar y loguear motivo\n\nNada sale sin gate." },
  { id: "kh4", slug: "social-listening", version: "0.2", title: "Reglas listening", body: "# Listening\n\nPriorizar menciones Spark101, cátedra UTN, Equipos Digitales.\nSlot abierto para scripts de Camila." },
];

export const listeningFeed = [
  { id: "l1", source: "LinkedIn", text: "Mencionan a Spark101 en hilo sobre equipos con agentes.", when: "hace 2h" },
  { id: "l2", source: "X", text: "Consulta sobre la cátedra Innovación y Emprendedorismo (UTN).", when: "hace 5h" },
  { id: "l3", source: "LinkedIn", text: "Comparten el quiz de madurez IA de Spark101.", when: "hace 1d" },
  { id: "l4", source: "Newsletter", text: "Pedido de demo de ops de marketing con approval gates.", when: "hace 2d" },
];

export const connectors = [
  { id: "hubspot", name: "HubSpot", status: "conectado" as const, note: "CRM leads Spark101" },
  { id: "apollo", name: "Apollo", status: "pendiente" as const, note: "Prospección B2B" },
  { id: "whatsapp", name: "WhatsApp", status: "conectado" as const, note: "Nurturing conversacional" },
  { id: "openrouter", name: "OpenRouter / LLM", status: "conectado" as const, note: "Capa LLM-agnóstica" },
];
