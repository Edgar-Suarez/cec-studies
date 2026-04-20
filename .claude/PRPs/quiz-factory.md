# PRP: Quiz Factory — Pipeline CLI para Generar Quizzes CEC desde PDFs

> **Estado**: PENDIENTE
> **Fecha**: 2026-04-19
> **Proyecto**: CEC Study Trainer
> **Autor**: IA (investigado desde codebase) — requiere aprobacion humana antes de implementar

---

## Objetivo

Construir un skill `quiz-factory` — un pipeline CLI Node.js/TypeScript reproducible que toma los PDFs del Canadian Electrical Code en `/fuentes/`, los chunkea por Regla CEC, los analiza con Claude via `@anthropic-ai/sdk`, valida cada pregunta con Zod, y escribe un archivo `src/data/questions/section-XX.ts` consumible directamente por `src/app/quiz/page.tsx` — **sin generar nada de memoria**, con trazabilidad regla → pregunta, y con una estrategia de errores documentada.

El output final debe ser determinista (temperatura baja, prompts estables), append-safe por defecto, y debe preservar 100% compatibilidad con el componente Quiz existente.

---

## Por Que

| Problema | Solucion |
|----------|----------|
| Solo Section 2 y Section 4 tienen preguntas. Las otras 12 secciones (6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28) estan vacias | Pipeline automatizado que genera preguntas por regla desde el PDF oficial |
| Generar preguntas a mano toma horas por seccion. 150 reglas × 5 min = 12 horas/seccion | Reducir a minutos: extraer → LLM → validar → escribir |
| Preguntas generadas ad-hoc pueden contener errores, omisiones o "alucinaciones" (preguntas sobre reglas inexistentes) | Trazabilidad dura: cada pregunta tiene `ruleReference` que DEBE matchear la regla fuente del chunk |
| Inconsistencia de calidad entre secciones escritas a mano | Un unico prompt sistema reproducible garantiza estilo y calidad homogenea |
| Reconstruir todo si cambia el schema o el formato | CLI con flags (`--overwrite`, `--dry-run`, `--rule-filter`) permite regenerar subsets de forma controlada |

**Valor de negocio**: Desbloquea las 12 secciones pendientes (6 a 28) sin trabajo manual. Usuario final (Edgar) puede estudiar todas las secciones con preguntas de calidad examen CEC. Tiempo estimado ahorrado: ~120 horas de escritura manual.

---

## Qué

### Criterios de Éxito

- [ ] CLI ejecutable con `npx tsx .claude/skills/quiz-factory/scripts/generate-quiz.ts --section N`
- [ ] Procesa 1 seccion del PDF y genera `src/data/questions/section-XX.ts` tipado con el tipo `Question` existente
- [ ] Cada pregunta generada tiene `ruleReference` que matchea la `ruleNumber` del chunk de origen (validacion dura)
- [ ] Cada pregunta cumple schema Zod: 4 opciones, correctAnswer index 0-3, explanation ≥ 20 chars, ruleReference regex `/^Rule \d+-\d+$/`
- [ ] 0 preguntas inventadas fuera de alcance del PDF (validacion cruzada fuerza skip + log)
- [ ] Flags soportados: `--section`, `--all`, `--overwrite`, `--dry-run`, `--model`, `--verbose`, `--rule-filter`
- [ ] Append-safe por defecto: ejecutar sin `--overwrite` preserva preguntas existentes (ej. las 25 preguntas humanas de Section 2 no se pierden)
- [ ] Prompt caching del SDK reduce costo ≥ 80% en llamadas subsiguientes de la misma seccion
- [ ] Errores loggeados a `src/data/questions/_errors/section-XX-errors.jsonl` para revision humana
- [ ] `npm run typecheck` pasa despues de ejecutar el pipeline (archivo generado es TypeScript valido)
- [ ] Componente `src/app/quiz/page.tsx` renderiza las preguntas generadas sin cambios de codigo
- [ ] Plan de review humano: las primeras 10 preguntas generadas de una seccion deben ser aprobadas manualmente antes de generar masivo

### Comportamiento Esperado (Happy Path)

```
Usuario ejecuta:
  npx tsx .claude/skills/quiz-factory/scripts/generate-quiz.ts --section 12 --verbose

1. CLI valida que existe /fuentes/Section 12-Canadian Electrical Code.pdf
2. CLI valida que existe src/data/studyGuide-section12.ts (seccion aprobada)
3. extract-rules.ts corre pdftotext → texto plano → regex chunker
4. Output intermedio: 180 RuleChunks { ruleNumber: "12-000", ..., "12-3036" }
5. llm-analyze.ts itera secuencial por regla:
   - Llamada a Claude Sonnet con system prompt cacheado + user message con contexto de regla
   - tool_use retorna JSON estructurado con 1-3 preguntas
   - validate.ts corre Zod + cross-validation (ruleReference matches, explanation contiene regla, etc.)
   - Si falla: retry hasta 2 veces con error feedback inyectado
   - Si persiste el fallo: log a _errors/ y continua (no abort)
6. write-output.ts consolida preguntas validas:
   - Lee section-12.ts existente (si hay)
   - Merge append-safe (solo anade reglas no cubiertas)
   - Escribe section-12.ts con formato `export const section12Questions: Question[] = [...]`
   - Actualiza src/data/questions/index.ts para importar la nueva seccion
7. Reporte final:
   - X reglas procesadas, Y preguntas generadas, Z reglas en _errors/
   - Costo estimado: $A.BC (tokens in/out con/sin cache)
8. Usuario corre `npm run typecheck` y `npm run dev`, verifica en /quiz
```

