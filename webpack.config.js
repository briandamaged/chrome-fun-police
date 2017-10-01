
const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const fileExtensions = ['png'];


const config = {
  context: path.join(__dirname, 'src'),
  entry: {
    popup: './popup.js',
    'fun-police': './fun-police.js',
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: "[name].js",
  },
  module: {
    rules: [
      {
        test: new RegExp('\.(' + fileExtensions.join('|') + ')$'),
        loader: "file-loader?name=[name].[ext]",
        exclude: /node_modules/,
      },
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react'],
        },
      },
      {
        test: /\.s?css$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader',
        }),
      },
    ]
  },
  plugins: [
    new CopyPlugin([
      {
        from: '../static/**/*',
        to: '[name].[ext]',
      },
    ]),
    new ExtractTextPlugin("styles.css"),
  ]
};

module.exports = exports = config;
