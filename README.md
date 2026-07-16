# MoniGo

一个极简的等宽字体驱动 Hugo 博客主题，专注于阅读体验与代码展示。

## 预览

🔗 [xsugarlee.github.io](https://xsugarlee.github.io/)

## 特性

- 📖 **等宽字体** — Maple Mono + 苹方-简，统一的视觉风格
- 🎨 **暖色调配色** — 柔和的米色系背景，舒适阅读
- 🌙 **深色模式** — 自动跟随系统设置
- 💻 **代码高亮** — Chroma 语法高亮 + 一键复制
- 📱 **响应式布局** — 完美适配桌面端与移动端
- ⚡ **回到顶部** — 滚动超过 300px 自动显示
- 📐 **Page Bundle** — 支持文章独立资源管理
- 🏷️ **标签分类** — 支持文章标签系统
- 🔢 **分页浏览** — 每页 10 篇文章
- 📊 **KaTeX 公式** — 支持 LaTeX 数学公式渲染

## 安装

```bash
cd themes
git clone https://github.com/xsugarlee/hugo-theme-monigo.git xsugarlee
```

## 配置

```yaml
baseURL: "https://your-domain.com/"
locale: "zh-tw"
title: "Your Blog Title"
theme: "MoniGo"

enableRobotsTXT: true
paginate: 10
summaryLength: 70

markup:
  highlight:
    noClasses: false
    style: monokailight
  goldmark:
    renderer:
      unsafe: true

menu:
  main:
    - name: "Writing"
      url: "/posts/"
      weight: 10

params:
  description: "A minimal, monospace-driven blog."
  author: "Your Name"
  email: "your@email.com"
  social:
    github: "your-github"
    twitter: "your-twitter"
```

## 主题配色

| 变量 | 颜色 | 用途 |
|------|------|------|
| `--color-bg` | `#F5F2EF` | 页面背景 |
| `--color-text` | `#1a1a1a` | 主文字 |
| `--color-text-muted` | `#6b6b6b` | 辅助文字 |
| `--color-border` | `#d4d0cb` | 边框 |
| `--highlight-background` | `#F3F1EF` | 代码块背景 |
| `--color-selection` | `#eadfd6` | 文字选中 |

## 文章格式

使用 Page Bundle 格式：

```
content/posts/
└── your-post-title/
    ├── index.md
    └── thumbnail.jpg
```

Front Matter 示例：

```yaml
---
title: "文章标题"
date: 2026-07-16
author: "作者名"
tags: ["tag1", "tag2"]
thumbnail: "thumbnail.jpg"
---
```

## 本地开发

```bash
hugo server -D
```

访问 http://localhost:1313/

## License

MIT
