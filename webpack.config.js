const webpack = require('webpack');

module.exports = {
  entry: {
    app: './src/main.js',
    vendor: [ 'spectacle', 'spectacle-code-slide' ]
  },
  output: {
    filename: '[name].bundle.js',
    path: './build'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules|assets/
      }
    ]
  },
  devtool: 'eval',
  plugins: [ new webpack.optimize.CommonsChunkPlugin('vendor') ]
};
