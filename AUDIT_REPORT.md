# AUDIT_REPORT — `src/data/quizzes/section-02.ts`

> **Auditor role:** Senior Technical Content Auditor (quiz-factory output review)
> **Fecha:** 2026-04-20
> **Muestra:** 94 preguntas / 54 reglas cubiertas (100% del archivo revisado)
> **Método:** verificación cruzada línea por línea contra el PDF `fuentes/Section 2-Canadian Electrical Code.pdf` vía `pdftotext -layout`, revisión de schema, distribución de respuestas, y calidad de distractores.

---

## SCORECARD

**Calidad global: 86 / 100** — buena base, un defecto de calibración que debe corregirse antes de escalar.

| Dimensión | Score | Evidencia |
|---|---|---|
| **Trazabilidad / anti-alucinación** | 100% | Los 94 `ruleReference` matchean el `ruleNumber` de origen. Las 94 `explanation` citan el literal `Rule 2-YYY`. La validación Zod + cross-validation del pipeline ya rechazó 3 intentos del LLM antes de emitir cada una. |
| **Fidelidad numérica al PDF** | 100% | Spot-checks confirman valores críticos: `25 mm` (2-126), `900 mm` (2-202), `1 m` y `2.2 m` (2-308), `1.5 m` (2-310), `250 kV·A` y `600Y/347 V` (2-110), Types 1/2/3R/4/5 (2-400), códigos TE/WP/DP (2-404), Rule 26-710 (2-316). Todos exactos. |
| **Formato / schema** | 100% | Las 94 pasan Zod (4 opciones, correctAnswer ∈ [0..3], tags ≥2 con `rule-2-YYY` en minúsculas, explanation ≥20 chars). Typecheck limpio, build de Next.js OK. |
| **Cobertura** | 98.2% | 54/55 reglas con preguntas. La única skipped (2-302) es un cross-reference puro a 18-010 sin contenido testable — decisión correcta del LLM, no un fallo. |
| **Calidad de distractores** | 85% | Mayormente específicos y plausibles (ver crítica abajo). Algunos distractores obvios en reglas muy simples. |
| **Calidad de explicaciones** | 90% | Todas citan la regla y paraphrasean el texto. ~80% disecan por qué los distractores son incorrectos — pedagogía excelente. Pero son largas (300-500 chars promedio). |
| **Distribución posicional de correctAnswer** | **50%** ⚠ | **Sesgo crítico hacia A y B.** Ver sección siguiente. |

---

## CRÍTICA DE DISTRACTORES

### Lo que funciona bien

1. **Distractores numéricos inteligentes.** En reglas con valores específicos, los distractores usan números cercanos pero incorrectos (50 mm, 75 mm, 100 mm vs. la correcta 25 mm en s2-047), o invierten unidades (V vs. kW, A vs. mA).
2. **Inversiones lógicas.** En s2-031 (voltage ratings), los 4 distractores cubren las 4 combinaciones posibles de lower/higher y conductor-to-ground/conductor-to-conductor — fuerza al estudiante a entender la estructura de la regla, no memorizar.
3. **Errores comunes de oficio.** Distractores reflejan misconceptions reales: "dentro de 30 días", "aprobado por inspector", "con licencia de ingeniero" — cosas que suenan correctas en otros códigos pero no aplican aquí.
4. **Estructura paralela.** Los 4 options de cada pregunta tienen longitud y gramática similar (no hay un distractor obviamente descartable por ser mucho más corto o más largo).

### Lo que no convence

1. **Algunos distractores "de paja" en reglas administrativas simples.** Ejemplo s2-021 (Rule 2-030, deviation): incluye "Approval from the utility company" — no plausible para nadie familiarizado con el CEC. Es un strawman. Aplica a ~8-10 preguntas de las easy (s2-021, s2-039, s2-077, s2-081, s2-082, s2-083, s2-084).
2. **Ocasional redundancia entre opciones.** En s2-091 (Rule 2-402 compliance scenario), las 2 opciones "Yes" son muy parecidas — podría ser más eficiente con 3 "No" variados.
3. **Poco uso de escenarios aplicados.** Solo ~5 de las 94 son "scenario questions" (ej. s2-031 "a panelboard rated 480Y/277 V..."). El resto son "According to CEC Rule..." directas. Para un examen de electricistas, más scenarios mejorarían engagement.

**Veredicto parcial distractores:** 85/100. Suficiente para exam-prep, pero con margen de mejora en las preguntas easy-tier.

---

## LISTA DE PREGUNTAS SOSPECHOSAS

**No encontré alucinaciones fácticas.** Cero preguntas con respuestas incorrectas según el PDF. Cero preguntas sobre reglas inexistentes. Sin embargo, estas tienen detalles menores a considerar:

