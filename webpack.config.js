var path = require('path')
var webpack = require('webpack')

module.exports = {

  devtool: 'cheap-module-eval-source-map',

  entry: [
    'webpack-hot-middleware/client',
    'babel-polyfill',
    './js/index'
  ],

  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },

  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],

  module: { //Обновлено

    preLoaders: [ //добавили ESlint в preloaders
      {
        test: /\.js$/,
        loaders: ['eslint'],
        include: [
          path.resolve(__dirname, "js"),
        ],
      }
    ],

    loaders: [ //добавили babel-loader
      {
        loaders: ['react-hot-loader', 'babel-loader'],
        include: [
          path.resolve(__dirname, "js"),
        ],
        test: /\.js$/
      }
    ]
  }
}