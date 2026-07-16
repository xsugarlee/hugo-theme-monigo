---
author: "xsugarlee"
title: 解决 SourceTree 提交代码失败
date: 2024-02-22 22:31:09
draft: false
description: "最近使用SourceTree提交代码时遇到了问题，尽管尝试重新安装SourceTree和Git，但问题仍然存在。"
categories: Software
tags:
  - sourcetree
  - error
  - fatal
  - git
  - 404
  - http
---

最近使用SourceTree提交代码时遇到了问题，尽管尝试重新安装SourceTree和Git，但问题仍然存在。

## 错误信息

在提交代码时，出现了以下错误信息：

```powershell
git -c diff.mnemonicprefix=false -c core.quotepath=false --no-optional-locks push -v --tags origin DEV:DEV
fatal: unable to access 'https://bitbucket.org/xxxxxx/xxxxxx.git/': Received HTTP code 404 from proxy after CONNECT
Pushing to https://xxxxxx@bitbucket.org/xxxxxx/xxxxxx.git
完成时带有错误，见上文。
```

这个错误提示表明无法访问远程仓库，并返回了HTTP 404错误码。

## 解决方案

通过以下步骤解决该问题：

1. 打开SourceTree软件。
2. 点击菜单栏中的 "工具"。
3. 选择 "选项"。
4. 在选项窗口中找到 "网络" 选项。
5. 取消勾选 "`向Git/Mercurial配置文件中添加代理服务器信息`" 选项。
6. 点击 "确定" 保存设置。

以上步骤完成后，再次尝试提交代码，问题应该会得到解决。
