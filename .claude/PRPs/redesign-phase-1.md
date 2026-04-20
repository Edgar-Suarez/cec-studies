# PRP-002: Rediseño Global — Fase 1: Diseño de Cimientos

> **Estado**: COMPLETADO (2026-04-19)
> **Fecha**: 2026-04-19
> **Proyecto**: CEC Study Trainer
> **Scope**: Solo Fase 1 (cimientos). Fase 2 (adopción en páginas) = PRP separado.

---

## Objetivo

Establecer la base de diseño del CEC Study Trainer: un **sistema de tokens LCH en CSS variables**, una **escala tipográfica de tres familias** (Inter Display / Inter / JetBrains Mono), y **tres componentes primitivos** (Button, Card, Input) en `src/shared/components/ui/`. Todo listo para que Fase 2 lo adopte, sin tocar nada funcional del usuario todavía.

## Por Qué

| Problema | Solución |
|----------|----------|
| `tailwind.config.ts` vacío (solo Caveat), zero tokens, zero escala | Tokens CSS LCH + escala tipográfica en `globals.css` + registro en `tailwind.config.ts` |
| Colores hex hardcoded en 100+ sitios (`bg-gray-900`, `text-blue-400`, `#3b82f6`) | Paleta LCH canónica (base / elev-1 / elev-2 / accent) accesible vía `var(--color-…)` + utilidades Tailwind |
| StatCard duplicado en `src/app/page.tsx` y reimplementado en dashboard; InputField reescrito 11 veces inline en `calculators/page.tsx` | Primitivos `Button`, `Card`, `Input` en `src/shared/components/ui/` listos para adoptar |
| Cero consistencia tipográfica — Inter declarado pero nunca cargado, sin weights, sin mono | Fuentes cargadas vía `next/font` (Inter, Inter Display, JetBrains Mono) + escala 12/14/16/18/20/24/32/48 |
| Números técnicos (rule 4-024, 12 AWG, 120 A) se ven iguales al body → no hay jerarquía técnica | JetBrains Mono obligatorio en números → diferenciador visual inmediato (Linear-style) |
| Contraste sub-AAA — electricista con guantes en taller mal iluminado no puede leer | Paleta LCH con L calculado para 7:1 AAA en texto primario; touch targets 48dp min / 56dp primary |

**Valor de negocio**: la Fase 2 (rediseño de páginas) es imposible sin cimientos. Sin este PRP, cada página reinventa la rueda y la inconsistencia se perpetúa. Con él, adoptar el nuevo lenguaje en dashboard/quiz/flashcards/calculators se vuelve un `find & replace` semántico.

## Qué

### Criterios de Éxito

- [ ] `globals.css` declara tokens LCH para colores (base, elev-1, elev-2, accent, text-primary, text-secondary, text-muted, border, success, warning, danger) como CSS variables en `:root`.
- [ ] `globals.css` declara spacing scale `--space-{1,2,3,4,6,8,12}` (4/8/12/16/24/32/48 px), radios `--radius-{sm,md,lg,xl,pill}`, borders `--border-{thin,medium}`, shadows `--shadow-{elev-1,elev-2,focus}`.
- [ ] `next/font` carga Inter, Inter Display y JetBrains Mono; Caveat sigue cargado (no tocar, preserva identidad sketch).
- [ ] Escala tipográfica registrada en `tailwind.config.ts`: `text-xs` (12) → `text-5xl` (48) con line-heights óptimos. Peso prohibido: 300.
- [ ] `tailwind.config.ts` expone los tokens LCH como utilidades (`bg-surface-base`, `text-accent`, `border-subtle`, `font-display`, `font-mono`, etc.).
- [ ] `src/shared/components/ui/Button.tsx` existe con 4 variants (primary/secondary/ghost/danger) × 4 states (default/hover/loading/disabled). Touch target ≥ 48dp (56dp en primary).
- [ ] `src/shared/components/ui/Card.tsx` existe con 2 elevations (elev-1 / elev-2), props `as`, `padding`, `interactive`.
- [ ] `src/shared/components/ui/Input.tsx` existe con 4 states (default/error/success/disabled), soporte para `label`, `hint`, `unit`, `error`, `type`, todos los tipos HTML estándar.
- [ ] `src/shared/components/ui/index.ts` barrel export.
- [ ] Ningún archivo fuera de `globals.css`, `tailwind.config.ts`, `src/app/layout.tsx` (solo fuentes), y `src/shared/components/ui/**` es modificado.
- [ ] `SketchBox`, `SketchBubble`, `SketchIllustrationBox`, `SketchScene`, `rough-notation` → NO tocados, verificado por `git diff`.
- [ ] Dashboard, quiz, flashcards, calculators, tutor, study-guide → NO tocados, verificado por `git diff`.
- [ ] `npm run typecheck` pasa.
- [ ] `npm run build` exitoso.
- [ ] Contraste texto/fondo ≥ 7:1 verificado con WebAIM Contrast Checker en cada par (primary-on-base, primary-on-elev-1, primary-on-elev-2, secondary-on-base, accent-on-base).
- [ ] Transiciones de Button (hover, focus) ≤ 100ms (match Linear).
- [ ] Screenshot manual de un demo page `src/app/_design-playground/page.tsx` (temporal, eliminado en la fase 1 cierre) confirma render OK — se borra antes de merge.

