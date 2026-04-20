# PRP-003: Rediseño Global — Fase 2: Adopción Dashboard + Calculators

> **Estado**: COMPLETADO (2026-04-19)
> **Fecha**: 2026-04-19
> **Proyecto**: CEC Study Trainer
> **Scope**: Solo `src/app/page.tsx` y `src/app/calculators/page.tsx`. Todo lo demás queda intacto.
> **Depende de**: PRP-002 Fase 1 (commit `39009a7`) — tokens + primitivos ya existen.

---

## Objetivo

Migrar el **Dashboard** (`src/app/page.tsx`) y los **Calculators** (`src/app/calculators/page.tsx`) al nuevo lenguaje de diseño de Fase 1: reemplazar todos los componentes inline duplicados (`StatCard`, `InputField`, `SelectField` donde aplique, botones sueltos) por los primitivos `Button`/`Card`/`Input` de `@/shared/components/ui`, y sustituir colores hardcoded (`bg-gray-900`, `text-blue-400`, gradientes arbitrarios) por tokens semánticos (`bg-surface-*`, `text-accent`, `text-success`/`warning`/`danger`). El resultado debe verse calm/editorial, preservar pixel-funcionalmente los datos mostrados, y **dejar cero código muerto**.

## Por Qué

| Problema | Solución |
|----------|----------|
| `StatCard` inline en `page.tsx` líneas 9-40 se usa 4 veces en la misma página — duplicación pura, con paletas de color por prop (`blue`/`green`/`yellow`/`purple`) hardcoded | Reemplazar por `<Card elevation="elev-1">` + tipografía del design system. Eliminar la definición inline |
| `InputField` inline en `calculators/page.tsx` líneas 41-80 — reescrito y usado 11 veces en 4 tabs, sin accesibilidad (aria-invalid, aria-describedby), sin mono para números técnicos | Reemplazar por `<Input>` primitivo (ya tiene `label`, `hint`, `unit`, `mono` auto-on para `type="number"`, aria completo) |
| Botones sueltos con clases ad-hoc (`bg-blue-600 hover:bg-blue-500 ... rounded-xl`) inconsistentes entre CTAs del Dashboard, botón "Calculate", tabs | `<Button variant="primary|secondary|ghost" size="md|lg">` unifica altura (48/56dp), focus ring, disabled |
| Colores hex/tailwind arbitrarios (`bg-gray-900`, `text-blue-400`, `from-blue-600/20`, `border-blue-500/30`) rompen el contrato de tokens de Fase 1 | Mapeo sistemático a tokens (`bg-surface-elevated`, `text-accent`, `border-subtle`) |
| Weakness bars y recent-session badges usan `bg-green-500` / `bg-yellow-500` / `bg-red-500` duros | Migrar a tokens semánticos `text-success`/`text-warning`/`text-danger` (los CSS vars ya existen, sólo usarlos) |
| Números técnicos (stats numéricos, amperajes, voltajes, rule numbers, porcentajes) se ven en sans — sin jerarquía técnica | `font-mono` (JetBrains Mono) para todo dato numérico. Linear-style |

**Valor de negocio**: Fase 1 creó los cimientos pero nadie los usa — son código muerto hasta que alguna página los adopte. Fase 2 prueba el sistema en **las dos páginas con mayor densidad de duplicación** (Dashboard: 4× StatCard; Calculators: 11× InputField). Si los primitivos sobreviven estas dos páginas sin extensiones, el sistema es válido y las fases 3+ (quiz, flashcards, study-guide, tutor, nav) pueden replicarlo con confianza. Si revelan gaps (ej. Select primitive faltante), los documentamos antes de dispersarlos.

## Qué

### Criterios de Éxito

