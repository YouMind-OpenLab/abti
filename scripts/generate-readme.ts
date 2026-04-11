// ============================================================
// README 生成脚本
// 运行: pnpm generate
// ============================================================

import { writeFileSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { SUPPORTED_LOCALES, README_FILENAME } from './utils/i18n.js';
import { generateReadme } from './utils/markdown-generator.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');

console.log('🎭 Generating ABTI READMEs for all locales...\n');

for (const locale of SUPPORTED_LOCALES) {
  const filename = README_FILENAME[locale];
  const content = generateReadme(locale);
  const filepath = resolve(ROOT, filename);

  writeFileSync(filepath, content, 'utf-8');
  console.log(`  ✅ ${filename} (${locale})`);
}

console.log(`\n🎉 Done! Generated ${SUPPORTED_LOCALES.length} README files.`);