---

## Contexto

### Referencias al Codebase Existente

**Tipos (fuente de verdad):**
- `src/lib/types.ts` → `interface Question` — schema actual, 9 campos: `{ id, section, sectionTitle, question, options[], correctAnswer, explanation, difficulty, tags[] }`
- `difficulty` actual: `'easy' | 'medium' | 'hard'`

**Quiz component (consumidor):**
- `src/app/quiz/page.tsx` — lee `questions` del re-export, usa `q.section`, `q.sectionTitle`, `q.question`, `q.options[]`, `q.correctAnswer`, `q.explanation`, `q.difficulty`, `q.tags[]`. No usa `ruleReference` todavia.

**Preguntas existentes (referencia de formato y calidad):**
- `src/data/questions/section-02.ts` — 25 preguntas humanas con estilo CEC: `explanation` cita la regla textual entre comillas y da contexto practico; `tags` incluyen `rule-2-004`, `administrative`, etc.
- `src/data/questions/section-04.ts` — idem
- `src/data/questions/index.ts` — agrega por seccion + expone `allSections`

**API wrapper existente (patron de uso del SDK):**
- `src/app/api/chat/route.ts` — usa `@anthropic-ai/sdk` v0.81.0, `Anthropic({ apiKey })`, `client.messages.create`. Modelo actual hardcodeado: `claude-opus-4-5`.
- `process.env.ANTHROPIC_API_KEY` ya esta en uso.

**Study guides (referente de "secciones aprobadas"):**
- 14 archivos `src/data/studyGuide-section{02,04,06,08,10,12,14,16,18,20,22,24,26,28}.ts`
- Estilo de explicacion y campos `rules` + `fieldScenario` son fuente secundaria de contexto para el LLM.

**PDFs fuente:**
- `/Users/papa/Dev/CEC-studies/fuentes/` (fuera del worktree; path absoluto desde repo root: `fuentes/`)
- 14 PDFs existen: Sections 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28
- Section 30 PDF esta corrupto (bloqueador conocido, ver `memory/project/section-30-blocker.md`)
- Sections 32+ no existen como fuentes.

### Resolucion de Ambiguedad del Alcance

**Usuario dijo "Secciones 1-14".** El CEC no tiene Section 1; las secciones son pares. Interpretacion final propuesta:

**ALCANCE = las 14 secciones con study guide cargado y PDF disponible: 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28.**

Section 30 queda fuera hasta que se re-suba el PDF no corrupto. Sections 32+ fuera por no tener fuente.

**FLAG PARA USUARIO:** confirmar esta interpretacion antes de aprobar el PRP.

### Decision de Schema (Resolucion del Conflicto)

El usuario propuso campos en espanol. El codigo existente esta en ingles. Tres opciones evaluadas:

| Opcion | Pros | Contras |
|--------|------|---------|
| **A — Ingles puro** (sin agregar campos) | Compat inmediata. Sin mapping. | Pierde `ruleReference` — se degrada trazabilidad. |
| **B — Espanol puro** + capa de mapping antes de render | Respeta preferencia linguistica del usuario. | Rompe consistencia con `section-02.ts` existente. Requiere wrapper en Quiz component. Costo de mantenimiento ↑. |
| **C — Hibrido: extender schema ingles con `ruleReference` + `difficulty` derivado** ✅ | Compat directa con Quiz component. Trazabilidad preservada. Consistencia con codigo existente. Cambio de tipo minimo (1 campo nuevo opcional). | `difficulty` actual es `easy\|medium\|hard`, usuario pidio `simple\|complex`. Requiere mapeo. |

**DECISION RECOMENDADA: Opcion C.** Schema final extendido:

```typescript
// src/lib/types.ts (cambio propuesto)
export interface Question {
  id: string
  section: string
  sectionTitle: string
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
  difficulty: 'easy' | 'medium' | 'hard'  // Mantener para compat con Section 2/4 existentes
  tags: string[]
  ruleReference?: string   // NUEVO, opcional para retrocompatibilidad. Formato: "Rule 12-100"
  ruleComplexity?: 'simple' | 'complex'  // NUEVO, opcional. Derivado por el LLM.
}
```

**Mapeo `ruleComplexity → difficulty`** para preguntas generadas por el pipeline:
- `simple` → `'easy'` (si la regla es declarativa corta sin sub-incisos)
- `complex` → `'medium'` o `'hard'` (si la regla tiene tablas, sub-incisos (a)(b)(c), o excepciones). El LLM decide `medium` vs `hard` usando criterio: `medium` = complex con 1 tabla o 1-3 sub-incisos; `hard` = complex con multiples tablas O mas de 3 sub-incisos O excepciones anidadas.

**Flag para usuario:** confirmar Opcion C. Alternativa: crear carpeta paralela `src/data/quizzes/` (separada de `src/data/questions/`) para no modificar el tipo actual — pero esto fragmenta el dataset. Recomendacion fuerte: extender el tipo y mantener una sola carpeta.

