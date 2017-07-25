'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('styles', function () {
    return gulp.src('./src/styles/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./src'));
});

gulp.task('styles-watch', function() {
    gulp.watch('./src/styles/**/*.scss', ['style']);
});

gulp.task('default', ['styles', 'styles-watch']);