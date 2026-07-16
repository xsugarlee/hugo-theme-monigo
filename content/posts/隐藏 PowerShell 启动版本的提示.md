---
author: "xsugarlee"
title: 隐藏 PowerShell 启动版本的提示
date: 2023-11-26 19:55:33
draft: false
description: "除了在配置文件中添加 `-nologo` 参数外，还有其他方法可以隐藏版本信息。例如，可以通过修改注册表或使用其他命令行参数来实现相同的效果。"
categories: Windows
tags:
  - powershell
  - windows
---

## 隐藏方法

除了在配置文件中添加 `-nologo` 参数外，还有其他方法可以隐藏版本信息。例如，可以通过修改注册表或使用其他命令行参数来实现相同的效果。<!--more-->下面是一些其他隐藏版本信息的方法：

## 修改注册表

通过修改注册表中的相应项，可以永久性地隐藏版本信息。这种方法可能需要管理员权限。

```powershell
Set-ItemProperty -Path "HKCU:\Software\Microsoft\Windows\CurrentVersion\Policies\System" -Name "DisableCMDRequest" -Value 1
```

## 使用其他参数

除了 `-nologo` 参数外，还可以使用其他参数来定制终端的外观和行为。例如，可以使用 `-NoProfile` 参数来禁用加载个人配置文件，或者使用 `-Command` 参数来指定在启动时执行的命令。

```powershell
powershell.exe -NoProfile
```

## 定制终端外观

除了隐藏版本信息外，还可以通过其他方式来定制终端的外观和行为，使其更符合个人喜好。例如，可以修改配色方案、更改字体、设置默认启动目录等。

## 修改配色方案

通过修改 Windows Terminal 的配置文件，可以轻松地更改配色方案，以使终端更具可读性和美观性。

```json
"profiles":
{
    "defaults":
    {
        // 设置默认配色方案
        "colorScheme": "Solarized Light"
    },
    "list":
    [
        {
            "guid": "{00000000-0000-0000-ba54-000000000001}",
            "name": "Windows PowerShell",
            "commandline": "powershell.exe",
            "hidden": false,
            "colorScheme": "Campbell"
        },
        // 其他配置项...
    ]
}
```

## 更改字体

通过在配置文件中指定字体名称和大小，可以更改终端中的字体。

```json
"profiles":
{
    "defaults":
    {
        // 设置默认字体
        "fontFace": "Consolas",
        "fontSize": 12
    },
    "list":
    [
        {
            "guid": "{00000000-0000-0000-ba54-000000000001}",
            "name": "Windows PowerShell",
            "commandline": "powershell.exe",
            "hidden": false,
            // 单独为某个配置指定字体
            "fontFace": "Fira Code",
            "fontSize": 14
        },
        // 其他配置项...
    ]
}
```

## 设置启动目录

通过修改配置文件，可以指定终端的默认启动目录，这样每次打开终端时就会自动切换到指定的目录。

```json
"profiles":
{
    "defaults":
    {
        // 设置默认启动目录
        "startingDirectory": "C:\\Users\\YourUsername\\Projects"
    },
    "list":
    [
        {
            "guid": "{00000000-0000-0000-ba54-000000000001}",
            "name": "Windows PowerShell",
            "commandline": "powershell.exe",
            "hidden": false
        },
        // 其他配置项...
    ]
}
```

## 结论

通过隐藏版本信息并定制终端的外观和行为，可以使终端更加简洁、美观和易于使用。根据个人喜好和需求，可以选择适合自己的方法来定制终端。这些技巧不仅可以提高工作效率，还可以提升用户体验，使终端成为更加强大和个性化的工具。
