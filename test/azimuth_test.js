'use strict';

var azimuth = require('../lib/azimuth.js');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

var p1 = { lat: 18.513929, lng: 73.924475, elv: 561.9 };
var p2 = { lat: 18.513964, lng: 73.924471, elv: 562 };
var p3 = { lat: 37.8895263, lng: -122.4802252, elv: 6.8664551 };
var p4 = { lat: 37.8902068, lng: -122.4816528, elv: 10.2312012 };

exports['azimuth'] = {
  setUp: function(done) {
    // setup here
    done();
  },

  'p1 and p2': function(test) {
    test.expect(3);

    var result = azimuth.azimuth(p1, p2);
    test.strictEqual(result.distance, 3.9191090699705464, 'should be 3.9191090699705464');
    test.strictEqual(result.azimuth, 353.8149364508667, 'should be 353.8149364508667');
    test.strictEqual(result.altitude, 1.3478271564744548, 'should be 1.3478271564744548');

    test.done();
  },

  'p3 and p4': function(test) {
    test.expect(3);

    var result = azimuth.azimuth(p3, p4);
    test.strictEqual(result.distance, 146.3695785064461, 'should be 146.3695785064461');
    test.strictEqual(result.azimuth, 301.1325070052223, 'should be 301.1325070052223');
    test.strictEqual(result.altitude, 1.2203756703617137, 'should be 1.2203756703617137');

    test.done();
  },

  'p1 and p3': function(test) {
    test.expect(3);

    var result = azimuth.azimuth(p1, p3);
    test.strictEqual(result.distance, 11122807.442360276, 'should be 11122807.442360276');
    test.strictEqual(result.azimuth, 15.157702786841497, 'should be 15.157702786841497');
    test.strictEqual(result.altitude, -60.77889891737464, 'should be -60.77889891737464');

    test.done();
  }
};