/**
 * JavaScript允许采用 \uxxxx 形式表示一个字符，其中“xxxx” 表示字符的码点(code point)。
 * 但是，这种表示法只限于 \u0000 —— \uFFFF 之间的字符。超出这个范围的字符，必须用两个双字节的形式表达。
 * 维吾尔语的编码范围
 * 基本区:
 *  \u0626 —— \u06d5
 *  1574 - 1749
 * 扩展区:
 *  \uFB56 —— \uFEF4
 *   64342 - 65268
 */

export function dec2char(decimalN: number) {
  // https://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae
  // 我们语言的基本区编码范围都是在 15xx - 17xx ，都小于55296
  // 扩展区编码范围是 64342 - 65268，小于 65536
  // 所以可以直接使用 String.fromCharCode, String.fromCodePoint 直接得到char
  //
  if (decimalN < 55296) {
    return String.fromCharCode(decimalN);
  }
  if (decimalN < 57344) {
    return String.fromCharCode(0); // undefined unknown ,未知的全部返回0的值 作为忽略
  }
  if (decimalN < 65536) {
    return String.fromCharCode(decimalN);
  }

  // else
  return String.fromCharCode(0);
  //todo
  // 将来遇到超出范围的特殊场景是，先了解情况再打开这块代码
  // let high, low;
  // dec -= 65536;
  // high = (dec >> 10) + 55296;
  // low = (dec & 1023) + 56320;
  // return String.fromCharCode(high) + String.fromCharCode(low);
}

export function char2dec(char: string) {
  return char.charCodeAt(0);
}

export function hex2dec(hex: string) {
  return parseInt(hex);
}

export function char2hex(char: string) {
  var hex = char
    .charCodeAt(0)
    .toString(16)
    .toUpperCase()
    .padStart(4, "0")
    .padStart(6, "0x");
  return hex;
}

export function hex2char(hex: string) {
  return dec2char(hex2dec(hex));
}
