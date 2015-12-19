var isLeftOn = require('./is-left-on-2d');
var isLeft = require('./is-left-2d');

module.exports = function( a0, a, a1, b ) {
  if( isLeftOn( a, a1, a0 ) ) {
    return isLeft( a, b, a0 ) && isLeft( b, a, a1 );;
  }
  return !( isLeftOn( b, a, a0 ) && isLeftOn( a, b, a1 ) );
};
