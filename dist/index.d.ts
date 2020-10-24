/******************************************************************
 * Copyright (C) 2020 LvChengbin
 *
 * File: src/index.ts
 * Author: LvChengbin<lvchengbin59@gmail.com>
 * Time: 08/07/2020
 * Description:
 ******************************************************************/
export declare type StyleOptions = {
    color?: string;
    underline?: boolean;
    bold?: boolean;
    italic?: boolean;
    strikethrough?: boolean;
    dim?: boolean;
    bg?: string;
} | false;
declare const _default: (str: string, style?: false | {
    color?: string | undefined;
    underline?: boolean | undefined;
    bold?: boolean | undefined;
    italic?: boolean | undefined;
    strikethrough?: boolean | undefined;
    dim?: boolean | undefined;
    bg?: string | undefined;
} | undefined) => string;
export default _default;
