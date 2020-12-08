const paths = require('./paths')

const webpack = require('webpack')
const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')
const loader = require('sass-loader')

module.exports = merge(common, {
  // Set the mode to development or production
  // Установка режима разработки или продакшна
  mode: 'development',

  // Control how source maps are generated
  // Управление созданием карт источников
  devtool: 'inline-source-map',

  // Spin up a server for quick development
  // Запуск сервера для разработки
  devServer: {
    historyApiFallback: true,
    contentBase: paths.build,
    open: 'Google Chrome',
    compress: true,
    hot: true,
    port: 8080,
    
  },

  plugins: [
    // Only update what has changed on hot reload
    // Обновлять только при "горячей" перезагрузке
    new webpack.HotModuleReplacementPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: ['eslint-loader']
      }
    ]
  }
})
