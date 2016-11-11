'use strict'

var gulp = require('gulp');
var browserSync = require('browser-sync').create();

/**
 * setting up browserSync to our server directory,
 *  which our root directory in this case src
 */
gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: 'src'
    }
  });
});

/**
 * adding watch function to be able to reload our browser
 *  whenever changes are been made to js, html, and css files
 */
gulp.task('watch', ['browserSync'], function (){
  // Reloads the browser whenever HTML or JS files change
  gulp.watch('src/css/**/*.css',browserSync.reload); 
  gulp.watch('src/*.html',browserSync.reload); 
  gulp.watch('src/js/**/*.js', browserSync.reload); 
  gulp.watch('jasmine/spec/**/*.js',browserSync.reload);
});