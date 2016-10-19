var gulp = require('gulp'),
  uglify = require('gulp-uglify'),
  concat = require('gulp-concat');

gulp.task('vendor_scripts', function() {
  return gulp.src(['./node_modules/riot/riot.js',
      './node_modules/riot/riot+compiler.js'])
    .pipe(concat('vendorScripts.js'))
    .pipe(uglify())
    .pipe(gulp.dest('public/_compiled'));

});

gulp.task('default', ['vendor_scripts']);