- [ ] `src/app/page.tsx`: `StatCard` inline **eliminado** (definición borrada, no sólo desusada). 4 usos migrados a `<Card elevation="elev-1">`.
- [ ] `src/app/page.tsx`: los 3 CTA links (Start Quiz, Review Flashcards, CEC Calculators) migrados a `<Button>` envuelto en `<Link>` (o `<Link>` con clases del Button — decidir en implementación). Sin gradientes arbitrarios: fondo uniforme con token.
- [ ] `src/app/page.tsx`: Streak badge, Weakness card, Recent Sessions card, Question Bank Coverage card → todos usan `<Card>` + tokens. Sin `bg-gray-900`/`border-gray-700` sueltos.
- [ ] `src/app/page.tsx`: iconos SVG inline preservan geometría, pero el contenedor usa token de color (`bg-surface-elevated-2` o similar) y el stroke `currentColor`.
- [ ] `src/app/page.tsx`: números importantes (stat values, streak count, accuracy %, dueCount, score fraction) en `font-mono`.
- [ ] `src/app/page.tsx`: weakness bars usan `bg-success`/`bg-warning`/`bg-danger` (no `bg-green-500` etc.). Recent-session badges igual.
- [ ] `src/app/calculators/page.tsx`: `InputField` inline **eliminado**. Los 11 usos migrados a `<Input>` (type=number → mono automático; `unit` y `hint` aprovechados).
- [ ] `src/app/calculators/page.tsx`: `TabButton` inline **eliminado**. Los 4 tabs migrados a `<Button variant="ghost|primary" size="sm">` con estilo active/inactive usando variants (no estilos ad-hoc).
- [ ] `src/app/calculators/page.tsx`: botones "Calculate …" migrados a `<Button variant="primary" size="lg">` full-width (con `className="w-full"`).
- [ ] `src/app/calculators/page.tsx`: `ResultRow` inline — evaluado caso a caso. Si se puede expresar como `<Card elevation="elev-1" padding="sm">` + flexbox interno, se migra y se borra. Si requiere variante highlight no expresable con el primitivo, se deja pero se documenta en Gotchas para Fase futura.
- [ ] `src/app/calculators/page.tsx`: `SelectField` inline **NO se toca** (scope-out documentado). Se mantiene visualmente consistente con los `<Input>` migrando sólo sus contenedores/labels a tokens (`text-secondary`, `bg-surface-base`, `border-subtle`), pero la definición del componente permanece hasta Fase 3 cuando se cree `<Select>`.
- [ ] Todos los `bg-gray-*`, `text-gray-*`, `border-gray-*`, `bg-blue-*`, `text-blue-*`, `from-*-*/*` y similares en ambos archivos → **cero ocurrencias** (salvo los que vengan desde `SelectField` pendiente).
- [ ] Lógica de negocio intacta: funciones `calculateResidentialDemand`, `calculateVoltageDrop`, `calculateCorrectedAmpacity`, `calculateMotorProtection`, `loadProgress`, `getWeaknesses`, `getDueFlashcards`, `formatTime`, `formatDate` — sin tocar.
- [ ] Estados de useState/useEffect intactos. Flows de cálculo/render idénticos.
- [ ] Ningún archivo fuera de `src/app/page.tsx` y `src/app/calculators/page.tsx` modificado. Verificado por `git diff --stat`.
- [ ] `npm run typecheck` pasa.
- [ ] `npm run build` exitoso.
- [ ] `npm run lint` sin nuevos warnings.
- [ ] Playwright screenshot del Dashboard y cada uno de los 4 tabs de Calculators confirma que se ve limpio, sin rotos visuales.

### Comportamiento Esperado

