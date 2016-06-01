const path = require('path');
const webpack = require('webpack');

const DEV = process.env.NODE_ENV !== 'production';

module.exports = {
  entry: {
    app: './src/main.js',
    vendor: [ 'spectacle', 'spectacle-code-slide' ]
  },
  output: {
    filename: '[name].bundle.js',
    path: path.join(__dirname, DEV ? 'build' : 'build/out')
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
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendor'),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV)
      }
    })
  ]
};
