# Quiz Factory — README técnico

Pipeline CLI para generar quizzes CEC desde PDFs oficiales.

## Instalación

### Dependencias del sistema

```bash
# macOS (Homebrew)
brew install poppler

# Linux (Debian/Ubuntu)
sudo apt-get install poppler-utils

# Verificar
which pdftotext
# /opt/homebrew/bin/pdftotext  (macOS)
# /usr/bin/pdftotext           (Linux)
```

### Dependencias npm

Ya declaradas en `package.json` del proyecto:

```json
{
  "devDependencies": {
    "zod": "^4.x",
    "tsx": "^4.x"
  },
  "dependencies": {
    "@anthropic-ai/sdk": "^0.81.0"
  }
}
```

### Variables de entorno

En `.env.local` (gitignored):

```
ANTHROPIC_API_KEY=sk-ant-...
```

## Estructura

```
.claude/skills/quiz-factory/
├── SKILL.md                    # Trigger words y uso
├── README.md                   # Este archivo
├── scripts/
│   ├── generate-quiz.ts        # CLI entry point
│   ├── extract-rules.ts        # PDF → RuleChunk[]
│   ├── llm-analyze.ts          # Anthropic SDK + tool_use + cache
│   ├── validate.ts             # Zod + retry
│   ├── write-output.ts         # Writer append-safe
│   ├── cost-tracker.ts         # Contador de tokens/costo
│   └── types.ts                # RuleChunk, GeneratedQuestion
├── prompts/
│   ├── system.md               # System prompt (cached)
│   └── schema.json             # Tool_use JSON schema
└── tests/
    └── sample-rule-chunks.json # Fixtures regresión
```

## Flags del CLI

| Flag | Descripción |
|------|-------------|
| `--section N` | Número de sección (2, 4, 6, ..., 28). Obligatorio salvo `--all`. |
| `--all` | Procesa las 14 secciones con study guide aprobado. |
| `--overwrite` | Regenera desde cero (sobrescribe archivo existente). |
| `--dry-run` | Extract + LLM sin escribir output. |
| `--model <id>` | Override del modelo. Default: `claude-sonnet-4-6`. |
| `--verbose` | Log detallado por regla. |
| `--rule-filter A-B..C-D` | Procesa solo reglas en el rango (ej. `12-100..12-200`). |
| `--pdf-dir <path>` | Override del directorio de PDFs. Default: busca `fuentes/` walking up desde CWD. |
| `--help` | Muestra esta documentación. |

## Costo estimado

Con `claude-sonnet-4-6` + prompt caching:
- ~$1.79 por sección (150 reglas promedio)
- ~$25 total para las 14 secciones

Sin caching: ~$4.5 por sección = ~$63 total.

Opus 4.7 es ~5x más caro. Usar solo si Sonnet calidad no alcanza.

## Troubleshooting

**`pdftotext: command not found`** → Instalar poppler (ver arriba).

**`Section 30 PDF corrupto`** → Ya documentado en `memory/project/section-30-blocker.md`. Excluida del `--all`.

**`Rate limit (429)`** → El CLI aplica exponential backoff automático (1s → 2s → 4s → 8s, 4 intentos).

**`Zod validation failing repeatedly`** → La regla queda en `src/data/quizzes/_errors/section-XX-errors.jsonl` para review. Considera `--model claude-opus-4-7` para reglas complejas.

**`ANTHROPIC_API_KEY not set`** → Crear `.env.local` con la key. El CLI no la loggea nunca.

## Ver también

- PRP completo con decisiones arquitectónicas: `.claude/PRPs/quiz-factory.md`
