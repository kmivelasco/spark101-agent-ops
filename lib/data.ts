export type ApprovalStatus = "pendiente" | "GO" | "ESPERA" | "KILL";

export type ApprovalItem = {
  id: string;
  title: string;
  agent: string;
  channel: string;
  preview: string;
  risk: "bajo" | "medio" | "alto";
  status: ApprovalStatus;
};

export const agents = [
  {
    id: "contenido",
    name: "Contenido",
    role: "Redacción y calendario editorial Spark101",
    status: "activo" as const,
    last: "Borrador LinkedIn: pack Agent Ops Stack — dogfood con gates",
  },
  {
    id: "nurturing",
    name: "Nurturing",
    role: "Secuencias HubSpot / WhatsApp para leads Spark101",
    status: "activo" as const,
    last: "Secuencia WhatsApp para leads del quiz de madurez IA",
  },
  {
    id: "campanas",
    name: "Campañas",
    role: "Outbound y ads Spark101",
    status: "en_pausa" as const,
    last: "Propuesta ads LinkedIn workshop Equipos Digitales — en pausa",
  },
  {
    id: "listening",
    name: "Social listening",
    role: "Monitoreo de menciones Spark101",
    status: "activo" as const,
    last: "3 menciones nuevas sobre Spark101 / formación IA",
  },
] as const;

export const initialApprovals: ApprovalItem[] = [
  {
    id: "a1",
    title: "Post LinkedIn — dogfood Agent Ops",
    agent: "Contenido",
    channel: "LinkedIn",
    preview:
      "Estamos corriendo nuestro propio marketing con gates GO/ESPERA/KILL. Badge Bosquejo MVP visible.",
    risk: "medio",
    status: "pendiente",
  },
  {
    id: "a2",
    title: "Nurture WhatsApp — lead quiz",
    agent: "Nurturing",
    channel: "WhatsApp",
    preview:
      "Hola, vi que completaste el assessment de madurez IA de Spark101. ¿Agendamos un slot?",
    risk: "bajo",
    status: "pendiente",
  },
  {
    id: "a3",
    title: "Email — invitación sesión práctica",
    agent: "Campañas",
    channel: "Email",
    preview:
      "Te sumamos a la sesión de Equipos Digitales de esta semana (Spark101).",
    risk: "bajo",
    status: "pendiente",
  },
  {
    id: "a4",
    title: "Carousel — 5 errores al adoptar IA",
    agent: "Contenido",
    channel: "Instagram/LinkedIn",
    preview:
      "Slide 1: No es falta de herramientas, es falta de sistema y gates humanos.",
    risk: "medio",
    status: "pendiente",
  },
  {
    id: "a5",
    title: "Reply listening — mención formación",
    agent: "Social listening",
    channel: "LinkedIn",
    preview:
      "Gracias por la mención a Spark101 — si querés armamos un office hours sobre Agent Ops.",
    risk: "medio",
    status: "pendiente",
  },
  {
    id: "a6",
    title: "Activar audiencia Apollo — founders B2B LatAm",
    agent: "Campañas",
    channel: "Apollo",
    preview:
      "Lista de 180 cuentas. Confirmar apertura y exclusión de clientes actuales Spark101.",
    risk: "alto",
    status: "pendiente",
  },
];

export const knowHow = [
  {
    id: "kh1",
    slug: "tono-marca",
    version: "1.2",
    title: "Tono de marca Spark101",
    body: `# tono-marca@1.2

## Voz
Claro, cálido, experto sin pedantería. Español AR/LatAm (vos).

## Sí
- Sistema, equipo, gates humanos (GO / ESPERA / KILL)
- Nombrar solo datos Spark101 en demos
- Decir "bosquejo / MVP" cuando aplique

## No
- Fluff de "revolución IA"
- Clientes inventados (Lorem / Acme)
- Overclaim de automatización total
`,
  },
  {
    id: "kh2",
    slug: "playbook-nurturing",
    version: "0.4",
    title: "Playbook nurturing",
    body: `# playbook-nurturing@0.4

1. Lead entra (quiz / web / WhatsApp)
2. Mensaje de contexto en <24h
3. Oferta de sesión o diagnóstico Spark101
4. Nunca publicar sin GO en la cola

## Canales
HubSpot email · WhatsApp HSM · soft bump LinkedIn
`,
  },
  {
    id: "kh3",
    slug: "gates-aprobacion",
    version: "1.0",
    title: "Gates GO / ESPERA / KILL",
    body: `# gates-aprobacion@1.0

- **GO**: salir / enviar / activar
- **ESPERA**: congelar e iterar con notas
- **KILL**: descartar y loguear motivo

Nada sale sin gate. Riesgo alto → nunca auto-GO.
`,
  },
];

export const listeningFeed = [
  {
    id: "l1",
    source: "LinkedIn",
    text: "Mencionan a Spark101 en hilo sobre equipos con agentes y gates humanos.",
    when: "hace 2h",
    sentiment: "positivo" as const,
  },
  {
    id: "l2",
    source: "X",
    text: "Consulta sobre formación Spark101 y ops de marketing con approval gates.",
    when: "hace 5h",
    sentiment: "neutro" as const,
  },
  {
    id: "l3",
    source: "LinkedIn",
    text: "Comparten el quiz de madurez IA de Spark101.",
    when: "hace 1d",
    sentiment: "positivo" as const,
  },
  {
    id: "l4",
    source: "Newsletter",
    text: "Pedido de demo de ops de marketing con cola GO/ESPERA/KILL.",
    when: "hace 2d",
    sentiment: "positivo" as const,
  },
  {
    id: "l5",
    source: "X",
    text: "¿Alguien versiona know-how de marca como en el bosquejo Spark101?",
    when: "hace 3d",
    sentiment: "neutro" as const,
  },
];

export const connectors = [
  {
    id: "hubspot",
    name: "HubSpot",
    status: "conectado" as const,
    note: "CRM + secuencias nurturing Spark101",
  },
  {
    id: "apollo",
    name: "Apollo",
    status: "pendiente" as const,
    note: "Prospección B2B — auth pendiente",
  },
  {
    id: "whatsapp",
    name: "WhatsApp",
    status: "conectado" as const,
    note: "Plantillas HSM / nurturing conversacional",
  },
  {
    id: "openrouter",
    name: "OpenRouter LLM",
    status: "conectado" as const,
    note: "Capa LLM para agentes Contenido y Listening",
  },
];
