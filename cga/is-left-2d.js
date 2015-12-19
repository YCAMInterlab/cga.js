var greaterThanZero = require('./greater-than-zero-1d');
var area2 = require('./area2-2d');

module.exports = function( a, b, c ) {
  return greaterThanZero( area2( a, b, c ) );
};
