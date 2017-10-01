
const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const GenerateJSONPlugin = require('generate-json-webpack-plugin');

const fileExtensions = ['png'];


const config = {
  context: path.join(__dirname, 'src'),
  entry: {
    popup: './popup.js',
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
    new GenerateJSONPlugin('manifest.json', require('./src/manifest')),
    new HtmlWebpackPlugin({
      template: "./popup.html",
      filename: "popup.html",
      chunks: ["popup"]
    }),
  ]
};

module.exports = exports = config;
