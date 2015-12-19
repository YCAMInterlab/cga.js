var vec2 = require('gl-matrix').vec2;
var cross = require('./cross-2d');
var isZero = require('./is-zero-1d');

module.exports = function( a, b, c, d ) {
  var p = vec2.clone( a );
  var r = vec2.clone( b );
  vec2.subtract( r, r, p );

  var q = vec2.clone( c );
  var s = vec2.clone( d );
  vec2.subtract( s, s, q );

  var dqp = vec2.create();
  vec2.subtract( dqp, q, p );

  var t = -1.0;
  var rxs = cross( r, s );
  var qpxr = cross( dqp, r );
  var qpxs = cross( dqp, s );
  if( rxs != 0 ) {
    t = qpxs / rxs ;
  }
  else if( isZero( qpxr ) && isZero( rxs ) ) {
    var t = vec2.dot( dqp, r ) / vec2.dot( r, r );
  }
  else if( !isZero( qpxr ) && isZero( rxs ) ) {
    throw 'lines are parallel and do no intersect';
  }
  return vec2.fromValues( p[ 0 ] + t * r[ 0 ], p[ 1 ] + t * r[ 1 ] );
};
