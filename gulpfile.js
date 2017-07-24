'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('style', function () {
    return gulp.src('./src/style/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./src'));
});

gulp.task('style-watch', function() {
    gulp.watch('./src/style/**/*.scss', ['style']);
});

gulp.task('default', ['style', 'style-watch']);