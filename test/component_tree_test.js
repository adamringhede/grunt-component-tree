'use strict';

var grunt = require('grunt');
var fs = require('fs-extra');
var A = require('../tmp/src/A');
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

exports.component_tree = {
  setUp: function(done) {

    done();
  },
  default_options: function(test) {
    test.expect(1);
    test.equal(A.X() + A.B() + A.B.X(), 6);
    test.done();
  },
  custom_options: function(test) {

    test.done();
  },
};