### Resolucion: "Complejidad" detectada por el LLM

El usuario pidio 1 pregunta/regla simple, hasta 3/regla compleja. El pipeline detecta complejidad en **dos capas**:

1. **Heuristica pre-LLM en `extract-rules.ts`:**
   - `hasSubsections`: regex match de `\n\s*\([a-z]\)` en el ruleText
   - `hasTable`: match de `Tabl(a|e)\s+\d+` o `Table \d+[A-Z]?`
   - `hasExceptions`: match de `\bException\b` o `\bExcepcion\b`
   - Si 1+ flags true → candidato complejo, sino simple.

2. **Decision final del LLM:** el LLM recibe los flags heuristicos + la regla completa y decide en el tool_use:
   - `ruleComplexity: 'simple'` → 1 pregunta
   - `ruleComplexity: 'complex'` → 2-3 preguntas (cada una apuntando a un aspecto distinto: ej. valor numerico, excepcion, tabla)

El schema del tool_use acepta array de 1-3 preguntas. El LLM autoconfirma la complejidad mirando la regla completa.

---

### Arquitectura Propuesta

```
.claude/skills/quiz-factory/
├── SKILL.md                          # Triggers, uso, ejemplos. Referencia a este PRP.
├── README.md                         # Instrucciones de instalacion (pdftotext, deps, env)
├── scripts/
│   ├── generate-quiz.ts              # CLI entry point: parse flags, orquesta pipeline
│   ├── extract-rules.ts              # PDF → text (via pdftotext CLI) → chunks regex
│   ├── llm-analyze.ts                # Anthropic SDK call + tool_use + prompt caching
│   ├── validate.ts                   # Zod schema + cross-validation + retry loop
│   ├── write-output.ts               # Array<Question> → section-XX.ts + update index.ts
│   ├── cost-tracker.ts               # Acumula input/output tokens y estima $
│   └── types.ts                      # RuleChunk, GeneratedQuestion, PipelineConfig
├── prompts/
│   ├── system.md                     # System prompt cacheable (expert CEC, reglas de calidad)
│   └── schema.json                   # JSON schema del tool_use output
└── tests/
    └── sample-rule-chunks.json       # Fixtures para testing manual de extract-rules
```

### Modelo de Datos Intermedio

```typescript
// extract-rules.ts output
interface RuleChunk {
  ruleNumber: string         // "12-100"
  ruleTitle: string          // "Conductor Size for Underground Installations"
  ruleText: string           // texto completo de la regla incluyendo sub-incisos
  hasTable: boolean          // detectado por regex
  hasExceptions: boolean     // detectado por regex
  hasSubsections: boolean    // detectado por regex (a)(b)(c)
  heuristicComplexity: 'simple' | 'complex'   // agregacion de los 3 flags
  prevRuleNumber?: string    // para contexto en prompt
  nextRuleNumber?: string    // para contexto en prompt
  section: string            // "12"
  sectionTitle: string       // "Wiring Methods" (desde un lookup table)
}

// llm-analyze.ts output (antes de validacion)
interface GeneratedQuestion {
  question: string
  options: [string, string, string, string]
  correctAnswer: 0 | 1 | 2 | 3
  explanation: string
  ruleReference: string       // "Rule 12-100"
  ruleComplexity: 'simple' | 'complex'
  tags: string[]
}

// Zod schema (validate.ts)
const QuestionSchema = z.object({
  question: z.string().min(10).max(500),
  options: z.array(z.string().min(1).max(300)).length(4),
  correctAnswer: z.number().int().min(0).max(3),
  explanation: z.string().min(20).max(2000),
  ruleReference: z.string().regex(/^Rule \d+-\d+$/),
  ruleComplexity: z.enum(['simple', 'complex']),
  tags: z.array(z.string().min(1).max(50)).min(1).max(8),
})
```

### Flujo de Datos (Diagrama ASCII)

```
          /fuentes/Section 12-Canadian Electrical Code.pdf
                          |
                          v
              [pdftotext -layout -nopgbrk]
                          |
                          v
                   Raw text (string)
                          |
                          v
        [regex chunker: /^(\d+-\d+)\s+(.+?)(?=^\d+-\d+\s|\Z)/sm]
                          |
                          v
              Array<RuleChunk>  (~50-250 items)
                          |
                          v
       [for each: anthropic.messages.create]
       [system prompt CACHED via cache_control]
       [user msg: ruleNumber, ruleText, hasTable, hasExceptions, prev/next]
       [tool_use: questions[] schema]
                          |
                          v
          Array<GeneratedQuestion>  (1-3 per rule)
                          |
                          v
          [Zod validate + cross-validation]
                          |
          ┌───────────────┴───────────────┐
          v                               v
    valid (append to output)      invalid (retry 2x → skip → log _errors/)
          |
          v
   [merge with existing section-XX.ts (append-safe unless --overwrite)]
          |
          v
   [write src/data/questions/section-XX.ts]
   [update src/data/questions/index.ts imports]
          |
          v
              Quiz component renders
           (no code changes required)
```

### Decisiones Tecnicas (Tradeoffs Justificados)

**1. `pdftotext` vs `pdf-parse`**

