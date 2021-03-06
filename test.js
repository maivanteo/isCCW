var assert = require('assert');
var {isccw, isccwPolygon} = require('./')

//CCW
var geometry1 = [ 
                [4217551.0462295525,  2334125.362804338,   4162688.043176685],
                [4217544.514949324,   2334137.0507002505,  4162688.106388359],
                [4217557.756431655,   2334143.653760109,   4162671.10242251],
                [4217563.792125977,   2334132.6343561145,  4162671.165634375],
                [4217551.0462295525,  2334125.362804338,   4162688.043176685]
            ]

// CC
var geometry2 = [
                    [4217536.002371361,   2334153.2264155187,  4162687.6639066325],
                    [4217541.8096373845,  2334142.7333488395,  4162687.6639066325],
                    [4217554.124172641,   2334148.968472469,   4162671.797752984],
                    [4217548.368959056,   2334159.7079589525,  4162671.608117409],
                    [4217536.002371361,   2334153.2264155187,  4162687.6639066325]
                ]

// CCW
var geometry3 = [
                    [4217530.202460451,  2334163.3134747036,  4162687.8826086163],
                    [4217528.145198968,  2334166.2362475423,  4162688.3250903264],
                    [4217539.25339355,   2334174.197121337,   4162672.7117859256],
                    [4217545.385332468,  2334163.2309867432,  4162672.6485740785],
                    [4217533.29644659,   2334158.0635048505,  4162687.692973587],
                    [4217531.400792506,  2334161.148242879,   4162687.8826086167],
                    [4217530.546103817,  2334159.5148366746,  4162689.652535247],
                    [4217528.268360548,  2334163.4034457672,  4162689.7789585567],
                    [4217530.202460451,  2334163.3134747036,  4162687.8826086163]
                ]
// CCW concave
var geometry4 = [
                    [4217557.376345214,  2334114.894070008,  4162687.503338551],
                    [4217556.127144155,  2334118.626670832,  4162686.6815866553],
                    [4217564.357034252,  2334126.227334497,  4162674.1656582165],
                    [4217574.666152602,  2334108.507491058,  4162673.6599635496],
                    [4217563.63243503,   2334102.908827873,  4162687.8826086163],
                    [4217566.316434668,  2334111.791630341,  4162680.2339906585],
                    [4217567.818738128,  2334115.8866129783, 4162676.4412836554],
                    [4217564.48439129,   2334121.0035765595, 4162676.946978071],
                    [4217560.781070125,  2334114.5301058264, 4162684.2795419567],
                    [4217558.394508847,  2334110.670990082,  4162688.830783667],
                    [4217556.815528095,  2334112.843130767,  4162689.210053642],
                    [4217557.376345214,  2334114.894070008,  4162687.503338551]
]

describe('isccw', function() {

    it('Geometry 1 should be CCW', function() {
        assert.equal(true, isccw(geometry1));
    });
      
    it('Geometry 2 should be CC', function() {
        assert.equal(false, isccw(geometry2));
    });

    it('Geometry 3 should be CCW', function() {
        assert.equal(true, isccw(geometry3));
    });

    it('Geometry 4 should be CCW', function() {
        assert.equal(true, isccw(geometry4));
    });

    var reverseGeometry1 = geometry1.concat()
    reverseGeometry1.reverse()
    it('Reverse Geometry 1 should be CC', function() {
        assert.equal(false, isccw(reverseGeometry1));
    });

    var reverseGeometry2 = geometry2.concat()
    reverseGeometry2.reverse()
    it('Reverse Geometry 2 should be CCW', function() {
        assert.equal(true, isccw(reverseGeometry2));
    });

    var reverseGeometry3 = geometry3.concat()
    reverseGeometry3.reverse()
    it('Reverse Geometry 3 should be CC', function() {
        assert.equal(false, isccw(reverseGeometry3));
    });

    var reverseGeometry4 = geometry4.concat()
    reverseGeometry4.reverse()
    it('Reverse Geometry 4 should be CC', function() {
        assert.equal(false, isccw(reverseGeometry4));
    });

});




