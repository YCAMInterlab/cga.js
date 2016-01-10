var isDiagonal = require('./is-diagonal-2d');

module.exports = function( polygon ) {
  var len = polygon.length;
  var ears = [];
  for( var i = 0; i < len; i++ ) {
    var i0 = i - 1 < 0 ? len - 1 : i - 1;
    var i1 = ( i + 1 ) % len;
    ears.push( isDiagonal( i0, i1, polygon ) );
  }
  var polys = polygon.slice( 0 );
  var v0, v1, v2 = 0, v3, v4, n = polys.length, end = 0;
  var lookups = [];
  var llen = 0;
  for( var i = 0; i < len; i++ ) { lookups[ i ] = i; }
  var cells = [];
  while( n > 3 ) {
    do {
      llen = lookups.length;
      v2 = v2 % llen;
      if( ears[ lookups[ v2 ] ] ) {
        v4 = ( v2 + 2 ) % llen;
        v3 = ( v2 + 1 ) % llen;
        //v2//
        v1 = ( v2 - 1 );
        v1 = v1 < 0 ? llen + v1 : v1;
        v0 = v1 - 1;
        v0 = v0 < 0 ? llen + v0 : v0;

        v0 = v0 % llen;
        v1 = v1 % llen;
        v2 = v2 % llen;
        v3 = v3 % llen;
        v4 = v4 % llen;

        ears[ lookups[ v1 ] ] = isDiagonal( lookups[ v0 ], lookups[ v3 ], polys );
        ears[ lookups[ v3 ] ] = isDiagonal( lookups[ v1 ], lookups[ v4 ], polys );
        cells.push( [ lookups[ v2 ], lookups[ v3 ], lookups[ v1 ] ] );
        lookups.splice( v2, 1 );
        console.log( lookups );
        end = v3;
        n--;
        break;
      }
      v2++;
    } while ( v2 != end );
  }
  cells.push( [ lookups[ 1 ], lookups[ 2 ], lookups[ 0 ] ] )
  return cells;
};
