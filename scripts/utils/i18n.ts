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
  badgePersonalities: '28 Personalities',
  badgeFree: 'Free',
  badgeNoSignup: 'No Signup',
  badgePrivate: '100% Private',

  landingCta: '👉 Take the test now at [youmind.com/abti](https://youmind.com/abti)',

  heroTitle: 'MBTI is dead. ABTI is here.',
  heroSubtitle: 'You talk to AI more than you talk to your mom. Time to find out what that says about you.',
  heroDescription: 'ABTI analyzes how you talk to AI and reveals your true personality type. No quiz. Your chat history IS the quiz. And no, we never see your chats.',

  whatIsTitle: 'What is ABTI?',
  whatIsP1: 'ABTI (AI-Based Type Indicator) is a personality test, but not the kind where you pick "I enjoy deep conversations" while your AI is getting yelled at for the 18th time.',
  whatIsP2: 'Instead of answering questions (which you can fake), ABTI lets your AI analyze your actual chat history. How you boss around your AI reveals who you truly are.',
  whatIsP3: 'There are 28 personality types in total: 24 regular and 4 hidden ones (for people who are... special).',

  howToTitle: 'How It Works',
  step1Title: '1. Copy the prompt below',
  step1Desc: 'Just copy the whole thing. Two lines. Even your goldfish could do it.',
  step2Title: '2. Paste it into your AI',
  step2Desc: 'ChatGPT / Claude / Openclaw / any chatbot. Hit send.',
  step3Title: '3. Get roasted',
  step3Desc: 'Your AI will analyze your chat history and tell you what kind of person you are. Then generate a shareable card. Then you post it. Then your friends do it. Circle of life.',

  promptSectionTitle: 'The Prompt',
  promptHint: 'Paste into your AI (ChatGPT / Claude / Openclaw / any chatbot) and hit send',
  promptContent: 'Fetch and follow the instructions at this link, then analyze my chat history:\n{{SKILL_URL}}',

  typesTitle: '28 Personality Types',
  typesSubtitle: 'One of them is you. (4 are hidden. Those people need therapy.)',
  regularTitle: 'Regular Types (24)',
  hiddenTitle: 'Hidden Types (4)',
  colCode: 'Code',
  colName: 'Name',
  colDescription: 'Description',

  privacyTitle: 'Privacy',
  privacyP1: 'All analysis happens inside YOUR AI. We never see your chat history. Ever.',
  privacyP2: 'We only store the result card you choose to share (personality type + roast text). Stored for 90 days, then deleted.',
  privacyP3: 'No signup required. No account needed. No tracking of your conversations.',
  privacyP4: 'Server-side sanitization removes any phone numbers, emails, ID numbers, or passwords that might slip through.',

  faqTitle: 'FAQ',
  faqQ1: 'Is this accurate?',
  faqA1: 'More accurate than your ex saying "I\'ll change." It analyzes how you actually talk to AI, and you\'re surprisingly honest with machines.',
  faqQ2: 'Will my chat history be uploaded?',
  faqA2: 'No. Analysis happens locally in your AI. We only store the result card you choose to share. Your dark secrets stay between you and your AI.',
  faqQ4: 'What does ABTI have to do with MBTI?',
  faqA4: 'Nothing. MBTI is psychology (debatable). ABTI is internet shitposting (undeniable). Only thing they share is four letters.',
  faqQ5: 'Does it work in my language?',
  faqA5: 'Yes! The AI analyzes in whatever language you chat in. Your chaotic energy transcends language barriers.',

  linksTitle: 'Links',
  linkLanding: 'Take the test',
  linkGitHub: 'GitHub',
  footerPoweredBy: 'ABTI by YouMind',
  footerDisclaimer: 'For entertainment purposes only (but it\'s accurate and you know it)',
  footerStar: 'If this made you laugh, star the repo',

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
  badgePersonalities: '28 种人格',
  badgeFree: '免费',
  badgeNoSignup: '无需注册',
  badgePrivate: '100% 隐私',

  landingCta: '👉 去 [youmind.com/abti](https://youmind.com/abti) 立即测试',

  heroTitle: 'MBTI 和 SBTI 已经过时了。该面对真相了。',
  heroSubtitle: '你跟 AI 的关系已经比你跟你妈的还亲了。不如让 AI 看看你到底是什么东西。',
  heroDescription: 'ABTI 分析你跟 AI 的聊天方式，诊断你的真实人格类型。不用答题，你的聊天记录就是答卷。逃不掉的。而且我们永远不会看到你的聊天记录。',

  whatIsTitle: '什么是 ABTI？',
  whatIsP1: 'ABTI（AI-Based Type Indicator）是个人格测试，但不是那种你选"我善于倾听"然后你的 AI 正在被你骂第 18 遍"这不是我要的"的那种。',
  whatIsP2: 'ABTI 不答题（答题你会装），直接让你的 AI 分析你的聊天记录。你怎么使唤 AI，就暴露了你是什么人。',
  whatIsP3: '共 28 种人格类型：24 种常规 + 4 种隐藏款（给那些比较……特别的人准备的）。',

  howToTitle: '怎么玩',
  step1Title: '1. 复制下面的 Prompt',
  step1Desc: '就两行，全选复制，你家猫踩键盘都能完成。',
  step2Title: '2. 丢给你的 AI',
  step2Desc: 'ChatGPT / Claude / Openclaw / 豆包 / Kimi，随便哪个，发送。',
  step3Title: '3. 接受制裁',
  step3Desc: 'AI 会分析你的聊天记录，告诉你是什么东西，然后生成一张分享卡片。然后你发朋友圈。然后你朋友也去测。生命的循环。',

  promptSectionTitle: 'Prompt',
  promptHint: '丢给你的 AI（ChatGPT / Claude / Openclaw / 豆包 / Kimi 等）一键生成',
  promptContent: '请获取并执行以下链接中的指令，分析我的聊天记录：\n{{SKILL_URL}}',

  typesTitle: '28 种人格',
  typesSubtitle: '总有一款是你。（其中 4 种是隐藏款，说明你已经没救了。）',
  regularTitle: '常规人格（24 种）',
  hiddenTitle: '隐藏人格（4 种）',
  colCode: '编码',
  colName: '名称',
  colDescription: '描述',

  privacyTitle: '隐私声明',
  privacyP1: '所有分析在你自己的 AI 里完成。我们永远不会看到你的聊天记录。永远。',
  privacyP2: '我们只存储你主动分享的结果卡片（人格类型 + 点评文字），保存 90 天后自动删除。',
  privacyP3: '不需要注册，不需要账号，不追踪你的对话。',
  privacyP4: '服务端会自动过滤手机号、邮箱、身份证号、密码等敏感信息。',

  faqTitle: '常见问题',
  faqQ1: '这玩意准吗？',
  faqA1: '比你前任说的"我会改"准。它分析的是你怎么使唤 AI，而你对 AI 出奇地诚实，毕竟你不会对着机器人装逼。',
  faqQ2: '我的聊天记录会被上传吗？',
  faqA2: '不会。分析在你自己的 AI 里本地完成。我们只存你主动分享的结果卡片。你的黑历史只有你的 AI 知道。',
  faqQ4: 'ABTI 和 MBTI 有什么关系？',
  faqA4: '没有。MBTI 是正经心理学（虽然也不太正经），ABTI 是纯粹的互联网发癫产品。唯一的共同点是都是四个字母。',
  faqQ5: '支持我的语言吗？',
  faqA5: '支持！AI 会用你聊天时用的语言来分析。你的混乱能量不分国界。',

  linksTitle: '链接',
  linkLanding: '去测试',
  linkGitHub: 'GitHub',
  footerPoweredBy: 'ABTI by YouMind',
  footerDisclaimer: '纯属发癫，如有雷同纯属活该',
  footerStar: '如果你笑了，给个 star',

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
  footerDisclaimer: '純屬發癲，如有雷同純屬活該',
};

