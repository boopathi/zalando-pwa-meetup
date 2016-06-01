const webpack = require('webpack');

const DEV = process.env.NODE_ENV !== 'production';

module.exports = {
  entry: {
    app: './src/main.js',
    vendor: [ 'spectacle', 'spectacle-code-slide' ]
  },
  output: {
    filename: '[name].bundle.js',
    path: DEV ? 'build' : 'build/out'
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
  devtool: DEV ? 'eval' : void 0,
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendor'),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV)
      }
    })
  ]
};
