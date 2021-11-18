export interface ITableItem {
    uchar: string;
    basic: number;
    extend: {
        single: number;
        first: number;
        middle: number;
        last: number;
        /**
         * false: 表示这些字母没有first和middle，只有single和last。
         * true:表示 single firest middle last 四种格式都有
         */
        absent: boolean;
    };
}
export declare const table: ITableItem[];
