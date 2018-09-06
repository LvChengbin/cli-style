const chalk = require( 'chalk' );

module.exports = ( str, style = {} ) => {
    let c = chalk;
    if( style.color ) {
        c = c.keyword( style.color );
    }
    if( style.bg || style.bgcolor ) {
        c = c.bgKeyword( style.bg || style.bgcolor );
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
