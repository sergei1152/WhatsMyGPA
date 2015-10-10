var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var livereload = require('gulp-livereload');
var jshint = require('gulp-jshint');
var jshint_stylish = require('jshint-stylish');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

var javascript_libraries=[ './scripts/lib/angular/angular.min.js', 'scripts/lib/jquery/dist/jquery.min.js','./scripts/lib/selectize/dist/js/standalone/selectize.min.js','./scripts/lib/ui-select/dist/select.min.js',
    'scripts/lib/angular-sanitize/angular-sanitize.min.js'];
javascript_libraries.push('./scripts/*.js');
var javascript_files=javascript_libraries;

gulp.task('default', function() {
    console.log("NOTE: Please use either gulp build or gulp watch");
});

//for production builds
gulp.task('build', function() {
    gulp.src(javascript_files)
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
    gulp.src(javascript_files)
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