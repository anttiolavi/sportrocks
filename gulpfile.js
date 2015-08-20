'use strict';

var gulp = require('gulp'),
  server = require('gulp-express'),
  util = require('gulp-util'),
  gulpif = require('gulp-if'),
  uglify = require('gulp-uglify'),
  concat = require('gulp-concat'),
  jscs = require('gulp-jscs'),
  rename = require('gulp-rename'),
  fileinclude = require('gulp-file-include'),
  sass = require('gulp-sass'),
  csso = require('gulp-csso'),
  postcss = require('gulp-postcss'),
  autoprefixer = require('autoprefixer-core'),
  borschik = require('gulp-borschik'),

  options = require('./config'),
  serverPath = options.serverPath,
  sourcePath = options.sourcePath,
  outputPath = options.outputPath,
  sassOptions = options.sass,
  processors = [
    autoprefixer({
      browsers: ['last 2 versions', '> 1% in FI']
    })
  ],

  isProd = Boolean(util.env.prod);

gulp.task('images', function() {
  return gulp.src('src/assets/**/*')
    .pipe(gulp.dest(outputPath + '/assets'))
});

gulp.task('jscs', function() {
  return gulp.src(['src/**/*.js'])
    .pipe(jscs());
});

gulp.task('build:js', function() {
  return gulp.src(sourcePath + '/*.js')
    .pipe(borschik({
      minimize: false
    }))
    .pipe(gulp.dest(outputPath))
});

gulp.task('build:css', function() {
  return gulp.src(sourcePath + '/*.{sass,scss}')
    .pipe(sass(sassOptions))
    .pipe(postcss(processors))
    .pipe(gulpif(isProd, csso()))
    .pipe(gulp.dest(outputPath))
});

gulp.task('build:html', function() {
  return gulp.src(sourcePath + '/views/**/*.html')
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(rename({
      dirname: ''
    }))
    .pipe(gulp.dest('dist'))
});

gulp.task('build:all', [
  'build:css',
  'build:js',
  'build:html',
  'images'
]);

gulp.task('serve', ['build:all'], function() {
  server.run([serverPath]);

  gulp.watch([
    sourcePath + '/**/*.html',
    '!' + sourcePath + '/vendor/**'
  ], ['build:html']);

  gulp.watch([
    sourcePath + '/**/*.sass',
    '!' + sourcePath + '/vendor/**'
  ], ['build:css']);

  gulp.watch([
    sourcePath + '/**/*.js',
    '!' + sourcePath + '/vendor/**'
  ], ['build:js']);

  // liveReload when changes appear
  // gulp.watch([
  //   outputPath + '/**',
  //   '!' + outputPath + '/vendor/**'
  // ], server.notify);
});

gulp.task('default', ['serve']);
