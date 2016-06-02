const gulp = require('gulp');
const fs = require('fs');
const uglify = require('gulp-uglify');
const util = require('gulp-util');
const through2 = require('through2');
const babel = require('babel-core');
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
  gulp.task('build', ['print-size']);
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

gulp.task('min', ['webpack'], function() {
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

gulp.task('copy-app-js', ['webpack'], function () {
  return fs.createReadStream('./build/out/app.bundle.js')
    .pipe(through2(function(chunk, enc, callback) {
      this.push(babel.transform(chunk, {
        comments: false,
        babelrc: false,
        compact: true,
        minified: true,
        plugins: ['babel-plugin-short-identifiers']
      }).code);
      callback();
    }))
    .pipe(fs.createWriteStream('./build/app.bundle.js'));
});

gulp.task('print-size', ['min', 'copy-app-js'], function (cb) {
  function formatBytes(bytes, decimals) {
    if(bytes == 0) return '0 Byte';
    const k = 1000;
    const dm = decimals + 1 || 3;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
  }

  const vendor = formatBytes(fs.statSync('build/vendor.bundle.js').size);
  const app = formatBytes(fs.statSync('build/app.bundle.js').size);

  util.log('[Final Bundle]', `
vendor.bundle.js: ${vendor}
   app.bundle.js: ${app}`);

  cb();
})
