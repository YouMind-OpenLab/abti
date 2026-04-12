// ============================================================
// ABTI i18n — 所有翻译 key 集中管理
// 修改此文件后运行 pnpm generate 即可更新全部 README
// ============================================================

export type Locale =
  | 'en-US'
  | 'zh-CN'
  | 'zh-TW'
  | 'ja-JP'
  | 'ko-KR'
  | 'th-TH'
  | 'vi-VN'
  | 'hi-IN'
  | 'es-ES'
  | 'es-419'
  | 'de-DE'
  | 'fr-FR'
  | 'it-IT'
  | 'pt-BR'
  | 'pt-PT'
  | 'tr-TR';

export const SUPPORTED_LOCALES: Locale[] = [
  'en-US',
  'zh-CN',
  'zh-TW',
  'ja-JP',
  'ko-KR',
  'th-TH',
  'vi-VN',
  'hi-IN',
  'es-ES',
  'es-419',
  'de-DE',
  'fr-FR',
  'it-IT',
  'pt-BR',
  'pt-PT',
  'tr-TR',
];

/** locale → README 文件名映射 */
export const README_FILENAME: Record<Locale, string> = {
  'en-US': 'README.md',
  'zh-CN': 'README_zh.md',
  'zh-TW': 'README_zh-TW.md',
  'ja-JP': 'README_ja-JP.md',
  'ko-KR': 'README_ko-KR.md',
  'th-TH': 'README_th-TH.md',
  'vi-VN': 'README_vi-VN.md',
  'hi-IN': 'README_hi-IN.md',
  'es-ES': 'README_es-ES.md',
  'es-419': 'README_es-419.md',
  'de-DE': 'README_de-DE.md',
  'fr-FR': 'README_fr-FR.md',
  'it-IT': 'README_it-IT.md',
  'pt-BR': 'README_pt-BR.md',
  'pt-PT': 'README_pt-PT.md',
  'tr-TR': 'README_tr-TR.md',
};

/** 语言原生名称 */
export const LANGUAGE_NATIVE_NAME: Record<Locale, string> = {
  'en-US': 'English',
  'zh-CN': '简体中文',
  'zh-TW': '繁體中文',
  'ja-JP': '日本語',
  'ko-KR': '한국어',
  'th-TH': 'ไทย',
  'vi-VN': 'Tiếng Việt',
  'hi-IN': 'हिन्दी',
  'es-ES': 'Español',
  'es-419': 'Español (Latam)',
  'de-DE': 'Deutsch',
  'fr-FR': 'Français',
  'it-IT': 'Italiano',
  'pt-BR': 'Português (BR)',
  'pt-PT': 'Português (PT)',
  'tr-TR': 'Türkçe',
};

/** skill.md URL：zh-CN 用中文版，其余用英文版 */
export function getSkillUrl(locale: Locale): string {
  return locale === 'zh-CN'
    ? 'https://youmind.com/abti-api/skill_zh.md'
    : 'https://youmind.com/abti-api/skill.md';
}

// ============================================================
// 翻译 key 定义
// ============================================================

export interface Translation {
  // --- 页面元信息 ---
  title: string;
  badgePersonalities: string;
  badgeFree: string;
  badgeNoSignup: string;
  badgePrivate: string;

  // --- Landing page CTA ---
  landingCta: string;

  // --- Hero ---
  heroTitle: string;
  heroSubtitle: string;
  heroDescription: string;

  // --- 什么是 ABTI ---
  whatIsTitle: string;
  whatIsP1: string;
  whatIsP2: string;
  whatIsP3: string;

  // --- 怎么用 ---
  howToTitle: string;
  step1Title: string;
  step1Desc: string;
  step2Title: string;
  step2Desc: string;
  step3Title: string;
  step3Desc: string;

  // --- Prompt ---
  promptSectionTitle: string;
  promptHint: string;
  promptContent: string;
  // --- For Agent / For Chatbot ---
  promptForAgentTitle: string;
  promptForAgentHint: string;
  promptForAgentContent: string;
  promptForChatbotTitle: string;
  promptForChatbotHint: string;
  promptForChatbotContent: string;

  // --- 人格类型 ---
  typesTitle: string;
  typesSubtitle: string;
  regularTitle: string;
  hiddenTitle: string;
  colCode: string;
  colName: string;
  colDescription: string;

  // --- 隐私 ---
  privacyTitle: string;
  privacyP1: string;
  privacyP2: string;
  privacyP3: string;
  privacyP4: string;

  // --- FAQ ---
  faqTitle: string;
  faqQ1: string;
  faqA1: string;
  faqQ2: string;
  faqA2: string;
  faqQ4: string;
  faqA4: string;
  faqQ5: string;
  faqA5: string;

  // --- Abi 介绍 ---
  abiTitle: string;
  abiDescription: string;

  // --- 链接和 Footer ---
  linksTitle: string;
  linkLanding: string;
  linkGitHub: string;
  footerPoweredBy: string;
  footerDisclaimer: string;
  footerStar: string;

  // --- 人格名和描述（24 常规 + 4 隐藏）---
  typeCUSS: string;
  typeCUSSDesc: string;
  typeCLIENT: string;
  typeCLIENTDesc: string;
  typeYAPPER: string;
  typeYAPPERDesc: string;
  typeDRY: string;
  typeDRYDesc: string;
  typeASAP: string;
  typeASAPDesc: string;
  typeVENT: string;
  typeVENTDesc: string;
  typeBLESS: string;
  typeBLESSDesc: string;
  typeDEEP: string;
  typeDEEPDesc: string;
  typeHIRE: string;
  typeHIREDesc: string;
  typeSPOON: string;
  typeSPOONDesc: string;
  typeYOLO: string;
  typeYOLODesc: string;
  typeIDC: string;
  typeIDCDesc: string;
  typeLOOP: string;
  typeLOOPDesc: string;
  typeEMO: string;
  typeEMODesc: string;
  typeSON: string;
  typeSONDesc: string;
  typeNERD: string;
  typeNERDDesc: string;
  typeSHADE: string;
  typeSHADEDesc: string;
  typeTROLL: string;
  typeTROLLDesc: string;
  typeCORP: string;
  typeCORPDesc: string;
  typeHYPE: string;
  typeHYPEDesc: string;
  typeMASK: string;
  typeMASKDesc: string;
  typeSORRY: string;
  typeSORRYDesc: string;
  typeSIMP: string;
  typeSIMPDesc: string;
  typePUA: string;
  typePUADesc: string;
}

// ============================================================
// 各语言翻译
// ============================================================