**Dashboard** (ruta `/`):
1. Usuario entra → ve header, streak badge, 4 stat cards, weakness chart, recent sessions, 3 CTA links, question-bank coverage.
2. Todos los datos que aparecen hoy siguen apareciendo (mismos números, mismas barras, mismas fechas formateadas).
3. Visualmente: fondo `bg-surface-base`, cards `bg-surface-elevated` con border `border-subtle`, texto body en `text-primary`, labels en `text-secondary`, captions (fecha/duración) en `text-muted`. Números grandes en `font-mono`. Accent azul único (`text-accent` / `bg-accent`) sin paleta arcoiris.
4. CTAs: los 3 links tienen idéntica estructura visual (un `<Card>` interactivo o un `<Button>` block), no 3 fondos distintos (blue/purple/green). Si diferenciación es necesaria, sólo con el icono a la izquierda (color-decorado sutil).

**Calculators** (ruta `/calculators`):
1. Usuario abre → 4 tabs visibles (Demand / Vdrop / Ampacity / Motor).
2. Tab activo: `<Button variant="primary" size="sm">`. Inactivos: `<Button variant="ghost" size="sm">`. Contenedor de tabs: `<Card elevation="elev-1" padding="sm">`.
3. Cada tab tiene el mismo patrón: panel izquierdo con inputs, botón "Calculate" full-width al final; panel derecho con resultados. Al hacer clic en Calculate, se renderizan los resultados (misma lógica).
4. Inputs: labels `text-secondary`, números tecleados en `font-mono`, unidades a la derecha (`unit` prop del primitivo). Hints `text-muted`.
5. Toggle switches (Range/Dryer/HVAC) en Residential Demand: migrados a `<Button variant="ghost" size="sm">` con data-state, o (preferible) preservados como custom toggles pero usando tokens `bg-accent` / `bg-surface-elevated` en lugar de `bg-blue-600` / `bg-gray-700`. Decisión final en implementación; si es trivial, se migra a Button, si no, se re-tokeniza.
6. Rule chips ("CEC Rule 8-200", "CEC Rule 8-102", etc.): `<Card elevation="elev-1" padding="sm">` con borde `border-subtle` y `text-accent` en el título.
7. Validation banners ("✓ Within Code" / "✗ Exceeds 3% Limit"): fondo `bg-surface-elevated` con `text-success` o `text-danger`.
8. Voltage-drop gauge: gradiente preservado **sólo porque es decoración semántica** (representa rango seguro→peligroso). Alternativa: migrar a 3 segmentos de color semántico (`bg-success`/`bg-warning`/`bg-danger`) sin gradiente. Preferir esta alternativa; si es pixel-trabajoso, dejarlo con nota.

---

## Contexto

### Referencias

- `src/shared/components/ui/Button.tsx` — variants (primary/secondary/ghost/danger), sizes (sm=40dp/md=48dp/lg=56dp), loading prop, `focus-visible:shadow-focus`.
- `src/shared/components/ui/Card.tsx` — elevation (elev-1/elev-2), padding (none/sm/md/lg), interactive (hover bg), border `border-subtle` por default.
- `src/shared/components/ui/Input.tsx` — label/hint/error/unit/mono props. `type="number"` activa `font-mono` automáticamente. Altura 48dp. Acepta todo `InputHTMLAttributes` (min/max/step incluidos).
- `src/shared/components/ui/index.ts` — barrel: `import { Button, Card, Input } from '@/shared/components/ui'`.
- `src/app/globals.css` líneas 1-90 — tokens CSS (`--bg-base`, `--text-primary`, `--color-accent`, `--color-success`, etc.).
- `tailwind.config.ts` líneas 7-60 — utilidades Tailwind disponibles: `bg-surface-{base,elevated,elevated-2}`, `text-{primary,secondary,muted}`, `bg-accent`, `text-accent`, `border-subtle`, `border-strong`, `shadow-{elev-1,elev-2,focus}`, `font-{sans,display,mono,hand}`.
- `.claude/PRPs/redesign-phase-1.md` — PRP previo (completado), fuente de verdad del contrato de tokens.
- Commit `39009a7` — baseline de Fase 1.

### Arquitectura Propuesta

Sin cambios arquitecturales. Es puramente una migración visual.

