var isZero = require('./is-zero-1d');
var isEqual = require('./is-equal-1d');

module.exports = function( a, b ) {
  if( isEqual( a[0], b[0] ) && isEqual( a[1], b[1] ) ) {
    return true;
  }
  return false;
};
