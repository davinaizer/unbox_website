'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const zip = require('gulp-zip');
const imagemin = require('gulp-imagemin');
const pngquant = require('imagemin-pngquant'); // $ npm i -D imagemin-pngquant
const browserSync = require('browser-sync');
const reload = browserSync.reload;
const template = require('gulp-template-compile');
const concat = require('gulp-concat');

// sass compile
gulp.task('sass', function() {
  gulp.src('sass/**/*.scss')
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest('app/css'));
});

gulp.task('optimize-images', function() {
  return gulp.src('app/assets/**/*')
    .pipe(imagemin({
      progressive: true,
      svgoPlugins: [{ removeViewBox: false }],
      use: [pngquant()]
    }))
    .pipe(gulp.dest('dist/assets'));
});

gulp.task('watch', function() {
  gulp.watch('./sass/**/*.scss', ['sass']);
  gulp.watch('./templates/**/*.html', ['compile-jst']);
  gulp.watch(['*.html', 'css/**/*.css', 'js/**/*.js'], { cwd: 'app' }, reload);
});

gulp.task('compile-jst', function() {
  gulp.src('templates/**/*.html')
    .pipe(template())
    .pipe(concat('templates.js'))
    .pipe(gulp.dest('app/js/templates'));
});

// watch files for changes and reload
gulp.task('serve', function() {
  browserSync({
    notify: false,
    server: {
      baseDir: 'app',
      routes: {
        "/node_modules": "./node_modules"
      }
    }
  });
});

gulp.task('serve-dist', function() {
  browserSync({
    notify: false,
    server: {
      baseDir: 'dist'
    }
  });
});

gulp.task('zip-dist', function() {
  return gulp.src('dist/**')
    .pipe(zip('ebookJS-dist.zip'))
    .pipe(gulp.dest('dist'));
});

gulp.task('zip-app', function() {
  return gulp.src('app/**')
    .pipe(zip('ebookJS-app.zip'))
    .pipe(gulp.dest('.'));
});

gulp.task('default', ['watch', 'serve'], function() {});
