const path = require('path')

module.exports = {
  entry:  './src/index.js',
  target: 'node',
  output: {
    path: path.resolve(__dirname, '..', 'dist'),
    filename: 'index.js',
    libraryTarget: 'umd'
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      options: {
        plugins: [ "@babel/plugin-transform-runtime" ]
      }
    }]
  },
  resolve: {
    alias: {
      '@src': path.resolve(__dirname, '..', 'src')
    },
    fallback: {
      fs: false,
      net: false
    }
  }
}
