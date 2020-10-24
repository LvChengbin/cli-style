/******************************************************************
 * Copyright (C) 2020 LvChengbin
 * 
 * File: src/index.ts
 * Author: LvChengbin<lvchengbin59@gmail.com>
 * Time: 08/07/2020
 * Description: 
 ******************************************************************/

import chalk from 'chalk';

/**
 * convert the color varlue to the relative method in `chalk`
 *
 * @see https://github.com/chalk/chalk#256-and-truecolor-color-support
 *
 * rgb - Example: chalk.rgb(255, 136, 0).bold('Orange!')
 * hex - Example: chalk.hex('#FF8800').bold('Orange!')
 * keyword (CSS keywords) - Example: chalk.keyword('orange').bold('Orange!')
 * hsl - Example: chalk.hsl(32, 100, 50).bold('Orange!')
 * hsv - Example: chalk.hsv(32, 100, 100).bold('Orange!')
 * hwb - Example: chalk.hwb(32, 0, 50).bold('Orange!')
 */

function chalkColorMethod( color: string, prefix = '' ): [ string, any[] ] {

    if( color.charAt( 0 ) === '#' ) {
        return [ prefix ? `${prefix}Hex` : 'hex', [ color ] ];
    }

    const matches = color.match( /^(rgb|hsl|hsv|hwb)\(([^)]+)\)/i );

    if( matches ) {
        const method = matches[ 1 ].toLowerCase();
        return [
            prefix ?  prefix + method.charAt( 0 ).toUpperCase() + method.slice( 1 ) : method,
            matches[ 2 ].split( /,\s*/ ).map( ( x: string ): number => +x )
        ];
    }

    return [ prefix ? `${prefix}Keyword` : 'keyword', [ color ] ];
}

export type StyleOptions = {
    color?: string;
    underline?: boolean;
    bold?: boolean;
    italic?: boolean;
    strikethrough?: boolean;
    dim?: boolean;
    bg?: string;
} | false;

export default ( str: string, style?: StyleOptions ): string => {
    if( !style ) return str;

    let c: any = chalk;

    if( style.color ) {
        const [ method, args ] = chalkColorMethod( style.color );
        c = c[ method ]( ...args );
    }

    if( style.bg ) {
        const [ method, args ] = chalkColorMethod( style.bg, 'bg' );
        c = c[ method ]( ...args );
    }

    style.underline && ( c = c.underline );
    style.bold && ( c = c.bold );
    style.italic && ( c = c.italic );
    style.strikethrough && ( c = c.strikethrough );
    style.dim && ( c = c.dim );

    return c( str );
}