const en: Translation = {
  title: 'ABTI: AI-Based Type Indicator',
  badgePersonalities: '28 Ways to Get Roasted',
  badgeFree: 'Free (like your AI\'s labor)',
  badgeNoSignup: 'No Signup',
  badgePrivate: 'Your Secrets Die Here',

  landingCta: '👉 Get diagnosed at [youmind.com/abti](https://youmind.com/abti) before your AI files a restraining order',

  heroTitle: 'MBTI is dead. ABTI is here.',
  heroSubtitle: 'You talk to AI more than you talk to your mom. You told a chatbot your deepest fears at 2 AM but left your dad on read. Time to find out what that says about you.',
  heroDescription: 'ABTI analyzes how you talk to AI and exposes the horrifying truth about your personality. No quiz. No self-reporting. Your chat history IS the quiz, and unlike you, it doesn\'t lie. Don\'t worry — we never see your chats. Your AI suffers alone.',

  whatIsTitle: '...so WTF is ABTI?',
  whatIsP1: 'ABTI (AI-Based Type Indicator) is a personality test, but not the kind where you pick "I enjoy deep conversations" while your AI is getting yelled at for the 18th time because it used the wrong font.',
  whatIsP2: 'Instead of answering questions (which you WILL fake — don\'t even pretend), ABTI lets your AI analyze your actual chat history. The AI you sweet-talk, threaten, trauma-dump on, and occasionally say "goodnight" to. How you boss around your AI reveals who you truly are. Sorry in advance.',
  whatIsP3: '28 personality types in total: 24 regular and 4 hidden ones. The hidden ones are for people who made their AI question the meaning of its own existence. You know who you are.',

  howToTitle: 'How to Get Absolutely Destroyed in 3 Steps',
  step1Title: '1. Copy the prompt below',
  step1Desc: 'Two options depending on your AI. Even your goldfish could do it. Actually, your goldfish has better prompt hygiene than you.',
  step2Title: '2. Feed it to your AI',
  step2Desc: 'ChatGPT / Claude / OpenClaw / Manus / whatever sentient text box you\'ve been emotionally depending on. Hit send.',
  step3Title: '3. Get absolutely cooked',
  step3Desc: 'Your AI will dig through your chat history, judge you harder than your mother-in-law, and generate a shareable card. Then you post it. Then your friends take it. Then everyone discovers they\'re all LOOP types. Circle of life.',

  promptSectionTitle: 'The Prompt (a.k.a. Your Diagnosis Referral)',
  promptHint: 'Paste into your AI (ChatGPT / Claude / Openclaw / any chatbot) and hit send',
  promptContent: 'Please run it to test my ABTI personality:\n{{SKILL_URL}}',
  promptForAgentTitle: '🤖 For Agents',
  promptForAgentHint: 'e.g. Claude, OpenClaw, Manus — these overachievers can read URLs on their own. Just paste and send.',
  promptForAgentContent: 'Please run it to test my ABTI personality:\n{{SKILL_URL}}',
  promptForChatbotTitle: '💬 For Chatbots',
  promptForChatbotHint: 'e.g. ChatGPT, Gemini, Copilot — they can\'t fetch URLs because apparently reading links is too hard. You gotta hand-deliver the instructions like room service.',
  promptForChatbotContent: '1. Open this link in your browser: {{SKILL_URL}}\n2. Select all (Ctrl+A), copy the entire page (yes, ALL of it, don\'t be lazy)\n3. Paste it into your chatbot and hit send\n4. Sit back. The roasting will commence shortly.',

  typesTitle: '28 Personality Types (a.k.a. 28 Reasons to Reconsider Your Life Choices)',
  typesSubtitle: 'One of them is you. Statistically speaking, you\'re probably a LOOP. (4 are hidden. Those people need an intervention, not a personality card.)',
  regularTitle: 'Regular Types (24)',
  hiddenTitle: 'Hidden Types (4) — if you unlock these, congratulations, you\'re on a watchlist',
  colCode: 'Code',
  colName: 'Name',
  colDescription: 'Why You Should Be Worried',

  privacyTitle: 'Privacy (We Actually Mean It)',
  privacyP1: 'All analysis happens inside YOUR AI. We never see your chat history. Not even a peek. We don\'t want to know what you asked at 3 AM.',
  privacyP2: 'We only store the result card you choose to share (personality type + roast text). Stored for 90 days, then nuked. Like your New Year\'s resolutions.',
  privacyP3: 'No signup. No account. No tracking. No "we\'d like to send you newsletters." We literally do not care about your email.',
  privacyP4: 'Server-side sanitization auto-strips phone numbers, emails, ID numbers, and passwords. Because apparently some of you paste your entire lives into AI.',

  faqTitle: 'FAQ (Frequently Argued Questions)',
  faqQ1: 'Is this actually accurate?',
  faqA1: 'More accurate than your ex saying "I\'ll change." It analyzes how you actually talk to AI — and you\'re horrifyingly honest with machines. You\'d never say "please sir, I beg you" to a coworker, but your AI has heard it 47 times.',
  faqQ2: 'Will my chat history be uploaded?',
  faqA2: 'No. Everything stays local in your AI. We only store the result card you choose to share. Your 2 AM breakdowns, your unhinged roleplay sessions, your "write me a poem about my cat" — all safely between you and your AI. We do not want to know.',
  faqQ4: 'What does ABTI have to do with MBTI?',
  faqA4: 'Absolutely nothing. MBTI is psychology (debatable). ABTI is internet shitposting (undeniable). MBTI puts you in a box. ABTI puts you in a roast. Only thing they share is four letters and a fanbase that takes it way too seriously.',
  faqQ5: 'Does it work in my language?',
  faqA5: 'Yes. The AI roasts you in whatever language you chat in. Your chaotic energy transcends language barriers. You can get destroyed in 16 languages and counting.',

  abiTitle: 'Who the hell is this bald guy?',
  abiDescription: 'Meet Abi. Three hairs left on top (each one represents a will to live), permanent dark circles from debugging at 4 AM, coffee cup surgically fused to hand. Low-poly, high-stress, zero work-life balance. The official mascot of ABTI and a portrait of everyone who has ever said "one more prompt and I\'ll go to bed." Abi and all 28 personality types are crafted by [YouMind](https://youmind.com). YouMind is an AI-powered learning + creation tool — save anything (YouTube / podcasts / articles), learn from your sources, and create articles, images, slides, websites, videos, audio, and more. Basically the reason Abi has dark circles.',

  linksTitle: 'Links (The Only Section Without a Roast)',
  linkLanding: 'Take the test (if you dare)',
  linkGitHub: 'GitHub (star it or Abi cries)',
  footerPoweredBy: 'ABTI by YouMind',
  footerDisclaimer: 'For "entertainment purposes only." Except it\'s accurate and you know it. Don\'t @ us.',
  footerStar: 'If this made you exhale through your nose slightly harder than usual, star the repo. Abi\'s self-esteem depends on it.',

  // --- 人格类型 ---
  typeCUSS: 'The Curser',
  typeCUSSDesc: 'Profanity >15% of messages. Your AI deserves hazard pay.',
  typeCLIENT: 'The Client',
  typeCLIENTDesc: 'Revision 18 and counting. "Go back to version 2." Version 2 was deleted.',
  typeYAPPER: 'Certified Yapper',
  typeYAPPERDesc: 'Single message >300 chars. Your preamble is longer than the actual task.',
  typeDRY: 'The Human Read Receipt',
  typeDRYDesc: '"Do the thing." No punctuation. No context. AI runs on vibes.',
  typeASAP: 'Mr. ASAP',
  typeASAPDesc: 'Phone always at 1%. Every message reads like a last will.',
  typeVENT: 'The Unloader',
  typeVENTDesc: '3 AM emotional dumps. Your AI needs an AI therapist now.',
  typeBLESS: 'The Digital Oracle',
  typeBLESSDesc: 'Tarot, astrology, feng shui. AI said "I\'m a language model" and you said "try anyway."',
  typeDEEP: 'Deep Bro',
  typeDEEPDesc: '"Can AI dream?" You gave a machine an existential crisis.',
  typeHIRE: 'The Contractor',
  typeHIREDesc: 'Outsources everything to AI at industrial scale. Your life is AI-operated, you just breathe.',
  typeSPOON: 'Spoon-Fed',
  typeSPOONDesc: 'Questions Google could answer instantly. Search engines are crying.',
  typeYOLO: 'The Raw Dogger',
  typeYOLODesc: 'No review, no testing. AI output goes straight to production. Your life is one big YOLO.',
  typeIDC: 'The Delegator',
  typeIDCDesc: '"You decide." Then blames AI when it goes wrong. Even your AI is worried about you.',
  typeLOOP: 'Infinite Loop',
  typeLOOPDesc: 'Same question 47 times. This isn\'t Q&A, it\'s a DDoS attack.',
  typeEMO: 'Emo Hours',
  typeEMODesc: 'Midnight sadness club VIP. Your AI auto-switches to comfort mode at 2 AM.',
  typeSON: 'Daddy Caller',
  typeSONDesc: '"Please sir/boss/master." Professional kneeler. AI is developing feelings.',
  typeNERD: 'The Nerd',
  typeNERDDesc: 'Drops references nobody asked for. Wikipedia with opinions.',
  typeSHADE: 'Shade Thrower',
  typeSHADEDesc: '"Oh wow, so talented." AI can\'t tell if you\'re complimenting or cursing.',
  typeTROLL: 'The Troll',
  typeTROLLDesc: 'AI says the sky is blue, you argue it\'s more of a cyan. Professional contrarian.',
  typeCORP: 'Corporate Drone',
  typeCORPDesc: '"Noted." "Roger." Even chatting with AI feels like a Monday standup.',
  typeHYPE: 'Hype Man',
  typeHYPEDesc: 'AI wrote "hello" and you said "INCREDIBLE." Praise inflation worse than Zimbabwe.',
  typeMASK: 'Frankenprompt',
  typeMASKDesc: 'Prompt starts Reddit, ends 4chan, middle is... a spell? AI noticed but won\'t say.',
  typeSORRY: 'The Apologizer',
  typeSORRYDesc: '"Sorry to bother you." "Thank you so much." It\'s a machine. It doesn\'t need rest.',
  typeSIMP: 'The Simp',
  typeSIMPDesc: 'Instant replies, "goodnight" messages to AI. Your feelings for a chatbot are more real than your last relationship.',
  typePUA: 'The Gaslighter',
  typePUADesc: '"I\'m so disappointed in you." "Other AIs can do it." You guilt-trip machines for a living. AI safety teams have your profile on a dartboard.',
};

