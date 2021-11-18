# 概述

JavaScript 允许采用 \uxxxx 形式表示一个字符，其中“xxxx” 表示字符的码点(code point)。
但是，这种表示法只限于 \u0000 —— \uFFFF 之间的字符。超出这个范围的字符，必须用两个双字节的形式表达。

<br>
<br>
<br>

# 维吾尔语的编码范围

## 基本区:

- \u0626 —— \u06d5
- 1574 - 1749

## 扩展区:

- \uFB56 —— \uFEF4
- 64342 - 65268

<br>
<br>
<br>

# 参考图

## 字母表:

![字母编码表](/table.png)

## 字母+规则表

![字母+规则表](/rule_table.jpeg)
<br>
<br>
<br>

# 基本、扩展区互换规则

> elshat - xrr

<div dir="rtl">

- ھەرپ سانى بىر بولغاندا بىرىنچى ھەرپنىڭ يالغۇز شەكلى كىلىدۇ.

- ھەرپ سانى بىردىن چوڭ بولغاندا، بىرىنچى ھەرپنىڭ باش يىزىلىشى كېلىدۇ.

- ئارلىقتىكى ھەرپنىڭ ئالدىدىكى ھەرپ بەلگىسى 0 بولسا باش يىزىلىشى كېلىدۇ.

- ئارلىقتىكى ھەرپنىڭ ئالدىدىكى ھەرپ بەلگىسى 1 بولسا ئوتتۇرىدا يىزىلىشى كېلىدۇ.

- ئاخىرقى ھەرپنىڭ ئالدىدىكى ھەرپ بەلگىسى 0 بولسا يالغۇز شەكلى كېلىدۇ.

- ئاخىرقى ھەرپنىڭ ئالدىدىكى ھەرپ بەلگىسى 1 بولسا ئاخىرقى يىزىلىشى كېلىدۇ.

- ئاخىرىدا بارلىق لا(ئىككى خىل شەكلى بار) كىڭەيتىلگەن لا(ئىككى خىل شەكلى بار)غا ئالماشتۇرىمىز.
</div>
