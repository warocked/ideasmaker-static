var gulp = require('gulp'),
   uglify = require('gulp-uglify'),
   concat = require('gulp-concat'),
   jshint = require('gulp-jshint'),
   autoprefixer = require('autoprefixer'),
   minifyCSS = require('gulp-clean-css'),
   htmlmin = require('gulp-htmlmin');



gulp.task('build', async function () {
   	gulp.src([
   		'_src/js/bootstrap.min.js',
   		'_src/js/waypoints.min.js',
   		'_src/js/jquery.parallax-1.1.3.min.js',
   		'_src/js/jquery.accordion.min.js',
   		'_src/js/owl.carousel.min.js',
   		'_src/js/animations.js',
   		'_src/js/custom.js'
   		])
      .pipe(jshint())
      .pipe(uglify())
      .pipe(concat('app.min.js'))
      .pipe(gulp.dest('_static/js'));

	gulp.src('_src/index.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('_static'));

	gulp.src('_src/css/*.css')
    .pipe(minifyCSS())
    .pipe(concat('app.min.css'))
    .pipe(gulp.dest('_static/css'));

});

