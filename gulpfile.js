var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var livereload = require('gulp-livereload');
var jshint = require('gulp-jshint');
var jshint_stylish = require('jshint-stylish');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var cssmin = require('gulp-minify-css');
var runSequence = require('run-sequence');

//all the scripts the app uses
var scripts=[
    'bower_components/jquery/dist/jquery.min.js',
    'bower_components/angular/angular.min.js',
    'bower_components/angular-sanitize/angular-sanitize.min.js',
    'bower_components/angular-ui-validate/dist/validate.min.js',
    'bower_components/angular-scroll-glue/src/scrollglue.js',
    'bower_components/ui-select/dist/select.min.js',
    'bower_components/jquery.datalist.js/jquery.datalist.min.js',
    'scripts/*.js'
    ];

//all the css files the app uses
var styles=[
    'bower_components/ui-select/dist/select.min.css',
    'bower_components/bootstrap/dist/css/bootstrap.min.css',
    'style/libs/*.css',
    'style/dist/*.css',
    '!style/dist/dist.css' //not the actual dist file
    ];

gulp.task('default', function() {
     runSequence('build', 'watch');
 });

//for production builds
gulp.task('build', function() {
    runSequence('js-hint','js-uglify','sass','css-min');
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
    gulp.src(scripts)
        .pipe(concat('main.js'))
        .pipe(gulp.dest('./scripts/dist/'))
        .pipe(livereload());
});

//minifies the main.js dist file
gulp.task('js-uglify', function() {
    gulp.src(scripts)
        .pipe(concat('main.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./scripts/dist/'));
});

//compiles, minifies all the sass files
gulp.task('sass', function() {
    gulp.src('./style/**.scss')
        .pipe(sass({
            }).on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('./style/dist/'))
        .pipe(livereload());
});

//concatanates all the css files into a single file
gulp.task('css-concat', function() {
     gulp.src(styles)
        .pipe(concat('dist.css'))
        .pipe(gulp.dest('style/dist/'))
        .pipe(livereload());
});

//minifies the main css file
gulp.task('css-min', function() {
    gulp.src(styles)
        .pipe(concat('dist.css'))
        .pipe(cssmin({compatibility: 'ie8',keepSpecialComments:0}))
        .pipe(gulp.dest('style/dist/'));
});

gulp.task('watch', function() {
    livereload.listen();
    gulp.watch('./style/*.scss', ['sass','css-concat']);
    gulp.watch('./*.html', ['html-live']);
    gulp.watch('./scripts/*.js', ['js-hint','js-concat']);
});