var area2 = require('./area2-2d');
var greaterThanZero = require('./greater-than-zero-1d');
var isZero = require('./is-zero-1d');

module.exports = function( a, b, c ) {
  var res = area2( a, b, c );
  return greaterThanZero( res ) || isZero( res );
};
