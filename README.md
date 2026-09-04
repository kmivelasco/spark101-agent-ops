# Spark101 Agent Ops Stack — Bosquejo MVP

Dashboard de marketing-ops (App Router + TypeScript + Tailwind) para demos Spark101.

UI en español AR/LatAm. Datos de ejemplo **solo Spark101**. Sin Lorem/Acme ni marcas ajenas al demo.

## Bosquejo vs template futuro

| | **Este repo (bosquejo)** | **Template futuro** |
| --- | --- | --- |
| Propósito | Sketch visual demo-ready | Producto / starter reutilizable |
| Datos | Seed estático en `lib/data.ts` | API / CRM reales |
| Aprobaciones | Estado React local (GO / ESPERA / KILL) | Persistencia + auditoría |
| Listening | Stub + slot *Scripts de Camila (próximo)* | Ingesta social real |
| Conectores | Cards de estado | OAuth / webhooks |
| Badge | **Bosquejo MVP** | Release / versionado de producto |

Usa este proyecto para caminar la UI en reuniones. El template futuro deberia partir de aca, no al reves.

## Stack

- Next.js App Router (TypeScript)
- Tailwind CSS
- Sin `src/` — alias `@/*`
- Componentes Tailwind propios (sin shadcn CLI)

## Rutas

- `/` — Overview + KPIs
- `/agentes` — Contenido, Nurturing, Campañas, Social listening
- `/aprobaciones` — Cola interactiva GO / ESPERA / KILL
- `/know-how` — tono-marca@1.2, playbook-nurturing@0.4, gates-aprobacion@1.0
- `/listening` — menciones fake + slot Scripts de Camila
- `/conectores` — HubSpot, Apollo, WhatsApp, OpenRouter LLM

## Correr en local

```bash
cd /workspace/spark101-agent-ops
npm install
npm run dev
```

Abri http://localhost:3000

### Build de produccion

```bash
npm run build
npm start
```

## Notas de demo

- Las decisiones de aprobacion viven en el cliente: refresh = vuelve al seed.
- Know-how muestra el markdown del documento seleccionado.
- Visual: slate + acento indigo, UI densa de ops.

## Marca

**Spark101 Agent Ops Stack** · badge **Bosquejo MVP**