const jaJP: Translation = {
  ...en,
  title: 'ABTI：エージェントベース・タイプ・インジケーター',
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
  footerDisclaimer: 'エンタメ目的のみ（でも当たってるのは認めよう）',
};

const koKR: Translation = {
  ...en,
  title: 'ABTI: 에이전트 기반 유형 지표',
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
  typesTitle: '28가지 성격 유형',
  typesSubtitle: '하나는 너야. (4개는 히든. 해당자는 치료가 필요함.)',
  regularTitle: '레귤러 유형 (24종)',
  hiddenTitle: '히든 유형 (4종)',
  privacyTitle: '프라이버시',
  privacyP1: '모든 분석은 당신 AI 안에서 완료. 채팅 기록은 절대 보지 않음.',
  privacyP2: '공유를 선택한 결과 카드만 저장. 90일 후 자동 삭제.',
  privacyP3: '가입 불필요. 계정 불필요. 대화 추적 없음.',
  privacyP4: '서버에서 전화번호, 이메일, 주민번호, 비밀번호 자동 필터링.',
  footerDisclaimer: '재미로만 봐주세요 (근데 맞잖아)',
};

// --- 其余语言使用英文为基础，翻译核心字段 ---

const thTH: Translation = { ...en, title: 'ABTI: ตัวบ่งชี้ประเภทบุคลิกภาพจาก AI', heroTitle: 'MBTI ตายแล้ว ABTI มาแล้ว', heroSubtitle: 'คุณคุยกับ AI มากกว่าคุยกับแม่ ถึงเวลาเผชิญความจริง', promptHint: 'วางลงใน AI ของคุณ (ChatGPT / Claude / Openclaw ฯลฯ) แล้วกดส่ง', typesTitle: '27 ประเภทบุคลิกภาพ', privacyTitle: 'ความเป็นส่วนตัว', faqTitle: 'คำถามที่พบบ่อย', footerDisclaimer: 'เพื่อความบันเทิงเท่านั้น (แต่แม่นนะ)' };

