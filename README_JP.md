## Computational Geometry Algorithms in Javascript

## Synopsis
cga.jsは、Javascriptで書かれた、コンピュテーショナル ジオメトリーの基本的なアルゴリズム集です。点の凸包や線の交点、三角測量、ポリゴンエクスパンションなどが含まれています。 [ジョセフ・オルークのComputational Geometry in C](http://www.amazon.com/Computational-Geometry-Cambridge-Theoretical-Paperback/dp/0521649765) に登場するアルゴリズムも多く含まれています。

## Code Example
ライブラリには点や線、形などの幾何学的特性を算出するための簡単な関数が含まれています。 次の例は、2次元での入れ子状の点の [凸包](https://en.wikipedia.org/wiki/Convex_hull) の計算方法です:  
```js
// Given an array of points in cartesian coordinates [x,y]  
var positions = [[x,y],[x,y],[x,y],...];
var cga = require('cga');
// This function will return a list of indices the represents the convex hull
var results = cga.convexHull2(positions);
```

<p style="text-align: center;">
<img src="https://cloud.githubusercontent.com/assets/555207/14010638/31d9cf5c-f154-11e5-821e-6aa2db74d1d5.png" width="440">

<img src="https://cloud.githubusercontent.com/assets/555207/14010636/31d94938-f154-11e5-8b7e-ec616fb74791.png" width="440">
</p>

次の例は、2次元での入れ子状の点から作られた簡単なポリゴンの [三角測量](https://en.wikipedia.org/wiki/Polygon_triangulation) の使用方法です:  
```js
// Given an array of points in cartesian coordinates [x,y]  
var positions = [[x,y],[x,y],[x,y],...];
var cga = require('cga');
// This function will return a nested array of triangle vertex indices.
var results = cga.triangulatePolygon2(positions);
```

<p style="text-align: center;">
<img src="https://cloud.githubusercontent.com/assets/555207/14010638/31d9cf5c-f154-11e5-821e-6aa2db74d1d5.png" width="440">

<img src="https://cloud.githubusercontent.com/assets/555207/14010637/31d9beae-f154-11e5-8496-da151ca6bab6.png" width="440">
</p>

次の例は、2次元での入れ子状の点から作られた簡単なポリゴンの [オフセット](http://www.me.berkeley.edu/~mcmains/pubs/DAC05OffsetPolygon.pdf) の使用方法です:  
```js
// Given an array of points in cartesian coordinates [x,y]  
var positions = [[x,y],[x,y],[x,y],...];
var cga = require('cga');
// This function will return a nested array of triangle vertex indices.
var results = cga.expandPolygon(positions);
```

<p style="text-align: center;">
<img src="https://cloud.githubusercontent.com/assets/555207/14010638/31d9cf5c-f154-11e5-821e-6aa2db74d1d5.png" width="440">
<img src="https://cloud.githubusercontent.com/assets/555207/14010635/31d8f83e-f154-11e5-906e-cc87b071fbed.png" width="440">
</p>

## Motivation
このライブラリは、コンピュテーショナル デザイン、及びパラメトリック デザインをウェブに広めようとする、大きなライブラリのプロジェクト/シリーズの一部です。
高度なコンピューテーショナル デザインや3Dモデルの出力、Gコード生成、CNCフライス加工ツール用のパスや、レーザー切断用のパスの生成、ロボット運動計画などを可能にする、全ての複雑な形態機能を備えた数学的頭脳になることを目的としています。

## Build Requirements
node.js (4.4.0+) & npm

## Installation
このライブラリをプロジェクトに追加するためには、以下の操作を行って下さい:
```
npm install --save https://github.com/YCAMInterlab/cga.js.git
```

もしく以下の方法でも追加できます:   
```
npm install --save cga
```

## Examples
See https://github.com/rezaali/webgl-sketches/tree/master/hull

## Contribution
Copyright 2015-2016 [Reza Ali](http://www.syedrezaali.com) co-developed by [YCAMInterLab](http://interlab.ycam.jp/en/) during the [Guest Research Project v.3](http://interlab.ycam.jp/en/projects/guestresearch/vol3)

## License
Apache-2.0
