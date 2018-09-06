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

const str = style( 'this is a green bold string with an underline in white background', {
    color : 'green',
    bold : true,
    underline : true,
    bg : '#FFFFFF'
} );

console.log( str );
```
