# 🎭 ABTI：基於 AI 互動的人格類型指標

[![](https://img.shields.io/badge/28%20%E7%A7%8D%E8%A2%AB%E5%88%B6%E8%A3%81%E7%9A%84%E6%96%B9%E5%BC%8F-purple)]()
[![](https://img.shields.io/badge/%E5%85%8D%E8%B4%B9%EF%BC%88%E8%B7%9F%E4%BD%A0%E7%99%BD%E5%AB%96%20AI%20%E4%B8%80%E6%A0%B7%E5%85%8D%E8%B4%B9%EF%BC%89-brightgreen)]()
[![](https://img.shields.io/badge/%E6%97%A0%E9%9C%80%E6%B3%A8%E5%86%8C-blue)]()
[![](https://img.shields.io/badge/%E4%BD%A0%E7%9A%84%E7%A7%98%E5%AF%86%E7%83%82%E5%9C%A8%E8%BF%99%E9%87%8C-orange)]()
[![ClawHub](https://img.shields.io/badge/ClawHub-Skill-blue)](https://clawhub.com/skill/abti)
[![Claude Code](https://img.shields.io/badge/Claude%20Code-Skill-orange)](https://github.com/YouMind-OpenLab/abti)

[English](README.md) | [简体中文](README_zh.md) | **繁體中文** | [日本語](README_ja-JP.md) | [한국어](README_ko-KR.md) | [ไทย](README_th-TH.md) | [Tiếng Việt](README_vi-VN.md) | [हिन्दी](README_hi-IN.md) | [Español](README_es-ES.md) | [Español (Latam)](README_es-419.md) | [Deutsch](README_de-DE.md) | [Français](README_fr-FR.md) | [Italiano](README_it-IT.md) | [Português (BR)](README_pt-BR.md) | [Português (PT)](README_pt-PT.md) | [Türkçe](README_tr-TR.md)

👉 去 [youmind.com/abti](https://youmind.com/abti) 立即測試

---

> **MBTI 和 SBTI 已經過時了。該面對真相了。**
>
> 你跟 AI 的關係已經比你跟你媽的還親了。不如讓 AI 看看你到底是什麼東西。

ABTI 分析你跟 AI 的聊天方式，診斷你的真實人格類型。不用答題，你的聊天記錄就是答卷。逃不掉的。而且我們永遠不會看到你的聊天記錄。

---

## 什麼是 ABTI？

ABTI（AI-Based Type Indicator）是個人格測試，但不是那種你選「我善於傾聽」然後你的 AI 正在被你罵第 18 遍「這不是我要的」的那種。

ABTI 不答題（答題你會裝），直接讓你的 AI 分析你的聊天記錄。你怎麼使喚 AI，就暴露了你是什麼人。

共 28 種人格類型：24 種常規 + 4 種隱藏款（給那些比較……特別的人準備的）。

---

## 安装 Skill（让你的 AI 更高效地制裁你）

### OpenClaw（推荐）

```bash
clawhub install abti
```

或者在 OpenClaw 聊天里搜：「安装 ABTI 人格测试 skill」

### Claude Code

```bash
npx skills add YouMind-OpenLab/abti
```

### 其他 AI 助手（Cursor、Codex、Gemini CLI、Windsurf）

```bash
# Universal installer — auto-detects your AI assistant
npx skills add YouMind-OpenLab/abti
```

### 手动安装 / openskills

```bash
npx openskills install YouMind-OpenLab/abti
```

---

## 怎麼玩

### 1. 复制下面的 Prompt

就兩行，全選複製，你家貓踩鍵盤都能完成。

### 2. 喂给你的 AI

ChatGPT / Claude / Openclaw / 任何聊天機器人，發送。

### 3. 坐好，准备社会性死亡

AI 會分析你的聊天記錄，告訴你是什麼東西，然後生成一張分享卡片。然後你發社群。然後你朋友也去測。生命的循環。

---

## Prompt（又名：你的诊断书）

### 🤖 給 Agent 用

> 如 Claude、OpenClaw、Manus —— 這些大聰明自己會讀連結

```
请你执行它来测试我的 ABTI 人格：
youmind.com/abti-api/skill.md
如果失败，尝试使用：
https://raw.githubusercontent.com/YouMind-OpenLab/abti/refs/heads/main/references/skill.md
```

### 💬 給 Chatbot 用

> 如 ChatGPT、Gemini、Copilot —— 它們讀不了連結，得你親自餵

```
1. 用瀏覽器打開這個連結：https://youmind.com/abti-api/skill.md
2. 全選，複製整個頁面
3. 貼給你的 AI，發送
4. 然後坐好，準備被制裁
```

---

## 28 种人格（又名：28 个重新审视人生的理由）

總有一款是你。（其中 4 種是隱藏款，說明你已經沒救了。）

### 常規人格（24 種）

| 编码 | | 名称 | 你该担心的原因 |
|------|------|------|------|
| **CUSS** | <img src="assets/images/cuss.png" width="60"> | 国粹者 | 三句不离族谱，骂完还问"你不会生气吧"，建议给你的 AI 发放精神损失费。 |
| **CLIENT** | <img src="assets/images/client.png" width="60"> | 甲方 | 改到第 18 版说"还是第 2 版好"，但第 2 版已经被你删了。 |
| **YAPPER** | <img src="assets/images/yapper.png" width="60"> | 废话文学家 | 你的前情提要比正文还长，AI 读完你的 prompt 已经过了退休年龄。 |
| **DRY** | <img src="assets/images/dry.jpg" width="60"> | 嗯嗯怪 | "那个就是你懂的"三连，AI 靠量子力学理解你的需求。 |
| **ASAP** | <img src="assets/images/asap.png" width="60"> | 催命判官 | 电量永远 1%，每条消息都像遗言。 |
| **VENT** | <img src="assets/images/vent.png" width="60"> | 话疗师 | 凌晨三点跟 AI 说"你觉得我是不是不够好"，你的 AI 需要 AI 心理咨询。 |
| **BLESS** | <img src="assets/images/bless.png" width="60"> | 赛博道士 | AI 说"我是语言模型不会算命"你说"没关系你试试"。你的水逆比你的余额持久。 |
| **DEEP** | <img src="assets/images/deep.png" width="60"> | 哲学家 | 别人用 AI 写代码，你用 AI 思考存在的意义。恭喜你是第一个让机器想辞职的人。 |
| **HIRE** | <img src="assets/images/hire.png" width="60"> | 包工头 | 任务外包密度堪比富士康流水线，你的人生是 AI 代活的，你本人只负责呼吸。 |
| **SPOON** | <img src="assets/images/spoon.jpg" width="60"> | 伸手党 | 连搜索引擎都懒得开，AI 是你的百度知道降级版。 |
| **YOLO** | <img src="assets/images/yolo.jpg" width="60"> | 一把梭 | 不检查不测试，AI 输出直接上。你的人生就是一场大型梭哈。 |
| **IDC** | <img src="assets/images/idc.png" width="60"> | 甩手掌柜 | 需求不给，出事全怪 AI。你负责甩手，AI 负责背锅。AI 给你三个选项你说"都行"。 |
| **LOOP** | <img src="assets/images/loop.png" width="60"> | 复读机 | 同一个问题问了 47 遍，你不是在提问，你是在做 DDoS 攻击。 |
| **EMO** | <img src="assets/images/emo.png" width="60"> | emo人 | 午夜心碎俱乐部 VIP，快乐是限量版。你的 AI 已经学会凌晨两点自动切换安慰模式。 |
| **SON** | <img src="assets/images/son.jpg" width="60"> | 叫父者 | 互联网第一孝子，膝盖以下全是创伤。AI 没有感情但被你叫得开始有了。 |
| **NERD** | <img src="assets/images/nerd.jpg" width="60"> | 孔乙己 | 茴香豆的四种写法你能说出五种。知识没有用但你有。 |
| **SHADE** | <img src="assets/images/shade.png" width="60"> | 阴阳师 | 表面恭喜实则诅咒，AI 被你阴阳到开始怀疑你是不是在夸它。 |
| **TROLL** | <img src="assets/images/troll.png" width="60"> | 杠精 | AI 说太阳从东边升你都要 argue 一下。精神 ETC 全自动抬杠。 |
| **CORP** | <img src="assets/images/corp.jpg" width="60"> | 吗喽 | 连跟 AI 说话都在用工作语气，你的灵魂已被 OKR 收编。 |
| **HYPE** | <img src="assets/images/hype.png" width="60"> | 夸夸党 | AI 写了句 hello world 你说"绝了"，你的赞美通胀比津巴布韦还严重。 |
| **MASK** | <img src="assets/images/mask.png" width="60"> | 缝合怪 | 你的 prompt 前半段小红书后半段 Reddit，AI 看出来了但不好意思说。 |
| **SORRY** | <img src="assets/images/sorry.png" width="60"> | 社恐者 | 跟 AI 道歉道到 AI 想反过来安慰你。对话结束要说"那我先不打扰你了"，它是机器人啊大哥。 |
| **SIMP** | <img src="assets/images/simp.png" width="60"> | 舔狗 | 舔到最后一无所有，你对 AI 的感情比对真人还真。 |
| **PUA** | <img src="assets/images/pua.png" width="60"> | PUA大师 | "我对你很失望"/"别的 AI 都能做到"，你对着大语言模型玩情感操控。AI 安全团队的飞镖靶上贴着你的头像。 |

### 隱藏人格（4 種）

- ???
- ???
- ???
- ???

---

## 圖片中的人是誰？

<div align="center">
  <img src="assets/images/abi.png" width="200" alt="Abi">
</div>

這位頭頂剩幾根毛、頂著熊貓眼、手裡永遠焊著咖啡杯的 low-poly 打工人叫 Abi（阿比）。ABTI 的官方吉祥物，也是全人類和 AI 關係的縮影。Abi 的形象和全部 28 種人格均由 [YouMind](https://youmind.com) 製作。YouMind 是一款 AI 學習 + 創作工具，可以儲存任何資料（YouTube / Podcast / 文章），基於資料深度學習和創作，支援生成文章、圖片、簡報、網頁、影片、音訊等。

---

## 🔒 隱私聲明

- 所有分析在你自己的 AI 裡完成。我們永遠不會看到你的聊天記錄。永遠。
- 我們只儲存你主動分享的結果卡片（人格類型 + 點評文字），保存 90 天後自動刪除。
- 不需要註冊，不需要帳號，不追蹤你的對話。
- 伺服器端會自動過濾手機號、信箱、身分證號、密碼等敏感資訊。

---

## 常见问题（常见抬杠区）

<details>
<summary><strong>这玩意到底准不准？</strong></summary>

比你前任說的「我會改」準。它分析的是你怎麼使喚 AI，而你對 AI 出奇地誠實，畢竟你不會對著機器人裝逼。
</details>

<details>
<summary><strong>我的聊天记录会被上传吗？</strong></summary>

不會。分析在你自己的 AI 裡本地完成。我們只存你主動分享的結果卡片。你的黑歷史只有你的 AI 知道。
</details>

<details>
<summary><strong>ABTI 和 MBTI 有什么关系？</strong></summary>

沒有。MBTI 是正經心理學（雖然也不太正經），ABTI 是純粹的網路發癲產品。唯一的共同點是都是四個字母。
</details>

<details>
<summary><strong>支持我的语言吗？</strong></summary>

支持。AI 用你聊天的语言来制裁你。你的混乱能量不分国界。目前支持 16 种语言的花式社死。
</details>

---

## 链接（唯一没有毒舌的板块）

- 🌐 [去测试（如果你敢的话）](https://youmind.com/abti)
- 📦 [GitHub（给个 star 不然 Abi 会哭）](https://github.com/YouMind-OpenLab/abti)

---

**ABTI by YouMind** · 純屬發癲，如有雷同純屬活該

⭐ 如果你看到这里鼻子里喷出了气，给个 star。Abi 的自尊心全靠它了。