| Criterio | pdftotext (poppler CLI) | pdf-parse (npm) |
|----------|-------------------------|-----------------|
| Fidelidad de layout | Alta con `-layout` | Baja, colapsa tablas |
| Manejo de tablas | Preserva columnas como texto tabulado | Pierde estructura, texto plano |
| Instalacion | `brew install poppler` (macOS) o `apt-get install poppler-utils` | `npm i pdf-parse` puro JS |
| Manejo de PDFs corruptos | Error claro con exit code | Puede colgar o devolver basura silenciosamente |
| Deterministicidad | Alta (binario estable) | Media (depende de version) |

**DECISION: `pdftotext` con flag `-layout -nopgbrk`.** Razon: la calidad de las reglas CEC depende de preservar el texto tabular (Tablas 1, 2, 5A, 5C, 44, D3). `pdf-parse` pierde esto y el LLM generaria preguntas sin contexto tabular. El costo de requerir poppler (ya viene por defecto en muchos Macs, `brew install poppler` en otros) es aceptable.

**Fallback documentado:** si el usuario no tiene poppler, el skill debe:
- Detectar ausencia de `pdftotext` en PATH (via `spawnSync('which', ['pdftotext'])`)
- Error claro con instruccion: "Install poppler: `brew install poppler` (macOS) o `apt-get install poppler-utils` (Linux)"
- NO fallar silenciosamente a pdf-parse.

**2. Modelo: `claude-sonnet-4-6` vs `claude-opus-4-7`**

| Criterio | Sonnet 4.6 | Opus 4.7 |
|----------|------------|----------|
| Costo input | $3/MTok | $15/MTok |
| Costo output | $15/MTok | $75/MTok |
| Calidad para tareas estructuradas cortas | Excelente | Ligeramente superior |
| Latencia | ~2-4s por regla | ~4-8s por regla |
| Contexto necesario (regla individual ~2k tokens) | Sobra | Sobra |

**DECISION: `claude-sonnet-4-6` por default.** La tarea es altamente estructurada (tool_use, schema fijo, regla acotada) — Sonnet da calidad suficiente a 1/5 del costo. Opus 4.7 queda como flag opcional `--model claude-opus-4-7` para secciones criticas o si review humano detecta calidad baja en Sonnet.

**3. `tool_use` vs parseo de texto libre**

| Criterio | tool_use con JSON schema | Parse de texto libre |
|----------|--------------------------|----------------------|
| Robustez formato | Alta (SDK valida) | Baja (regex fragil) |
| Facil de iterar schema | Si | No |
| Soporta prompt caching | Si | Si |
| Tokens output | Ligeramente mas por estructura JSON | Ligeramente menos |

**DECISION: `tool_use` con schema JSON.** El costo marginal de tokens estructurados es despreciable vs la robustez.

**4. Sequential vs Batch**

**DECISION: Sequential por regla.** Razones:
- Retry granular: una regla falla, las otras no se reprocesan
- Logging claro (regla X: ok / regla Y: retry 1 / regla Z: skip)
- Rate limits manejables (1 req a la vez, exponential backoff si 429)
- Prompt caching funciona entre llamadas (system prompt cacheado tras la primera)

Batch rechazado: complejidad adicional sin beneficio claro para 150 reglas en ~15 min.

**5. Prompt caching**

El SDK `@anthropic-ai/sdk` v0.81.0 soporta `cache_control` via:
```ts
system: [{
  type: 'text',
  text: SYSTEM_PROMPT,
  cache_control: { type: 'ephemeral' }
}]
```

El system prompt (~1500 tokens) se cachea. Primera llamada: cache write (25% markup). Llamadas subsiguientes dentro de 5 min: cache read (90% descuento). Para 150 reglas secuenciales rapidas, **esperar ~140+ reglas con cache hit** → ahorro sustancial.

---

### Costo Estimado por Seccion

Asunciones:
- Seccion promedio: 150 reglas
- Input por regla (sin cache): system (~1500) + user (~800) = 2300 tokens
- Output por regla: ~600 tokens (1-3 preguntas con explicacion)
- Con cache despues de regla 1: system cached (read = 10% del precio base)

**Calculo con `claude-sonnet-4-6`:**

| Componente | Tokens | Precio | Costo |
|------------|--------|--------|-------|
| Input sin cache (regla 1) | 2300 | $3/MTok | $0.0069 |
| Cache write (regla 1, system de 1500 tokens) | 1500 | $3.75/MTok (125% del base) | $0.0056 |
| Input con cache (reglas 2-150) | 149 × (800 user + 1500 cache read) = 149 × 2300 | user: $3/MTok + cache read: $0.30/MTok | 149 × (0.0024 + 0.00045) = $0.425 |
| Output (todas las reglas, ~600 tokens) | 150 × 600 = 90,000 | $15/MTok | $1.35 |
| **Total por seccion** | | | **~$1.79** |

**Total 14 secciones:** ~$25 en modo batch completo. Sin prompt caching seria ~$4.5/seccion = $63 total.

**Nota:** precios a la fecha del PRP (2026-04-19). Verificar en https://www.anthropic.com/pricing antes de ejecutar. La tabla de precios se documentara en `.claude/skills/quiz-factory/README.md`.

---