```
src/
├── app/
│   ├── page.tsx                    ← modificado (Dashboard)
│   └── calculators/
│       └── page.tsx                ← modificado (Calculators)
└── shared/
    └── components/
        └── ui/                     ← NO tocar (ya existe de Fase 1)
            ├── Button.tsx
            ├── Card.tsx
            ├── Input.tsx
            └── index.ts
```

### Paleta de Mapeos (antiguo → nuevo)

**Surfaces / backgrounds**

| Antiguo | Nuevo |
|---------|-------|
| `bg-gray-900` | `bg-surface-elevated` |
| `bg-gray-800` | `bg-surface-elevated-2` |
| `bg-gray-800/50` | `bg-surface-elevated-2` (preferir sólido) |
| `bg-gradient-to-br from-blue-600/20 to-blue-500/10` | `bg-surface-elevated` (eliminar gradient) |
| `bg-gradient-to-br from-green-600/20 to-green-500/10` | `bg-surface-elevated` (eliminar gradient) |
| `bg-gradient-to-br from-yellow-600/20 to-yellow-500/10` | `bg-surface-elevated` |
| `bg-gradient-to-br from-purple-600/20 to-purple-500/10` | `bg-surface-elevated` |
| `bg-orange-500/20` (streak badge) | `bg-surface-elevated` + `text-warning` en el número |
| `bg-blue-500/10` (rule chips) | `bg-surface-elevated` + `text-accent` en el título |
| `bg-blue-600/20` (highlight results) | `bg-surface-elevated-2` + `text-accent` en label |

**Text**

| Antiguo | Nuevo |
|---------|-------|
| `text-white` | `text-primary` |
| `text-gray-300` | `text-primary` (body) o `text-secondary` (labels) — elegir por rol |
| `text-gray-400` | `text-secondary` |
| `text-gray-500` | `text-muted` |
| `text-blue-400` | `text-accent` |
| `text-blue-300` | `text-accent` |
| `text-green-400` | `text-success` |
| `text-yellow-400` | `text-warning` |
| `text-red-400` | `text-danger` |
| `text-purple-400` | `text-accent` (no hay purpura en el sistema — unificar a accent) |
| `text-orange-400` | `text-warning` |

**Borders**

| Antiguo | Nuevo |
|---------|-------|
| `border-gray-700` | `border-subtle` (default) o `border-strong` si destaca |
| `border-gray-600` | `border-subtle` |
| `border-blue-500/30` | `border-subtle` + `text-accent` adentro |
| `border-blue-500/40` | `border-strong` |
| `border-green-500/30` | `border-subtle` + `text-success` adentro |
| `border-red-500/30` | `border-subtle` + `text-danger` adentro |
| `border-orange-500/30` | `border-subtle` |
| `border-yellow-500/30` | `border-subtle` |

**Solid fills (bars, badges)**

| Antiguo | Nuevo |
|---------|-------|
| `bg-green-500` (weakness bar ≥70%) | `bg-success` |
| `bg-yellow-500` (weakness bar 40-70%) | `bg-warning` |
| `bg-red-500` (weakness bar <40%) | `bg-danger` |
| `bg-green-500/20 text-green-400` (session badge) | `bg-surface-elevated-2 text-success` |
| `bg-yellow-500/20 text-yellow-400` | `bg-surface-elevated-2 text-warning` |
| `bg-red-500/20 text-red-400` | `bg-surface-elevated-2 text-danger` |
| `bg-blue-600 hover:bg-blue-500` (CTAs/Calculate) | `<Button variant="primary">` (bg-accent built-in) |
| `bg-purple-600 hover:bg-purple-500` (Flashcards CTA) | `<Button variant="primary">` (unificar, no purpura) |
| `bg-green-600 hover:bg-green-500` (Calculators CTA) | `<Button variant="primary">` (unificar) |
| `bg-blue-600` (toggle ON state) | `bg-accent` |
| `bg-gray-700` (toggle OFF state) | `bg-surface-elevated-2` |

