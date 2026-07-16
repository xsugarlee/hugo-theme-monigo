---
author: "xsugarlee"
title: 解决 VitePress 导航栏磨砂效果缝隙
date: 2024-02-19 22:22:00
draft: false
description: "在使用 VitePress 构建静态网站时，开发者们常常会遇到导航栏和目录栏中间出现缝隙的问题。这个缝隙可能会破坏页面的整体美观性，并影响用户体验。"
categories: Website
featured: true
thumbnail: ""
tags:
  - vitepress
  - navbar
  - website
  - css
  - technology
---

在使用 VitePress 构建静态网站时，开发者们常常会遇到导航栏和目录栏中间出现缝隙的问题。这个缝隙可能会破坏页面的整体美观性，并影响用户体验。<!--more-->本文将介绍这个问题的根源以及如何通过 CSS 修复这个 Bug。

## 问题描述

在 VitePress 中，通过添加磨砂效果（backdrop-filter）给导航栏和目录栏，我们可以使其看起来更加清晰和美观。然而，当我们使用这种效果时，有时会发现在导航栏和目录栏之间出现了一个不期望的缝隙，从而影响了页面的整体外观。

## 问题原因

这个缝隙的出现是由于 CSS 中的定位（positioning）和 z-index 属性的设置造成的。当我们使用绝对定位（absolute positioning）并设置了 z-index 值时，可能会导致这个缝隙的出现。

## 解决方法

我们可以通过适当调整 CSS 样式来修复这个问题。以下是一种可能的解决方案：

```css
cssCopy code:root {
  --vp-nav-bg-color: transparent;
}

.VPLocalNav {
  position: relative;
  backdrop-filter: saturate(180%) blur(12px);
  background: var(--vp-nav-bg-color) !important;
}

.VPNav::before,
.VPLocalNav.reached-top::before {
  position: absolute;
  content: "";
  top: 0; /* 调整位置覆盖整个导航栏 */
  left: 0;
  right: 0;
  bottom: 0;
  backdrop-filter: saturate(180%) blur(12px);
  z-index: 0.0000001; /* 调整 z-index 为大于 0 的值 */
}

.VPNavBar,
.VPLocalNav.reached-top {
  border-bottom: none;
}
```

通过将 `z-index` 值设置为一个略大于 0 的很小的值，我们可以确保导航栏和目录栏之间的缝隙被正确地覆盖和填充，从而修复了这个 Bug。

## 结论

通过适当地调整 CSS 样式，我们可以解决 VitePress 中导航栏和目录栏磨砂效果缝隙出现的问题。这个解决方案可以提高网站的外观和用户体验，并确保页面的整体一致性。
