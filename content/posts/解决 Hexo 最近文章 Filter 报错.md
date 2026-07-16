---
title: 解决 Hexo 最近文章 Filter 报错
date: 2024-02-17 19:40:00
draft: false
description: "在 JavaScript 开发中，经常会遇到由于调用未定义对象或数组而引发的错误，例如在hexo项目开发中出现最近文章 filter 报错的问题。本文将深入分析此类错误，并提供解决方法。"
categories: Website
featured: true
thumbnail: ""
tags:
  - hexo
  - filter
  - website
  - javascript
  - technology
author: "xsugarlee"
---

在 JavaScript 开发中，经常会遇到由于调用未定义对象或数组而引发的错误，例如在hexo项目开发中出现最近文章 filter 报错的问题。本文将深入分析此类错误，并提供解决方法。<!--more-->

## 问题描述

错误信息提示我们的问题出现在 `index.ejs` 文件的第 65 行，具体是在以下代码处：

```ejs
<%- partial('_partial/post-list', {
    posts: page.posts.filter(post => post.featured),
    show_tags: false
}) %>
```

1. 错误信息中提到了 `Cannot read properties of undefined (reading 'filter')`，这表明 `page.posts` 是 `undefined`，而 `undefined` 是没有 `filter` 方法的。

## 解决方法

要解决这个问题，我们需要确保 `page.posts` 存在且是一个数组，然后再调用 `filter` 方法。为此，我们应该在代码中添加一些检查以确保安全地访问 `page.posts`。

## 代码示例

```ejs
<% if (page.posts) { %>
    <!-- List of featured posts -->
    <%- partial('_partial/post-list', {
        posts: page.posts.filter(post => post.featured),
        show_tags: false
    }) %>
<% } %>
```

通过上述更改，我们添加了一个条件语句，在 `page.posts` 存在且为数组时才会执行 `filter` 方法。这样就避免了在 `undefined` 上调用 `filter` 方法而导致的错误。保存更改后，重新加载页面或重新编译您的项目，应该就可以解决这个错误了。