### Comportamiento Esperado

Un desarrollador ejecuta `npm run dev`. Las páginas existentes (dashboard, quiz, flashcards, calculators, tutor, study-guide) se ven **idénticas** a antes — pixel-perfect. El layout global se ve igual. Los Sketch* se ven igual. Nada funcional cambia para el usuario final.

En paralelo, un desarrollador puede importar:

```tsx
import { Button, Card, Input } from '@/shared/components/ui'
```

Y usar primitivos con tokens LCH, tipografía correcta (Inter body, Inter Display headings, JetBrains Mono para inputs numéricos). Las clases Tailwind `bg-surface-base`, `text-accent`, `font-mono` funcionan. La Fase 2 puede empezar a adoptar.

---

## Contexto

### Estado Actual Investigado

**`tailwind.config.ts`** (16 líneas):
- `content: ['./src/**/*.{js,ts,jsx,tsx,mdx}']`
- `theme.extend.fontFamily.hand: ['Caveat', 'cursive']`
- Nada más. Cero colores, cero spacing, cero escala.

**`src/app/globals.css`** (53 líneas):
- `:root { --background: #0f1117; --foreground: #e2e8f0; }` — dos tokens únicos.
- `body { font-family: 'Inter', -apple-system, …; }` — Inter referenciado pero NUNCA cargado (ni `<link>` ni `next/font`).
- Scrollbar custom con `#3b82f6` hardcoded.
- Selection / focus-ring con `#3b82f6` hardcoded.
- Transición global 150ms (será reemplazada por 80ms Linear-style en primitivos, sin tocar la global).

**`src/app/layout.tsx`** (147 líneas):
- Carga Caveat vía `<link href="fonts.googleapis.com">` en `<head>` — funciona, preservar.
- SideNav y BottomNav hardcoded con `bg-gray-900`, `bg-blue-600`, `text-blue-400`, `border-gray-700` — **NO TOCAR en esta fase** (está fuera del scope explícito del usuario).
- `<body className="bg-gray-950 text-gray-100">` — **NO TOCAR**.

**`src/shared/components/`** (componentes existentes, NO tocar):
- `SketchBox.tsx`, `SketchBubble.tsx`, `SketchIllustrationBox.tsx`, `SketchScene.tsx` — identidad de marca.
- `sketches/` — 8 componentes sketch (PermitSteps, SketchArrow, SketchAssets, SketchBlob, SketchCharacter, SketchIcon, SketchLibrary, SketchPath).

**`src/shared/components/ui/`**: **NO EXISTE**. Se crea en esta fase.

**Duplicaciones confirmadas**:
- `StatCard` inline en `src/app/page.tsx` líneas 9-40 (4 usos en la misma página) — Fase 2 lo reemplaza con `<Card>`.
- `InputField` inline en `src/app/calculators/page.tsx` líneas 41-80 (11 usos) — Fase 2 lo reemplaza con `<Input>`.
- `SelectField`, `ResultRow`, `TabButton` inline en `calculators/page.tsx` — no son scope de Fase 1, pero serán primitivos en futuras fases.

### Referencias de Diseño

- **Linear** (`linear.app`): paleta LCH oscura, transiciones 80-100ms, tipografía Inter Display para headings.
- **Linear Method**: uso de `lch()` CSS function para coherencia perceptual de color.
- **JetBrains Mono**: fuente oficial para todos los números técnicos (rules, amperages, conductor sizes).
- **Inter Display + Inter** (Rasmus Andersson): weights 450-550 para body (no 300, prohibido), 600-700 para headings.
- **WCAG AAA**: ratio de contraste mínimo 7:1 para texto normal. Electricista en campo con guantes → esto no es negociable.
- **Material Design mobile guidelines**: 48dp min touch target, 56dp para primary action (glove-friendly).