//CCW
var geometry1OpenPolygon = [ 
    [4217551.0462295525,  2334125.362804338,   4162688.043176685],
    [4217544.514949324,   2334137.0507002505,  4162688.106388359],
    [4217557.756431655,   2334143.653760109,   4162671.10242251],
    [4217563.792125977,   2334132.6343561145,  4162671.165634375],
    [4217551.0462295525,  2334125.362804338,   4162688.043176685]
]

// CC
var geometry2OpenPolygon = [
        [4217536.002371361,   2334153.2264155187,  4162687.6639066325],
        [4217541.8096373845,  2334142.7333488395,  4162687.6639066325],
        [4217554.124172641,   2334148.968472469,   4162671.797752984],
        [4217548.368959056,   2334159.7079589525,  4162671.608117409]
    ]

// CCW
var geometry3OpenPolygon = [
        [4217530.202460451,  2334163.3134747036,  4162687.8826086163],
        [4217528.145198968,  2334166.2362475423,  4162688.3250903264],
        [4217539.25339355,   2334174.197121337,   4162672.7117859256],
        [4217545.385332468,  2334163.2309867432,  4162672.6485740785],
        [4217533.29644659,   2334158.0635048505,  4162687.692973587],
        [4217531.400792506,  2334161.148242879,   4162687.8826086167],
        [4217530.546103817,  2334159.5148366746,  4162689.652535247],
        [4217528.268360548,  2334163.4034457672,  4162689.7789585567]
    ]
// CCW concave
var geometry4OpenPolygon = [
        [4217557.376345214,  2334114.894070008,  4162687.503338551],
        [4217556.127144155,  2334118.626670832,  4162686.6815866553],
        [4217564.357034252,  2334126.227334497,  4162674.1656582165],
        [4217574.666152602,  2334108.507491058,  4162673.6599635496],
        [4217563.63243503,   2334102.908827873,  4162687.8826086163],
        [4217566.316434668,  2334111.791630341,  4162680.2339906585],
        [4217567.818738128,  2334115.8866129783, 4162676.4412836554],
        [4217564.48439129,   2334121.0035765595, 4162676.946978071],
        [4217560.781070125,  2334114.5301058264, 4162684.2795419567],
        [4217558.394508847,  2334110.670990082,  4162688.830783667],
        [4217556.815528095,  2334112.843130767,  4162689.210053642]
]

describe('isccwPolygon', function() {

    it('Geometry 1 should be CCW', function() {
        assert.equal(true, isccwPolygon(geometry1OpenPolygon, true));
    });
      
    it('Geometry 2 should be CC', function() {
        assert.equal(false, isccwPolygon(geometry2OpenPolygon,true));
    });

    it('Geometry 3 should be CCW', function() {
        assert.equal(true, isccwPolygon(geometry3OpenPolygon,true));
    });

    it('Geometry 4 should be CCW', function() {
        assert.equal(true, isccwPolygon(geometry4OpenPolygon,true));
    });

    var reverseGeometry1 = geometry1OpenPolygon.concat()
    reverseGeometry1.reverse()
    it('Reverse Geometry 1 should be CC', function() {
        assert.equal(false, isccwPolygon(reverseGeometry1,true));
    });

    var reverseGeometry2 = geometry2OpenPolygon.concat()
    reverseGeometry2.reverse()
    it('Reverse Geometry 2 should be CCW', function() {
        assert.equal(true, isccwPolygon(reverseGeometry2,true));
    });

    var reverseGeometry3 = geometry3OpenPolygon.concat()
    reverseGeometry3.reverse()
    it('Reverse Geometry 3 should be CC', function() {
        assert.equal(false, isccwPolygon(reverseGeometry3,true));
    });

    var reverseGeometry4 = geometry4OpenPolygon.concat()
    reverseGeometry4.reverse()
    it('Reverse Geometry 4 should be CC', function() {
        assert.equal(false, isccwPolygon(reverseGeometry4,true));
    });

});