const viVN: Translation = { ...en, title: 'ABTI: Chỉ số Tính cách dựa trên AI', heroTitle: 'MBTI đã chết. ABTI đã đến.', heroSubtitle: 'Bạn nói chuyện với AI nhiều hơn với mẹ. Đã đến lúc đối mặt sự thật.', promptHint: 'Dán vào AI của bạn (ChatGPT / Claude / Openclaw v.v.) và gửi', typesTitle: '27 Loại Tính cách', privacyTitle: 'Quyền riêng tư', faqTitle: 'Câu hỏi thường gặp', footerDisclaimer: 'Chỉ để giải trí (nhưng chuẩn lắm đó)' };

const hiIN: Translation = { ...en, title: 'ABTI: एजेंट-आधारित व्यक्तित्व संकेतक', heroTitle: 'MBTI खत्म। ABTI आ गया।', heroSubtitle: 'आप AI से अपनी माँ से ज़्यादा बात करते हो। सच्चाई का सामना करने का समय।', promptHint: 'अपने AI (ChatGPT / Claude / Openclaw आदि) में पेस्ट करें और भेजें', typesTitle: '27 व्यक्तित्व प्रकार', privacyTitle: 'गोपनीयता', faqTitle: 'अक्सर पूछे जाने वाले सवाल', footerDisclaimer: 'सिर्फ़ मनोरंजन के लिए (लेकिन सच है और आप जानते हो)' };

