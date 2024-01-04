const path = require('path');
const webpack = require('webpack');
const chalk = require('chalk');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');

module.exports = {
  mode: "development",
  entry: './example/app/index.ts',
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.html', '.css']
  },
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: ['ts-loader', 'angular2-template-loader'],
      //  exclude: [/node_modules/, /dist/, /dist-tsc/, /test/, /public_api/]
      },
      {
        test: /\.(html|css)$/,
        use: 'raw-loader',
    //    exclude: [/node_modules/, /dist/, /dist-tsc/, /test/]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: './example/index.html'
    }),
    new ProgressBarPlugin({
      format: '  build [' + chalk.blue.bold(':bar') + ']' + chalk.green.bold(':percent') + ' (:elapsed seconds) => :msg...  ',
      clear: false
    }),
  ],
  devServer: {
    // https: true,
    port: 8888,
    historyApiFallback: {
      index: './example/'
    },
    open: false
  }
};