### Estrategia de Manejo de Errores

| Caso | Estrategia | Retries | Destino del log |
|------|------------|---------|-----------------|
| PDF no existe en `/fuentes/` | Abort con mensaje claro listando PDFs disponibles | 0 | stderr + exit 1 |
| PDF corrupto (p.ej. Section 30) | Abort con path + mensaje "PDF corrupto, ver memory/project/section-30-blocker.md" | 0 | stderr + exit 1 |
| `pdftotext` no instalado | Abort con instruccion de instalacion | 0 | stderr + exit 3 |
| Regex de rule boundaries no detecta ningun match | Abort con primer fragmento de texto + instruccion "check regex for this pdf variant" | 0 | stderr + exit 2 |
| Regla individual: LLM responde sin tool_use | Retry con feedback "must use the generate_questions tool" | 1 | _errors/ si persiste |
| Zod validation falla (shape incorrecto) | Retry con error Zod serializado en user message | 2 | _errors/ si persiste |
| `ruleReference` no matchea `ruleNumber` del chunk | Force-fix al ruleNumber correcto + warn log (no retry — el LLM se confundio, la regla es conocida) | 0 | warn log a stdout |
| `explanation` no incluye la `ruleReference` literal | Retry con feedback "explanation must cite the rule" | 1 | _errors/ si persiste |
| `correctAnswer` index invalido (fuera de rango) | Retry con feedback | 1 | _errors/ si persiste |
| Options tiene duplicados | Retry con feedback | 1 | _errors/ si persiste |
| API 429 rate limit | Exponential backoff: 1s, 2s, 4s, 8s | 4 | stderr warn, abort seccion si todos fallan |
| Network error (ETIMEDOUT, ECONNRESET) | Exponential backoff + retry | 3 | stderr warn |
| API 500/503 | Retry con backoff | 3 | stderr warn |
| API 401 (invalid key) | Abort | 0 | stderr + exit 4 |
| Archivo de salida ya existe sin `--overwrite` | Merge append-safe (preservar existentes, solo anadir reglas nuevas) | N/A | stdout info |
| `--overwrite` flag pasado | Sobreescribir archivo | N/A | stdout warn "overwriting existing" |

**Formato del log de errores** (`_errors/section-XX-errors.jsonl`):
```json
{"timestamp":"2026-04-19T10:15:30Z","section":"12","ruleNumber":"12-100","ruleTitle":"...","error":"zod_validation","details":{"path":["options","3"],"message":"Required"},"attempts":2,"rawLLMResponse":"..."}
```

---

### Compatibilidad con `src/app/quiz/page.tsx`

**Schema consumido por el componente (verificado leyendo el archivo):**

```typescript
// Campos usados por quiz/page.tsx:
q.id                 // string — para answers record y keys
q.section            // string — filtro por seccion
q.sectionTitle       // string — display
q.question           // string — texto de la pregunta
q.options            // string[] — botones de opcion
q.correctAnswer      // number — index 0-3
q.explanation        // string — mostrada tras responder
q.difficulty         // 'easy' | 'medium' | 'hard' — badge de color
q.tags               // string[] — mostradas tras responder
```

**Mapping del output del pipeline al schema existente:**

```typescript
// Para cada GeneratedQuestion producida por el LLM, el writer construye:
{
  id: `s${sectionNumber}-${paddedIndex}`,           // ej. "s12-047"
  section: sectionNumber,                           // "12"
  sectionTitle: SECTION_TITLES[sectionNumber],      // lookup estatico
  question: gen.question,
  options: gen.options,                             // garantizado length 4
  correctAnswer: gen.correctAnswer,
  explanation: gen.explanation,
  difficulty: mapComplexityToDifficulty(gen.ruleComplexity, gen.hasTable, gen.subsectionCount),
  tags: [...gen.tags, `rule-${gen.ruleReference.replace('Rule ', '').toLowerCase()}`],
  ruleReference: gen.ruleReference,                 // NUEVO (opcional en el tipo)
  ruleComplexity: gen.ruleComplexity,               // NUEVO (opcional en el tipo)
}
```

**Cambio de tipo requerido:** agregar campos opcionales `ruleReference?: string` y `ruleComplexity?: 'simple' | 'complex'` a `src/lib/types.ts`. Esto es **retrocompatible** — las preguntas existentes de Section 2/4 siguen siendo validas.

**SECTION_TITLES** lookup estatico (propuesto):
```typescript
const SECTION_TITLES: Record<string, string> = {
  '2': 'General Rules',
  '4': 'Conductors',
  '6': 'Services and Service Equipment',
  '8': 'Circuit Loading and Demand Factors',
  '10': 'Grounding and Bonding',
  '12': 'Wiring Methods',
  '14': 'Protection and Control',
  '16': 'Class 1 and Class 2 Circuits',
  '18': 'Hazardous Locations',
  '20': 'Flammable Liquids',
  '22': 'Categories of Equipment',
  '24': 'Patient Care Areas',
  '26': 'Installation of Equipment',
  '28': 'Motors and Generators',
}
```

Ubicacion propuesta: `src/data/questions/section-titles.ts` (compartida entre pipeline y index.ts).

---

### Archivos a Crear / Modificar (Lista Exhaustiva)

