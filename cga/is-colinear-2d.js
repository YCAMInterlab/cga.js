var isZero = require('./is-zero-1d');
var area2 = require('./area2-2d');

module.exports = function( a, b, c ) {
  return isZero( area2( a, b, c ) );
};
