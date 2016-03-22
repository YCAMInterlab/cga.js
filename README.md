## WIP: Computational Geometry Algorithms (Come Back Later)

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

![img](http://placecorgi.com/512)

The code below shows how to [triangulate](https://en.wikipedia.org/wiki/Polygon_triangulation) a simple polygon made from a nested array of 2D points:  
```js
// Given an array of points in cartesian coordinates [x,y]  
var positions = [[x,y],[x,y],[x,y],...];
var cga = require('cga');
// This function will return a nested array of triangle vertex indices.
var results = cga.triangulatePolygon2(positions);
```

![img](http://placecorgi.com/511)

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

## Documentation
Depending on the size of the project, if it is small and simple enough the reference docs can be added to the README. For medium size to larger projects it is important to at least provide a link to where the API reference docs live.

## Examples
Describe and show how to run the tests with code examples.

## Contribution
Copyright 2015-2016 [Reza Ali](http://www.syedrezaali.com) co-developed by [YCAMInterLab](http://interlab.ycam.jp/en/) during the [Guest Research Project v.3](http://interlab.ycam.jp/en/projects/guestresearch/vol3)

## License
Apache-2.0
