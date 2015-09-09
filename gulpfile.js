var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var livereload = require('gulp-livereload');
var jshint = require('gulp-jshint');
var jshint_stylish = require('jshint-stylish');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

gulp.task('default', function() {
    console.log("NOTE: Please use either gulp build or gulp watch");
});

//for production builds
gulp.task('build', function() {
    gulp.src(['./scripts/*.js', './scripts/lib/angular.js', 'scripts/lib/jquery/dist/jquery.js'])
        .pipe(concat('main.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./scripts/dist/'));

    gulp.src('./style/**.scss')
        .pipe(sass({
            outputStyle: 'compressed'
        }).on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('./style/dist/'));
});

//so that livereload works with html
gulp.task('html-live', function() {
    gulp.src('./*.html')
        .pipe(livereload());
});

//lints all the javascript files
gulp.task('js-hint', function() {
    gulp.src('./scripts/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter(jshint_stylish));
});

//concatanates all the javascript files
gulp.task('js-concat', function() {
    gulp.src(['./scripts/*.js', './scripts/lib/angular.js', 'scripts/lib/jquery/dist/jquery.js'])
        .pipe(concat('main.js'))
        .pipe(gulp.dest('./scripts/dist/'))
        .pipe(livereload());
});

//compiles, minifies all the sass files
gulp.task('sass', function() {
    gulp.src('./style/**.scss')
        .pipe(sass({
            outputStyle: 'compressed'
        }).on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('./style/dist/'))
        .pipe(livereload());
});

gulp.task('watch', function() {
    livereload.listen();
    gulp.watch('./style/*.scss', ['sass']);
    gulp.watch('./*.html', ['html-live']);
    gulp.watch('./scripts/*.js', ['js-hint','js-concat']);
});