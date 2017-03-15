var path = require('path');
var webpack = require('webpack');

var sourceDir = path.resolve(__dirname, '../', 'src/');

module.exports = {
  entry: path.resolve(sourceDir, 'index.js'),
  output: {
    path: sourceDir,
    filename: 'bundle.js'
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
};
