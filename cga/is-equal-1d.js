var isZero = require('./is-zero-1d');

module.exports = function( a, b ) {
  return ( a === b || isZero( a - b ) );
};
