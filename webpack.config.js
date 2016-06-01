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
  devtool: process.env.NODE_ENV === 'production' ? void 0 : 'eval',
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendor'),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV)
      }
    })
  ]
};