**Typography**

| Rol | Clase |
|-----|-------|
| Stat values, percentages, amperajes, voltajes, watts, rule numbers, fraction scores (`3/10`), durations (`5m 23s`), streak days | `font-mono` |
| Headings, section titles, button labels | default (font-sans) |
| Captions (fechas, "total attempts") | default |

**Radii**

| Antiguo | Nuevo |
|---------|-------|
| `rounded-xl` (cards) | preservar o `rounded-lg` (Card primitivo ya usa `rounded-lg`) |
| `rounded-lg` (inputs/buttons) | preservar o dejar al primitivo |
| `rounded-full` (streak/pills) | `rounded-pill` (token) o preservar |

---

## Blueprint (Assembly Line)

> IMPORTANTE: Solo fases. Subtareas se mapean just-in-time en cada fase con contexto real.

### Fase 1: Dashboard — migración completa

**Objetivo**: `src/app/page.tsx` reescrito usando tokens + primitivos. `StatCard` inline eliminado. CTAs unificados. Iconos y barras re-tokenizadas.

**Validación**:
- `git diff src/app/page.tsx` muestra sólo un archivo modificado.
- Grep de `bg-gray-`, `text-gray-`, `border-gray-`, `bg-blue-`, `text-blue-`, `from-`, `bg-green-`, `bg-red-`, `bg-yellow-`, `bg-purple-`, `bg-orange-` en `src/app/page.tsx` → 0 resultados.
- Grep de `function StatCard` en `src/app/page.tsx` → 0 resultados.
- `npm run typecheck` pasa.
- `npm run dev` + Playwright screenshot de `http://localhost:3000` → sin layout rotos, datos de progreso visibles, 3 CTAs coherentes, weakness bars con color semántico.

### Fase 2: Calculators — migración completa

**Objetivo**: `src/app/calculators/page.tsx` reescrito. `InputField` inline eliminado; `TabButton` inline eliminado; `ResultRow` evaluado (migrar si trivial, documentar si no); `SelectField` retokenizado (no migrado). Botones "Calculate" unificados. Tab rule-chips a `<Card>`. Toggles re-tokenizados o migrados.

**Validación**:
- `git diff src/app/calculators/page.tsx` — único archivo modificado.
- Grep de `function InputField`, `function TabButton` en el archivo → 0.
- Grep de `bg-gray-`, `bg-blue-`, `text-gray-`, `text-blue-`, `border-gray-`, `border-blue-` → 0 (excepto eventualmente dentro de `SelectField` si se decide dejarlo intacto — documentar la excepción).
- `npm run typecheck` + `npm run build` pasan.
- Playwright screenshot de cada tab (Demand / Vdrop / Ampacity / Motor) → UI consistente, cálculos funcionan clickeando Calculate con valores defaults.

### Fase 3: Validación final

**Objetivo**: Confirmar que nada fuera de scope se rompió y que los primitivos soportaron el uso real.

**Validación**:
- `git diff --stat main` muestra sólo 2 archivos modificados: `src/app/page.tsx`, `src/app/calculators/page.tsx`.
- `npm run typecheck` pasa.
- `npm run build` exitoso, sin warnings nuevos.
- `npm run lint` sin nuevos warnings.
- Playwright sweep: Dashboard, `/calculators?tab=demand`, `/calculators?tab=vdrop`, `/calculators?tab=ampacity`, `/calculators?tab=motor` — todos renderizan.
- Navegación a rutas NO tocadas (`/quiz`, `/flashcards`, `/study-guide`, `/tutor`) sigue intacta (sanity check, no regresión de layout).
- Documentar en la sección Aprendizajes del PRP:
  - Qué gaps tuvo el sistema (ej. falta Select, falta Toggle, falta Badge, falta variante Card con gradient accent).
  - Si alguna migración forzó añadir una extensión inesperada a un primitivo (idealmente: ninguna).
  - Cambios de comportamiento visible (si los hay) para que el usuario los apruebe.

