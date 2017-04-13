const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const bPaths = require("./build.paths");

const REGEX_NODE_MODULES = /node_modules/;

module.exports = {
   entry: {
      app: bPaths.files.ENTRY,
      vendor: [
        'angular'
     ]
   },
   output: {
      filename: '[name]-[hash].js',
      path: bPaths.dirs.BIN
   },
   module: {
      rules: [
         {
            test: /\.html$/,
            loader: "html-loader"
        },
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
      }),


  new webpack.optimize.CommonsChunkPlugin({
         name: "vendor",
         filename: '[name].[chunkhash].js',
         minChunks: function (module) {
            return module.context && module.context.indexOf("node_modules") !== -1;
         }
      }),
  new webpack.optimize.CommonsChunkPlugin({
         name: "manifest",
         minChunks: Infinity
      }),
  ],
   devtool: "sourcemap"
}
