const gulp = require('gulp');
const uglify = require('gulp-uglify');

gulp.task('min', function() {
  return gulp.src('build/out/vendor.bundle.js')
    .pipe(uglify({
      mangle: true,
      comments: false,
      preserveComments: false,
      compress: {
        dead_code: true,
        screw_ie8: true,
        sequences: true,
        properties: true,
        booleans: true,
        unused: true,
        if_return: true,
        join_vars: true,
        conditionals: true,
        comparisons: true
      }
    }))
    .pipe(gulp.dest('build'))
});
