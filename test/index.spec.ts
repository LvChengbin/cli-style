/******************************************************************
 * Copyright (C) 2020 LvChengbin
 * 
 * File: test/index.spec.ts
 * Author: LvChengbin<lvchengbin59@gmail.com>
 * Time: 08/07/2020
 * Description: 
 ******************************************************************/

import style, { StyleOptions } from '../src';

const styles: StyleOptions[] = [ false, {
    color : 'red',
    bg : 'white',
    bold : true,
    italic : true,
    strikethrough : true,
    underline : true
}, {
    color : 'red',
    bg : 'white',
    bold : true,
    italic : true,
    strikethrough : true,
    underline : true,
    dim : true
}, {
    color : '#FF0000',
    bg : '#FFFFFF',
    bold : true,
    italic : true,
    strikethrough : true,
    underline : true,
    dim : true
}, {
    color : 'rgb( 123, 24, 64 )',
    bg : 'hsl( 32, 100, 50 )',
    bold : true,
    italic : true,
    strikethrough : true,
    underline : true,
    dim : true
}, {
    color : 'hsv(32, 100, 100)',
    bg : 'hwb(32, 0, 50)',
    bold : true,
    italic : true,
    strikethrough : true,
    underline : true,
    dim : true
} ];

console.log( style( 'Print the original string' ) );

for( const item of styles ) {
    console.log( style( JSON.stringify( item ), item ) );
}
