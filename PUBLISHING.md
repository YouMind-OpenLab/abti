# Publishing Guide

This document describes how to publish new versions of the ABTI skill to [ClawHub](https://clawhub.com).

## Architecture Overview

| Layer | What | Where | How updated |
|-------|------|-------|-------------|
| **Skill** | `SKILL.md`, `README.md` | ClawHub | CI auto-publish on push to main |
| **Analysis Logic** | `skill.md` / `skill_zh.md` | youmind.com (API) | Updated independently |
| **Source Code** | `i18n.ts`, `markdown-generator.ts` | This repo | Edit here, `pnpm generate` |

## Auto-Publishing (CI)

When `SKILL.md` changes on `main`, GitHub Actions automatically:

1. Reads `version:` from SKILL.md frontmatter
2. Checks if this version is already on ClawHub (skips if so)
3. Publishes to ClawHub using `YOUMIND_CLAWHUB_TOKEN` (mindy-youmind account)

**To publish a new version:**

1. Edit files (`SKILL.md`, `i18n.ts`, etc.)
2. `pnpm generate` (if README content changed)
3. Bump `version:` in `SKILL.md` frontmatter
4. Commit & push to `main`

Done. CI handles the rest.

## Required GitHub Secret

| Secret | Account | Purpose |
|--------|---------|---------|
| `YOUMIND_CLAWHUB_TOKEN` | mindy-youmind | ClawHub publish token |

Add this in: GitHub repo → Settings → Secrets and variables → Actions → New repository secret

## Manual Publish (Fallback)

If CI fails or you want to publish manually:

```bash
npm install -g clawhub
clawhub login  # login as mindy-youmind

TMP_DIR=$(mktemp -d)
cp SKILL.md README.md package.json "$TMP_DIR/"

clawhub publish "$TMP_DIR" \
  --slug abti \
  --name "ABTI: AI-Based Type Indicator" \
  --version x.y.z \
  --changelog "what changed"

rm -rf "$TMP_DIR"
```

Or trigger manually via GitHub Actions → "Publish ABTI Skill to ClawHub" → Run workflow.

## When to Bump Version

| Change type | Bump | Example |
|-------------|------|---------|
| First publish | `1.0.0` | Initial release |
| Bug fix, doc improvement | Patch | `1.0.0` → `1.0.1` |
| New feature (new types, etc.) | Minor | `1.0.1` → `1.1.0` |
| Breaking change | Major | `1.1.0` → `2.0.0` |

## Installation Channels

### ClawHub
```bash
clawhub install abti
```

### skills.sh / Claude Code / Cursor / Codex
```bash
npx skills add YouMind-OpenLab/abti
```

### openskills
```bash
npx openskills install YouMind-OpenLab/abti
```

## Links

- ClawHub: https://clawhub.com/skill/abti
- Landing page: https://youmind.com/abti
- GitHub: https://github.com/YouMind-OpenLab/abti
