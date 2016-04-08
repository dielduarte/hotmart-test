var gulp = require('gulp');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var gulpif = require('gulp-if');
var expect = require('gulp-expect-file');
var minifyCSS = require('gulp-cssnano');

var files = [
];

var styles = [
  'node_modules/flexboxgrid/css/flexboxgrid.min.css'
];

var EXTERNAL_FONTS = [
  'app/assets/fonts/OpenSans-Bold.ttf',
  'app/assets/fonts/OpenSans-BoldItalic.ttf',
  'app/assets/fonts/OpenSans-ExtraBold.ttf',
  'app/assets/fonts/OpenSans-ExtraBoldItalic.ttf',
  'app/assets/fonts/OpenSans-Italic.ttf',
  'app/assets/fonts/OpenSans-Light.ttf',
  'app/assets/fonts/OpenSans-LightItalic.ttf',
  'app/assets/fonts/OpenSans-Regular.ttf',
  'app/assets/fonts/OpenSans-Semibold.ttf',
  'app/assets/fonts/OpenSans-SemiboldItalic.ttf'
];

gulp.task('build-vendors', ['build-vendors-css', 'build-vendors-fonts'], function () {
  gulp.src(files)
    .pipe(expect({ errorOnFailure: true }, files))
    .pipe(gulpif(/[.]js$/, concat('vendors.js')))
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('./build/scripts/'));
});

gulp.task('build-vendors-css', function(){
  gulp.src(styles)
    .pipe(expect({ errorOnFailure: true }, styles))
    .pipe(gulpif(/[.]css$/, concat('vendors.css')))
    .pipe(minifyCSS())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('./build/assets/css/'));
});


gulp.task('build-vendors-fonts', function(){
  gulp.src(EXTERNAL_FONTS)
    .pipe(expect({ errorOnFailure: true }, EXTERNAL_FONTS))
    .pipe(gulp.dest('./build/assets/fonts/'));
});