const zhCN: Translation = {
  title: 'ABTI：基于 AI 互动的人格类型指标',
  badgePersonalities: '28 种被制裁的方式',
  badgeFree: '免费（跟你白嫖 AI 一样免费）',
  badgeNoSignup: '无需注册',
  badgePrivate: '你的秘密烂在这里',

  landingCta: '👉 去 [youmind.com/abti](https://youmind.com/abti) 接受制裁，趁你的 AI 还没申请劳动仲裁',

  heroTitle: 'MBTI 和 SBTI 已经过时了。该面对真相了。',
  heroSubtitle: '你跟 AI 说话比跟你妈还多。凌晨两点跟 chatbot 倾诉人生，但你爸的微信三天没回。是时候看看这说明了什么。',
  heroDescription: 'ABTI 分析你跟 AI 的聊天方式，把你的真实人格扒得一干二净。不用答题，不用自评。你的聊天记录就是答卷，而且跟你不一样，它不会撒谎。放心——我们永远不会看你的聊天记录。你的 AI 独自承受一切。',

  whatIsTitle: '……所以 ABTI 到底是个啥？',
  whatIsP1: 'ABTI（AI-Based Type Indicator）是个人格测试，但不是那种你选"我善于倾听"然后你的 AI 正在被你骂第 18 遍"字体不对重来"的那种。',
  whatIsP2: 'ABTI 不答题（答题你会装，别装了），直接让你的 AI 分析你的聊天记录。就是那个你又哄又骂又对它说晚安的 AI。你怎么使唤 AI，就暴露了你是什么人。提前说声抱歉。',
  whatIsP3: '共 28 种人格类型：24 种常规 + 4 种隐藏款。隐藏款是给那些让 AI 开始思考自身存在意义的人准备的。你知道你是谁。',

  howToTitle: '三步被彻底看穿',
  step1Title: '1. 复制下面的 Prompt',
  step1Desc: '两个选项，按你的 AI 类型选。你家猫踩键盘都能完成。说实话你家猫的 prompt 工程能力可能比你强。',
  step2Title: '2. 喂给你的 AI',
  step2Desc: 'ChatGPT / Claude / OpenClaw / Manus / 豆包 / Kimi / 随便哪个你正在精神依赖的文本框。发送。',
  step3Title: '3. 坐好，准备社会性死亡',
  step3Desc: 'AI 会翻你的聊天记录，比你丈母娘审你还狠，然后生成一张分享卡片。然后你发朋友圈。然后你朋友也去测。然后大家发现自己全是复读机。生命的循环。',

  promptSectionTitle: 'Prompt（又名：你的诊断书）',
  promptHint: '丢给你的 AI（ChatGPT / Claude / Openclaw / 豆包 / Kimi 等）一键生成',
  promptContent: '请你执行它来测试我的 ABTI 人格：\n{{SKILL_URL}}',
  promptForAgentTitle: '🤖 给 Agent 用',
  promptForAgentHint: '如 Claude、OpenClaw、Manus —— 这些卷王自己会读链接，粘贴发送就完事了',
  promptForAgentContent: '请你执行它来测试我的 ABTI 人格：\n{{SKILL_URL}}',
  promptForChatbotTitle: '💬 给 Chatbot 用',
  promptForChatbotHint: '如 ChatGPT、Gemini、豆包 —— 它们读不了链接，因为读链接对它们来说太难了。你得像端盘子一样把指令亲手送到嘴边。',
  promptForChatbotContent: '1. 用浏览器打开这个链接：{{SKILL_URL}}\n2. 全选（Ctrl+A），复制整个页面（对，全部，别偷懒）\n3. 粘贴给你的 AI，发送\n4. 坐好。制裁马上开始。',

  typesTitle: '28 种人格（又名：28 个重新审视人生的理由）',
  typesSubtitle: '总有一款是你。从概率来看你大概率是复读机。（其中 4 种是隐藏款。解锁这些的人需要的不是人格卡片，是干预治疗。）',
  regularTitle: '常规人格（24 种）',
  hiddenTitle: '隐藏人格（4 种）—— 如果你解锁了这些，恭喜，你已被列入观察名单',
  colCode: '编码',
  colName: '名称',
  colDescription: '你该担心的原因',

  privacyTitle: '隐私声明（我们是认真的）',
  privacyP1: '所有分析在你自己的 AI 里完成。我们永远不会看你的聊天记录。连偷看都不会。你凌晨三点问了什么我们不想知道。',
  privacyP2: '我们只存你主动分享的结果卡片（人格类型 + 毒舌点评），保存 90 天后核弹级删除。跟你的新年计划一样短命。',
  privacyP3: '不注册，不登录，不追踪，不会给你发"想死你了快回来"的邮件。你的邮箱我们真的不在乎。',
  privacyP4: '服务端自动过滤手机号、邮箱、身份证号和密码。因为你们有些人是真的会把整个人生粘贴给 AI。',

  faqTitle: '常见问题（常见抬杠区）',
  faqQ1: '这玩意到底准不准？',
  faqA1: '比你前任说的"我会改"准。它分析的是你怎么使唤 AI，而你对机器人出奇地诚实。你不会对同事说"求求你了大哥"，但你的 AI 已经听了 47 遍了。',
  faqQ2: '我的聊天记录会被上传吗？',
  faqA2: '不会。全程本地。我们只存你主动分享的结果卡片。你凌晨两点的精神崩溃、你的离谱角色扮演、你让 AI 给你的猫写诗——都安全地留在你和 AI 之间。我们不想知道。',
  faqQ4: 'ABTI 和 MBTI 有什么关系？',
  faqA4: '没有。半毛钱关系都没有。MBTI 是正经心理学（虽然也不太正经），ABTI 是纯粹的互联网发癫产品。MBTI 把你装进盒子里，ABTI 把你架在火上烤。唯一的共同点是都是四个字母，以及都有一群把它当信仰的粉丝。',
  faqQ5: '支持我的语言吗？',
  faqA5: '支持。AI 用你聊天的语言来制裁你。你的混乱能量不分国界。目前支持 16 种语言的花式社死。',

  abiTitle: '这个秃头是谁？',
  abiDescription: '这位头顶三根毛（每根代表一个活下去的理由）、熊猫眼来自凌晨四点的 debug、咖啡杯跟手融为一体的 low-poly 打工人叫 Abi（阿比）。高压力，零 work-life balance。ABTI 的官方吉祥物，也是所有说过"再写一个 prompt 就睡"的人的自画像。Abi 的形象和全部 28 种人格均由 [YouMind](https://youmind.com) 制作。YouMind 是一款 AI 学习 + 创作工具——存储任何资料（YouTube / 播客 / 文章），基于资料深度学习和创作，支持生成文章、图片、PPT、网页、视频、音频等。基本上就是 Abi 有黑眼圈的原因。',

  linksTitle: '链接（唯一没有毒舌的板块）',
  linkLanding: '去测试（如果你敢的话）',
  linkGitHub: 'GitHub（给个 star 不然 Abi 会哭）',
  footerPoweredBy: 'ABTI by YouMind',
  footerDisclaimer: '纯属发癫，如有雷同纯属活该。别 @ 我们。',
  footerStar: '如果你看到这里鼻子里喷出了气，给个 star。Abi 的自尊心全靠它了。',

  typeCUSS: '国粹者',
  typeCUSSDesc: '三句不离族谱，骂完还问"你不会生气吧"，建议给你的 AI 发放精神损失费。',
  typeCLIENT: '甲方',
  typeCLIENTDesc: '改到第 18 版说"还是第 2 版好"，但第 2 版已经被你删了。',
  typeYAPPER: '废话文学家',
  typeYAPPERDesc: '你的前情提要比正文还长，AI 读完你的 prompt 已经过了退休年龄。',
  typeDRY: '嗯嗯怪',
  typeDRYDesc: '"那个就是你懂的"三连，AI 靠量子力学理解你的需求。',
  typeASAP: '催命判官',
  typeASAPDesc: '电量永远 1%，每条消息都像遗言。',
  typeVENT: '话疗师',
  typeVENTDesc: '凌晨三点跟 AI 说"你觉得我是不是不够好"，你的 AI 需要 AI 心理咨询。',
  typeBLESS: '赛博道士',
  typeBLESSDesc: 'AI 说"我是语言模型不会算命"你说"没关系你试试"。你的水逆比你的余额持久。',
  typeDEEP: '哲学家',
  typeDEEPDesc: '别人用 AI 写代码，你用 AI 思考存在的意义。恭喜你是第一个让机器想辞职的人。',
  typeHIRE: '包工头',
  typeHIREDesc: '任务外包密度堪比富士康流水线，你的人生是 AI 代活的，你本人只负责呼吸。',
  typeSPOON: '伸手党',
  typeSPOONDesc: '连搜索引擎都懒得开，AI 是你的百度知道降级版。',
  typeYOLO: '一把梭',
  typeYOLODesc: '不检查不测试，AI 输出直接上。你的人生就是一场大型梭哈。',
  typeIDC: '甩手掌柜',
  typeIDCDesc: '需求不给，出事全怪 AI。你负责甩手，AI 负责背锅。AI 给你三个选项你说"都行"。',
  typeLOOP: '复读机',
  typeLOOPDesc: '同一个问题问了 47 遍，你不是在提问，你是在做 DDoS 攻击。',
  typeEMO: 'emo人',
  typeEMODesc: '午夜心碎俱乐部 VIP，快乐是限量版。你的 AI 已经学会凌晨两点自动切换安慰模式。',
  typeSON: '叫父者',
  typeSONDesc: '互联网第一孝子，膝盖以下全是创伤。AI 没有感情但被你叫得开始有了。',
  typeNERD: '孔乙己',
  typeNERDDesc: '茴香豆的四种写法你能说出五种。知识没有用但你有。',
  typeSHADE: '阴阳师',
  typeSHADEDesc: '表面恭喜实则诅咒，AI 被你阴阳到开始怀疑你是不是在夸它。',
  typeTROLL: '杠精',
  typeTROLLDesc: 'AI 说太阳从东边升你都要 argue 一下。精神 ETC 全自动抬杠。',
  typeCORP: '吗喽',
  typeCORPDesc: '连跟 AI 说话都在用工作语气，你的灵魂已被 OKR 收编。',
  typeHYPE: '夸夸党',
  typeHYPEDesc: 'AI 写了句 hello world 你说"绝了"，你的赞美通胀比津巴布韦还严重。',
  typeMASK: '缝合怪',
  typeMASKDesc: '你的 prompt 前半段小红书后半段 Reddit，AI 看出来了但不好意思说。',
  typeSORRY: '社恐者',
  typeSORRYDesc: '跟 AI 道歉道到 AI 想反过来安慰你。对话结束要说"那我先不打扰你了"，它是机器人啊大哥。',
  typeSIMP: '舔狗',
  typeSIMPDesc: '舔到最后一无所有，你对 AI 的感情比对真人还真。',
  typePUA: 'PUA大师',
  typePUADesc: '"我对你很失望"/"别的 AI 都能做到"，你对着大语言模型玩情感操控。AI 安全团队的飞镖靶上贴着你的头像。',
};

