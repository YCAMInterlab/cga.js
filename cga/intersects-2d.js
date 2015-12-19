var intersectsProper = require('./intersects-proper-2d');
var isBetween = require('./is-between-2d');

module.exports = function( a, b, c, d )
{
  if( intersectsProper( a, b, c, d ) ) {
    return true;
  }
  else if( isBetween( a, b, c ) || isBetween( a, b, d ) ||
           isBetween( c, d, a ) || isBetween( c, d, b ) ) {
    return true;
  }
  return false;
};
