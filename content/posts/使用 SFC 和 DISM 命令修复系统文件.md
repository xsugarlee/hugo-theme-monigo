---
author: "xsugarlee"
title: 使用 SFC 和 DISM 命令修复系统文件
date: 2023-11-25 18:03:10
draft: false
description: "在Windows系统遇到蓝屏、程序崩溃或功能无法使用的情况下，采用SFC和DISM命令进行系统文件修复是一种有效的技术手段。"
categories: Windows
tags:
  - windows
  - sfc
  - dism
---

在Windows系统遇到蓝屏、程序崩溃或功能无法使用的情况下，采用SFC和DISM命令进行系统文件修复是一种有效的技术手段。<!--more-->

若系统能正常启动，可通过管理命令提示符执行该修复过程。对于无法正常启动的系统，可以考虑从安装介质或恢复光盘启动，进入安全模式或恢复环境进行修复。

## 运行SFC命令修复

以下步骤需在Windows系统正常启动的情况下操作。

1. 使用快捷键`Win+X`或右键点击`开始`，选择`终端(管理员)`。
2. 在命令提示符中输入`sfc /scannow`命令，按Enter键执行完整系统扫描并尝试SFC修复。（注：命令后需保留sfc后的空格）

保持命令提示符窗口打开，直到命令完成，可能需要一些时间。

正常情况下，若系统文件完整性无问题，将看到消息“**Windows资源保护未发现任何完整性违规。**”

若出现“Windows资源保护发现损坏的文件但无法修复其中某些文件”消息，请尝试在`安全模式`重新启动PC并再次运行该命令。如仍失败，可考虑使用安装介质或恢复光盘启动并从那里尝试命令。

## 运行DISM命令修复

DISM（部署映像服务和管理工具）命令行工具广泛用于修复和准备Windows映像，包括Windows恢复环境、Windows安装程序和Windows PE。使用DISM可修复操作系统的恢复映像甚至虚拟磁盘（VHD）。

在介绍DISM修复之前，建议先尝试SFC修复。当SFC无法修复问题时，可通过DISM进一步修复系统文件。

### DISM CheckHealth选项

DISM命令行的`/CheckHealth`开关用于检测所有损坏文件，执行健康检查，不进行修复。

1. 使用快捷键`Windows + X`，选择`命令提示符（管理员）`。
2. 在命令行中执行以下检测命令：

```powershell
DISM /Online /Cleanup-Image /CheckHealth
```

按Enter键让DISM检查Windows组件存储是否损坏并自动修复。

等待命令运行完成，可能需要五到十分钟。若进度条暂时保持在18.5%，是正常现象，请耐心等待。

### DISM ScanHealth选项

`/ScanHealth`开关用于扫描Windows映像文件中损坏的部分。

1. 使用快捷键`Windows + X`，选择`命令提示符（管理员）`。
2. 在命令行中执行以下扫描命令：

```powershell
DISM /Online /Cleanup-Image /ScanHealth
```

### DISM RestoreHealth选项

`/RestoreHealth`开关在扫描到Windows映像文件中的错误后会自动尝试修复。由于涉及修复过程，执行时间较长，可能需要20分钟左右。

1. 使用快捷键`Windows + X`，选择`命令提示符（管理员）`。
2. 在命令行中执行以下检测和修复命令：

```powershell
DISM /Online /Cleanup-Image /RestoreHealth
```

在使用DISM命令行的`/RestoreHealth`或`/ScanHealth`参数时，进度可能会停留在20%或40%，不要担心，这是正常情况，几分钟之后操作即可完成。

当执行上述命令时，DISM将自动尝试使用Windows Update来替换已损坏的文件。若Windows Update组件存在问题，则需指定正常的Windows映像（.wim）作为修复源。

### 指定DISM修复源

DISM支持在使用`/RestoreHealth`参数的同时使用`/Source`来指定系统映像作为修复源。建议下载官方Windows 10 ISO，并提取其中的`install.wim`文件作为修复源。

1. 使用快捷键`Windows + X`，选择`命令提示符（管理员）`。
2. 在命令行中执行以下检测和修复命令：

```powershell
DISM /Online /Cleanup-Image /RestoreHealth /Source:文件路径install.wim
```

以上方法也可直接使用Windows 10安装媒体中的`install.wim`文件作为修复源，而不通过Windows Update进行修复。

## DISM配合使用install.ESD文件

可将`install.esd`作为修复源，与`install.wim`使用方式相同。如果从早期版本升级到Windows 10或直接下载过`install.esd`文件，也可将其与DISM命令配合使用。由于`install.esd`只是`install.wim`文件的加密版本，因此使用方式完全相同，只是扩展名变化。同时，DISM将相关日志文件写入%windir%/Logs/CBS/CBS.log。

在Windows 7及更早版本中，DISM命令不可用。在此情况下，可从Microsoft下载并运行System
