'use strict';

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    babel = require('gulp-babel'),
    concat = require('gulp-concat'),
    livereload = require('gulp-livereload');

sass.compiler = require('node-sass');

gulp.task('sass', function () {
  return gulp.src('src/scss/app.scss')
    .pipe(sass())
    .pipe(gulp.dest('dist'));
});

gulp.task('watch', function(){
  livereload.listen();
  gulp.watch('src/scss/**/*.scss', gulp.series('sass'));
  gulp.watch('src/js/**/*.js', gulp.series('scripts'));
})

gulp.task('scripts', function() {
  return gulp.src([
      'src/js/*.js'
    ])
    .pipe(concat('app.js'))
    .pipe(babel({presets: ['es2015']}))
    .pipe(gulp.dest('./dist/'));
});