---

## Gotchas

> Cosas críticas a tener en cuenta ANTES de implementar.

- [ ] **Select primitive no existe**. `SelectField` inline en Calculators queda como deuda técnica explícita para Fase 3. No intentar crear un `<Select>` en esta fase (scope creep). Solución interina: retokenizar las clases del `<select>` nativo dentro del `SelectField` existente (`bg-surface-base border-subtle text-primary focus:border-strong`) para que visualmente empareje con los `<Input>` migrados.
- [ ] **Toggle primitive no existe**. Los switches Range/Dryer/HVAC son toggles custom. No migrar a `<Button>` — no es un botón. Opciones: (a) retokenizar dejando el markup intacto, o (b) crear helper local `<Toggle>` SOLO dentro de `calculators/page.tsx` (no exportado) si simplifica. Preferir (a).
- [ ] **CTAs del Dashboard son `<Link>`, no `<button>`**. `<Button>` renderiza `<button>`. Dos caminos: (a) `<Link href="..."><Button as="...">` — pero `Button` no soporta `as` hoy. (b) Usar un `<Link>` con las clases visuales derivadas (replicar el "look" del Button). Preferir (b) para no extender el primitivo; documentar como "Link-styled-as-button" pattern. O alternativa (c): envolver `<Button>` dentro de `<Link>` con `legacyBehavior` — evitar, es anti-idiomático.
- [ ] **Gradientes decoración vs. semánticos**. Los gradientes arcoiris de `StatCard` son decoración pura → eliminar. El gradiente del voltage-drop gauge es **semántico** (verde-amarillo-rojo = seguro-advertencia-peligro) → preservar o migrar a 3 barras semánticas discretas. Preferir discretas: más legible y usa tokens.
- [ ] **Contraste de texto sobre los colores "mono"**. En weakness bars, el texto acompañante (`${accuracy}%`) debe ser `text-secondary` o `text-primary`, NO el color de la barra (sería redundante y rompe AAA).
- [ ] **El icono de flecha "back" del header de Calculators** (`<svg stroke="currentColor">` dentro de `<Link href="/">` con `text-gray-400 hover:text-white`) → migrar a `text-secondary hover:text-primary`. No reemplazar por `<Button variant="ghost">` — es un Link navigational, no acción.
- [ ] **Emojis nativos** (📝 🃏 🔢 ⚠ 📋 🔥) en los CTAs y headers: preservar tal cual, son decoración estable. NO convertir a iconos SVG en esta fase (scope creep).
- [ ] **`tabular-nums` en ResultRow**: si se mantiene el componente, preservar el `tabular-nums` o reemplazarlo con `font-mono` (que ya es tabular en JetBrains Mono). Preferir `font-mono`.
- [ ] **Coverage chips del Dashboard** (sección "Question Bank Coverage"): son chips informativos, no interactivos. Usar `<Card elevation="elev-1" padding="sm">` dentro de un `flex flex-wrap gap-2`, o mantener `<div>` con clases tokenizadas. `<Card>` puede ser overkill; decidir en implementación prefiriendo la opción más ligera.
- [ ] **`AccuracyBar`** es un componente helper local en Dashboard — NO es un "inline duplicado" (se usa múltiples veces pero con una sola definición). Preservar, sólo re-tokenizar los colores internos (verde/amarillo/rojo → success/warning/danger).
- [ ] **`formatTime` y `formatDate`**: lógica pura, NO tocar.
- [ ] **Orden de migración en Dashboard**: reescribir de arriba-abajo (header → stat cards → weakness+sessions → CTAs → coverage). Commit atómico por página, no a la mitad.
- [ ] **Al final, `git grep` exhaustivo** de `gray-`, `blue-`, `green-`, `yellow-`, `red-`, `purple-`, `orange-` en los 2 archivos para cazar residuos antes de cerrar cada fase.

