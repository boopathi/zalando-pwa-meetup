const gulp = require('gulp');
const uglify = require('gulp-uglify');
const util = require('gulp-util');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const webpackConfig = require('./webpack.config');

const DEV = process.env.NODE_ENV !== 'production';

const webpackStatsOptions = {
  colors: true,
  hash: true,
  version: true,
  timings: true,
  assets: true,
  chunks: true,
  chunkModules: false,
  modules: false,
  children: false,
  reasons: false,
  source: false,
  chunkOrigins: false
}

if (DEV) {
  gulp.task('build', ['webpack']);
  gulp.task('watch', ['webpack-dev-server']);
} else {
  gulp.task('build', ['webpack', 'min']);
}

gulp.task('webpack', cb => {
  webpack(webpackConfig, (err, stats) => {
    if (err) return cb(err);
    util.log('[webpack]', stats.toString(webpackStatsOptions));
    cb();
  });
});

gulp.task('webpack-dev-server', cb => {
  webpackConfig.devtool = 'eval';
  webpackConfig.debug = true;
  console.log(webpackConfig);
  const compiler = webpack(webpackConfig);
  const server = new WebpackDevServer(compiler, {
    stats: webpackStatsOptions,
    publicPath: '/build/'
  });
  server.listen(8000, 'localhost', err => {
    if (err) throw new util.PluginError('[webpack-dev-server]', err);
    util.log('[webpack-dev-server]', 'compiling...');
  });
});

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
