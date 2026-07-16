---
author: "xsugarlee"
title: Markdown 使用说明
date: 2023-09-16 22:27:20
draft: false
description: "这是一篇关于讲解如何正确使用**Markdown**的排版示例，希望通过此，大家都能轻松上手，都能通过**Markdown** 能够让自己的文章有更加出色、更清晰明了的排版。"
thumbnail: ""
thubmnail-alt:
thumbnail-title:
tags:
  - blog
  - research
  - markdown
categories: Markdown
---

这是一篇关于讲解如何正确使用**Markdown**的排版示例，希望通过此，大家都能轻松上手，都能通过**Markdown** 能够让自己的文章有更加出色、更清晰明了的排版。

<!--more-->

## 什么是 Markdown

Markdown (MD) 是现在普遍使用的一种文档书写语言格式，只需用一些非常简单易记的符号，如（# \* / > [] ()\ ），就可以轻松写出一篇具有良好的排版和可读性的文章。

## 语法示例

### 1.基本语法

一些常规的语法格式。

#### 1.1 标题

标题用#+空格表示，不同数量的#可以表示不同的标题

\# Heading 1

\## Heading 2

\### Heading 3

\#### Heading 4

\##### Heading 5

\###### Heading 6

#### 1.2 粗体和斜体粗体

在需要操作的文字前后各加三个“\*”

**这个是粗体**斜体：在需要斜体的文字前后各加一个“\*”

*这个是斜体*用粗体加斜体：在需要操作的文字前后各加三个“\*”

**_这个是粗体加斜体_**

#### 1.3 删除线删除线语法

在需要删除的文字前后各使用两个符合“~~”~~要删除的文字~~

#### 1.4 引用

符号“>”后面书写文字。示例：

> 这个是引用

#### 1.5 目录

可通过：@\[toc\](目录) 生成目录。

#### 1.6 空行

如需空行，则可\ +回车换行。

### 2.LaTeX公式

LaTeX数学公式有两种：行中公式和独立公式（行间公式）。行中公式放在文中与其它文字混编，独立公式单独成行。

#### 2.1 行内公式

`$=mc^2$`

$=mc^2$

#### 2.2 独立公式

`$$=mc^2$$`

$$=mc^2$$

更多语法参考：[Markdown 编辑器添加 Latex数学公式教程](https://blog.51cto.com/51ctoblog/2847177)

### 3.代码高亮

#### 3.1 普通

```
*emphasize*    **strong**
_emphasize_    __strong__
@a = 1
```

_emphasize_ **strong**

#### 3.2 语法高亮支持

如果在 ``` 后面跟随语言名称，可以有语法高亮的效果，如:

##### 3.2.1 html/xml 代码高亮示例

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body></body>
</html>
```

##### 3.2.2 Python高亮示例

```Python
#!/usr/bin/python3
# Fibonacci series: 斐波纳契数列
# 两个元素的总和确定了下一个数
a, b = 0, 1
while b < 10:
    print(b)
    a, b = b, a+b
```

##### 3.2.3 CSS 文件示例

```css
body {
  background-color: red;
}
h1 {
  color: orange;
  text-align: center;
}
p {
  font-family: "Times New Roman";
  font-size: 20px;
}
```

> 支持语言有: `HTML/XML`, `JSON`, `Bash`, `CSS`, `Java`, `JavaScript`, `PHP`, `Python`, `Rust`, `C/C++` …

### 4.绘制表格

> |Column 1|Column 2|Column 3|或者CTRL+T

|-------- |-----: |:----:|

|cell 1|cell 2|cell 3|

|cell 4|cell 5|cell 6|

| cell 7 | cell 8 | cell 9 |
| ------ | ------ | ------ |
|        |        |        |

### 5.Todo列表

语法：

> \- [ ] **在Blog写一篇技术博客**

> \- [x] 5分钟搞定俄罗斯方块---组件化实战

> \- [x] 服务早期红利与各项技术场景创新分析

显示：

- [ ] **在Blog写一篇技术博客**

- [x] 5分钟搞定俄罗斯方块---组件化实战

- [x] 服务早期红利与各项技术场景创新分析

### 6.链接

支持直接粘贴链接地址。链接语法和显示如下：

语法1：`[链接名称](http://链接网址)`

显示：[链接名称](http://链接网址)

或语法2：`<http://链接网址>`

显示：<http://链接网址>

### 7. 图片

可通过上传按钮上传图片，也支持直接粘贴图片，也支持拖拽上传图片。图片语法和显示如下：

语法：`![请添加链接描述](图片地址)`

显示：\!\[请添加链接描述](图片地址)

### 8. 有序列表&有序列表

无序列表的使用，在符号“-”后加空格使用。如下：

- 列表项

- 列表项

- 列表项

如果要控制列表的层级，则需要在符号“-”前使用空格。如下：

- 列表项

- 列表项
  - 列表内容

  - 列表内容

有序列表的使用，在数字及符号“.”后加空格几个，如下：

1. 列表项

2. 列表项
   1. 列表内容

   2. 列表内容
      1. 子列表内容

      2. 子列表内容

      3. 子列表内容

### 9. 分割线

可以在一行中用三个以上的星号、减号、底线来建立一个分隔线，同时需要在分隔线的上面空一行。

例：

`-------`

`*****`

`______`

---

---

---

### 10. 符号转义

如果你的描述中需要用到 markdown 的符号，比如 `# *` 等，但又不想它被转义，这时候可以在这些符号前加反斜杠，如 `\ # * `进行避免。

### 11. 导入和导出

支持正文导出`.md`的文档，支持导入.md格式的文档。

导入：支持导入本地 `.md `格式的文档

导出：正文内容可以导出本地`.md`格式的文档

## 一些 Markdown 渲染器测试

测试一下公式的渲染。

$$
\theta_i \leftarrow  \frac{\partial}{\partial  \theta_i} \mathcal L( y, f(x; \theta))
$$

其中 $\mathcal L$ 是损失函数，$f(\cdot; \theta)$ 由 $\theta$ 参数化的模型。

那 `代码` 呢？`xsugarlee` 可以吗？

一个表格：

| Method | Accuracy |
| ------ | -------- |
| A      | 0.1      |
| B      | 0.2      |
| C      | 0.3      |

一个嵌套列表：

- a
  - x
  - asdf
    - 再接再厉
  - 项目
    1. item 1
    2. item 2
       1. sdf
       2. sdf
    3. item 3
- asdf

一个代办列表：

- [ ] 买菜
- [ ] 做饭
- [x] 击剑
- [x] 打高尔夫球
- [x] 写博客
- [ ] 搞技术
