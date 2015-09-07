var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('default', function(){
	gulp.src('./style/**.scss')
		.pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
		.pipe(autoprefixer({
			browsers:['last 2 versions'],
			cascade: false
		}))
		.pipe(gulp.dest('./style/dist/'));
	gulp.watch('./style/**.scss', ['default']);
});

gulp.task('build', function () {
  gulp.src('./style/**.scss')
		.pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
		.pipe(autoprefixer({
			browsers:['last 2 versions'],
			cascade: false
		}))
		.pipe(gulp.dest('./style/dist/'));
});

gulp.task('watch', function () {
  gulp.watch('./style/**.scss', ['default']);
});