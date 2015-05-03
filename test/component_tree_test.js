'use strict';

var grunt = require('grunt');
var fs = require('fs-extra');
var A = require('../tmp/src/A');
var fileExists = require('file-exists');
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
  default_options: function(test) {
    test.expect(4);
    test.equal(A.X() + A.B() + A.B.X(), 6);
    test.equal(fileExists('tmp/src/index.js'), false);
    test.equal(fileExists('tmp/src/A/index.js'), true);
    test.equal(fileExists('tmp/src/A/B/index.js'), true);
    test.done();
  },
  custom_options: function(test) {
    test.expect(3);
    test.equal(fileExists('tmp/src/index.js'), false);
    test.equal(fileExists('tmp/src/A/index.js'), true);
    test.equal(fileExists('tmp/src/A/B/index.js'), true);
    test.done();
  }
};
