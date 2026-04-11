// ============================================================
// Markdown 模板生成器
// ============================================================

import {
  type Locale,
  type Translation,
  SUPPORTED_LOCALES,
  README_FILENAME,
  LANGUAGE_NATIVE_NAME,
  getSkillUrl,
  translations,
  t,
} from './i18n.js';

const REGULAR_TYPES = [
  'CUSS', 'CLIENT', 'YAPPER', 'DRY', 'ASAP', 'VENT', 'BLESS', 'DEEP',
  'HIRE', 'SPOON', 'YOLO', 'IDC', 'LOOP', 'EMO', 'SON', 'NERD',
  'SHADE', 'TROLL', 'CORP', 'HYPE', 'PATCH', 'SORRY', 'SIMP', 'PUA',
] as const;

const HIDDEN_TYPE_COUNT = 4;

const IMAGE_EXT: Record<string, string> = {
  CORP: 'jpg', DRY: 'jpg', NERD: 'jpg', SON: 'jpg',
  SPOON: 'jpg', YOLO: 'jpg',
};

function typeImage(code: string): string {
  const ext = IMAGE_EXT[code] || 'png';
  return `<img src="assets/images/${code.toLowerCase()}.${ext}" width="60">`;
}

function generateLanguageNav(currentLocale: Locale): string {
  const links = SUPPORTED_LOCALES.map((loc) => {
    const name = LANGUAGE_NATIVE_NAME[loc];
    const file = README_FILENAME[loc];
    if (loc === currentLocale) {
      return `**${name}**`;
    }
    return `[${name}](${file})`;
  });
  return links.join(' | ');
}

function generateHeader(locale: Locale): string {
  const T = translations[locale];
  return `# 🎭 ${T.title}

[![](https://img.shields.io/badge/${encodeURIComponent(T.badgePersonalities)}-purple)]()
[![](https://img.shields.io/badge/${encodeURIComponent(T.badgeFree)}-brightgreen)]()
[![](https://img.shields.io/badge/${encodeURIComponent(T.badgeNoSignup)}-blue)]()
[![](https://img.shields.io/badge/${encodeURIComponent(T.badgePrivate)}-orange)]()

${generateLanguageNav(locale)}

${T.landingCta}

---

> **${T.heroTitle}**
>
> ${T.heroSubtitle}

${T.heroDescription}`;
}

function generateWhatIs(locale: Locale): string {
  const T = translations[locale];
  return `## ${T.whatIsTitle}

${T.whatIsP1}

${T.whatIsP2}

${T.whatIsP3}`;
}

function generateHowTo(locale: Locale): string {
  const T = translations[locale];
  return `## ${T.howToTitle}

### ${T.step1Title}

${T.step1Desc}

### ${T.step2Title}

${T.step2Desc}

### ${T.step3Title}

${T.step3Desc}`;
}

function generatePrompt(locale: Locale): string {
  const T = translations[locale];
  const skillUrl = getSkillUrl(locale);
  const promptText = T.promptContent.replace('{{SKILL_URL}}', skillUrl);

  return `## ${T.promptSectionTitle}

> ${T.promptHint}

\`\`\`
${promptText}
\`\`\``;
}

function generateRegularTypes(locale: Locale): string {
  const T = translations[locale];
  const header = `| ${T.colCode} | | ${T.colName} | ${T.colDescription} |
|------|------|------|------|`;

  const rows = REGULAR_TYPES.map((code) => {
    const name = t(`type${code}` as keyof Translation, locale);
    const desc = t(`type${code}Desc` as keyof Translation, locale);
    return `| **${code}** | ${typeImage(code)} | ${name} | ${desc} |`;
  });

  return `### ${T.regularTitle}

${header}
${rows.join('\n')}`;
}

function generateHiddenTypes(locale: Locale): string {
  const T = translations[locale];
  const rows = Array.from({ length: HIDDEN_TYPE_COUNT }, () => '- ???').join('\n');
  return `### ${T.hiddenTitle}

${rows}`;
}

function generateTypes(locale: Locale): string {
  const T = translations[locale];
  return `## ${T.typesTitle}

${T.typesSubtitle}

${generateRegularTypes(locale)}

${generateHiddenTypes(locale)}`;
}

function generatePrivacy(locale: Locale): string {
  const T = translations[locale];
  return `## 🔒 ${T.privacyTitle}

- ${T.privacyP1}
- ${T.privacyP2}
- ${T.privacyP3}
- ${T.privacyP4}`;
}

function generateFAQ(locale: Locale): string {
  const T = translations[locale];
  return `## ${T.faqTitle}

<details>
<summary><strong>${T.faqQ1}</strong></summary>

${T.faqA1}
</details>

<details>
<summary><strong>${T.faqQ2}</strong></summary>

${T.faqA2}
</details>

<details>
<summary><strong>${T.faqQ4}</strong></summary>

${T.faqA4}
</details>

<details>
<summary><strong>${T.faqQ5}</strong></summary>

${T.faqA5}
</details>`;
}

function generateFooter(locale: Locale): string {
  const T = translations[locale];
  return `## ${T.linksTitle}

- 🌐 [${T.linkLanding}](https://youmind.com/abti)
- 📦 [${T.linkGitHub}](https://github.com/YouMind-OpenLab/abti)

---

**${T.footerPoweredBy}** · ${T.footerDisclaimer}

⭐ ${T.footerStar}`;
}

// ============================================================
// 导出：生成完整 README
// ============================================================

export function generateReadme(locale: Locale): string {
  const sections = [
    generateHeader(locale),
    generateWhatIs(locale),
    generateHowTo(locale),
    generatePrompt(locale),
    generateTypes(locale),
    generatePrivacy(locale),
    generateFAQ(locale),
    generateFooter(locale),
  ];

  return sections.join('\n\n---\n\n') + '\n';
}