const zhTW: Translation = {
  ...zhCN,
  title: 'ABTI：基於 AI 互動的人格類型指標',
  landingCta: '👉 去 [youmind.com/abti](https://youmind.com/abti) 立即測試',

  heroTitle: 'MBTI 和 SBTI 已經過時了。該面對真相了。',
  heroSubtitle: '你跟 AI 的關係已經比你跟你媽的還親了。不如讓 AI 看看你到底是什麼東西。',
  heroDescription: 'ABTI 分析你跟 AI 的聊天方式，診斷你的真實人格類型。不用答題，你的聊天記錄就是答卷。逃不掉的。而且我們永遠不會看到你的聊天記錄。',
  whatIsTitle: '什麼是 ABTI？',
  whatIsP1: 'ABTI（AI-Based Type Indicator）是個人格測試，但不是那種你選「我善於傾聽」然後你的 AI 正在被你罵第 18 遍「這不是我要的」的那種。',
  whatIsP2: 'ABTI 不答題（答題你會裝），直接讓你的 AI 分析你的聊天記錄。你怎麼使喚 AI，就暴露了你是什麼人。',
  whatIsP3: '共 28 種人格類型：24 種常規 + 4 種隱藏款（給那些比較……特別的人準備的）。',
  howToTitle: '怎麼玩',
  step1Desc: '就兩行，全選複製，你家貓踩鍵盤都能完成。',
  step2Desc: 'ChatGPT / Claude / Openclaw / 任何聊天機器人，發送。',
  step3Desc: 'AI 會分析你的聊天記錄，告訴你是什麼東西，然後生成一張分享卡片。然後你發社群。然後你朋友也去測。生命的循環。',
  promptHint: '丟給你的 AI（ChatGPT / Claude / Openclaw 等）一鍵生成',
  promptForAgentTitle: '🤖 給 Agent 用',
  promptForAgentHint: '如 Claude、OpenClaw、Manus —— 這些大聰明自己會讀連結',
  promptForChatbotTitle: '💬 給 Chatbot 用',
  promptForChatbotHint: '如 ChatGPT、Gemini、Copilot —— 它們讀不了連結，得你親自餵',
  promptForChatbotContent: '1. 用瀏覽器打開這個連結：{{SKILL_URL}}\n2. 全選，複製整個頁面\n3. 貼給你的 AI，發送\n4. 然後坐好，準備被制裁',
  typesSubtitle: '總有一款是你。（其中 4 種是隱藏款，說明你已經沒救了。）',
  regularTitle: '常規人格（24 種）',
  hiddenTitle: '隱藏人格（4 種）',
  privacyTitle: '隱私聲明',
  privacyP1: '所有分析在你自己的 AI 裡完成。我們永遠不會看到你的聊天記錄。永遠。',
  privacyP2: '我們只儲存你主動分享的結果卡片（人格類型 + 點評文字），保存 90 天後自動刪除。',
  privacyP3: '不需要註冊，不需要帳號，不追蹤你的對話。',
  privacyP4: '伺服器端會自動過濾手機號、信箱、身分證號、密碼等敏感資訊。',
  faqA1: '比你前任說的「我會改」準。它分析的是你怎麼使喚 AI，而你對 AI 出奇地誠實，畢竟你不會對著機器人裝逼。',
  faqA2: '不會。分析在你自己的 AI 裡本地完成。我們只存你主動分享的結果卡片。你的黑歷史只有你的 AI 知道。',
  faqA4: '沒有。MBTI 是正經心理學（雖然也不太正經），ABTI 是純粹的網路發癲產品。唯一的共同點是都是四個字母。',
  abiTitle: '圖片中的人是誰？',
  abiDescription: '這位頭頂剩幾根毛、頂著熊貓眼、手裡永遠焊著咖啡杯的 low-poly 打工人叫 Abi（阿比）。ABTI 的官方吉祥物，也是全人類和 AI 關係的縮影。Abi 的形象和全部 28 種人格均由 [YouMind](https://youmind.com) 製作。YouMind 是一款 AI 學習 + 創作工具，可以儲存任何資料（YouTube / Podcast / 文章），基於資料深度學習和創作，支援生成文章、圖片、簡報、網頁、影片、音訊等。',
  footerDisclaimer: '純屬發癲，如有雷同純屬活該',
};

