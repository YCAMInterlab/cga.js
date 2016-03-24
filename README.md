## Computational Geometry Algorithms in Javascript

## Synopsis
cga.js is a collection of basic computational geometry algorithms written in javascript. A couple algorithms include the convex hull of points, line intersection, triangulation, and polygon expansion. It also contains many of the smaller algorithms found in [Computational Geometry in C by Joseph O'Rourke](http://www.amazon.com/Computational-Geometry-Cambridge-Theoretical-Paperback/dp/0521649765)

## Code Example
The library contains small functions that help calculate geometry properties of points, lines and shapes. The example below shows how to calculate the [convex hull](https://en.wikipedia.org/wiki/Convex_hull) of a nested array of 2D points:  
```js
// Given an array of points in cartesian coordinates [x,y]  
var positions = [[x,y],[x,y],[x,y],...];
var cga = require('cga');
// This function will return a list of indices the represents the convex hull
var results = cga.convexHull2(positions);
```

<p style="text-align: center;">
<img src="https://cloud.githubusercontent.com/assets/555207/14010638/31d9cf5c-f154-11e5-821e-6aa2db74d1d5.png" width="490">

<img src="https://cloud.githubusercontent.com/assets/555207/14010636/31d94938-f154-11e5-8b7e-ec616fb74791.png" width="490">
</p>

The example below shows how to [triangulate](https://en.wikipedia.org/wiki/Polygon_triangulation) a simple polygon made from a nested array of 2D points:  
```js
// Given an array of points in cartesian coordinates [x,y]  
var positions = [[x,y],[x,y],[x,y],...];
var cga = require('cga');
// This function will return a nested array of triangle vertex indices.
var results = cga.triangulatePolygon2(positions);
```

<p style="text-align: center;">
<img src="https://cloud.githubusercontent.com/assets/555207/14010638/31d9cf5c-f154-11e5-821e-6aa2db74d1d5.png" width="490">

<img src="https://cloud.githubusercontent.com/assets/555207/14010637/31d9beae-f154-11e5-8496-da151ca6bab6.png" width="490">
</p>

The example below shows how to [offset](http://www.me.berkeley.edu/~mcmains/pubs/DAC05OffsetPolygon.pdf) a simple polygon made from a nested array of 2D points:  
```js
// Given an array of points in cartesian coordinates [x,y]  
var positions = [[x,y],[x,y],[x,y],...];
var cga = require('cga');
// This function will return a nested array of triangle vertex indices.
var results = cga.expandPolygon(positions);
```

<p style="text-align: center;">
<img src="https://cloud.githubusercontent.com/assets/555207/14010638/31d9cf5c-f154-11e5-821e-6aa2db74d1d5.png" width="490">
<img src="https://cloud.githubusercontent.com/assets/555207/14010635/31d8f83e-f154-11e5-906e-cc87b071fbed.png" width="490">
</p>

## Motivation
This library is part of a larger project / series of libraries that aspires to bring computational and parametric design to the web. This library aspires to be the mathematical mind that powers all types of complex geometry operations that enable higher level computational design, 3d printing, g-code generation, cnc milling tool path creation, laser cutting paths, robotic motion planning, and more.

## Build Requirements
node.js (4.4.0+) & npm

## Installation
You can add this library to your project by running:
```
npm install --save https://github.com/YCAMInterlab/cga.js.git
```

or via npm:
```
npm install --save cga
```

## Examples
```
npm runs examples
```

## Contribution
Copyright 2015-2016 [Reza Ali](http://www.syedrezaali.com) co-developed by [YCAMInterLab](http://interlab.ycam.jp/en/) during the [Guest Research Project v.3](http://interlab.ycam.jp/en/projects/guestresearch/vol3)

## License
Apache-2.0
