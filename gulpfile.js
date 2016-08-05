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
    path = require('path'),
    postcss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer'),
    precss = require('precss'),
    cssnano = require('cssnano'),
    uglify = require('gulp-uglify'),
    htmlmin = require('gulp-htmlmin'),
    rename = require('gulp-rename');


var dir = "builds/development";
var prod = "builds/production";

var now="development";


gulp.task("serve", function(){
	browserSync.init({
		server: {
			baseDir: dir
		}
	});
	browserSync.watch("builds/development/**/*.*").on("change", browserSync.reload);
});

// gulp.task('js', function(){
//   gulp.src(dir + '/js/*.js')
//     .pipe(uglify())
//     .pipe(concat('all.js'))
//     .pipe(gulp.dest(prod+'/js'));
// });

// gulp.task('html', function(){
//   gulp.src(dir + '/**/*.html')
//     .pipe(htmlmin({collapseWhitespace: true, processScripts: ["text/template"]}))
//     .pipe(gulp.dest(prod));
// });

gulp.task('compass', function() {
  gulp.src('components/sass/style.scss')
    .pipe(compass({
      sass: 'components/sass',
      require: 'breakpoint'
    })
    .on('error', gutil.log))
    // .pipe(postcss([
    //   autoprefixer(),
    //   precss(),
    //   cssnano()
    // ]))
    .pipe(rename("style.css"))
    .pipe(gulp.dest(dir+'/css'))
});

gulp.task('watch', function(){
	gulp.watch('components/**/*.*', ['compass']);
});

gulp.task('default', ['compass', 'watch', 'serve']);
