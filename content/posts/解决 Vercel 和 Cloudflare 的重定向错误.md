---
author: "xsugarlee"
title: 解决 Vercel 和 Cloudflare 的重定向错误
date: 2024-02-17 19:30:00
draft: false
description: "在使用 Vercel 和 Cloudflare 的组合时，有时会出现**ERR_TOO_MANY_REDIRECTS**错误，这可能是由于配置问题导致的重定向循环。"
categories: Website
thumbnail: ""
tags:
  - dns
  - vercel
  - domain
  - website
  - ssl/tls
  - interview
  - technology
  - cloudflare
---

在使用 Vercel 和 Cloudflare 的组合时，有时会出现 "**ERR_TOO_MANY_REDIRECTS**" 错误，这可能是由于配置问题导致的重定向循环。以下是解决该错误的专业技术方法：

<!--more-->

## 进入Cloudflare控制面板

1. 使用您的 Cloudflare 账户登录 Cloudflare 控制面板。

## 调整SSL/TLS设置

1. 在 Cloudflare 控制面板中，点击您有问题的域名。
2. 打开左侧的 SSL/TLS 设置。
3. 在 Overview 中，将加密模式设置为 "Full" 或 "Full (strict)"。

## 检查DNS设置

1. 在 Cloudflare 控制面板中，转到 DNS 设置页面。
2. 找到您有问题的记录，并检查 Proxy status 是否设置为 Proxied。
3. 如果是，暂时将 Proxy 设置为 "DNS only"，然后点击右下角的保存。

## 清除DNS缓存并更换DNS服务器

1. 使用 nslookup 查询您的域名，确认是否仍然显示 Cloudflare 的 IP 地址。
2. 如果仍然显示 Cloudflare 的 IP 地址，请尝试清除 DNS 缓存。Windows 用户可以执行命令 `ipconfig /flushdns` 来清除 DNS 缓存。
3. 如果问题仍然存在，考虑更换 DNS 服务器为 dns.google 或者 8.8.8.8 / 8.8.4.4。Google DNS 的记录更新速度非常快。

## 测试并重新设置Proxy

1. 测试访问您的网站，确认是否已经解决问题。
2. 如果一切正常，可以重新将 Proxy 设置为 "Proxied"。

通过以上专业技术方法，您应该能够解决 Vercel 和 Cloudflare 的重定向错误 "ERR_TOO_MANY_REDIRECTS"。如果问题仍然存在，请考虑进一步检查您的网站配置。
