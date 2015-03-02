var test = require('tape')
var transform  = require('./')

var IDENTITY = new Float32Array([
    1, 0, 0, 0,
    0, 1, 0, 0,
    0, 0, 1, 0,
    0, 0, 0, 1
])

test('identity matrix', function(t) {
    var v2d = new Float32Array(2)
    var v3d = new Float32Array([0, 0, 0])
    transform(v2d, v3d, IDENTITY)

    t.deepEqual(v2d, new Float32Array([0.5, 0.5]))
    t.end()
})