**Nuevos archivos:**
- `.claude/skills/quiz-factory/SKILL.md`
- `.claude/skills/quiz-factory/README.md`
- `.claude/skills/quiz-factory/scripts/generate-quiz.ts`
- `.claude/skills/quiz-factory/scripts/extract-rules.ts`
- `.claude/skills/quiz-factory/scripts/llm-analyze.ts`
- `.claude/skills/quiz-factory/scripts/validate.ts`
- `.claude/skills/quiz-factory/scripts/write-output.ts`
- `.claude/skills/quiz-factory/scripts/cost-tracker.ts`
- `.claude/skills/quiz-factory/scripts/types.ts`
- `.claude/skills/quiz-factory/prompts/system.md`
- `.claude/skills/quiz-factory/prompts/schema.json`
- `.claude/skills/quiz-factory/tests/sample-rule-chunks.json`
- `src/data/questions/section-titles.ts` (lookup estatico compartido)
- `src/data/questions/section-06.ts` ... `section-28.ts` (generados por el pipeline, 12 archivos)
- `src/data/questions/_errors/.gitkeep` (para que git trackee el directorio)

**Archivos a modificar:**
- `src/lib/types.ts` → agregar `ruleReference?: string; ruleComplexity?: 'simple' | 'complex'` al interface `Question`
- `src/data/questions/index.ts` → importar las nuevas secciones (actualizado por el pipeline)
- `.gitignore` → agregar `src/data/questions/_errors/*.jsonl` (logs no versionados)

### Dependencias npm a Instalar

**Runtime (deps):**
- Ninguna nueva en runtime — `@anthropic-ai/sdk` ya esta instalado v0.81.0.

**Dev (devDependencies):**
- `zod` latest (validacion) — ~2.5 MB
- `tsx` latest (ejecutor TS para CLI) — ~10 MB
- `@types/node` ya instalado

**System dependencies (no npm):**
- `poppler-utils` (provee `pdftotext`). Instalacion:
  - macOS: `brew install poppler`
  - Linux (Debian/Ubuntu): `sudo apt-get install poppler-utils`
  - Windows: ver https://poppler.freedesktop.org/ (o usar WSL)

### Variables de Entorno Requeridas

**`.env.local` (ya existe como template en `.env.local.example`):**
```
ANTHROPIC_API_KEY=sk-ant-...   # Ya configurado, usado por /tutor
```

**No se requieren variables nuevas.** El skill lee la misma `ANTHROPIC_API_KEY` que el API route existente.

**Seguridad:** `.env.local` ya esta en `.gitignore` (verificado). El skill NUNCA debe loggear el valor de la API key — solo un check booleano de presencia.

---

### Plan de Testing de Calidad

**Fase 1: Validacion de extraccion (dry-run)**
- Ejecutar `--section 12 --dry-run --verbose`
- Verificar output intermedio: numero de reglas detectadas vs la lista del PDF real (comparar manualmente contra el indice del PDF)
- Si detecta <90% de las reglas esperadas → ajustar regex de `extract-rules.ts`

**Fase 2: Calibracion con Section 2 (control)**
- Ejecutar `--section 2 --overwrite` contra el PDF de Section 2
- Comparar las 25 preguntas generadas vs las 25 preguntas humanas existentes
- Criterios subjetivos a evaluar:
  - Calidad lingustica similar o mejor
  - Cobertura similar (cuantas de las 25 reglas referenciadas en las preguntas humanas aparecen tambien en el output generado)
  - Distractor quality (las opciones incorrectas son plausibles pero claramente erradas)
- Si calidad < humana: iterar sobre `prompts/system.md`

**Fase 3: Review humano antes de generar masivo**
- Generar 1 seccion nueva (propuesta: Section 6, la mas corta probablemente)
- **Edgar revisa manualmente las primeras 10 preguntas generadas**
- Si pasa: proceder con `--all`
- Si no pasa: iterar prompt / cambiar modelo a Opus / ajustar reglas de validacion

**Metricas a trackear** (loggeadas por `cost-tracker.ts`):
- % preguntas que pasan validacion Zod en primer intento (target: ≥ 85%)
- % reglas que terminan en `_errors/` (target: ≤ 5%)
- Costo por seccion (target: ≤ $2 con cache)
- Tiempo por seccion (target: ≤ 15 min)
- Duplicados detectados entre preguntas (target: 0% — validacion por seccion)

---

## Blueprint (Assembly Line)

> Solo FASES. Las subtareas se generan al entrar a cada fase via `/bucle-agentico`.

### Fase 1: Setup del skill (esqueleto)
**Objetivo**: Crear la estructura de directorios, `SKILL.md`, `README.md`, instalar deps npm (`zod`, `tsx`), verificar poppler esta instalado en el sistema, modificar `src/lib/types.ts` para agregar los 2 campos opcionales, crear `src/data/questions/section-titles.ts`.
**Validacion**:
- [ ] `npm run typecheck` pasa tras modificar `types.ts`
- [ ] `which pdftotext` retorna un path
- [ ] `ls .claude/skills/quiz-factory/` muestra estructura completa

