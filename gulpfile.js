var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
// var minify = require('gulp-minify-css');

gulp.task('js', function () {
    gulp.src('src/scripts/*.js')
        .pipe(concat('script.js'))
        .pipe(uglify())
        .pipe(gulp.dest('public/js/'));
});

gulp.task('css', function () {
    gulp.src('assets/css/*.css')
        .pipe(concat('styles.css'))
        .pipe(gulp.dest('public/css/'));
});

gulp.task('default', ['watch'], function () {

});

gulp.task('watch', function () {
    gulp.watch('assets/css/*.css', ['css']);
    gulp.watch('assets/js/*.js', ['js']);
});