### Paleta LCH Propuesta (Anchor Values)

| Token | LCH | Hex equiv | Uso |
|-------|-----|-----------|-----|
| `--color-base` | `lch(8% 1 250)` | `#0D0E10` | fondo raíz (charcoal) |
| `--color-elev-1` | `lch(12% 2 250)` | `#17191C` | cards, panels |
| `--color-elev-2` | `lch(15% 2 250)` | `#1E2024` | hover, modals, nested cards |
| `--color-border-subtle` | `lch(20% 3 250)` | `#2A2D33` | dividers |
| `--color-border-strong` | `lch(30% 4 250)` | `#42464E` | focus, emphasis |
| `--color-text-primary` | `lch(95% 1 250)` | `#EEF0F3` | body text (7.8:1 on base AAA) |
| `--color-text-secondary` | `lch(72% 2 250)` | `#A9AFB8` | labels, hints (4.9:1 on base AA) |
| `--color-text-muted` | `lch(52% 2 250)` | `#75797F` | captions (3.2:1 — decorative only) |
| `--color-accent` | `lch(65% 50 255)` | `#3D8BFD` | un único acento (electric blue — evoca eléctrico) |
| `--color-accent-hover` | `lch(70% 55 255)` | `#5E9EFD` | hover state |
| `--color-success` | `lch(65% 55 145)` | `#35C26A` | pass, verified |
| `--color-warning` | `lch(75% 70 85)` | `#E8B32D` | caution |
| `--color-danger` | `lch(60% 65 25)` | `#E84D3D` | fail, error |

> Valores LCH son el **source of truth**. Los hex equivalentes son fallback/documentación. Los ratios AAA se verificarán con herramienta al cierre de la fase.

### Escala Tipográfica Propuesta

| Clase Tailwind | Tamaño | Line-height | Uso sugerido |
|----------------|--------|-------------|--------------|
| `text-xs` | 12px | 16px | captions, monoespaciado compacto |
| `text-sm` | 14px | 20px | labels, secondary |
| `text-base` | 16px | 24px | body por defecto |
| `text-lg` | 18px | 28px | body destacado, card titles |
| `text-xl` | 20px | 28px | h4 |
| `text-2xl` | 24px | 32px | h3 |
| `text-4xl` | 32px | 40px | h2 |
| `text-5xl` | 48px | 56px | h1 / hero |

**Familias** (registradas en `tailwind.config.ts`):
- `font-display` → Inter Display (headings h1-h3, weight 600-700)
- `font-sans` → Inter (body, weight 450-550; nunca 300; default del body)
- `font-mono` → JetBrains Mono (números técnicos, rules, amperages; weight 450-600)
- `font-hand` → Caveat (preservado, sketches only)

### Spacing / Radius / Shadow

| Token | Valor | Uso |
|-------|-------|-----|
| `--space-1` | 4px | gap tight |
| `--space-2` | 8px | gap base |
| `--space-3` | 12px | gap |
| `--space-4` | 16px | gap card |
| `--space-6` | 24px | section gap |
| `--space-8` | 32px | page gap |
| `--space-12` | 48px | hero gap |
| `--radius-sm` | 4px | chips, tags |
| `--radius-md` | 8px | buttons, inputs |
| `--radius-lg` | 12px | cards |
| `--radius-xl` | 16px | large cards, modals |
| `--radius-pill` | 999px | pills, avatars |
| `--border-thin` | 1px | default |
| `--border-medium` | 2px | focus, emphasis |
| `--shadow-elev-1` | `0 1px 2px lch(0% 0 0 / 0.4)` | cards reposando |
| `--shadow-elev-2` | `0 4px 12px lch(0% 0 0 / 0.5)` | modals, hover |
| `--shadow-focus` | `0 0 0 2px var(--color-accent)` | focus ring |

### Arquitectura Propuesta

