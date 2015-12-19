var isEqual = require('./is-equal-1d');
var isLeft = require('./is-left-2d');

module.exports = function( polygon ) {
  // find the lowest rightmost point
  var ri = -1;
  var rx = -1000000, ry = 10000000;
  var len = polygon.length;
  var x, y;
  for( var i = 0; i < len; i++ ) {
    x = polygon[ i ][ 0 ];
    y = polygon[ i ][ 1 ];
    if( y < ry || ( ( y == ry ) && ( x > rx ) ) ) {
      ri = i;
      rx = x;
      ry = y;
    }
  }

  // calculate the angles (relative to the positive x-axis) from bottom
  // right most point and every other point
  var angles = [];
  for( var i = 0; i < len; i++ ) {
      x = polygon[ i ][ 0 ] - rx;
      y = polygon[ i ][ 1 ] - ry;
      angles[ i ] = { 'key' : i, 'value' : Math.atan2( y, x ), 'length' : ( x*x + y*y ) };
  }

  // sort the angles, keep the indicies of the original points for referece
  angles.sort( function( a, b ) {
    if( isEqual( a.value, b.value ) ) { return 0; }
    else if( a.value < b.value ) { return -1; }
    return 1; }
  );

  // remove points that have the same angle ( only remove the one closest to
  // the bottom right most point )
  var a, b;
  for( var i = 1; i < angles.length; i++ ) {
    a = angles[ i - 1 ];
    b = angles[ i ];
    if( isEqual( a.value, b.value ) ) {
        if( a.length > b.length ) {
          angles.splice( i, 1 );      //remove b ( 1 )
        }
        else {
          angles.splice( i - 1, 1 );  //remove a ( 0 )
        }
        i--;
    }
  }

  // use graham's algorithm to find the convex hull ( checks
  // to see if the next point on the stack turns left or right
  // if it turns right, the remove it and test again till you turn left
  var i = 1;
  var limit = angles.length;
  var index;
  var stack = [ angles[ limit - 1 ].key, ri ];
  while( i < limit ) {
    index = angles[ i ].key;
    var s = stack.length - 1;
    var sl = s - 1;
    if( isLeft( polygon[ stack[ sl ] ], polygon[ stack[ s ] ], polygon[ index ] ) ) {
      stack.push( index );
      i++;
    }
    else {
      stack.pop();
    }
  }
  return stack;
};
