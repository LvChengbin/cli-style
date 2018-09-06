const chalk = require( 'chalk' );
const is = require( '@lvchengbin/is' );
const kit = require( '@lvchengbin/kit' );

function cm( color ) {
    if( !color || !is.string( color ) ) {
        throw new TypeError( 'Invalid color.' );
    }
    return color.trim().charAt( 0 ) === '#' ? 'hex' : 'keyword';
}

module.exports = ( str, style = {} ) => {
    let c = chalk;
    if( style.color ) {
        c = c[ cm( style.color ) ]( style.color );
    }
    if( style.bg || style.bgcolor ) {
        const color = style.bg || style.bgcolor;
        c = c[ 'bg' + kit.ucfirst( cm( color ) ) ]( color );
    }

    if( style.underline ) {
        c = c.underline;
    }

    if( c.bold ) {
        c = c.bold;
    }

    if( c.italic ) {
        c = c.italic;
    }

    if( c.strikethrough ) {
        c = c.strikethrough;
    }

    if( c.dim ) {
        c = c.dim;
    }

    return c( str );
};
