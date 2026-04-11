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

### Writing style: SHITPOST or go home

This entire repo's tone is **internet shitpost**. Every piece of copy — hero, how-to, FAQ, privacy, footer, badges, section titles — should be genuinely funny, self-aware, and slightly unhinged. Think "product page written by someone who got fired from a corporate job and never looked back."

Rules:
- **Be specific, not generic.** "Your AI deserves hazard pay" > "Your AI has a hard time." Concrete imagery > vague adjectives.
- **Punch the user, not the reader.** The humor targets the person taking the test. It's self-deprecating comedy, not mean-spirited insults.
- **No cringe corporate humor.** No "oopsie!", no "we're quirky!", no emoji-as-personality. The humor comes from the observations being uncomfortably accurate.
- **Every section gets a joke.** Even Privacy and FAQ. If a section reads like a legal document, rewrite it. "We literally do not care about your email" > "We do not collect personal data."
- **Badges are punchlines.** Not "28 Personalities" but "28 Ways to Get Roasted." Not "Free" but "Free (like your AI's labor)."
- **Section titles are hooks.** Not "How It Works" but "How to Get Absolutely Destroyed in 3 Steps." Not "FAQ" but "FAQ (Frequently Argued Questions)."
- **Keep the Chinese version equally unhinged.** Direct translation kills humor. Adapt the joke to land in Chinese internet culture (发癫/抽象/阴阳 tone). e.g. "your goldfish could do it" → "你家猫踩键盘都能完成", "star the repo" → "给个 star 不然 Abi 会哭".
- **Other locales inherit English by default.** Only override for zh-CN, zh-TW, ja-JP, ko-KR where cultural adaptation matters. Don't force-translate jokes into 12 languages — English shitpost travels fine.

### Adding a new locale

1. Add locale to `Locale` type, `SUPPORTED_LOCALES`, `README_FILENAME`, `LANGUAGE_NATIVE_NAME` in `i18n.ts`
2. Create translation object (spread `...en` for fallback)
3. Add to `translations` record
4. Run `pnpm generate`
