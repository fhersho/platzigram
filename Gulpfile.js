'use strict'

const gulp = require('gulp')
const sass = require('gulp-sass')
const babel = require('babelify')
const browserify = require('browserify')
const source = require('vinyl-source-stream')

gulp.task('styles', () => {
  return gulp
   .src('src/client/scss/app.scss')
   .pipe(sass())
   .pipe(gulp.dest('public/css'))
})

gulp.task('images', () => {
  return gulp
    .src('src/client/images/*')
    .pipe(gulp.dest('public/images'))
})

gulp.task('web', () => {
  return gulp
    .src('src/client/web/*')
    .pipe(gulp.dest('public'))
})

gulp.task('scripts', () => {
  browserify('src/client/js/app.js')
    .transform(babel)
    .bundle()
    .pipe(source('app.js'))
    .pipe(gulp.dest('public/js'))
})

gulp.task('default', ['styles', 'web', 'images', 'scripts'])
