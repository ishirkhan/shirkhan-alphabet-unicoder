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

export const table: ITableItem[] = [
  {
    uchar: "ئ",
    basic: 0x626,
    extend: {
      single: 0xfe8b,
      first: 0xfe8b,
      middle: 0xfe8c,
      last: 0xfe8c,
      absent: true,
    },
  },
  {
    uchar: "ا",
    basic: 0x627,
    extend: {
      single: 0xfe8d,
      first: 0xfe8d,
      middle: 0xfe8e,
      last: 0xfe8e,
      absent: false,
    },
  },
  {
    uchar: "ە",
    basic: 0x6d5,
    extend: {
      single: 0xfee9,
      first: 0xfee9,
      middle: 0xfeea,
      last: 0xfeea,
      absent: false,
    },
  },
  {
    uchar: "ب",
    basic: 0x628,
    extend: {
      single: 0xfe8f,
      first: 0xfe91,
      middle: 0xfe92,
      last: 0xfe90,
      absent: true,
    },
  },
  {
    uchar: "پ",
    basic: 0x67e,
    extend: {
      single: 0xfb56,
      first: 0xfb58,
      middle: 0xfb59,
      last: 0xfb57,
      absent: true,
    },
  },
  {
    uchar: "ت",
    basic: 0x62a,
    extend: {
      single: 0xfe95,
      first: 0xfe97,
      middle: 0xfe98,
      last: 0xfe96,
      absent: true,
    },
  },
  {
    uchar: "ج",
    basic: 0x62c,
    extend: {
      single: 0xfe9d,
      first: 0xfe9f,
      middle: 0xfea0,
      last: 0xfe9e,
      absent: true,
    },
  },
  {
    uchar: "چ",
    basic: 0x686,
    extend: {
      single: 0xfb7a,
      first: 0xfb7c,
      middle: 0xfb7d,
      last: 0xfb7b,
      absent: true,
    },
  },
  {
    uchar: "خ",
    basic: 0x62e,
    extend: {
      single: 0xfea5,
      first: 0xfea7,
      middle: 0xfea8,
      last: 0xfea6,
      absent: true,
    },
  },
  {
    uchar: "د",
    basic: 0x62f,
    extend: {
      single: 0xfea9,
      first: 0xfea9,
      middle: 0xfeaa,
      last: 0xfeaa,
      absent: false,
    },
  },
  {
    uchar: "ر",
    basic: 0x631,
    extend: {
      single: 0xfead,
      first: 0xfead,
      middle: 0xfeae,
      last: 0xfeae,
      absent: false,
    },
  },
  {
    uchar: "ز",
    basic: 0x632,
    extend: {
      single: 0xfeaf,
      first: 0xfeaf,
      middle: 0xfeb0,
      last: 0xfeb0,
      absent: false,
    },
  },
  {
    uchar: "ژ",
    basic: 0x698,
    extend: {
      single: 0xfb8a,
      first: 0xfb8a,
      middle: 0xfb8b,
      last: 0xfb8b,
      absent: false,
    },
  },
  {
    uchar: "س",
    basic: 0x633,
    extend: {
      single: 0xfeb1,
      first: 0xfeb3,
      middle: 0xfeb4,
      last: 0xfeb2,
      absent: true,
    },
  },
  {
    uchar: "ش",
    basic: 0x634,
    extend: {
      single: 0xfeb5,
      first: 0xfeb7,
      middle: 0xfeb8,
      last: 0xfeb6,
      absent: true,
    },
  },
  {
    uchar: "غ",
    basic: 0x63a,
    extend: {
      single: 0xfecd,
      first: 0xfecf,
      middle: 0xfed0,
      last: 0xfece,
      absent: true,
    },
  },
  {
    uchar: "ف",
    basic: 0x641,
    extend: {
      single: 0xfed1,
      first: 0xfed3,
      middle: 0xfed4,
      last: 0xfed2,
      absent: true,
    },
  },
  {
    uchar: "ق",
    basic: 0x642,
    extend: {
      single: 0xfed5,
      first: 0xfed7,
      middle: 0xfed8,
      last: 0xfed6,
      absent: true,
    },
  },
  {
    uchar: "ك",
    basic: 0x643,
    extend: {
      single: 0xfed9,
      first: 0xfedb,
      middle: 0xfedc,
      last: 0xfeda,
      absent: true,
    },
  },
  {
    uchar: "گ",
    basic: 0x6af,
    extend: {
      single: 0xfb92,
      first: 0xfb94,
      middle: 0xfb95,
      last: 0xfb93,
      absent: true,
    },
  },
  {
    uchar: "ڭ",
    basic: 0x6ad,
    extend: {
      single: 0xfbd3,
      first: 0xfbd5,
      middle: 0xfbd6,
      last: 0xfbd4,
      absent: true,
    },
  },
  {
    uchar: "ل",
    basic: 0x644,
    extend: {
      single: 0xfedd,
      first: 0xfedf,
      middle: 0xfee0,
      last: 0xfede,
      absent: true,
    },
  },
  {
    uchar: "م",
    basic: 0x645,
    extend: {
      single: 0xfee1,
      first: 0xfee3,
      middle: 0xfee4,
      last: 0xfee2,
      absent: true,
    },
  },
  {
    uchar: "ن",
    basic: 0x646,
    extend: {
      single: 0xfee5,
      first: 0xfee7,
      middle: 0xfee8,
      last: 0xfee6,
      absent: true,
    },
  },
  {
    uchar: "ھ",
    basic: 0x6be,
    extend: {
      single: 0xfbaa,
      first: 0xfbac,
      middle: 0xfbad,
      last: 0xfbab,
      absent: true,
    },
  },
  {
    uchar: "و",
    basic: 0x648,
    extend: {
      single: 0xfeed,
      first: 0xfeed,
      middle: 0xfeee,
      last: 0xfeee,
      absent: false,
    },
  },
  {
    uchar: "ۇ",
    basic: 0x6c7,
    extend: {
      single: 0xfbd7,
      first: 0xfbd7,
      middle: 0xfbd8,
      last: 0xfbd8,
      absent: false,
    },
  },
  {
    uchar: "ۆ",
    basic: 0x6c6,
    extend: {
      single: 0xfbd9,
      first: 0xfbd9,
      middle: 0xfbda,
      last: 0xfbda,
      absent: false,
    },
  },
  {
    uchar: "ۈ",
    basic: 0x6c8,
    extend: {
      single: 0xfbdb,
      first: 0xfbdb,
      middle: 0xfbdc,
      last: 0xfbdc,
      absent: false,
    },
  },
  {
    uchar: "ۋ",
    basic: 0x6cb,
    extend: {
      single: 0xfbde,
      first: 0xfbde,
      middle: 0xfbdf,
      last: 0xfbdf,
      absent: false,
    },
  },
  {
    uchar: "ې",
    basic: 0x6d0,
    extend: {
      single: 0xfbe4,
      first: 0xfbe6,
      middle: 0xfbe7,
      last: 0xfbe5,
      absent: true,
    },
  },
  {
    uchar: "ى",
    basic: 0x649,
    extend: {
      single: 0xfeef,
      first: 0xfbe8,
      middle: 0xfbe9,
      last: 0xfef0,
      absent: true,
    },
  },
  {
    uchar: "ي",
    basic: 0x64a,
    extend: {
      single: 0xfef1,
      first: 0xfef3,
      middle: 0xfef4,
      last: 0xfef2,
      absent: true,
    },
  },
];
