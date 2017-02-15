module.exports = {
  entry: './src/PercentageCircle.js',
  output: {
    filename: 'index.js'
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        query:
        {
          presets:['react']
        }
      },
      {
        test: /\.scss$/,
        loader: 'style-loader!css-loader?importLoaders=1!sass-loader'
      }
    ]
  },
  externals: {
    // Use external version of React
    "react": "React"
  }
}
