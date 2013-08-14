/*
 * grunt-hanson-plugin
 * https://github.com/timjansen/hanson
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Before generating any new files, remove any previously-created files.
    clean: {
      tests: ['tmp'],
    },

    // Configuration to be run (and then tested).
    hanson: {
      noLineKeeping: {
        options: {
        },
        files: {
          'tmp/result.json': 'test/fixtures/test.hson',
        },
      },
      lineKeeping: {
        options: {
        	keepLineNumbers: true
        },
        files: {
          'tmp/result-keeplines.json': 'test/fixtures/test.hson',
        },
      },
    },

    // Unit tests.
    nodeunit: {
      tests: ['test/*_test.js'],
    },

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', ['clean', 'hanson', 'nodeunit']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['test']);

};
