var isZero = require('./is-zero-1d');

module.exports = function( a, b, c ) {
  var cax = c[ 0 ] - a[ 0 ];
  var cay = c[ 1 ] - a[ 1 ];
  var caz = c[ 2 ] - a[ 2 ];
  var bax = b[ 0 ] - a[ 0 ];
  var bay = b[ 1 ] - a[ 1 ];
  var baz = b[ 2 ] - a[ 2 ];
  return isZero( ( caz * bay ) - ( baz * cay ) ) &&
         isZero( ( baz * cax ) - ( bax * caz ) ) &&
         isZero( ( bax * cay ) - ( bay * cax ) );
};
