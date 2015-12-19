var inCone = require('./in-cone-2d');
var isDiagonalie = require('./is-diagonalie-2d');

module.exports = function( i, j, polygon ) {
  var len = polygon.length;
  var a0 = polygon[ ( i - 1 < 0 ) ? len - 1 : i - 1 ];
  var a = polygon[ i ];
  var a1 = polygon[ ( i + 1 ) % len ];

  var b0 = polygon[ ( j - 1 < 0 ) ? len - 1 : j - 1 ];
  var b = polygon[ j ];
  var b1 = polygon[ ( j + 1 ) % len ];

  if( inCone( a0, a, a1, b ) && inCone( b0, b, b1, a ) && isDiagonalie( a, b, polygon ) ) {
    return true;
  }
  return false;
};
