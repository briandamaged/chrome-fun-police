
const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require('copy-webpack-plugin');

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
        exclude: /node_modules/
      },
    ]
  },
  plugins: [
    new CopyPlugin([
      {from: 'manifest.json'},
      {from: '*.png'},
    ]),
    new HtmlWebpackPlugin({
      template: "./popup.html",
      filename: "popup.html",
      chunks: ["popup"]
    }),
  ]
};

module.exports = exports = config;
