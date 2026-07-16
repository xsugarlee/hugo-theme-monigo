---
author: "xsugarlee"
title: 解决 Win11 病毒防护功能无法打开
date: 2023-10-03 20:45:00
draft: false
description: "在使用 Win11 时，有些用户可能会遇到打开病毒防护功能时出现提示“页面不可用，你的IT管理员已经限制对此应用的某些区域的访问”的情况。"
categories: Windows
tags:
  - windows
  - anti-virus
  - error
  - regedit
  - setup
---

在使用 Win11 时，有些用户可能会遇到打开病毒防护功能时出现提示“页面不可用，你的IT管理员已经限制对此应用的某些区域的访问”的情况。<!--more-->这时用户想要使用该功能却无法打开，下面将介绍解决此问题的方法。

## 方法一

1. 按下“Win+X”，选择“终端管理员”以以管理员权限运行命令提示符。

2. 在打开的命令提示符窗口中运行以下命令：

   ```powershell
   reg add "HKEY_LOCAL_MACHINE\SOFTWARE\Policies\Microsoft\Windows Defender" /v "DisableAntiSpyware" /d 1 /t REG_DWORD /f
   ```

3. 如果提示“操作成功完成”，表示命令运行成功。

4. 最后，重新启动电脑以使更改生效。

## 方法二

1. 按下“**Win+R**”组合键打开运行窗口，输入`gpedit.msc`并按下回车，打开本地组策略编辑器。（家庭中文版用户参考以下方法）
2. 在本地组策略编辑器中，依次展开“**计算机配置**”→“**管理模板**”→“**Microsoft Defender 防病毒**”。
3. 在右侧列表中找到“关闭Microsoft Defender 防病毒”，双击打开。
4. 同时按下“Win+R”打开运行窗口，输入“regedit”并按下回车，打开注册表编辑器。
5. 在注册表编辑器中，依次展开`计算机\HKEY_LOCAL_MACHINE\SOFTWARE\Policies\Microsoft\Windows Defender`。
6. 找到`DisableAntiVirus`，双击打开，并将数值更改为“1”，然后点击“确定”。
7. 完成以上步骤后，重新启动电脑以使更改生效。

通过以上方法，您应该能够解决Win11病毒防护功能无法打开的问题。希望本文能对您有所帮助。
