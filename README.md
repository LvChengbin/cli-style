# cli-style

A simple tool allows you to set styles to command line output more easier.

# Installation

```bash
$ npm i cli-style --save
```

# Usage

This gadget is based on [chalk](https://github.com/chalk/chalk), and `color`, `bgcolor|bg`, `underline`, `bold`, `italic`, `strikethrough`, `dim` can be used as options in `cli-style`, but only `HEX` and `Keyword` color modes can be used.

```js
const style = require( 'cli-style' );

const styles = [ {
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

for( const item of styles ) {
    console.log( style( JSON.stringify( item ), item ) );
}
```

<img src="https://raw.githubusercontent.com/LvChengbin/cli-style/master/screenshot.png" />

