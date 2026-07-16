---
author: "xsugarlee"
title: 如何让 Win11 系统托盘显示秒数
date: 2023-06-08 17:39:28
draft: false
description: "在 Windows 11 中，默认情况下，系统托盘中的时钟只显示小时和分钟，并没有显示秒数的选项。但是，您可以通过修改注册表来实现在系统托盘中显示秒数。"
categories: Windows
thumbnail: ""
tags:
  - win11
  - setup
  - taskbar
  - technology
  - optimization
---

在 Windows 11 中，默认情况下，系统托盘中的时钟只显示小时和分钟，并没有显示秒数的选项。但是，您可以通过修改注册表来实现在系统托盘中显示秒数。

## 具体步骤

1. **打开注册表编辑器**：
   - 按下 `Win + R` 组合键打开运行对话框。
   - 输入 `regedit` 并按下 Enter 键，以打开注册表编辑器。

2. **导航到系统时钟设置**： 在注册表编辑器中，转到以下路径：

   ```
   Copy code
   HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\Explorer\Advanced
   ```

3. **创建新的 DWORD（32位）值**：
   - 在右侧窗格中，右键单击空白处，选择 "New"（新建）-> "DWORD (32-bit) Value"（32位 DWORD 值）。
   - 将新创建的 DWORD 命名为 `ShowSecondsInSystemClock`，然后按 Enter 键。

4. **设置数值数据**：
   - 双击 `ShowSecondsInSystemClock`，以编辑它的数值数据。
   - 在数值数据框中，将数值数据设置为 `1`，然后点击 "OK"。

5. **重新启动资源管理器**：
   - 按下 `Ctrl + Shift + Esc` 组合键打开任务管理器。
   - 在 "Processes"（进程）选项卡中，找到并右键单击 "Windows Explorer"（Windows资源管理器）进程，然后选择 "Restart"（重启）。

6. **查看修改后的效果**： 现在，系统托盘中的时钟应该会显示秒数了。

> 请注意，修改注册表可能会对系统产生意外影响，因此在进行任何修改之前，请务必备份您的注册表。此外，这些更改可能会在未来的 Windows 更新中被覆盖，所以要注意系统更新。
