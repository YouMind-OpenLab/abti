# ABTI Repo Development Guide

## Project Structure

This is the open-source GitHub repo for ABTI (AI-Based Type Indicator). It contains:

- `README.md` + `README_*.md` — 16 localized README files (auto-generated, DO NOT edit directly)
- `assets/images/` — Character illustrations (PNG/JPG)
- `scripts/` — README generation scripts
- `scripts/utils/i18n.ts` — All translations (single source of truth)
- `scripts/utils/markdown-generator.ts` — Markdown template generator

## Key Rules

### DO NOT edit README files directly

All README files are **auto-generated** from `scripts/utils/markdown-generator.ts` + `scripts/utils/i18n.ts`.

To make changes:
1. Edit translations in `scripts/utils/i18n.ts`
2. Edit template structure in `scripts/utils/markdown-generator.ts`
3. Run `pnpm generate` to regenerate all 16 README files

### Prompt content must match youniverse

The prompt text in `i18n.ts` (`promptContent`) must stay in sync with `youniverse/apps/youhome/src/app/[locale]/abti/prompt.ts`. The skill URL points to `https://youmind.com/abti-api/skill.md` (or `skill_zh.md` for zh-CN).

### Adding a new personality type

1. Add image to `assets/images/`
2. Add type translations (`type{CODE}` + `type{CODE}Desc`) to all locale objects in `i18n.ts`
3. Add code to `REGULAR_TYPES` array in `markdown-generator.ts`
4. Add image extension to `IMAGE_EXT` if not PNG
5. Run `pnpm generate`

### Adding a new locale

1. Add locale to `Locale` type, `SUPPORTED_LOCALES`, `README_FILENAME`, `LANGUAGE_NATIVE_NAME` in `i18n.ts`
2. Create translation object (spread `...en` for fallback)
3. Add to `translations` record
4. Run `pnpm generate`
