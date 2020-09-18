const gulp = require('gulp')
const plumber = require('gulp-plumber')
const htmlValidator = require('gulp-w3c-html-validator')

module.exports = function initial() {
    return gulp.src('src/**/*.html')
        .pipe(plumber())
        .pipe(htmlValidator())   // TURN ON in a time...
        .pipe(gulp.dest('build'))
}