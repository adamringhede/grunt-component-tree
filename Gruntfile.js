/*
 * grunt-component-tree
 * https://github.com/adamringhede/grunt-component-tree
 *
 * Copyright (c) 2015 Adam Ringhede
 * Licensed under the MIT license.
 */

'use strict';
var fs = require('fs-extra');

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>'
      ],
      options: {
        jshintrc: '.jshintrc'
      }
    },

    // Before generating any new files, remove any previously-created files.
    clean: {
      tests: ['tmp']
    },

    // Configuration to be run (and then tested).
    component_tree: {
      default_options: {
        cwd: 'tmp/src'
      },
      custom_options: {
        includeDir: true,
        cwd: 'tmp/src/A'
      }

    },

    // Unit tests.
    nodeunit: {
      tests: ['test/*_test.js']
    }

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');


  grunt.registerTask('setup_tmp', function(){
    fs.copySync('test/fixtures/src', 'tmp/src');
  });

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', ['clean', 'setup_tmp', 'component_tree', 'nodeunit']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['jshint', 'test']);

};
