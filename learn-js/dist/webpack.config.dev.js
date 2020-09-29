"use strict";

var path = require('path');

module.exports = {
  entry: './before.js',
  output: {
    path: path.resolve(__dirname, '.'),
    filename: 'after.js'
  },
  devServer: {
    contentBase: path.resolve(__dirname, '.'),
    publicPath: './'
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      }
    }]
  }
};