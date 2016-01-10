var isEqual = require('./is-equal-2d');
var intersects = require('./intersects-2d');
var intersectsProper = require('./intersects-proper-2d');

module.exports = function( a, b, polygon ) {
  var c, c1, len = polygon.length;
  for( var i = 0; i < len; i++ ) {
    c = polygon[ i ];
    c1 = polygon[ ( i + 1 ) % len ];
    if( !isEqual( c, a ) && !isEqual( c1, a ) && !isEqual( c, b ) && !isEqual( c1, b ) &&
        intersectsProper( a, b, c, c1 ) ) {
          return false;
        }
  }
  return true;
};
