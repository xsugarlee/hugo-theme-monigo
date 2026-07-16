---
author: "xsugarlee"
title: "使用 Oh-My-Posh 配置美化终端"
date: 2023-11-25 22:32:30
draft: false
description: "Windows默认终端显得单调，而Windows 11自带终端Windows Terminal更简便。我们可利用业余时间美化系统终端。本文分享了Oh-My-Posh终端美化和PowerShell实践心得，为大家提供经验，减少冗余步骤。"
categories: Windows
tags:
  - terminal
  - powershell
  - theme
---

Windows默认终端显得单调，而Windows 11自带终端Windows Terminal更简便。我们可利用业余时间美化系统终端。本文分享了Oh-My-Posh终端美化和PowerShell实践心得，为大家提供经验，减少冗余步骤。<!--more-->内容参考[知乎文章](https://zhuanlan.zhihu.com/p/354603010)。

首先是安装Power Shell 7

## 安装Power Shell 7

> 这里推荐使用命令行进行安装

在PowerShell中输入以下命令：

```powershell
winget search Microsoft.PowerShell
```

得到以下结果：

```powershell
Name               Id                           Version Source
---------------------------------------------------------------

PowerShell         Microsoft.PowerShell         7.2.6.0 winget
PowerShell Preview Microsoft.PowerShell.Preview 7.3.0.6 winget
```

选择`非preview`版进行安装：

```powershell
winget install --id Microsoft.Powershell --source winget
```

等待安装完成后，再安装Oh-My-Posh。

## 安装Oh-My-Posh

使用PowerShell 7运行以下命令安装Oh-My-Posh：

```powershell
winget install JanDeDobbeleer.OhMyPosh -s winget
```

等待安装完成后，以`管理员权限`重启终端。

安装Nerd字体，推荐安装[Cascadia Code](https://www.nerdfonts.com/)，这个字体兼容性较好。在Windows Terminal的设置中将字体改为Cascadia Code：默认值 >> 外观 >> 字体。

如果安装了VSCode，美化设置会自动同步到内置终端。

使用命令打开PowerShell 7的配置文件。文件应为空白，写入下面代码并保存：

```powershell
oh-my-posh init pwsh --config "$env:POSH_THEMES_PATH/fish.omp.json" | Invoke-Expression
```

这里将主题改为`fish`，你可以通过命令查看主题，然后在配置文件中更改相应的主题名称。到这里基本配置完成，你还可以在设置中调整亚克力效果、背景图等效果。