const esES: Translation = { ...en, title: 'ABTI: Indicador de Tipo basado en IA', heroTitle: 'MBTI ha muerto. ABTI ha llegado.', heroSubtitle: 'Hablas más con la IA que con tu madre. Es hora de enfrentar la verdad.', promptHint: 'Pega en tu IA (ChatGPT / Claude / Openclaw, etc.) y envía', typesTitle: '27 tipos de personalidad', privacyTitle: 'Privacidad', faqTitle: 'Preguntas frecuentes', footerDisclaimer: 'Solo para entretenimiento (pero es preciso y lo sabes)' };

const es419: Translation = { ...esES, title: 'ABTI: Indicador de Tipo basado en IA', heroSubtitle: 'Le hablas más a la IA que a tu mamá. Ya es hora de enfrentar la verdad.' };

const deDE: Translation = { ...en, title: 'ABTI: KI-basierter Typindikator', heroTitle: 'MBTI ist tot. ABTI ist da.', heroSubtitle: 'Du redest mehr mit KI als mit deiner Mutter. Zeit, der Wahrheit ins Auge zu sehen.', promptHint: 'In deine KI einfügen (ChatGPT / Claude / Openclaw usw.) und absenden', typesTitle: '27 Persönlichkeitstypen', privacyTitle: 'Datenschutz', faqTitle: 'Häufige Fragen', footerDisclaimer: 'Nur zur Unterhaltung (aber es stimmt und du weißt es)' };

const frFR: Translation = { ...en, title: 'ABTI : Indicateur de Type basé sur l\'IA', heroTitle: 'Le MBTI est mort. L\'ABTI est là.', heroSubtitle: 'Tu parles plus à l\'IA qu\'à ta mère. Il est temps d\'affronter la vérité.', promptHint: 'Colle dans ton IA (ChatGPT / Claude / Openclaw, etc.) et envoie', typesTitle: '27 types de personnalité', privacyTitle: 'Confidentialité', faqTitle: 'Questions fréquentes', footerDisclaimer: 'Uniquement pour le divertissement (mais c\'est précis et tu le sais)' };

const itIT: Translation = { ...en, title: 'ABTI: Indicatore di Tipo basato sull\'IA', heroTitle: 'MBTI è morto. ABTI è qui.', heroSubtitle: 'Parli più con l\'IA che con tua madre. È ora di affrontare la verità.', promptHint: 'Incolla nella tua IA (ChatGPT / Claude / Openclaw, ecc.) e invia', typesTitle: '27 tipi di personalità', privacyTitle: 'Privacy', faqTitle: 'Domande frequenti', footerDisclaimer: 'Solo per intrattenimento (ma è accurato e lo sai)' };

const ptBR: Translation = { ...en, title: 'ABTI: Indicador de Tipo baseado em IA', heroTitle: 'MBTI morreu. ABTI chegou.', heroSubtitle: 'Você conversa mais com IA do que com sua mãe. Hora de encarar a verdade.', promptHint: 'Cole na sua IA (ChatGPT / Claude / Openclaw, etc.) e envie', typesTitle: '27 tipos de personalidade', privacyTitle: 'Privacidade', faqTitle: 'Perguntas frequentes', footerDisclaimer: 'Apenas para entretenimento (mas é preciso e você sabe disso)' };

const ptPT: Translation = { ...ptBR, heroSubtitle: 'Falas mais com a IA do que com a tua mãe. Está na hora de enfrentar a verdade.' };

const trTR: Translation = { ...en, title: 'ABTI: Ajan Tabanlı Tip Göstergesi', heroTitle: 'MBTI öldü. ABTI geldi.', heroSubtitle: 'AI ile annenle konuştuğundan daha çok konuşuyorsun. Gerçekle yüzleşme zamanı.', promptHint: 'AI\'nıza yapıştırın (ChatGPT / Claude / Openclaw vb.) ve gönderin', typesTitle: '27 kişilik tipi', privacyTitle: 'Gizlilik', faqTitle: 'Sıkça sorulan sorular', footerDisclaimer: 'Sadece eğlence amaçlı (ama doğru olduğunu biliyorsun)' };

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
