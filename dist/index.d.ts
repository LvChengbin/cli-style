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
};
declare const _default: (str: string, style: StyleOptions) => string;
export default _default;
