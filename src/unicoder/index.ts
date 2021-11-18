/**
 *
 * @author SilvaQ
 *
 * 基于前 uyghur-char-utils改写
 * 特此感谢 kerindax 和shere。
 */

import { ITableItem, table } from "./table";

/**
 * 标记
 *  - 0 表示 这些字母没有 first 和 middle，只有 single 和 last
 *  - 1 表示 single firest middle last 四种格式都有
 *
 * 1. 首字母：
 *    - 当 只有一个字母时 single
 *    - 当 存在多个字母时 first
 *
 * 2. 中间字母:
 *    - 当 前一个字母的标记为 0 时 first
 *    - 当 前一个字母的标记为 1 时 middleclear
 *
 * 3. 末尾字母
 *    - 当 前一个字母的标记为 0 时 single
 *    - 当 前一个字母的标记为 1 时 last
 *
 * 4. 最终要处理la
 *
 */

//替换exted后出现的异类la 改回我们自己的la
function repalceLa(str: string) {
  return str
    .replace(/(\uFEDF\uFE8E)/g, function () {
      return String.fromCharCode(0xfefb);
    })
    .replace(/(\uFEE0\uFE8E)/g, function () {
      return String.fromCharCode(0xfefc);
    });
}

//反转，改变书写方向
function reverseStr(str: string) {
  return str.split("").reverse().join("");
}

// 中英文书写方向调整为ltr,其余的rtl
function str2rtl(str: string) {
  return (
    reverseStr(str)
      //所有字母转换成从右往左写
      .replace(/([^\uFB00-\uFEFF\u0600-\u06FF\s]+)/g, function (word) {
        //吧非母语改回从右往左
        return reverseStr(word);
      })
  );
}

function firstChar(item: ITableItem) {
  return String.fromCharCode(item.extend.single);
}

function middleChar(item: ITableItem) {
  let result = "";
  if (item.extend.absent) {
    result += String.fromCharCode(item.extend.first);
    result += String.fromCharCode(item.extend.middle);
  }
  return result;
}
function lastChar(item: ITableItem) {
  let result = "";
  if (item.extend.absent) {
    result += String.fromCharCode(item.extend.single);
    result += String.fromCharCode(item.extend.last);
  }
  return result;
}

function word2extend(word: string) {
  const alphaMap: { [key: string]: ITableItem } = {};
  table.forEach((item) => (alphaMap[item.uchar] = item));

  let result = "";
  const chars = word.trim().split("");
  chars.reduce((_, cur: string, index: number, data: string[]) => {
    const currentItem = alphaMap[cur];
    //只有一个字母
    if (data.length === 1) {
      result += String.fromCharCode(currentItem.extend.single);
      return cur;
    }

    //第一个字母
    if (data.length > 1 && index === 0) {
      result += firstChar(currentItem);
      return cur;
    }

    //最后一个字母
    if (data.length - 1 === index) {
      result += lastChar(currentItem);
      return cur;
    }

    // 中间的字母
    result += middleChar(currentItem);
    return cur;
  }, chars[0]);

  return result;
}

function _basic2extend(str: string) {
  return str.replace(/[\u0626-\u06d5]+/g, (word) => word2extend(word));
}

export function basic2extend(str: string) {
  return str2rtl(repalceLa(_basic2extend(str)));
}
