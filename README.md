# cli-style

A simple tool allows you to set styles to command line output more easier.

# Installation

```bash
$ npm i cli-style --save
```

# Usage

This lib is based on [chalk](https://github.com/chalk/chalk), and `color`, `bgcolor`, `underline`, `bold`, `italic`, `strikethrough`, `dim` can be used as options in `cli-style`.

```js
const style = require( 'cli-style' );

const str = style( 'this is a green bold string with an underline', {
    color : 'green',
    bold : true,
    underline : true
} );

console.log( str );
```
