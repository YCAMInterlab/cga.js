var isColinear = require('./is-colinear-2d');

module.exports = function( a, b, c ) {
  if( !isColinear( a, b, c ) ) {
    return false;
  }
  if( a[0] !== b[0] ) {
      return ( ( a[ 0 ] <= c[ 0 ] ) && ( c[ 0 ] <= b[ 0 ] ) ) ||
             ( ( a[ 0 ] >= c[ 0 ] ) && ( c[ 0 ] >= b[ 0 ] ) );
  }
  else {
    return ( ( a[ 1 ] <= c[ 1 ] ) && ( c[ 1 ] <= b[ 1 ] ) ) ||
           ( ( a[ 1 ] >= c[ 1 ] ) && ( c[ 1 ] >= b[ 1 ] ) );
  }
  return false;
};
