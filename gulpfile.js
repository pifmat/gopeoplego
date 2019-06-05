
var gulp = require('gulp');

gulp.task('hello', function() {
  console.log('Hello Zell');
});

const { watch } = require('gulp');

  watch(['asset/*.js', '!input/something.js'], function(cb) {
  // body omitted
  cb();
});