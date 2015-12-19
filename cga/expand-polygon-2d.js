var vec2 = require('gl-matrix').vec2;
var vec3 = require('gl-matrix').vec3;
var intersection = require('./intersection-2d');

module.exports = function( polygon, amount ) {
  amount = amount == undefined ? 0.5 : amount;
  var result = [];
  var len = polygon.length;
  var cpr = vec3.create();
  var zdir = vec3.fromValues( 0.0, 0.0, 1.0 );
  var cdir = vec3.create();
  var a = vec2.create();
  var b = vec2.create();
  var c = vec2.create();
  var d = vec2.create();

  var dir = vec2.create();
  var at, bt, ct, t;
  // Preform first a, b, calculation so we optimise loop
  at = polygon[ len - 1 ];
  bt = polygon[ 0 ];
  vec2.copy( a, at );
  vec2.copy( b, bt );
  vec2.subtract( dir, b, a );
  vec3.set( cdir, dir[ 0 ], dir[ 1 ], 0.0 );
  vec3.cross( cpr, cdir, zdir );
  vec3.normalize( cpr, cpr );
  vec3.scale( cpr, cpr, amount );
  vec2.copy( dir, cpr );
  vec2.add( a, a, dir );
  vec2.add( b, b, dir );

  for( var i = 0; i < len; i++ ) {
    bt = polygon[ i ];
    ct = polygon[ ( i + 1 ) % len ];

    vec2.copy( c, bt );
    vec2.copy( d, ct );

    vec2.subtract( dir, d, c );
    vec3.set( cdir, dir[ 0 ], dir[ 1 ], 0.0 );
    vec3.cross( cpr, cdir, zdir );
    vec3.normalize( cpr, cpr );
    vec3.scale( cpr, cpr, amount );
    vec2.copy( dir, cpr );
    vec2.add( c, c, dir );
    vec2.add( d, d, dir );

    result.push( intersection( a, b, c, d ) );

    vec2.copy( a, c );
    vec2.copy( b, d );
  }
  return result;
};
