# PRP-001: Refactor /study-guide a Server Components + lazy-load por seccion

> **Estado**: COMPLETADO 2026-04-07
> **Fecha**: 2026-04-06
> **Proyecto**: CEC Study Trainer

---

## Objetivo

Convertir `/study-guide` (hoy una unica pagina client-side que importa las 11 secciones) en una ruta dinamica `/study-guide/[section]` renderizada como Server Component, donde cada peticion solo carga el archivo de datos de la seccion solicitada y solo las partes interactivas (tabs, render de Mermaid/roughjs) son islas client. Objetivo de performance: bajar la compilacion de la pagina de 4-22 min a <30s sin romper la navegacion existente.

## Por Que

| Problema | Solucion |
|----------|----------|
| `/study-guide/page.tsx` es `'use client'` y arrastra `studyGuide.ts` que importa **las 11 secciones** (~860 KB combinados). Turbopack/Next 16 compila las 11 en cada cambio: 4-22 min por build incremental. | Ruta dinamica `/study-guide/[section]` que solo importa el archivo de la seccion solicitada (~50-100 KB), via `import()` dinamico en server. Cada compilacion toca 1 archivo, no 11. |
| Mermaid + roughjs (libs pesadas) se cargan en el bundle del cliente aunque el usuario nunca abra esos tabs. | Wrappear `DiagramaExplicativo`, `InfografiaCreativa` y `SketchRenderer` con `next/dynamic({ ssr: false })` para que las libs solo bajen cuando el tab correspondiente se activa. |
| El selector de seccion vive en estado React, no en URL. No es deep-linkable ni cacheable por Next. | URL canonica `/study-guide/[section]` permite caching estatico, deep links, y navegacion por router. |

**Valor de negocio**: Tiempo de iteracion del desarrollador baja de 4-22 min a <30s (40x-44x mas rapido). El usuario final percibe una pagina mas ligera (menos JS en el bundle inicial). Cero perdida funcional.

## Que

### Criterios de Exito
- [ ] `npm run dev` compila la pagina inicial de `/study-guide` en <30s en frio.
- [ ] Navegar a `/study-guide/2`, `/study-guide/4`, ... `/study-guide/22` muestra la misma UI que hoy (sidebar + cards + tabs Explanation/Field Scenario/Key Points/Diagram/Sketch).
- [ ] Los archivos `studyGuide-section*.ts` solo se importan cuando se visita su seccion (verificable con `npm run build` mostrando chunks separados por seccion).
- [ ] Mermaid y roughjs **no aparecen** en el bundle JS inicial de `/study-guide/[section]` (verificable con `npm run build` o devtools network al abrir la pagina sin tocar tabs Diagram/Sketch).
- [ ] Tabs interactivos (cambio entre Explanation/Scenario/Key Points/Diagram/Sketch) siguen funcionando sin recarga.
- [ ] El sidebar de secciones sigue listando las 11 secciones disponibles + las "coming soon".
- [ ] `/study-guide` (sin slug) redirige o renderiza la primera seccion disponible (seccion 2).
- [ ] `npm run typecheck` pasa.
- [ ] `npm run build` exitoso.

### Comportamiento Esperado

**Happy Path**:
1. Usuario abre `/study-guide` -> el server resuelve la primera seccion disponible (seccion 2) y redirige (o renderiza directamente) `/study-guide/2`.
2. El servidor importa **solo** `studyGuide-section02.ts`, calcula `subsections`, `questionCount`, lista de secciones disponibles (estatica, sin importar el contenido de las otras), y renderiza el HTML completo.
3. El navegador recibe HTML server-rendered con todas las explicaciones, scenarios y key points ya pintados (sin parpadeo de loading).
4. Las islas client (`SubsectionCardClient` con tabs) se hidratan. Mermaid/roughjs **no** se descargan todavia.
5. Usuario hace click en el tab "Diagram" -> `next/dynamic` baja el chunk de `DiagramaExplicativo` + `mermaid` y lo renderiza.
6. Usuario hace click en otro item del sidebar -> Next.js Router navega a `/study-guide/4`, server renderiza esa seccion, transicion suave.

