var gulp = require('gulp');
var minifyHTML = require('gulp-htmlmin');
var jade = require('gulp-jade');
var plumber = require('gulp-plumber');

gulp.task('jade', function () {
  gulp.src('./app/index.jade')
    .pipe(plumber())
    .pipe(jade({pretty: true}))
    .pipe(minifyHTML())
    .pipe(gulp.dest('./build/'))
});
