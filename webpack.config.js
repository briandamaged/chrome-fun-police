
const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");



const config = {
  context: path.join(__dirname, 'src'),
  entry: {
    popup: './popup.js',
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: "[name].js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./popup.html",
      filename: "popup.html",
      chunks: ["popup"]
    })
  ]
};

module.exports = exports = config;