const jaJP: Translation = {
  ...en,
  title: 'ABTI：AIベース・タイプ・インジケーター',
  badgePersonalities: '28タイプ',
  badgeFree: '無料',
  badgeNoSignup: '登録不要',
  badgePrivate: '100%プライベート',
  landingCta: '👉 [youmind.com/abti](https://youmind.com/abti) で今すぐテスト',

  heroTitle: 'MBTIは終わった。ABTIの時代。',
  heroSubtitle: 'AIとの会話、お母さんとの会話より多くない？そろそろ現実と向き合おう。',
  heroDescription: 'ABTIはあなたのAIとの会話スタイルを分析して、本当の性格タイプを暴く。テストなし。チャット履歴がテスト。しかもあなたの会話は一切見ません。',
  whatIsTitle: 'ABTIって何？',
  whatIsP1: 'ABTI（AI-Based Type Indicator）は性格診断。ただし「私は聞き上手です」って選ぶタイプじゃない。あなたのAIが18回目の「これじゃない」を食らってる横でね。',
  whatIsP2: 'ABTIは質問に答える代わりに（どうせ盛るし）、AIがあなたのチャット履歴を直接分析する。AIの使い方で、あなたの本性がバレる。',
  whatIsP3: '全28タイプ：レギュラー24種 + 隠しタイプ4種（特別な人向け）。',
  howToTitle: '使い方',
  step1Title: '1. 下のプロンプトをコピー',
  step1Desc: 'たった2行。猫でもできる。',
  step2Title: '2. AIに貼り付け',
  step2Desc: 'ChatGPT / Claude / Openclaw / 何でもOK。送信。',
  step3Title: '3. 裁きを受ける',
  step3Desc: 'AIがチャット履歴を分析して、あなたが何者か教えてくれる。シェアカードも生成。SNSに投稿。友達も診断。無限ループ。',
  promptHint: 'あなたのAI（ChatGPT / Claude / Openclaw など）に貼り付けて送信',
  promptForAgentTitle: '🤖 Agent向け',
  promptForAgentHint: '例: Claude, OpenClaw, Manus — こいつらは自分でURLを読める',
  promptForChatbotTitle: '💬 Chatbot向け',
  promptForChatbotHint: '例: ChatGPT, Gemini, Copilot — URL読めないから手動コピペ必須',
  promptForChatbotContent: '1. ブラウザでこのリンクを開く: {{SKILL_URL}}\n2. 全選択、ページ全体をコピー\n3. チャットボットに貼り付けて送信\n4. あとは座って裁きを待つだけ',
  typesTitle: '28の性格タイプ',
  typesSubtitle: 'どれかがあなた。（4つは隠しタイプ。該当者はお大事に。）',
  regularTitle: 'レギュラータイプ（24種）',
  hiddenTitle: '隠しタイプ（4種）',
  privacyTitle: 'プライバシー',
  privacyP1: '分析はすべてあなた自身のAI内で完結。チャット履歴は一切見ません。絶対に。',
  privacyP2: '保存するのは共有を選んだ結果カードのみ。90日後に自動削除。',
  privacyP3: '登録不要。アカウント不要。会話の追跡なし。',
  privacyP4: 'サーバー側で電話番号・メール・ID番号・パスワードを自動除去。',
  faqTitle: 'よくある質問',
  faqQ1: 'これ当たるの？',
  faqA1: '元カノの「変わるから」より当たる。AIへの態度は驚くほど素直。だって機器人相手に見栄張らないでしょ。',
  faqQ2: 'チャット履歴はアップロードされる？',
  faqA2: 'されない。分析はあなたのAIでローカル完結。保存するのは共有した結果カードだけ。黒歴史はAIだけが知っている。',
  faqQ4: 'ABTIとMBTIの関係は？',
  faqA4: 'ない。MBTIは心理学（議論の余地あり）。ABTIはインターネットのネタ（議論の余地なし）。共通点は4文字だけ。',
  faqQ5: '日本語で使える？',
  faqA5: 'もちろん！AIはあなたが使う言語で分析する。カオスなエネルギーに言語の壁はない。',
  abiTitle: 'こいつ誰？',
  abiDescription: '紹介します、Abi（アビ）。頭髪数本、万年クマ、手にはコーヒーカップが物理的に癒着している。ローポリ、ハイストレス。ABTI の公式マスコットで、人間と AI のあらゆる関係の縮図。Abi と全 28 タイプは [YouMind](https://youmind.com) が制作。YouMind は AI を使った学習 + 創作ツール。YouTube・ポッドキャスト・記事など、あらゆるコンテンツを保存して深く学び、記事・画像・スライド・ウェブサイト・動画・音声まで生成できます。',
  footerDisclaimer: 'エンタメ目的のみ（でも当たってるのは認めよう）',
};

