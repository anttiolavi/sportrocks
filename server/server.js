var express = require('express'),
  livereload = require('connect-livereload'),
  options = require('../config'),
  app = module.exports.app = exports.app = express();

// Set up liveReload
app.use(livereload({
  port: options.livereloadPort
}));

app.use(express.static(options.outputPath));

app.listen(options.port);

console.log('Sever is listening to http://localhost:' + options.port);
