var gulp = require('gulp'),
    gutil = require('gulp-util'),
    browserify = require('gulp-browserify'),
    compass = require('gulp-compass'),
    connect = require('gulp-connect'),
    gulpif = require('gulp-if'),
    uglify = require('gulp-uglify'),
    minifyHTML = require('gulp-minify-html'),
    concat = require('gulp-concat'),
    minifyCss=require('gulp-clean-css'),
    browserSync = require('browser-sync'),
    path = require('path');


var dir = "builds/development/" 

gulp.task("serve", function(){
	browserSync.init({
		server: {
			baseDir: dir
		}
	});
	browserSync.watch("builds/development/**/*.*").on("change", browserSync.reload);
});

  
gulp.task('compass', function() {
  gulp.src('components/sass/style.scss')
    .pipe(compass({
      sass: 'components/sass',
      require: 'breakpoint'
    })
    .on('error', gutil.log))
    .pipe(gulp.dest( dir + 'css'))
});

gulp.task('watch', function(){
	gulp.watch('components/**/*.*', ['compass']);
});

gulp.task('default', ['compass','watch', 'serve']);