### Fase 2: Extractor de reglas (PDF → RuleChunk[])
**Objetivo**: Implementar `extract-rules.ts` + `types.ts`. Dado un path a PDF, ejecuta `pdftotext -layout -nopgbrk`, aplica regex chunker, devuelve `Array<RuleChunk>` con flags heuristicos.
**Validacion**:
- [ ] Dry-run contra Section 2 PDF retorna ≥ 40 reglas reconocidas
- [ ] Dry-run contra Section 12 PDF retorna ≥ 150 reglas
- [ ] Reglas detectadas tienen `ruleNumber` que matchea regex `/^\d+-\d+$/`
- [ ] `hasTable`/`hasExceptions`/`hasSubsections` flags se populan correctamente en al menos 3 muestras manuales
- [ ] Fixture `tests/sample-rule-chunks.json` guardado para regresion

### Fase 3: Analizador LLM (RuleChunk → GeneratedQuestion[])
**Objetivo**: Implementar `llm-analyze.ts` + `prompts/system.md` + `prompts/schema.json`. Dado un `RuleChunk`, llama a Anthropic SDK con system prompt cacheado y tool_use, devuelve 1-3 preguntas.
**Validacion**:
- [ ] Llamada contra regla simple (ej. 2-010) retorna exactamente 1 pregunta
- [ ] Llamada contra regla compleja (ej. 12-3036 con tabla) retorna 2-3 preguntas
- [ ] Prompt caching funciona: 2da llamada dentro de 5 min consume `cache_read_input_tokens` > 0
- [ ] Cada pregunta incluye todos los campos del schema
- [ ] Costo por regla loggeado por `cost-tracker.ts`

### Fase 4: Validador Zod + retry (GeneratedQuestion → ValidatedQuestion)
**Objetivo**: Implementar `validate.ts` con Zod schema + cross-validation (ruleReference matches, explanation cita la regla, no duplicados en opciones) + loop de retry con feedback inyectado.
**Validacion**:
- [ ] Fixture con pregunta valida: pasa al primer intento
- [ ] Fixture con pregunta invalida (correctAnswer = 5): retry 1 corrige o skip
- [ ] Fixture con ruleReference incorrecto: force-fix aplica el ruleNumber correcto
- [ ] Tras 2 fallos consecutivos: pregunta va a `_errors/` JSONL
- [ ] Formato del JSONL es legible y contiene raw response del LLM

### Fase 5: Writer + merge append-safe
**Objetivo**: Implementar `write-output.ts`. Toma `Array<ValidatedQuestion>` + merge-strategy (`append` | `overwrite`), escribe `src/data/questions/section-XX.ts` formateado, actualiza `src/data/questions/index.ts`.
**Validacion**:
- [ ] Ejecutar contra Section 2 sin `--overwrite`: las 25 preguntas humanas existentes se preservan
- [ ] `npm run typecheck` pasa despues de escribir un archivo nuevo
- [ ] El archivo generado importa `Question` desde `'../../lib/types'` correctamente
- [ ] El index.ts actualizado incluye el nuevo import en orden alfabetico por seccion

### Fase 6: CLI orchestrator + cost tracker
**Objetivo**: Implementar `generate-quiz.ts` que parsea flags (Node.js built-in `util.parseArgs`), orquesta las fases 2-5, maneja `--section`, `--all`, `--overwrite`, `--dry-run`, `--model`, `--verbose`, `--rule-filter`. Integra `cost-tracker.ts` para reporte final.
**Validacion**:
- [ ] `--help` muestra documentacion de todos los flags
- [ ] `--section 999` falla con error claro (no PDF correspondiente)
- [ ] `--dry-run` corre extract + analyze pero no escribe archivos
- [ ] `--rule-filter 12-100..12-200` procesa solo reglas en ese rango
- [ ] Reporte final imprime: reglas procesadas, preguntas generadas, errores, costo estimado

### Fase 7: Calibracion contra Section 2 (control)
**Objetivo**: Ejecutar pipeline contra Section 2 con `--dry-run` primero, luego con `--overwrite` en una copia de seguridad. Comparar output vs las 25 preguntas humanas. Ajustar `system.md` hasta lograr calidad similar o superior.
**Validacion**:
- [ ] Review humano de 10 preguntas generadas (Edgar aprueba 8+/10)
- [ ] Cobertura: al menos 70% de las 25 reglas de las preguntas humanas aparecen en el output generado
- [ ] No hay alucinaciones (ruleReference siempre matchea una regla real del PDF)

### Fase 8: Ejecucion masiva (secciones 6, 8, 10, 14, 16, 18, 20, 22, 24, 26, 28)
**Objetivo**: Ejecutar `--all --model claude-sonnet-4-6` (excluye Section 30 corrupta). Revisar `_errors/` por seccion y decidir caso por caso.
**Validacion**:
- [ ] 12 archivos `src/data/questions/section-{06..28}.ts` creados
- [ ] `npm run typecheck` pasa
- [ ] `npm run build` pasa
- [ ] `/quiz` renderiza correctamente todas las secciones
- [ ] `% de errores por seccion ≤ 5%`

### Fase 9: Validacion end-to-end via Playwright
**Objetivo**: Usar `/playwright-cli` para iniciar un quiz en cada seccion, responder 3 preguntas de muestra, verificar explanation se muestra.
**Validacion**:
- [ ] Screenshot de `/quiz` muestra 12 secciones nuevas con conteos correctos
- [ ] Modo `exam` funciona con todas las preguntas
- [ ] Modo `weakness` funciona con las nuevas secciones

