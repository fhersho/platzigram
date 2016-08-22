'use strict'

var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('styles',function (){
    return gulp
      .src('src/client/scss/app.scss')
      .pipe(sass().on('error',function(error){
        return notify().write(err);
      }))
      .pipe(gulp.dest('public/css'));
});

gulp.task('default', ['styles']);