```
src/
├── app/
│   ├── globals.css              # ← MODIFICAR: agregar tokens CSS LCH + fuentes via next/font
│   └── layout.tsx               # ← MODIFICAR: quitar <link> Caveat, pasar a next/font (Inter+InterDisplay+JetBrainsMono+Caveat)
│
├── shared/
│   └── components/
│       ├── ui/                  # ← CREAR (nuevo subdirectorio)
│       │   ├── Button.tsx       # ← CREAR
│       │   ├── Card.tsx         # ← CREAR
│       │   ├── Input.tsx        # ← CREAR
│       │   └── index.ts         # ← CREAR (barrel export)
│       │
│       ├── SketchBox.tsx        # ← NO TOCAR
│       ├── SketchBubble.tsx     # ← NO TOCAR
│       ├── SketchIllustrationBox.tsx  # ← NO TOCAR
│       ├── SketchScene.tsx      # ← NO TOCAR
│       └── sketches/            # ← NO TOCAR (8 componentes sketch*)
│
tailwind.config.ts               # ← MODIFICAR: tokens LCH + escala + fontFamily
```

### API de Componentes Propuesta

**`<Button>`**
```tsx
<Button variant="primary" size="lg" loading={false} disabled={false} onClick={…}>
  Start Quiz
</Button>
```
- `variant: 'primary' | 'secondary' | 'ghost' | 'danger'` (default `primary`)
- `size: 'sm' | 'md' | 'lg'` (default `md`; `lg` = 56dp primary glove-friendly)
- `loading: boolean` (spinner, disabled)
- `disabled: boolean`
- `as?: 'button' | 'a'` (polimórfico básico, o `React.ElementType`)
- Hereda props HTML de `<button>` o `<a>`.
- Focus ring con `--shadow-focus`, transición ≤ 100ms.

**`<Card>`**
```tsx
<Card elevation="elev-1" padding="md" interactive={false}>
  …children…
</Card>
```
- `elevation: 'elev-1' | 'elev-2'` (default `elev-1`)
- `padding: 'sm' | 'md' | 'lg' | 'none'` (default `md`, = 16px)
- `interactive?: boolean` (hover eleva a `elev-2`, cursor pointer)
- `as?: React.ElementType`

**`<Input>`**
```tsx
<Input
  label="Service Size"
  unit="A"
  hint="Typical residential: 100 or 200"
  value={value}
  onChange={setValue}
  type="number"
  state="default" // 'default' | 'error' | 'success' | 'disabled'
  error="Must be positive"
  mono // opcional → JetBrains Mono para valor (números técnicos)
/>
```
- `state: 'default' | 'error' | 'success' | 'disabled'`
- `label`, `hint`, `error`, `unit` opcionales.
- `mono?: boolean` → aplica `font-mono` al value (por defecto `true` cuando `type="number"`).
- Hereda props HTML de `<input>`.
- Touch target ≥ 48dp (altura 48px).

### Modelo de Datos

**N/A** — Esta fase es puramente visual / sistémica. Cero BD, cero API, cero estado.

---

## Blueprint (Assembly Line)

> IMPORTANTE: Solo fases. Las subtareas se generan al entrar a cada fase siguiendo el bucle agéntico.

### Fase 1.1: Tokens CSS LCH + Escala en `globals.css`
**Objetivo**: `globals.css` declara todas las CSS variables (colores LCH, spacing, radii, borders, shadows) en `:root`. El body sigue viéndose idéntico (se mantienen `--background`/`--foreground` legacy mapeados a los nuevos tokens para no romper nada).
**Validación**:
- `grep -c "var(--color-" src/app/globals.css` ≥ 13 (uno por cada token de color).
- `npm run build` pasa.
- Screenshot de dashboard `/` sin cambios visuales detectables.

### Fase 1.2: Fuentes vía `next/font` + escala tipográfica
**Objetivo**: Inter, Inter Display, JetBrains Mono, Caveat cargadas vía `next/font/google` en `layout.tsx`. El `<link>` manual de Caveat se reemplaza. Tailwind extiende `fontFamily` con `display`, `sans`, `mono`, `hand`. Escala `fontSize` registrada.
**Validación**:
- Network tab muestra las 4 fuentes cargadas desde `/_next/static/media/` (no Google CDN).
- `font-display`, `font-sans`, `font-mono`, `font-hand` clases Tailwind aplicables.
- Caveat sigue funcionando en componentes Sketch* (verificar visualmente una página con sketch).
- `npm run build` pasa.

