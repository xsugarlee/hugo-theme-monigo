---
author: "xsugarlee"
title: 如何将 Sublime Text 4 设置成中文版
date: 2023-05-22 18:40:46
draft: false
description: "在寻找 Sublime Text 4 设置中文版的教程时，许多教程都建议首先在Preferences（首选项）菜单中找到Package Control（包控制），但在我的 Sublime Text 4 首选项中却没有这一项。"
categories: Software
thumbnail: ""
tags:
  - setup
  - editor
  - online
  - chinese
  - install
  - technology
  - sublime text 4
---

在寻找 Sublime Text 4 设置中文版的教程时，许多教程都建议首先在"Preferences"（首选项）菜单中找到"Package Control"（包控制），但在我的 Sublime Text 4 首选项中却没有这一项。<!--more-->我搜索了许多教程，大多数都建议使用Ctrl+`快捷键调出控制台，然后粘贴一段代码，但是尝试了几次后发现软件都会卡死不动。最终，我通过自己上网查找了许多资料，进行了多次试验，才发现了直接安装 Package Control 的方法。

一开始，我们的 Sublime Text 4 是没有 `Package Control` 的，需要我们自己手动安装。安装了Package Control之后，我们就可以安装我们想要的插件了。

## 安装Package Control

1. 打开Sublime Text，使用快捷键`Shift+Ctrl+P`，弹出查找栏。
2. 在搜索框中输入关键字"`install`"，会出现下拉选项，点击选择其中的"`Install Package Control`"。
3. 安装成功后会有提示，也可以通过Preferences查看，如果有"Package Control"选项，说明安装成功了。

## 安装中文插件

1. 使用快捷键Shift+Ctrl+P，再次打开查找栏。
2. 在弹出框中输入"Install Package"，稍等几秒给软件一点反应时间。
3. 在弹出的列表中输入"chinese"，选择"ChineseLocalizations"，稍等几秒软件就会自动调整为中文。

除了安装中文插件，我们还可以通过软件的帮助菜单中的"Language"选项查看并修改其他语言设置。

通过上述操作，我们可以安装其他插件。

## 常用插件列表

- **Emmet**：编码快捷键，前端必备。
- **JSFormat**：JavaScript代码格式化插件。
- **LESS**：LESS语法高亮插件。
- **Less2CSS**：编译LESS文件为CSS文件。
- **Alignment**：代码对齐插件。
- **sublime-autoprefixer**：为CSS添加私有前缀。
- **Clipboard History**：粘贴板历史记录插件。
- **Bracket Highlighter**：代码匹配插件。
- **Git**：Git管理插件。
- **DocBlockr**：生成优美注释插件。
- **ColorPicker**：调色板插件。
- **ConvertToUTF8**：文件转码成UTF-8插件。
- **AutoFileName**：快捷输入文件名插件。
- **IMESupport**：中文输入法支持插件。

> 个人建议使用Package Control进行安装，因为手动安装不够便捷。

参考文档：[如何将Sublime Text 4 设置成中文版\_sublime text4设置中文-CSDN博客](https://blog.csdn.net/hzgjgr/article/details/118279688)
