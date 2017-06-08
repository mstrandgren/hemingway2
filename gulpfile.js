var gulp = require('gulp');
var less = require('gulp-less');
var autoprefixer = require('gulp-autoprefixer');

gulp.task("default", function () {
  gulp.src('less/style.less')
    .pipe(less({outputStyle: 'compressed'}))
    .pipe(autoprefixer())
    .pipe(gulp.dest('static/css/'));
});

gulp.task("watch", function () {
  gulp.watch('less/style.less', function() {
    gulp.src('less/style.less')
      .pipe(less({outputStyle: 'compressed'}))
      .pipe(autoprefixer())
      .pipe(gulp.dest('static/css/'));
  });
});