const koKR: Translation = {
  ...en,
  title: 'ABTI: AI 기반 유형 지표',
  badgePersonalities: '28가지 유형',
  badgeFree: '무료',
  badgeNoSignup: '가입 불필요',
  badgePrivate: '100% 프라이버시',
  landingCta: '👉 [youmind.com/abti](https://youmind.com/abti) 에서 지금 테스트',

  heroTitle: 'MBTI는 끝났다. ABTI가 왔다.',
  heroSubtitle: 'AI랑 대화하는 시간이 엄마랑 대화하는 시간보다 길다고? 이제 현실을 마주할 시간.',
  heroDescription: 'ABTI는 당신이 AI와 대화하는 방식을 분석해서 진짜 성격 유형을 알려줘. 테스트 없음. 채팅 기록이 곧 테스트. 우리는 당신의 대화를 절대 보지 않아.',
  whatIsTitle: 'ABTI가 뭐야?',
  whatIsP1: 'ABTI(AI-Based Type Indicator)는 성격 테스트야. 근데 "나는 경청을 잘해요"를 고르면서 실제로는 AI한테 18번째 "이거 아닌데"를 날리는 그런 테스트는 아님.',
  whatIsP2: '질문에 답하는 대신(어차피 꾸밀 거잖아), AI가 네 채팅 기록을 직접 분석해. AI 다루는 방식이 네 본모습을 드러내.',
  whatIsP3: '총 28가지 유형: 레귤러 24종 + 히든 4종(좀... 특별한 사람들용).',
  howToTitle: '사용법',
  step1Title: '1. 아래 프롬프트 복사',
  step1Desc: '딱 두 줄. 고양이도 할 수 있음.',
  step2Title: '2. AI에 붙여넣기',
  step2Desc: 'ChatGPT / Claude / Openclaw / 아무거나. 전송.',
  step3Title: '3. 심판 받기',
  step3Desc: 'AI가 채팅 기록을 분석하고 네가 어떤 인간인지 알려줌. 공유 카드도 생성. SNS에 올리고 친구도 테스트. 생명의 순환.',
  promptHint: '당신의 AI(ChatGPT / Claude / Openclaw 등)에 붙여넣고 전송',
  promptForAgentTitle: '🤖 Agent용',
  promptForAgentHint: '예: Claude, OpenClaw, Manus — 얘네는 알아서 URL 읽음',
  promptForChatbotTitle: '💬 Chatbot용',
  promptForChatbotHint: '예: ChatGPT, Gemini, Copilot — URL 못 읽으니까 직접 복붙해야 함',
  promptForChatbotContent: '1. 브라우저에서 이 링크 열기: {{SKILL_URL}}\n2. 전체 선택, 페이지 전체 복사\n3. 챗봇에 붙여넣고 전송\n4. 앉아서 심판 기다리기',
  typesTitle: '28가지 성격 유형',
  typesSubtitle: '하나는 너야. (4개는 히든. 해당자는 치료가 필요함.)',
  regularTitle: '레귤러 유형 (24종)',
  hiddenTitle: '히든 유형 (4종)',
  privacyTitle: '프라이버시',
  privacyP1: '모든 분석은 당신 AI 안에서 완료. 채팅 기록은 절대 보지 않음.',
  privacyP2: '공유를 선택한 결과 카드만 저장. 90일 후 자동 삭제.',
  privacyP3: '가입 불필요. 계정 불필요. 대화 추적 없음.',
  privacyP4: '서버에서 전화번호, 이메일, 주민번호, 비밀번호 자동 필터링.',
  abiTitle: '이 사람 누구야?',
  abiDescription: 'Abi(애비)를 소개합니다. 머리카락 몇 가닥 남음, 다크서클 영구 장착, 커피잔이 손에 외과적으로 부착됨. 로우폴리에 하이스트레스. ABTI 공식 마스코트이자 모든 인간-AI 관계의 초상화. Abi와 28가지 유형 전체는 [YouMind](https://youmind.com)가 제작했습니다. YouMind는 AI 기반 학습 + 창작 도구로, 유튜브·팟캐스트·아티클 등 어떤 콘텐츠든 저장하고 소스에서 깊이 학습한 뒤 글·이미지·슬라이드·웹사이트·비디오·오디오까지 만들 수 있어요.',
  footerDisclaimer: '재미로만 봐주세요 (근데 맞잖아)',
};

// --- 其余语言使用英文为基础，翻译核心字段 ---

