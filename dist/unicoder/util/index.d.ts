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
export declare function dec2char(decimalN: number): string;
export declare function char2dec(char: string): number;
export declare function hex2dec(hex: string): number;
export declare function char2hex(char: string): string;
export declare function hex2char(hex: string): string;
