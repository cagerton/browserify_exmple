module.exports = function(grunt) {
  'use strict';

  grunt.initConfig({
    browserify: {
      foo: {
        src: ['src/*.js'],
        dest: 'dist/bundle.js',
        options: {
          debug: true
        }
      }
    },
  });
  grunt.loadNpmTasks('grunt-browserify');
  grunt.registerTask('default', ['browserify']);
};
