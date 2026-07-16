---
author: xsugarlee
title: 用 AI 开发 Chrome 插件
date: 2026-07-12 23:12:50
draft: false
description: "刚开始开发这个扩展没有想太多，只是刚好被xhs的评论区吸引，原来有那么多的精华甚至价值超过于原笔记，为了防止自己遗忘就即兴做了这样一个插件"
categories: Vibe Coding
featured: true
thumbnail: ""
tags:
  - ai
  - chrome
  - website
  - javascript
  - extension
---

AI技术正重塑个人成长与工作模式：它既是提升效率的利器，也是培养审美与逻辑的私教。学会驾驭这一工具已成为必备技能。更重要的是，AI支持深度个性化定制，能按需打造专属功能模块，让每一个项目都拥有独一无二的智能解决方案。<!--more-->

## 项目开发

刚开始开发这个扩展没有想太多，只是刚好被xhs的评论区吸引，原来有那么多的精华甚至价值超过于原笔记，为了防止自己遗忘就即兴做了这样一个插件：

![](screenshot-20260712-232232.png)

![](screenshot-20260712-232521.png)

从最初单一功能的雏形搭建，到后续系统的`逐步完善`，AI展现了惊人的适应性。我仅需构思底层`逻辑框架`，并以精准的语言下达指令，AI便能自主完成从全局布局到细节功能的`迭代`与`优化`。这种"所想即所得"的开发体验，不仅令我惊叹于技术的伟力，更坚定了我深耕人工智能领域的决心。

## 部分代码

```js
// 生成单条评论卡片 HTML（修复嵌套模板字面量）
  function createCommentCardHtml(c, catMap) {
    const cat = catMap[c.category] || { name: "未分类", color: "#999" };
    const pinnedClass = c.pinned ? "pinned" : "";
    const selectedClass = selectedCommentIds.has(c.id) ? "selected" : "";
    const displayName = c.title || c.author || "匿名";

    const noteLink = c.noteUrl
      ? `<a href="${c.noteUrl}" target="_blank" class="comment-note-link" title="查看原笔记: ${escHtml(c.noteTitle || "")}">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
        </a>`
      : "";
```

让我们来看看元宝对此片段的深度剖析（这里做了精简化处理）：

**一句话：**

将数据对象 `c`转成一张带安全转义、状态样式的评论卡片 HTML。

**四个核心动作：**

1. **取分类**：`catMap`找不到就兜底"未分类"。
2. **定状态**：根据 `pinned`和选中 Set 生成 CSS 类名。
3. **定名称**：优先用 `title`，其次 `author`，否则"匿名"。
4. **插链接**：有 `noteUrl`才生成外链按钮，并用 `escHtml`防 XSS。

**关键点：**

⚠️ `escHtml`是灵魂，防止 HTML/JS 注入；条件渲染减少无效 DOM。

值得称道的是，AI不仅精准解析了`Vibe Coding`产出的代码逻辑，更成功识别出了我基于安全考量进行的优化。这种对代码上下文与**安全阈值**的深刻理解，使得开发效率得到了指**数级提升**。展望未来，若能在这一高效流程中注入**审美意识**与**高阶交互设计**，用户体验将迎来更大幅度的**跃升**。

## 总结

本次实践深刻印证了人工智能作为"全能协作者"的巨大潜力。从最初仅将AI视为提升**工作效率**的辅助工具，到利用其培养**审美素养**与**逻辑思维**，再到实现**个性化**的项目功能**定制**，人机协作的边界在不断拓宽。特别是在开发环节，AI展现了惊人的理解力：它不仅能精准识别`Vibe Coding`生成的代码，还能敏锐捕捉到我基于**安全考量**进行的优化点。这种对代码上下文与**安全阈值**的深度感知，极大地释放了**开发效能**。

然而，技术的高效仅是基础，AI生成的框架尚需注入人类的`审美意识`与丰富的`UI交互`设计。未来，只有将`AI`的**工程效率**与人类的**感性审美**深度融合，才能在极大提升开发效率的同时，打造出真正触动人心、体验卓越的产品，这也更加坚定了我深耕人工智能领域的信心。
