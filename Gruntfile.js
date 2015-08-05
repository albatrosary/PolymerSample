'use strict';

module.exports = function (grunt) {

  // Time how long tasks take. Can help when optimizing build times
  require('time-grunt')(grunt);

  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);

  var options = {
    // Configurable paths
    paths: {
      app: 'app',
      dist: 'dist'
    }
  };

  var configs = require('load-grunt-configs')(grunt, options);

  // Define the configuration for all the tasks
  grunt.initConfig(configs);

  grunt.registerTask('serve', function (target) {
    grunt.task.run([
      'wiredep',
      'browserSync:dev',
      'watch'
    ]);
  });
};