## Anti-Patrones

- NO crear nuevos primitivos (`Select`, `Toggle`, `Badge`) en esta fase. Documentar como deuda para Fase 3.
- NO modificar `Button.tsx`/`Card.tsx`/`Input.tsx` para "resolver un edge case" — si el primitivo no calza, usar la primitiva subyacente (`<div>`/`<button>`) con clases tokenizadas y dejar nota.
- NO tocar `layout.tsx`, `SideNav`, `BottomNav`, `Sketch*`, rutas `/quiz`, `/flashcards`, `/study-guide`, `/tutor`.
- NO tocar lógica de cálculo (`calculateResidentialDemand`, `calculateVoltageDrop`, etc.), estados de `useState`, efectos de `useEffect`.
- NO dejar `StatCard` / `InputField` / `TabButton` definidos "por si acaso". Eliminar inmediatamente — si se reintroduce más tarde, `git` lo tiene.
- NO migrar a gradientes sutiles de nuevo ("calmados pero decorativos"). El sistema es calm/editorial — fondo sólido es la default.
- NO inventar clases `bg-surface-elevated-3` o tokens nuevos. Si algo no existe, se levanta como gap en Aprendizajes.
- NO usar `any` en props (no debería ser necesario — los primitivos están tipados).
- NO commitear a la mitad de una fase (Dashboard parcialmente migrado). Commit atómico por página completa.
- NO arreglar bugs no relacionados (ej. "oh mira, `dueCount` debería filtrar mejor") — scope creep. Abrir tarea aparte.

---

## 🧠 Aprendizajes (Self-Annealing)

### 2026-04-19: `<Link>` + `<Card interactive>` en lugar de extender `Button`
- **Decisión**: Los 3 CTAs del Dashboard (`/quiz`, `/flashcards`, `/calculators`) no pudieron usar `<Button>` porque renderiza `<button>`, no `<a>`. Evité extender la API del primitivo (YAGNI de Fase 1).
- **Patrón aplicado**: `<Link href="..." className="block"><Card interactive elevation="elev-1" padding="md">...</Card></Link>`. El `<Card interactive>` ya trae `cursor-pointer` + `hover:bg-surface-elevated-2` gratis. Visualmente un card interactivo == un botón grande con icono + label.
- **Aplicar en**: Cualquier CTA que navegue (es link, no acción). Si una sección futura descubre ≥2 call-sites que necesitan Link-styled-as-button, entonces evaluar agregar `asChild` o `as` al primitivo, con evidencia.

### 2026-04-19: Helper local `<Toggle>` y `<RuleChip>` dentro del archivo de la página
- **Decisión**: Los toggles Range/Dryer/HVAC son switches (`role="switch" aria-checked`) — no son botones semánticamente. Similarly, `RuleChip` es un patrón repetido 4 veces dentro de `calculators/page.tsx` (CEC Rule 8-200, 8-102, Tables 5A & 5C, Section 28).
- **Regla**: Si un patrón se repite ≥3 veces SOLO dentro de un archivo, un helper LOCAL (no exportado) es preferible a inline duplicado. NO se promueve a primitivo hasta que aparezca fuera de ese archivo.
- **Aplicar en**: Fase 3+ cuando se migren otras páginas. Si `RuleChip` o `Toggle` aparecen en Study Guide o Quiz, promoverlos a `@/shared/components/ui/` con evidencia concreta.

