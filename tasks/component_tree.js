/*
 * grunt-component-tree
 * https://github.com/adamringhede/grunt-component-tree
 *
 * Copyright (c) 2015 Adam Ringhede
 * Licensed under the MIT license.
 */

'use strict';

var walk = require('walkdir');
var fs = require('fs-extra');

module.exports = function(grunt) {

  function placeFile(path) {
    try {
      fs.copySync(__dirname + '/lib/autoloader.js', path + '/index.js');
    } catch (e) {}
  }

  grunt.registerMultiTask('component_tree', 'Makes it easier to access components in large Node projects without having to call require by nesting components/modules', function(done) {
    var dir = this.data.cwd;

    if (!dir) {
      grunt.log.error('A component directory has to be specified using "cwd"');
    }

    if (this.data.includeDir)
      placeFile(dir);

    walk.sync(dir, function(path,stat){
      if (stat.blocks === 0) {
        // It might be a directory
        placeFile(path);
      }
    });

  });

};
