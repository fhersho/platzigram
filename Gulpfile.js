'use strict'

var gulp = require('gulp')
var sass = require('gulp-sass')

gulp.task('styles', () => {
  return gulp
   .src('src/client/scss/app.scss')
   .pipe(sass())
   .pipe(gulp.dest('public/css'))
})

gulp.task('default', ['styles'])
