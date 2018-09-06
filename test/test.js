const style = require( '../' );

const str = style( 'this is a green bold string with an underline in white background', {
    color : 'green',
    bold : true,
    underline : true,
    bg : '#FFFFFF'
} );

console.log( str );
