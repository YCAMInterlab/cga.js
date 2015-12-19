var isColinear = require('./is-colinear-2d');
var isLeft = require('./is-left-2d');

module.exports = function( a, b, c, d ) {
  if( isColinear( a, b, c ) || isColinear( a, b, d ) || isColinear( c, d, a ) || isColinear( c, d, b ) ) {
    return false;
  }
  if( isLeft( a, b, c ) != isLeft( a, b, d ) &&
      isLeft( c, d, a ) != isLeft( c, d, b ) ) {
      return true;
  }
  return false;
};
