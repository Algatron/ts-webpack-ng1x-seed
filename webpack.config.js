const HtmlWebpackPlugin = require('html-webpack-plugin');
const bPaths = require("./build.paths");

const REGEX_NODE_MODULES = /node_modules/;

module.exports = {
  entry: bPaths.files.ENTRY,
  output: {
    filename: 'bundle.js',
    path: bPaths.dirs.BIN
  },
  module: {
      rules: [
         {
           test: /\.ts?$/,
           loader: 'ts-loader',
           exclude: REGEX_NODE_MODULES
         }
          
      ]
  },
  resolve: {
    extensions: [".ts", ".js", ".ejx", ".html"]
  },
  plugins: [
    new HtmlWebpackPlugin({
     title: 'Seed Project for SmartEditers',
     template: bPaths.files.INDEX_TEMPLATE
   })
  ]
}
