---
title: 解决 PS2020 Adobe CC 报错
date: 2023-12-16 19:31:09
draft: false
description: "在安装 Adobe 系列软件后，通常会自带一个 **Adobe Creative Cloud 软件**。然而，对许多用户来说，这个软件可能并不是必需的，因此他们可能会选择将其卸载。"
categories: Software
author: "xsugarlee"
tags:
  - adobe
  - photoshop
  - design
---

在安装 Adobe 系列软件后，通常会自带一个 **Adobe Creative Cloud 软件**。然而，对许多用户来说，这个软件可能并不是必需的，因此他们可能会选择将其卸载。<!--more-->然而，一旦卸载了Adobe Creative Cloud，每次打开Photoshop 2020时都会出现一个提示，指示需要Adobe Creative Cloud来解决问题，但往往用户并不需要这个软件。本文将介绍如何解决这个问题的替代方案。

## 解决方案

1. **关闭报错窗口并打开任务管理器：** 可以通过右键点击任务栏，或者按下Ctrl+Shift+Esc快捷键来打开任务管理器。在任务管理器中切换到进程选项卡。
2. **找到Creative Cloud进程：** 在进程列表中找到名为"Creative Cloud"的进程，这通常是报错窗口所对应的进程。需要注意的是，在关闭报错窗口之前，此进程可能不会显示。右键点击该进程，并选择"打开文件所在的位置"。
3. **删除相应文件：** 找到打开的文件目录，在其中找到名为"Adobe Desktop Service.exe"的文件，并将其删除。在删除之前确保已关闭报错窗口，以免文件被系统占用。
4. **重启PS2020：** 完成以上步骤后，重新启动Photoshop 2020即可，此时应该不再出现报错窗口。

通过执行以上步骤，可以解决每次打开Photoshop 2020时出现的提示窗口问题，而无需重新安装Adobe Creative Cloud软件。这种方法既简单又有效，可以节省用户的时间和精力。
