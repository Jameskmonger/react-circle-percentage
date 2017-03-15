var path = require('path');
var webpack = require('webpack');

var sourceDir = path.resolve(__dirname, '../', 'src/');
var outDir = path.resolve(__dirname, '../', 'out/');

module.exports = {
  entry: path.resolve(sourceDir, 'js/', 'index.js'),
  output: {
    path: outDir,
    filename: `bundle-${process.env.DEPLOY_SHA}.js`
  },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin()
  ]
};