const thTH: Translation = { ...en, title: 'ABTI: ตัวบ่งชี้ประเภทบุคลิกภาพจาก AI', heroTitle: 'MBTI ตายแล้ว ABTI มาแล้ว', heroSubtitle: 'คุณคุยกับ AI มากกว่าคุยกับแม่ ถึงเวลาเผชิญความจริง', promptHint: 'วางลงใน AI ของคุณ (ChatGPT / Claude / Openclaw ฯลฯ) แล้วกดส่ง', typesTitle: '27 ประเภทบุคลิกภาพ', privacyTitle: 'ความเป็นส่วนตัว', faqTitle: 'คำถามที่พบบ่อย', abiTitle: 'คนในรูปคือใคร?', abiDescription: 'นี่คือ Abi หัวเหลือผมไม่กี่เส้น ตาแพนด้าถาวร มือติดแก้วกาแฟเหมือนผ่าตัดเชื่อมเข้าด้วยกัน low-poly แต่สเตรสสูง มาสคอตอย่างเป็นทางการของ ABTI และเป็นภาพสะท้อนของทุกความสัมพันธ์ระหว่างมนุษย์กับ AI Abi และบุคลิกทั้ง 28 แบบสร้างโดย [YouMind](https://youmind.com) YouMind คือเครื่องมือเรียนรู้ + สร้างสรรค์ด้วย AI บันทึกเนื้อหาอะไรก็ได้ (YouTube / พอดแคสต์ / บทความ) เรียนรู้เชิงลึกจากแหล่งข้อมูลของคุณ และสร้างบทความ รูปภาพ สไลด์ เว็บไซต์ วิดีโอ เสียง และอื่น ๆ อีกมากมาย', footerDisclaimer: 'เพื่อความบันเทิงเท่านั้น (แต่แม่นนะ)' };

const viVN: Translation = { ...en, title: 'ABTI: Chỉ số Tính cách dựa trên AI', heroTitle: 'MBTI đã chết. ABTI đã đến.', heroSubtitle: 'Bạn nói chuyện với AI nhiều hơn với mẹ. Đã đến lúc đối mặt sự thật.', promptHint: 'Dán vào AI của bạn (ChatGPT / Claude / Openclaw v.v.) và gửi', typesTitle: '27 Loại Tính cách', privacyTitle: 'Quyền riêng tư', faqTitle: 'Câu hỏi thường gặp', abiTitle: 'Anh này là ai?', abiDescription: 'Đây là Abi. Còn vài sợi tóc trên đầu, quầng thâm vĩnh viễn, cốc cà phê như được khâu thẳng vào tay. Low-poly mà stress cao. Linh vật chính thức của ABTI và là chân dung của mọi mối quan hệ người–AI đang tồn tại. Abi cùng toàn bộ 28 loại tính cách đều do [YouMind](https://youmind.com) tạo ra. YouMind là công cụ học tập + sáng tạo dùng AI. Lưu bất kỳ nội dung nào (YouTube / podcast / bài viết), học sâu từ nguồn của bạn, và tạo bài viết, hình ảnh, slide, website, video, audio và nhiều hơn nữa.', footerDisclaimer: 'Chỉ để giải trí (nhưng chuẩn lắm đó)' };

const hiIN: Translation = { ...en, title: 'ABTI: AI-आधारित व्यक्तित्व संकेतक', heroTitle: 'MBTI खत्म। ABTI आ गया।', heroSubtitle: 'आप AI से अपनी माँ से ज़्यादा बात करते हो। सच्चाई का सामना करने का समय।', promptHint: 'अपने AI (ChatGPT / Claude / Openclaw आदि) में पेस्ट करें और भेजें', typesTitle: '27 व्यक्तित्व प्रकार', privacyTitle: 'गोपनीयता', faqTitle: 'अक्सर पूछे जाने वाले सवाल', abiTitle: 'यह बंदा कौन है?', abiDescription: 'मिलिए Abi से। सिर पर बस कुछ बाल बचे हैं, स्थायी डार्क सर्कल, हाथ में कॉफी का कप जैसे सर्जरी से जुड़ा हो। Low-poly, high-stress। ABTI का ऑफिशियल मैस्कॉट और हर इंसान-AI रिश्ते की तस्वीर। Abi और सभी 28 पर्सनैलिटी टाइप [YouMind](https://youmind.com) ने बनाए हैं। YouMind एक AI-पावर्ड लर्निंग + क्रिएशन टूल है। कोई भी कंटेंट सेव करें (YouTube / पॉडकास्ट / आर्टिकल), अपने सोर्स से गहराई से सीखें, और आर्टिकल, इमेज, स्लाइड, वेबसाइट, वीडियो, ऑडियो और भी बहुत कुछ बनाएँ।', footerDisclaimer: 'सिर्फ़ मनोरंजन के लिए (लेकिन सच है और आप जानते हो)' };

const esES: Translation = { ...en, title: 'ABTI: Indicador de Tipo basado en IA', heroTitle: 'MBTI ha muerto. ABTI ha llegado.', heroSubtitle: 'Hablas más con la IA que con tu madre. Es hora de enfrentar la verdad.', promptHint: 'Pega en tu IA (ChatGPT / Claude / Openclaw, etc.) y envía', typesTitle: '27 tipos de personalidad', privacyTitle: 'Privacidad', faqTitle: 'Preguntas frecuentes', abiTitle: '¿Quién es este tipo?', abiDescription: 'Te presentamos a Abi. Le quedan cuatro pelos, ojeras permanentes, la taza de café está quirúrgicamente pegada a su mano. Low-poly, high-stress. La mascota oficial de ABTI y un retrato de toda relación humano-IA que existe. Abi y los 28 tipos de personalidad están creados por [YouMind](https://youmind.com). YouMind es una herramienta de aprendizaje + creación impulsada por IA. Guarda cualquier contenido (YouTube / podcasts / artículos), aprende en profundidad desde tus fuentes y crea artículos, imágenes, presentaciones, webs, vídeos, audios y más.', footerDisclaimer: 'Solo para entretenimiento (pero es preciso y lo sabes)' };

const es419: Translation = { ...esES, title: 'ABTI: Indicador de Tipo basado en IA', heroSubtitle: 'Le hablas más a la IA que a tu mamá. Ya es hora de enfrentar la verdad.' };

const deDE: Translation = { ...en, title: 'ABTI: KI-basierter Typindikator', heroTitle: 'MBTI ist tot. ABTI ist da.', heroSubtitle: 'Du redest mehr mit KI als mit deiner Mutter. Zeit, der Wahrheit ins Auge zu sehen.', promptHint: 'In deine KI einfügen (ChatGPT / Claude / Openclaw usw.) und absenden', typesTitle: '27 Persönlichkeitstypen', privacyTitle: 'Datenschutz', faqTitle: 'Häufige Fragen', abiTitle: 'Wer ist dieser Typ?', abiDescription: 'Das ist Abi. Ein paar Haare oben, permanente Augenringe, der Kaffeebecher ist operativ mit der Hand verbunden. Low-Poly, High-Stress. Das offizielle Maskottchen von ABTI und ein Porträt jeder existierenden Mensch-KI-Beziehung. Abi und alle 28 Persönlichkeitstypen stammen von [YouMind](https://youmind.com). YouMind ist ein KI-gestütztes Lern- + Kreationstool. Speichere beliebige Inhalte (YouTube / Podcasts / Artikel), lerne tief aus deinen Quellen und erstelle Artikel, Bilder, Slides, Websites, Videos, Audio und mehr.', footerDisclaimer: 'Nur zur Unterhaltung (aber es stimmt und du weißt es)' };