---

## Anti-Patrones (Prohibiciones Explicitas)

- **NO generar preguntas de memoria.** Si el LLM no puede extraer informacion suficiente del chunk, la regla se skip y se logea. JAMAS inventar una regla o completar con conocimiento previo.
- **NO saltar la validacion Zod** aunque el output "parezca ok". Todos los outputs pasan por `validate.ts` sin excepcion.
- **NO hardcodear el modelo.** Debe venir de CLI flag `--model` con default `claude-sonnet-4-6`.
- **NO eliminar preguntas existentes sin `--overwrite` explicito.** Append-safe por defecto. Las 25 preguntas humanas de Section 2 son sagradas.
- **NO procesar secciones sin study guide** (fuera de alcance — Section 30 y 32+).
- **NO commitear `.env.local`.** Verificar que esta en `.gitignore` antes de ejecutar (ya verificado: linea `.env.local` presente).
- **NO invocar la API en paralelo masivo** — sequential + backoff. Puede disparar rate limit y tumbar la seccion entera.
- **NO fallback silencioso a `pdf-parse` si falta poppler.** Error claro con instruccion de instalacion.
- **NO loggear contenido de la API key** ni completo del response raw sin redactar — solo en `_errors/` para debugging y con truncacion a 500 chars max.
- **NO crear un nuevo tipo `QuizQuestion`** paralelo a `Question`. Reusar el existente con campos opcionales.
- **NO romper retrocompatibilidad** con las preguntas de Section 2 y 4 existentes. Los campos nuevos son opcionales.

---

## Gotchas (Pre-Implementacion)

- [ ] **PDF de Section 30 corrupto** — ya documentado en memory. El pipeline debe detectar PDF corrupto y abort con mensaje claro, NO continuar con basura.
- [ ] **CEC tiene reglas con letras**: ej. `14-012(a)`. El regex chunker debe tratar estas como parte del ruleText, no como reglas nuevas. Regex propuesto solo matchea `\d+-\d+` al inicio de linea, no `\d+-\d+\([a-z]\)`.
- [ ] **Tablas de CEC cruzan paginas en el PDF**. `pdftotext -nopgbrk` ayuda pero algunas tablas (ej. Tabla 2 ampacities) pueden salir mal formadas. El LLM debe ser instruido para marcar reglas como "regla con tabla que el pipeline no extrae confiablemente" y reducir la confianza en preguntas tabulares.
- [ ] **Anthropic SDK `cache_control` requiere version >= 0.27**. La instalada (0.81.0) lo soporta.
- [ ] **Node built-in `util.parseArgs`** requiere Node >= 18.3 (verificar). Si no, usar `yargs`.
- [ ] **`tsx` vs `ts-node`**: `tsx` es mas rapido y soporta ESM nativo. Usar `tsx`.
- [ ] **Limite de tokens por regla**: algunas reglas de CEC son MUY largas (ej. 12-3036 con tablas). Setear `max_tokens: 2048` puede cortar. Consider `max_tokens: 4096` para reglas complejas.
- [ ] **El tipo `Question.difficulty` es `'easy' | 'medium' | 'hard'` en el codigo actual**, no `'simple' | 'complex'`. El mapping `ruleComplexity → difficulty` tiene que ser explicito y documentado.
- [ ] **`src/data/questions/index.ts` lista secciones manualmente**. El writer debe generar el import y agregarlo al array `questions` en el orden correcto (numerico por seccion). Usar AST parser (`ts-morph`) podria ser over-engineering — preferir regex simple dado que el formato es estable.
- [ ] **Prompt caching tiene TTL de 5 minutos.** Si una seccion tarda >5 min entre reglas, cache se invalida. Con ~10s por regla, 150 reglas = ~25 min. Durante esos 25 min, el cache se re-escribe cada 5 min (pequeno costo extra). Aceptable.

---

## Aprendizajes (Self-Annealing — sera poblado durante implementacion)

> Esta seccion CRECE con cada error encontrado durante las fases. Documenta aqui learnings para futuros pipelines similares.

### [vacio — pendiente de implementacion]

---

## Decisiones Pendientes de Confirmacion del Usuario

Antes de aprobar este PRP, confirmar:

1. **Alcance:** las 14 secciones con study guide cargado (2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28) — NO Section 30 (PDF corrupto) ni Section 32+ (no existen). ¿Correcto?
2. **Schema:** Opcion C (hibrido — extender tipo existente con `ruleReference?` y `ruleComplexity?` opcionales). ¿Correcto?
3. **Modelo default:** `claude-sonnet-4-6` para primera ejecucion, opcion de upgrade a Opus via flag. ¿Correcto?
4. **Section 2 como control:** ¿ok sobreescribir las 25 preguntas humanas en una rama separada para calibracion, y luego mergear solo si la calidad es igual o mejor? (alternativa: mantener humanas y solo usar Section 2 para comparacion en dry-run).
5. **Umbral de aprobacion para pasar a masivo:** Edgar aprueba 8/10 preguntas de una seccion de prueba (propuesta: Section 6).

---

*PRP pendiente aprobacion. No se ha modificado codigo.*
