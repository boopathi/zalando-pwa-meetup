const gulp = require('gulp');
const uglify = require('gulp-uglify');

gulp.task('default', function() {
  gulp.src(['build/vendor.bundle.js'])
    .pipe(uglify({
      mangle: true,
      comments: false,
      preserveComments: () => false,
      compress: {
        dead_code: true,
        screw_ie8: true,
        sequences: true,
        properties: true,
        conditionals: true,
        comparisons: true
      }
    }))
    .pipe(gulp.dest('build'))
});
