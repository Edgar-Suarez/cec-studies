---
name: quiz-factory
description: Pipeline CLI Node.js/TypeScript que genera preguntas de opción múltiple CEC a partir de PDFs en /fuentes/. Chunkea por Regla CEC, usa Claude (Anthropic SDK) con tool_use + prompt caching, valida con Zod, y escribe a src/data/quizzes/section-XX.ts. Trigger cuando el usuario dice "genera preguntas", "quizzes CEC", "quiz factory", "procesa el PDF X", o similar.
---

# Quiz Factory

Pipeline reproducible para generar evaluaciones CEC desde los PDFs oficiales.

## Regla fundamental
**Nunca inventar preguntas de memoria.** El pipeline solo genera preguntas de reglas explícitamente presentes en el PDF extraído. Si una regla es ambigua o el LLM falla validación 2 veces, la regla se skip y se loggea en `src/data/quizzes/_errors/section-XX-errors.jsonl` para review humano.

## Uso

```bash
# Procesar una sección
npx tsx .claude/skills/quiz-factory/scripts/generate-quiz.ts --section 12

# Dry-run (extract + LLM, no escribir archivo)
npx tsx .claude/skills/quiz-factory/scripts/generate-quiz.ts --section 12 --dry-run --verbose

# Rebuild forzado (sobrescribe preguntas existentes)
npx tsx .claude/skills/quiz-factory/scripts/generate-quiz.ts --section 12 --overwrite

# Filtrar por rango de reglas
npx tsx .claude/skills/quiz-factory/scripts/generate-quiz.ts --section 12 --rule-filter 12-100..12-200

# Upgrade a Opus si calidad Sonnet no alcanza
npx tsx .claude/skills/quiz-factory/scripts/generate-quiz.ts --section 12 --model claude-opus-4-7

# Procesar todas las secciones aprobadas (14 secciones pares 2-28)
npx tsx .claude/skills/quiz-factory/scripts/generate-quiz.ts --all
```

## Prerrequisitos

1. **poppler** (`pdftotext` CLI): `brew install poppler` (macOS) o `apt-get install poppler-utils` (Linux)
2. **ANTHROPIC_API_KEY** en `.env.local`
3. Dependencias npm: `zod`, `tsx`, `@anthropic-ai/sdk` (instaladas automáticamente con `npm install`)

## Alcance

Procesa solo secciones con study guide cargado:
**2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28** (14 secciones pares).

Exclusiones:
- Section 30 — PDF corrupto (ver `memory/project/section-30-blocker.md`)
- Secciones 32+ — PDFs no disponibles en `/fuentes/`

## Arquitectura

```
PDF (/fuentes/*.pdf)
  → pdftotext -layout -nopgbrk
  → regex chunker (por Regla CEC)
  → Anthropic SDK + tool_use + cache_control (system prompt cached)
  → Zod validator + cross-validation + retry loop
  → writer append-safe
  → src/data/quizzes/section-XX.ts
```

## Salida

- Preguntas válidas: `src/data/quizzes/section-XX.ts` (export default array tipado `Question[]`)
- Errores: `src/data/quizzes/_errors/section-XX-errors.jsonl` (una línea por regla fallida)

## Ver también

- PRP completo: `.claude/PRPs/quiz-factory.md`
- Tipos: `src/lib/types.ts` — `Question` con `ruleReference?` y `ruleComplexity?` opcionales
