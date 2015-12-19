module.exports = function( a, b, c ) {
  return ( b[ 0 ] - a[ 0 ] ) * ( c[ 1 ] - a[ 1 ] ) -
         ( c[ 0 ] - a[ 0 ] ) * ( b[ 1 ] - a[ 1 ] );
};