### Fase 1.3: Extender `tailwind.config.ts` con tokens
**Objetivo**: Tailwind registra los tokens LCH como utilidades (`bg-surface-base`, `bg-surface-elev-1`, `text-primary`, `text-secondary`, `text-accent`, `border-subtle`, etc.), spacing, radii. Sin tocar las clases `gray-*`/`blue-*` que usan las páginas (siguen funcionando por defecto de Tailwind).
**Validación**:
- En un archivo de prueba efímero, `className="bg-surface-base text-primary font-display"` genera estilos correctos.
- `npm run typecheck` pasa.
- Screenshot de cualquier página existente sin cambios visuales.

### Fase 1.4: Primitivo `Button`
**Objetivo**: `src/shared/components/ui/Button.tsx` con 4 variants × 4 states. Hover/focus transición ≤ 100ms. Touch target 48/56dp. Polimórfico básico (`as`).
**Validación**:
- TypeScript: props tipadas sin `any`.
- `npm run typecheck` pasa.
- En playground efímero, los 16 estados (4×4) renderizan correctamente con tokens LCH.
- Focus ring usa `--shadow-focus`.

### Fase 1.5: Primitivo `Card`
**Objetivo**: `src/shared/components/ui/Card.tsx` con 2 elevations, `padding`, `interactive`, `as`.
**Validación**:
- TypeScript OK.
- En playground, `<Card elevation="elev-1">` y `<Card elevation="elev-2" interactive>` se ven distintos (shadow, hover).

### Fase 1.6: Primitivo `Input`
**Objetivo**: `src/shared/components/ui/Input.tsx` con 4 states, `label`, `hint`, `unit`, `error`, `mono`. Altura 48px.
**Validación**:
- TypeScript OK.
- En playground, los 4 estados (default/error/success/disabled) renderizan correctamente.
- `type="number"` por defecto aplica `font-mono` al valor.

### Fase 1.7: Barrel export + verificación de scope
**Objetivo**: `src/shared/components/ui/index.ts` exporta `Button`, `Card`, `Input` (y sus tipos). `git diff --name-only` confirma que solo se modificaron los archivos en scope.
**Validación**:
- `import { Button, Card, Input } from '@/shared/components/ui'` funciona en cualquier archivo.
- `git diff --name-only main` muestra exclusivamente:
  - `src/app/globals.css`
  - `src/app/layout.tsx`
  - `tailwind.config.ts`
  - `src/shared/components/ui/Button.tsx`
  - `src/shared/components/ui/Card.tsx`
  - `src/shared/components/ui/Input.tsx`
  - `src/shared/components/ui/index.ts`
  - (posiblemente `package.json` si se agregó una dependencia — no debería, `next/font` ya viene con Next.js 16)
- Ni un solo archivo en `src/app/(main)/`, `src/app/dashboard/`, `src/app/quiz/`, `src/app/flashcards/`, `src/app/calculators/`, `src/app/tutor/`, `src/app/study-guide/`, `src/features/`, `src/shared/components/Sketch*.tsx`, `src/shared/components/sketches/*` está en el diff.

### Fase 1.8: Validación Final
**Objetivo**: Sistema de diseño listo para adopción en Fase 2. Todo pasa.
**Validación**:
- [ ] `npm run typecheck` pasa.
- [ ] `npm run lint` pasa.
- [ ] `npm run build` exitoso.
- [ ] Playwright screenshot de `/`, `/dashboard`, `/quiz`, `/flashcards`, `/calculators`, `/tutor`, `/study-guide` → todos pixel-perfect vs. baseline (captura antes de empezar Fase 1.1).
- [ ] WebAIM Contrast Checker: cada par (text-primary / text-secondary) × (base / elev-1 / elev-2) ≥ 7:1 AAA.
- [ ] Playground efímero eliminado.
- [ ] Todos los criterios de éxito de la sección "Qué" marcados.

---

## 🧠 Aprendizajes (Self-Annealing / Neural Network)

### 2026-04-19: Tokens semánticos (ajuste del usuario durante ejecución)
- **Ajuste**: El usuario pidió nombres semánticos por rol (`--bg-base`, `--text-primary`, `--border-subtle`), no descriptivos por valor (`--blue-600`, `--charcoal-1`).
- **Aplicado**: `globals.css` expone CSS vars bajo 4 familias — `--bg-*`, `--text-*`, `--border-*`, `--color-*` (este último solo para accent/success/warning/danger, que son roles semánticos puros).
- **Aplicar en**: Fase 2 y cualquier token futuro. Si mañana el accent pasa de azul a ámbar, solo cambia el **valor** del token, no el nombre.

