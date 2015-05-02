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

  function process(dir, includeDir) {
    if (!dir) {
      grunt.log.error('A component directory has to be specified using "cwd"');
    }

    if (includeDir)
      placeFile(dir);

    walk.sync(dir, function(path,stat){
      if (stat.blocks === 0) {
        // It might be a directory
        placeFile(path);
      }
    });
  }

  grunt.registerMultiTask('component_tree', 'Makes it easier to access components in large Node projects without having to call require by nesting components/modules', function(done) {
    if (Array.isArray(this.data.cwd)) {
      var cwds = this.data.cwd;
      for (var i = 0, l = cwds.length; i < l; i++) {
        process(cwds[i], this.data.includeDir);
      }
    } else {
      process(this.data.cwd, this.data.includeDir);
    }



  });

};
