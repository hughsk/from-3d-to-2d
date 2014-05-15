# from-3d-to-2d [![stable](http://badges.github.io/stability-badges/dist/stable.svg)](http://github.com/badges/stability-badges)

Take a transformation matrix like you're used to constructing with WebGL, and
project arbitrary 3D points onto your 2D screen.

You can use this to take a point in your WebGL scene and get its onscreen
position on the canvas, e.g. to add DOM element overlays, or bootstrapping your
own canvas/SVG.

## Usage

[![NPM](https://nodei.co/npm/from-3d-to-2d.png)](https://nodei.co/npm/from-3d-to-2d/)

### transform(out, position, matrix)

Given a 3-element array `position` and a 16-element array `matrix`, update
the `out` array to contain your new 2D points – each of them ranging from 0 to
1. For example:

``` javascript
var mat4       = require('gl-matrix').mat4
var camera     = require('orbit-camera')()
var transform  = require('from-3d-to-2d')

var projection = new Float32Array(16)
var view       = new Float32Array(16)
var pvMatrix   = new Float32Array(16)
var point      = new Float32Array(2)

function render() {
  // get your camera/view matrix from something like orbit-camera
  camera.view(view)

  // perspective projection
  mat4.perspective(projection
    , Math.PI / 4                  // field of view
    , canvas.width / canvas.height // aspect ratio
    , 0.00001
    , 10000
  )

  // Combine your matrix transformations into
  // a single transform by multiplying them together
  mat4.mul(pvMatrix, projection, view)

  // get your 2d point from your 3d point:
  transform(point, [0, 0, 0], pvMatrix)
  var x = point[0]
  var y = point[1]
}
```

## See Also

* [svg-simplicial-complex](http://github.com/mikolalysenko/svg-simplicial-complex)
* [orbit-camera](http://github.com/mikolalysenko/orbit-camera)
* [gl-matrix](http://github.com/toji/gl-matrix)
* [perspex](http://github.com/cgiffard/perspex)

## License

MIT. See [LICENSE.md](http://github.com/hughsk/from-3d-to-2d/blob/master/LICENSE.md) for details.