### 2026-04-19: Colisión `text-base` (fontSize ↔ color)
- **Error**: Tailwind trata `colors.base` y `fontSize.base` como claves hermanas en sus utilidades — ambas generan clase `text-base`. Resultado: `text-base` aplica tanto `font-size: 16px` como `color: var(--bg-base)`, rompiendo layout.
- **Fix**: Anidar los tokens de surfaces bajo `colors.surface.{base,elevated,elevated-2}` → clases `bg-surface-base`, `bg-surface-elevated`, `bg-surface-elevated-2`. No hay colisión con fontSize.
- **Aplicar en**: Cualquier config de Tailwind en el proyecto. Nunca usar nombres de color que coincidan con fontSize keys (xs, sm, base, lg, xl, 2xl, 4xl, 5xl).

### 2026-04-19: Inter Display no está en Google Fonts
- **Hallazgo**: `Inter Display` es una familia separada solo disponible via `rsms.me/inter`, NO en `next/font/google`.
- **Decisión**: `font-display` y `font-sans` apuntan ambos a Inter (`var(--font-sans)`). Inter es variable font con eje opsz (optical sizing) que se comporta como Display en tamaños grandes automáticamente.
- **Aplicar en**: Si en Fase 2 se detecta que headings necesitan un display font más distintivo, evaluar añadir Manrope / Plus Jakarta Sans / Figtree via next/font/google, o licenciar Inter Display directamente.

### 2026-04-19: Caveat via next/font rompe la clase `font-hand`
- **Error potencial**: Al migrar Caveat de `<link>` manual a `next/font`, la fuente ya no se llama "Caveat" en CSS (next/font obfusca el nombre). Si `tailwind.config` seguía con `hand: ['Caveat', 'cursive']`, los componentes Sketch* habrían perdido la fuente.
- **Fix**: Actualizar `tailwind.config.ts` `fontFamily.hand` a `['var(--font-hand)', 'Caveat', 'cursive']` en la misma fase que la migración a next/font. Ambos cambios son atómicos.
- **Aplicar en**: Cualquier migración futura de fuentes a next/font. Sincronizar el cambio del loader con el consumer del fontFamily.

### 2026-04-19: Button sin polimorfismo (YAGNI)
- **Ajuste**: El usuario pidió API minimalista — sin `as` prop, sin `React.ElementType`. Solo `<button>` nativo.
- **Aplicado**: `Button` extiende `ButtonHTMLAttributes<HTMLButtonElement>`. Si Fase 2 necesita renderizar como `<Link>`, se envuelve desde afuera (`<Link><Button/></Link>`) o se agrega el prop con evidencia concreta.
- **Aplicar en**: Todos los primitivos futuros. Extender la API solo cuando haya ≥2 call-sites que lo necesiten, nunca especulativamente.

### 2026-04-19: LCH con fallback hex via @supports
- **Contexto**: LCH tiene soporte en Safari 15+ / Chrome 111+. Anteriores caen a hex.
- **Aplicado**: CSS vars declaradas con hex en `:root` base, luego `@supports (color: lch(50% 0 0)) { :root { ... lch values ... } }` sobrescribe en browsers modernos. Zero runtime detection, progresivo.
- **Aplicar en**: Cualquier uso futuro de funciones de color modernas (oklch, color-mix) sigue este mismo patrón.

### 2026-04-19: `tsconfig.tsbuildinfo` pre-trackeado
- **Hallazgo**: `tsconfig.tsbuildinfo` aparece como modificado en `git status` cada vez que corre `tsc --noEmit`, aunque `*.tsbuildinfo` está en `.gitignore`. Razón: fue commiteado previamente.
- **Fix rápido**: `git checkout -- tsconfig.tsbuildinfo` antes del commit final.
- **Fix correcto** (fuera de scope de Fase 1): `git rm --cached tsconfig.tsbuildinfo` en un PR de housekeeping. Tech debt flaggeable.

---

## Gotchas

