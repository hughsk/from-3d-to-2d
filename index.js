var mat4 = require('gl-matrix').mat4

module.exports = from3Dto2D

function from3Dto2D(v2d, v3d, m) {
  var ix = v3d[0]
  var iy = v3d[1]
  var iz = v3d[2]

  var ox = m[0] * ix + m[4] * iy + m[8] * iz + m[12]
  var oy = m[1] * ix + m[5] * iy + m[9] * iz + m[13]
  var ow = m[3] * ix + m[7] * iy + m[11] * iz + m[15]

  v2d[0] =     (ox / ow + 1) / 2
  v2d[1] = 1 - (oy / ow + 1) / 2

  return v2d
}