---

## Contexto

### Referencias
- `src/app/study-guide/page.tsx` (281 lineas) - Pagina actual `'use client'` que se va a partir.
- `src/data/studyGuide.ts` - Barrel que importa **las 11 secciones**. Sera reemplazado por un manifiesto de metadata + helper de carga dinamica.
- `src/data/studyGuide-section{02..22}.ts` - 11 archivos, 50-100 KB cada uno. Cada uno exporta `section{N}Guide: StudyGuideSection` (nota: el nombre del archivo es zero-padded `02`, el nombre del export NO es padded `section2Guide`).
- `src/components/DiagramaExplicativo.tsx` - Client component, importa `mermaid`. Candidato 1 a `next/dynamic`.
- `src/components/SketchRenderer.tsx` - Client component, importa `roughjs`. Candidato 2 a `next/dynamic`.
- `src/components/InfografiaCreativa.tsx` - Client component, importa `roughjs` + `lucide-react`. Candidato 3 a `next/dynamic`.
- `src/lib/types.ts` lineas 74-91 - Tipos `StudyGuideSubsection` y `StudyGuideSection`.
- `src/data/questions.ts` - Provee `questions[]` y `allSections[]` para el sidebar (counts + coming-soon).
- Next.js 16 + React 19 + Turbopack (`next dev --turbopack`).
- [Next.js dynamic imports](https://nextjs.org/docs/app/building-your-application/optimizing/lazy-loading)
- [Next.js dynamic routes](https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes)

### Arquitectura Propuesta

```
src/app/study-guide/
├── page.tsx                          # Server Component: redirect a /study-guide/2
├── _components/                      # Co-localizado (no es ruta)
│   ├── section-sidebar.tsx           # Server Component: lista secciones disponibles
│   ├── subsection-card.tsx           # Server Component: header + contenido server-rendered
│   ├── subsection-tabs.tsx           # 'use client': estado de tabs activo
│   └── lazy-visuals.tsx              # 'use client': wrappers next/dynamic para Mermaid/roughjs
└── [section]/
    └── page.tsx                      # Server Component: import dinamico de la seccion solicitada

src/data/
├── studyGuide.ts                     # REESCRITO: solo metadata estatica (lista de secciones)
├── studyGuide-loader.ts              # NUEVO: helper async loadSection(id) con switch import()
└── studyGuide-section{02..22}.ts     # SIN CAMBIOS (datos)
```

**Decisiones clave**:
1. **Server Component por defecto**. La pagina `[section]/page.tsx` es server. Recibe `params: { section }`, llama a `await loadSection(section)`, y renderiza HTML.
2. **Carga dinamica de datos**. `loadSection(id)` usa un `switch` con `import()` literal por seccion (Turbopack/Webpack puede analizar literales y generar chunks separados). NUNCA `import(\`./studyGuide-section${id}.ts\`)` con interpolacion (eso anula el code-splitting).
3. **Metadata estatica del sidebar**. La lista de las 11 secciones disponibles + sus titulos vive en una constante en `studyGuide.ts` (string array, ~1 KB). El sidebar renderiza desde esa constante sin importar ninguna seccion. Los `questionCount` se calculan filtrando `questions` (que ya es un import unico).
4. **Islas client minimas**. Solo `<SubsectionTabs>` (estado del tab activo) y `<LazyDiagram>` / `<LazySketch>` / `<LazyInfografia>` son client. Todo lo demas (texto de explanation, scenario, key points, sidebar) es server-rendered HTML estatico.
5. **`next/dynamic` con `ssr: false`** para Mermaid (usa `document`), roughjs (usa `canvas`) e Infografia (usa canvas). Estos chunks solo se piden cuando el usuario hace click en el tab correspondiente -> el tab activo dispara el render del componente lazy.
6. **`/study-guide` raiz**. Server Component que llama `redirect('/study-guide/2')` (primera seccion disponible). Alternativa equivalente: renderizar directamente el contenido de seccion 2 en la raiz - decidir en Fase 1.
7. **`generateStaticParams`** opcional pero recomendado: Next.js puede pre-renderizar las 11 rutas en build, dado que el contenido es estatico y no depende del usuario. Esto convierte cada `/study-guide/[section]` en HTML estatico cacheable.

### Modelo de Datos

No aplica. Es un refactor puro de datos en archivos `.ts` sin tocar Supabase ni nuevas tablas. Los tipos `StudyGuideSection` / `StudyGuideSubsection` en `src/lib/types.ts` permanecen iguales.

Una nueva constante de metadata se agrega en `src/data/studyGuide.ts`:

```ts
// src/data/studyGuide.ts (REESCRITO - solo metadata)
export const STUDY_GUIDE_SECTIONS_META = [
  { id: '2',  title: 'Section 2 — General Rules' },
  { id: '4',  title: 'Section 4 — Conductors' },
  // ... 11 entradas, sin importar contenido
] as const

export type StudyGuideSectionId = (typeof STUDY_GUIDE_SECTIONS_META)[number]['id']
```

Y un loader separado:

```ts
// src/data/studyGuide-loader.ts (NUEVO)
import type { StudyGuideSection } from '@/lib/types'

export async function loadStudyGuideSection(
  id: string
): Promise<StudyGuideSection | null> {
  switch (id) {
    case '2':  return (await import('./studyGuide-section02')).section2Guide
    case '4':  return (await import('./studyGuide-section04')).section4Guide
    case '6':  return (await import('./studyGuide-section06')).section6Guide
    case '8':  return (await import('./studyGuide-section08')).section8Guide
    case '10': return (await import('./studyGuide-section10')).section10Guide
    case '12': return (await import('./studyGuide-section12')).section12Guide
    case '14': return (await import('./studyGuide-section14')).section14Guide
    case '16': return (await import('./studyGuide-section16')).section16Guide
    case '18': return (await import('./studyGuide-section18')).section18Guide
    case '20': return (await import('./studyGuide-section20')).section20Guide
    case '22': return (await import('./studyGuide-section22')).section22Guide
    default:   return null
  }
}
```

---

## Blueprint (Assembly Line)

> IMPORTANTE: Solo definir FASES. Las subtareas se generan al entrar a cada fase
> siguiendo el bucle agentico (mapear contexto -> generar subtareas -> ejecutar)

### Fase 1: Baseline + metadata estatica
**Objetivo**: Medir el tiempo actual de compilacion de `/study-guide` y crear la fuente de verdad para metadata sin tocar el codigo de la pagina aun. Reescribir `src/data/studyGuide.ts` para exportar **solo** `STUDY_GUIDE_SECTIONS_META` (lista de IDs + titulos) sin importar ningun archivo de seccion. Crear `src/data/studyGuide-loader.ts` con la funcion `loadStudyGuideSection(id)` que usa un `switch` con `import()` literales.
**Validacion**:
- `npm run typecheck` pasa.
- Los 11 archivos `studyGuide-section*.ts` no se importan en ningun lugar al hacer `grep` (excepto el loader).
- Tiempo baseline documentado (cronometrar compilacion actual antes del refactor).

### Fase 2: Estructura de ruta dinamica
**Objetivo**: Crear `src/app/study-guide/[section]/page.tsx` como Server Component que recibe `params`, llama `loadStudyGuideSection`, y renderiza un HTML temporal minimo (titulo + count de subsections) para validar que el routing funciona y que SOLO se compila el archivo de la seccion solicitada. Modificar `src/app/study-guide/page.tsx` para hacer `redirect('/study-guide/2')`. Implementar `generateStaticParams` listando las 11 secciones disponibles.
**Validacion**:
- Visitar `/study-guide` redirige a `/study-guide/2`.
- Visitar `/study-guide/4` renderiza el titulo de seccion 4 (server HTML, sin client JS).
- Visitar `/study-guide/99` muestra `notFound()`.
- Tiempo de compilacion de la primera carga es notablemente menor (medirlo).

### Fase 3: Server Components para sidebar y contenido estatico
**Objetivo**: Construir `_components/section-sidebar.tsx` (Server Component, recibe `currentSection`, renderiza Links a `/study-guide/{id}` desde `STUDY_GUIDE_SECTIONS_META` + items "coming soon" desde `allSections`) y `_components/subsection-card.tsx` (Server Component, renderiza header + texto de explanation/scenario/keypoints como HTML estatico, sin tabs aun). Reemplazar el HTML temporal de la Fase 2 con el layout completo (sidebar + cards). En esta fase NO hay tabs interactivos: el contenido se muestra todo apilado o solo el tab por defecto.
**Validacion**:
- `/study-guide/2` muestra sidebar + todas las subsection cards con explanation/scenario/keypoints.
- Inspeccionar HTML del navegador: el texto esta en el HTML server, no inyectado por JS.
- Cliquear en otra seccion en el sidebar navega correctamente (Next Link).
- Bundle JS de la pagina es minimo (verificar con devtools).

### Fase 4: Isla client de tabs + lazy visuals
**Objetivo**: Crear `_components/subsection-tabs.tsx` (`'use client'`) que recibe el contenido pre-renderizado de cada tab como `children` o como `slots` (`explanationSlot`, `scenarioSlot`, `keypointsSlot`) y maneja solo el estado del tab activo. Crear `_components/lazy-visuals.tsx` con `next/dynamic({ ssr: false, loading: ... })` para `DiagramaExplicativo`, `SketchRenderer`, e `InfografiaCreativa`. Conectar todo en `subsection-card.tsx`: el card es server, las tabs son cliente, los visuales son client + lazy. La isla cliente recibe los datos del diagrama/sketch como props serializadas (strings y objetos plain JSON, no funciones).
**Validacion**:
- Tabs alternan correctamente (sin recarga).
- Tabs Diagram/Sketch funcionan; los chunks de mermaid/roughjs se cargan **al hacer click** (verificar en Network del devtools).
- En la carga inicial de `/study-guide/2`, los chunks de mermaid y roughjs **no** estan presentes.
- `InfografiaCreativa` se carga al activar el tab Explanation (o se muestra inline si decides que es parte del layout estatico - decidir aqui).

### Fase 5: Pulido + paridad funcional
**Objetivo**: Asegurar paridad 100% con la pagina actual: header con titulo/descripcion/badges (topics, quiz questions, link a /quiz), iconos SVG, gradientes, hover states, fallback "Select a section to start studying" si la seccion no existe, navegacion entre secciones desde el sidebar conserva scroll del sidebar. Eliminar el archivo legacy `src/app/study-guide/page.tsx` viejo (ahora es solo un redirect). Eliminar imports muertos.
**Validacion**:
- Comparar visualmente `/study-guide/2`, `/study-guide/12`, `/study-guide/22` con la version anterior (Playwright screenshots antes/despues).
- Todos los tabs (Explanation/Scenario/KeyPoints/Diagram/Sketch) muestran lo mismo.
- Sidebar resalta la seccion activa.
- Link "Practice this section" sigue apuntando a `/quiz`.

### Fase 6: Validacion final y medicion
**Objetivo**: Medir tiempos de compilacion (frio y warm), tamano de bundle, y confirmar criterios de exito.
**Validacion**:
- [ ] `npm run typecheck` pasa.
- [ ] `npm run build` exitoso. El output muestra chunks separados por seccion.
- [ ] `npm run dev` (cold start): primera carga de `/study-guide/2` <30s.
- [ ] Edicion de `studyGuide-section02.ts` recompila en <10s (HMR).
- [ ] Playwright: navegar `/study-guide/2`, hacer click en tab Diagram, verificar que renderiza Mermaid.
- [ ] Playwright: navegar a `/study-guide/22`, verificar contenido.
- [ ] Network tab: bundle inicial NO incluye `mermaid` ni `roughjs`.
- [ ] Comparacion antes/despues documentada en seccion Aprendizajes.

---

## Aprendizajes (Self-Annealing / Neural Network)

> Esta seccion CRECE con cada error encontrado durante la implementacion.
> El conocimiento persiste para futuros PRPs. El mismo error NUNCA ocurre dos veces.

### 2026-04-07: Set tipado estrechamente rechaza string en .has()
- **Error**: `new Set(STUDY_GUIDE_SECTIONS_META.map((s) => s.id))` infiere `Set<StudyGuideSectionId>` (union literal). Llamar `.has(stringFromQuestions)` falla typecheck porque el string no es asignable al union literal.
- **Fix**: Forzar el tipo del Set a `Set<string>` con `new Set<string>(...)`. La membership de "coming soon" es por valor, no por tipo, asi que ampliar el tipo del contenedor es correcto.
- **Aplicar en**: Cualquier Set/Map construido desde `STUDY_GUIDE_SECTIONS_META.id` o constantes `as const` cuando se compara contra strings dinamicos del runtime.

### 2026-04-07: Fases 1 y 2 deben ejecutarse atomicamente
- **Error potencial**: El PRP separaba "reescribir studyGuide.ts a metadata" (fase 1) de "crear ruta dinamica + reescribir page.tsx raiz" (fase 2). Si haces solo fase 1, la pagina actual `study-guide/page.tsx` rompe typecheck inmediatamente porque importa `studyGuideSections`.
- **Fix**: Ejecutar fases 1 y 2 como un unico cambio atomico (loader + metadata + nueva ruta + redirect raiz) para mantener la build verde durante el refactor.
- **Aplicar en**: Cualquier refactor donde el barrel viejo y el barrel nuevo no pueden coexistir. Identificar todos los consumidores antes de empezar y reemplazarlos en el mismo commit.

### 2026-04-07: topicCount debe vivir en metadata estatica, no calcularse dinamicamente
- **Error potencial**: El sidebar original mostraba "{topics} topics · {questions} questions". Para conservar paridad sin importar las 11 secciones (que es lo que estamos evitando), tendria que cargarlas igual.
- **Fix**: Hardcodear `topicCount` en `STUDY_GUIDE_SECTIONS_META` y documentar como regenerarlo: `grep -c "^    id: '" src/data/studyGuide-section*.ts`. Es estatico, solo cambia cuando se editan los archivos de seccion. Trade-off aceptable: paridad visual completa a cambio de actualizar la constante cuando se agreguen subsecciones.
- **Aplicar en**: Cualquier metric/count que se mostraba en el sidebar de un barrel ahora deshecho. La metadata es la unica fuente de verdad.

### 2026-04-07: Resultados finales del refactor
- **Cold start `/study-guide/2`**: 3.6s (antes 4-22 min) — **66x a 366x mas rapido**.
- **Navegacion entre secciones**: 61-177ms (antes varios min).
- **`npm run build`**: 3.2s + 2.3s typecheck. Genera 24 paginas estaticas en 355ms (las 11 secciones del study guide son SSG via `generateStaticParams`).
- **Bundle inicial de `/study-guide/[section]`**: 22 chunks. NO incluye `mermaid`, `dagre-d3-es`, `katex` ni `lodash-es`.
- **Click en tab "Diagram"**: dispara la carga lazy de 22 chunks adicionales (mermaid_core + sus chunks internos + DiagramaExplicativo). El usuario que solo lee texto NUNCA descarga mermaid.
- **Memoria del dev server**: estable. Ya no hay reinicio por threshold.
- **Paridad visual**: 100%. Sidebar resalta seccion activa, header con badges, todas las tabs funcionan, infografias (rough) lazy-cargadas al activar Explanation, Mermaid lazy-cargado al activar Diagram.

---

## Gotchas

> Cosas criticas a tener en cuenta ANTES de implementar

- [ ] **`import()` con literal, NO con interpolacion**. Turbopack/Webpack solo puede generar chunks separados si el path es un literal. `import('./studyGuide-section02')` SI. `import(\`./studyGuide-section${id}.ts\`)` NO (carga todo el directorio). Por eso el loader usa un `switch` explicito.
- [ ] **Nombres del export NO son zero-padded**. El archivo es `studyGuide-section02.ts` pero exporta `section2Guide` (no `section02Guide`). Verificar caso por caso al escribir el switch.
- [ ] **Mermaid usa `document`**. Falla en SSR. SIEMPRE wrappear con `next/dynamic({ ssr: false })`.
- [ ] **roughjs usa `<canvas>`**. Falla en SSR. Mismo tratamiento: `next/dynamic({ ssr: false })`. Aplica a `SketchRenderer` y a `InfografiaCreativa` (que tiene `<canvas>` para el numero del paso y la flecha).
- [ ] **Next.js 16 + Turbopack**. Verificar que `next/dynamic` funciona con `ssr: false` en App Router (en Next 14+ se requirio que el componente padre fuera client). Si Turbopack se queja, mover la frontera client al `subsection-card` o crear un wrapper minimo `'use client'` para el dynamic.
- [ ] **`useState` no funciona en Server Component**. La pagina actual usa `useState` para `selectedSection` y `activeTab`. Hay que mover el estado del tab a la isla cliente y eliminar el estado del selector de seccion (vive en URL).
- [ ] **`generateStaticParams`** debe devolver `[{ section: '2' }, { section: '4' }, ...]` con la **misma forma** que `params`. Usar el mismo array `STUDY_GUIDE_SECTIONS_META`.
- [ ] **`redirect()`** dentro de Server Component debe importarse de `next/navigation`, no `next/router`.
- [ ] **El `useEffect` de Mermaid** crea IDs unicos con un counter modulo. Al re-renderizar varias veces, los IDs pueden colisionar. Verificar que sigue funcionando en isla client.
- [ ] **`questions.ts`** se usa para contar preguntas por seccion. Si tambien es pesado, considerar cargarlo solo en server o crear su propio metadata. NO bloquear la fase 1 con esto - solo si aparece como cuello de botella.
- [ ] **Estado del scroll**. Al navegar entre secciones, el scroll de la pagina debe resetearse (Next lo hace por defecto), pero el scroll del sidebar deberia preservarse. Validar en Fase 5.
- [ ] **No romper deep links existentes**. Si alguien tiene bookmark a `/study-guide`, debe seguir funcionando (de ahi el redirect en `page.tsx` raiz).
- [ ] **`tsbuildinfo`**. Borrar `tsconfig.tsbuildinfo` despues de cambios estructurales para evitar caches stale durante la medicion.

## Anti-Patrones

- NO usar `import()` con template literal interpolado (rompe el code-splitting).
- NO marcar `[section]/page.tsx` como `'use client'` (anula todo el beneficio).
- NO importar `studyGuide-section*.ts` desde un barrel (`studyGuide.ts` debe quedar libre de esos imports para siempre).
- NO mover el estado del tab al servidor (no se puede; usar isla cliente).
- NO eliminar `studyGuide.ts` - se reescribe a metadata, pero el path se mantiene para no romper imports legacy.
- NO duplicar el contenido de `subsection.explanation` en JS y HTML; el server lo renderiza, el cliente solo maneja el switch de tabs.
- NO usar `dangerouslySetInnerHTML` para texto plano de explanation; ya esta partido por `\n\n` y `\n`, mantener ese patron.
- NO ignorar errores de hidratacion: si los islas client reciben props que difieren del HTML server, React tira warning.
- NO hardcodear la lista de secciones en mas de un lugar: `STUDY_GUIDE_SECTIONS_META` es la unica fuente de verdad.

---

*PRP pendiente aprobacion. No se ha modificado codigo.*