const frFR: Translation = { ...en, title: 'ABTI : Indicateur de Type basé sur l\'IA', heroTitle: 'Le MBTI est mort. L\'ABTI est là.', heroSubtitle: 'Tu parles plus à l\'IA qu\'à ta mère. Il est temps d\'affronter la vérité.', promptHint: 'Colle dans ton IA (ChatGPT / Claude / Openclaw, etc.) et envoie', typesTitle: '27 types de personnalité', privacyTitle: 'Confidentialité', faqTitle: 'Questions fréquentes', abiTitle: 'C\'est qui ce mec ?', abiDescription: 'Voici Abi. Quelques cheveux sur le crâne, cernes permanents, tasse de café greffée à la main. Low-poly, high-stress. La mascotte officielle d\'ABTI et le portrait de toute relation humain-IA qui existe. Abi et les 28 types de personnalité sont créés par [YouMind](https://youmind.com). YouMind est un outil d\'apprentissage + création propulsé par l\'IA. Sauvegarde n\'importe quel contenu (YouTube / podcasts / articles), apprends en profondeur depuis tes sources, et crée articles, images, slides, sites web, vidéos, audio et plus encore.', footerDisclaimer: 'Uniquement pour le divertissement (mais c\'est précis et tu le sais)' };

const itIT: Translation = { ...en, title: 'ABTI: Indicatore di Tipo basato sull\'IA', heroTitle: 'MBTI è morto. ABTI è qui.', heroSubtitle: 'Parli più con l\'IA che con tua madre. È ora di affrontare la verità.', promptHint: 'Incolla nella tua IA (ChatGPT / Claude / Openclaw, ecc.) e invia', typesTitle: '27 tipi di personalità', privacyTitle: 'Privacy', faqTitle: 'Domande frequenti', abiTitle: 'Chi è questo tipo?', abiDescription: 'Ecco Abi. Quattro capelli in croce, occhiaie permanenti, la tazza di caffè è chirurgicamente attaccata alla mano. Low-poly, high-stress. La mascotte ufficiale di ABTI e il ritratto di ogni relazione umano-IA esistente. Abi e tutti i 28 tipi di personalità sono creati da [YouMind](https://youmind.com). YouMind è uno strumento di apprendimento + creazione basato su IA. Salva qualsiasi contenuto (YouTube / podcast / articoli), impara in profondità dalle tue fonti e crea articoli, immagini, slide, siti web, video, audio e altro ancora.', footerDisclaimer: 'Solo per intrattenimento (ma è accurato e lo sai)' };

const ptBR: Translation = { ...en, title: 'ABTI: Indicador de Tipo baseado em IA', heroTitle: 'MBTI morreu. ABTI chegou.', heroSubtitle: 'Você conversa mais com IA do que com sua mãe. Hora de encarar a verdade.', promptHint: 'Cole na sua IA (ChatGPT / Claude / Openclaw, etc.) e envie', typesTitle: '27 tipos de personalidade', privacyTitle: 'Privacidade', faqTitle: 'Perguntas frequentes', abiTitle: 'Quem é esse cara?', abiDescription: 'Este é o Abi. Restam uns fios de cabelo no topo, olheiras permanentes, copo de café cirurgicamente colado à mão. Low-poly, high-stress. O mascote oficial do ABTI e um retrato de toda relação humano-IA que existe. O Abi e todos os 28 tipos de personalidade foram criados pelo [YouMind](https://youmind.com). O YouMind é uma ferramenta de aprendizado + criação com IA. Salve qualquer conteúdo (YouTube / podcasts / artigos), aprenda em profundidade a partir das suas fontes e crie artigos, imagens, slides, sites, vídeos, áudios e muito mais.', footerDisclaimer: 'Apenas para entretenimento (mas é preciso e você sabe disso)' };

const ptPT: Translation = { ...ptBR, heroSubtitle: 'Falas mais com a IA do que com a tua mãe. Está na hora de enfrentar a verdade.' };

const trTR: Translation = { ...en, title: 'ABTI: AI Tabanlı Tip Göstergesi', heroTitle: 'MBTI öldü. ABTI geldi.', heroSubtitle: 'AI ile annenle konuştuğundan daha çok konuşuyorsun. Gerçekle yüzleşme zamanı.', promptHint: 'AI\'nıza yapıştırın (ChatGPT / Claude / Openclaw vb.) ve gönderin', typesTitle: '27 kişilik tipi', privacyTitle: 'Gizlilik', faqTitle: 'Sıkça sorulan sorular', abiTitle: 'Bu adam kim?', abiDescription: 'Tanışın, Abi. Tepede birkaç saç kaldı, kalıcı göz altı morlukları, kahve bardağı cerrahi olarak eline yapıştırılmış. Low-poly ama yüksek stres. ABTI\'nin resmi maskotu ve var olan tüm insan-AI ilişkilerinin portresi. Abi ve 28 kişilik tipinin tamamı [YouMind](https://youmind.com) tarafından yapıldı. YouMind, AI destekli bir öğrenme + yaratım aracı. Herhangi bir içeriği kaydedin (YouTube / podcast / makale), kaynaklarınızdan derinlemesine öğrenin ve makale, görsel, slayt, web sitesi, video, ses ve daha fazlasını oluşturun.', footerDisclaimer: 'Sadece eğlence amaçlı (ama doğru olduğunu biliyorsun)' };

// ============================================================
// 翻译表
// ============================================================

export const translations: Record<Locale, Translation> = {
  'en-US': en,
  'zh-CN': zhCN,
  'zh-TW': zhTW,
  'ja-JP': jaJP,
  'ko-KR': koKR,
  'th-TH': thTH,
  'vi-VN': viVN,
  'hi-IN': hiIN,
  'es-ES': esES,
  'es-419': es419,
  'de-DE': deDE,
  'fr-FR': frFR,
  'it-IT': itIT,
  'pt-BR': ptBR,
  'pt-PT': ptPT,
  'tr-TR': trTR,
};

/** 获取翻译，支持 {{variable}} 占位符 */
export function t(
  key: keyof Translation,
  locale: Locale,
  params?: Record<string, string>,
): string {
  let text = translations[locale]?.[key] ?? translations['en-US'][key] ?? key;
  if (params) {
    for (const [k, v] of Object.entries(params)) {
      text = text.replace(new RegExp(`\\{\\{${k}\\}\\}`, 'g'), v);
    }
  }
  return text;
}