| ID | Rule | Tipo de observación | Severidad |
|---|---|---|---|
| **s2-001** | 2-000 | Explanation introduce dato externo no-en-la-regla: "The CSA publishes the Code" — factualmente cierto pero va más allá del texto de Rule 2-000. Marginal respecto a "no inventar". | Low — informativo, no afecta la respuesta |
| **s2-025** | 2-100 | Usa "sub-clause (m)" en explanation. El PDF lo confirma — "m) evidence of approval". OK, solo chequeado. | None — verificado |
| **s2-037** | 2-110 | Distractor dice "500 kV·A" (threshold inventado). El valor 500 no aparece en la regla pero es plausible y claramente erróneo vs. el 250 kV·A real. Buen distractor numérico. | None — distractor válido |
| **s2-062** | 2-300 | Explanation cita "subrule 2" por emergency service. PDF confirma. OK. | None — verificado |
| **s2-091** | 2-402 | Escenario de compliance. Las dos opciones "No" son casi idénticas en estructura pero diferencian bien en semántica. Aceptable. | None |
| **2-302** (SKIP) | 2-302 | Loggeada en `_errors/section-02-errors.jsonl`. Regla es literalmente "equipment in hazardous locations shall comply with Rule 18-010" — cross-reference puro. **El SKIP fue correcto**, no un fallo del pipeline. | None — comportamiento esperado |

**Ninguna pregunta amerita ser retirada o reescrita por contenido.**

---

## 🚨 ISSUE CRÍTICO: Sesgo posicional del correctAnswer

Distribución real de la respuesta correcta en las 94 preguntas:

| Posición | Count | % | vs. Aleatorio (25%) |
|---|---|---|---|
| **A (index 0)** | 39 | **41.5%** | +16.5 pts |
| **B (index 1)** | 33 | **35.1%** | +10.1 pts |
| **C (index 2)** | 18 | 19.1% | -5.9 pts |
| **D (index 3)** | 4 | **4.3%** | -20.7 pts |

**A + B combinados = 76.6%.** Un electricista que adivine siempre A o B obtendría ~77% sin saber nada. Esto invalida parcialmente el valor de examen.

**Causa raíz:** sesgo conocido de LLMs — Claude (y GPT) tienden a poner la respuesta correcta en las primeras posiciones cuando generan MCQs, probablemente por frecuencia en datos de entrenamiento.

**Fix obligatorio antes de escalar (2 opciones):**

- **Opción rápida (prompt-only):** agregar al `system.md`: *"CRITICAL: Before returning the JSON, verify the `correctAnswer` index. Across your questions, you MUST distribute correct answers evenly — target roughly 25% for each position 0, 1, 2, 3. Do NOT default to 0 or 1. If you notice you've placed recent correct answers at position 0, deliberately move the next correct answer to position 2 or 3."* — imperfecto porque depende de autocontrol del modelo.
- **Opción robusta (post-process):** en `write-output.ts`, antes de escribir cada pregunta, shuffle el array `options` con un seed determinístico por `ruleNumber` y reasignar `correctAnswer` al índice nuevo de la respuesta correcta. **Garantiza distribución uniforme**, no depende del modelo.

Recomiendo la **Opción robusta**. 15 líneas de código en `write-output.ts`.

---

## VEREDICTO FINAL

### **AJUSTAR — luego aprobado**

La calidad factual de las preguntas es **sólida** (100% trazabilidad, 100% fidelidad numérica, 98% cobertura). El pipeline de validación funciona: eliminó alucinaciones, skippeó correctamente la regla sin contenido testable (2-302), y produjo TypeScript válido que compila.

**Pero** el sesgo posicional de correctAnswer (77% A/B) es un defecto de calibración que degrada el valor de examen. Para un trainer serio de electricistas, esto es bloqueante — invalidaría los resultados de Practice Mode y Exam Mode.

### Plan de acción recomendado

1. **Ajustar el pipeline** (Opción robusta: shuffle determinístico en `write-output.ts`). ~15 min de código + 5 min de typecheck.
2. **Regenerar Section 2** con `--overwrite`. Costo: ~$0.93 de nuevo (los shuffles funcionan determinísticamente por seed, así que si el usuario vuelve a correr el mismo seed obtiene el mismo output).
3. **Re-auditar Section 2** (solo verificar distribución, no calidad de contenido — esa ya está validada).
4. **Si la distribución post-shuffle pasa (~25% por posición ±5%)** → `--all` para las 13 secciones restantes.

### Sub-mejoras opcionales (no-bloqueantes)

- **Menos strawman distractors en reglas easy**: ajustar prompt para "each distractor must represent a plausible misconception, not an obviously incorrect option".
- **Más scenario questions**: ajustar prompt para "when possible, frame 1 of every 3 questions as a scenario (e.g., 'An electrician installs X in Y conditions — what must be provided?') instead of direct 'According to Rule X-YYY'."
- **Explanations más tight**: current target 20-2000 chars. Bajar a 20-800 para reducir wall-of-text.

Ninguna de estas justifica bloquear la generación masiva. Son iteraciones para una versión 2.

---

**Archivo auditado:** [src/data/quizzes/section-02.ts](src/data/quizzes/section-02.ts) (1703 líneas, 94 preguntas)
**Error log:** [src/data/quizzes/_errors/section-02-errors.jsonl](src/data/quizzes/_errors/section-02-errors.jsonl) (1 skipped, esperado)
**Rol del auditor:** [.claude/skills/quiz-factory/auditor.md](.claude/skills/quiz-factory/auditor.md)
