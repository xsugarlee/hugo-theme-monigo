---
author: "xsugarlee"
title: 启用 Windows 的高性能模式
date: 2023-10-03 21:55:33
draft: false
description: "在 Windows 10 和 Windows 11 中，**高性能模式**默认情况下被隐藏起来，但是您可以通过以下步骤来启用它。"
categories: Windows
tags:
  - cmd
  - windows
  - desktop
  - powercfg
  - 控制面板
  - 高性能电源
---

在 Windows 10 和 Windows 11 中，**高性能模式**默认情况下被隐藏起来，但是您可以通过以下步骤来启用它。

## 步骤

1. 使用快捷键 Win+R 打开运行窗口。

2. 输入"cmd"并按下回车键以打开命令提示符。

3. 在命令提示符中输入以下命令来启用高性能模式：

   ```powershell
   powercfg -SETACTIVE 8c5e7fda-e8bf-4a96-9a85-a6e23a8c635c
   ```

4. 输入命令后，打开控制面板。

5. 在控制面板中找到并点击“电源选项”。

6. 在电源选项中，您将看到已经启用了高性能模式。

有时候，需要在程序中切换电源方案，比如切换到高性能模式。下面是如何实现的：

## 列出当前方案

```powershell
Powercfg -l
```

## 切换电源方案

```powershell
Powercfg -s 8c5e7fda-e8bf-4a96-9a85-a6e23a8c635c
```

如果以上步骤不生效，您可以尝试以下代码：

```powershell
powercfg -SETACTIVE 8c5e7fda-e8bf-4a96-9a85-a6e23a8c635c
```

> 注意： 高性能模式的切换命令通用于Windows 7至Windows 10，并且部分适用于Windows 11。

如果高性能模式切换回平衡模式并且关闭了电源选项窗口，在重新启动或关闭计算机后，再次打开电源选项窗口将会使高性能模式消失。您需要重新输入命令来启用高性能模式。

以上就是启用Windows 10/11高性能模式的方法。希望这篇文章对您有所帮助。