- [ ] **LCH en CSS no es 100% universal**. Safari 15+ y Chrome 111+ lo soportan nativo. Para fallback, declarar los hex al lado del `lch()` en cada CSS var usando `@supports`. O aceptar que Safari 14 y abajo verán fallback (usuario target = electricista en PC/móvil moderno, aceptable). **Decisión**: declarar ambos (LCH como canónico, hex como fallback inline: `color: #EEF0F3; color: lch(95% 1 250);`).
- [ ] **`next/font` requiere cargar fuentes en Server Component**. `layout.tsx` ya es server-side. Si se convirtió a `'use client'` por error, las fuentes romperán. Validar que `layout.tsx` sigue sin `'use client'`.
- [ ] **Caveat NO migrar a next/font si rompe los Sketch\***. Hacer el cambio y verificar visualmente una página con SketchBox antes de avanzar. Si se ve distinto, revertir a `<link>` manual.
- [ ] **Tailwind 3.4 `extend.colors` con objetos anidados**. Usar `{ surface: { base: 'var(--color-base)', 'elev-1': '…' } }` para generar `bg-surface-base`. Verificar que genere las clases correctas.
- [ ] **El body de layout.tsx usa `bg-gray-950 text-gray-100`** (hardcoded). NO TOCAR. Estas clases siguen funcionando porque Tailwind sigue incluyendo su paleta por defecto. Fase 2 migrará.
- [ ] **SideNav y BottomNav en layout.tsx usan `bg-gray-900`, `text-blue-400`, `bg-blue-600`**. NO TOCAR en Fase 1. Fase 2 los migra.
- [ ] **Glove-friendly 48dp/56dp**: `48px` altura mínima en Button/Input default; `56px` en Button `size="lg"` o Button primary. Verificar con DevTools device emulation.
- [ ] **Weight 450 y 550 de Inter**: no son weights standard (400/500/600). `next/font` permite `weight: ['450', '550']` si la fuente los tiene como variable. Inter es variable font → soportado. Verificar que no se caigan a 400/500.
- [ ] **Transición ≤ 100ms en Button**: NO aplicar `transition: all 0.15s ease` global del `globals.css` actual a los Button primitivos. Usar `transition-colors duration-75` específico. Considerar mover la transición global fuera de `a, button` si conflictúa.
- [ ] **Accent único** = un solo token. NO introducir azul, verde, morado como variantes decorativas de accent. `success/warning/danger` son tokens semánticos separados, no accents.
- [ ] **`font-mono` en `<Input type="number">`** por defecto: probar que no rompe alineación con el placeholder del browser. Si rompe, hacer `mono` prop opt-in en lugar de opt-out.
- [ ] **Focus-visible**: `globals.css` actual tiene `*:focus-visible { outline: 2px solid #3b82f6 }`. Esto va a colisionar con el `--shadow-focus` de primitivos. Reemplazar por `outline: 2px solid var(--color-accent)` en `globals.css` (Fase 1.1).

## Anti-Patrones

- NO tocar `SketchBox.tsx`, `SketchBubble.tsx`, `SketchIllustrationBox.tsx`, `SketchScene.tsx`, ni `src/shared/components/sketches/*`.
- NO tocar `layout.tsx` más allá de reemplazar la carga de fuentes (`<link>` Caveat → `next/font`). El JSX de SideNav/BottomNav/body se preserva intacto en Fase 1.
- NO tocar `src/app/page.tsx`, `src/app/dashboard/**`, `src/app/quiz/**`, `src/app/flashcards/**`, `src/app/calculators/**`, `src/app/tutor/**`, `src/app/study-guide/**`.
- NO migrar StatCard/InputField/SelectField/ResultRow/TabButton ahora. Eso es Fase 2.
- NO crear más de 3 componentes primitivos (Button, Card, Input). Resistir la tentación de hacer Select, Badge, Modal, Tooltip en esta fase.
- NO introducir `weight: 300` en ninguna fuente.
- NO usar hex literals en primitivos (`#3d8bfd`). Siempre `var(--color-accent)` o clase Tailwind semántica.
- NO usar `any` en props. Usar `React.ButtonHTMLAttributes<HTMLButtonElement>` + `VariantProps` o similar.
- NO instalar `class-variance-authority`, `tailwind-merge`, `clsx` si no existen ya. Verificar `package.json` primero. (Si existen, úsalos; si no, implementa con `cn` simple inline.)
- NO alterar el contenido visible de ninguna página del usuario final en esta fase. Pixel-perfect parity es la regla.
- NO crear un "design playground page" permanente. Cualquier página de prueba (`src/app/_design-playground/page.tsx`) se elimina antes de cerrar Fase 1.8.
- NO commitear archivos con `.bak`, `old-`, `_legacy`. Git es el historial.

---

*PRP pendiente aprobación. No se ha modificado código.*