### 2026-04-19: `SelectField` retokenizado, NO migrado (deuda explícita Fase 3)
- **Decisión**: El primitivo `<Select>` no existe en Fase 1. En vez de crearlo en scope creep, mantuve `SelectField` como helper local en `calculators/page.tsx`, pero retokenicé sus clases (`bg-surface-base border-subtle text-primary focus:border-strong`) para emparejar visualmente con `<Input>`.
- **Deuda**: Fase 3 debe crear `@/shared/components/ui/Select.tsx` con API consistente (`label`, `hint`, `error`, `options`) y reemplazar `SelectField` en `calculators/page.tsx`.
- **Aplicar en**: Cualquier futuro `<select>` nativo debe seguir este patrón mientras no exista el primitivo — retokenizar visualmente pero marcar la deuda en la sección correspondiente.

### 2026-04-19: Voltage-drop gauge discretizado (3 zonas semánticas)
- **Cambio**: El gauge original tenía un gradient background `bg-gradient-to-r from-green-500 via-yellow-500 to-red-500 opacity-20` + un bar de color semántico por encima. Decoración mixta.
- **Nuevo**: Sola una barra de color semántico (`bg-success` ≤3%, `bg-warning` ≤5%, `bg-danger` >5%) con tick marks `bg-success` en 50% (3% limit) y `bg-danger` en 83.3% (5% limit). Fondo sólido `bg-surface-elevated-2`. Cero gradient.
- **Aplicar en**: Cualquier visualización de rango semántico (seguro→peligro). Preferir zonas discretas con tokens `success/warning/danger` sobre gradientes continuos.

### 2026-04-19: Card envolviendo tabs container
- **Patrón**: El contenedor de tabs de Calculators (`<div className="flex gap-1 bg-gray-900 border ...">`) migró a `<Card elevation="elev-1" padding="sm" className="flex gap-1 ...">`. El Card primitivo acepta `className` que extiende sus defaults — permite composición flexible sin romper su contrato.
- **Aplicar en**: Cualquier container que hoy es `<div>` con `bg-gray-900 border rounded-xl`. Usar `<Card>` + `className` aditivo.

### 2026-04-19: Accent unificado (sin purple/green CTAs)
- **Antes**: Dashboard tenía 3 CTAs con paletas distintas — `bg-blue-600` (Quiz), `bg-purple-600` (Flashcards), `bg-green-600` (Calculators). Diferenciación por color.
- **Ahora**: Los 3 CTAs son idénticos visualmente (Card interactive). Diferenciación ÚNICA por emoji (📝 🃏 🔢). Resultado: disciplina visual, paleta calm editorial.
- **Aplicar en**: Todo CTA futuro. El color diferencia intent (danger vs primary vs ghost), no "sección" de la app. La sección se diferencia por iconografía y contexto.

### 2026-04-19: `font-mono` obligatorio en números técnicos (Linear-style)
- **Regla**: TODO número técnico en estas páginas ahora usa `font-mono` (JetBrains Mono): amperajes, voltajes, watts, porcentajes, rule numbers, conductor sizes, session scores, streak days, coverage counts, percentages. El contraste entre `font-sans` (Inter) en labels/body y `font-mono` en data es instant-recognizable.
- **Aplicar en**: Todas las migraciones futuras (Quiz, Flashcards, Study Guide). Labels y párrafos en Inter. Datos, IDs, códigos, mediciones en JetBrains Mono.

### 2026-04-19: Gap del sistema detectado — falta primitivo `Badge` y `Alert`
- **Hallazgo**: Los "validation banners" (✓ Within Code / ✗ Exceeds 3% Limit) y los "info notes" (Motor overload note con fondo warning) quedaron como divs inline con tokens. Patrón repetido que podría ser un primitivo `<Alert variant="info|success|warning|danger">` + `<Badge>` para pills de accuracy.
- **Deuda**: Evaluar en Fase 3 si crear `<Alert>` y `<Badge>` como primitivos. Por ahora, los call-sites son pocos y no justifican.
- **Aplicar en**: Si Quiz, Flashcards, Study Guide terminan con ≥3 call-sites de "success/danger info banner", promover a primitivo.

---

*PRP pendiente aprobación. No se ha modificado código.*
