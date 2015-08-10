'use strict';

(function(module) {

  var options = {
    // Server options
    serverPath: './server/server.js',
    port: 8081,
    livereloadPort: 35729,

    // Build options
    sourcePath: './src',
    outputPath: './dist',

    // SASS options
    sass: {
      sourcemap: true,
      style: 'expanded'
    }
  };

  module.exports = options;

})(module);
