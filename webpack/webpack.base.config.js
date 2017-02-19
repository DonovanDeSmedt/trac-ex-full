const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
const PATHS = require('./paths');

module.exports = {
  output: {
    path: PATHS.dist,
    filename: 'bundle.js',
    publicPath: '/',
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel',
        include: PATHS.src,
        query: {
          cacheDirectory: true
        }
      },
      {
        exclude: [
          /\.html$/,
          /\.(js|jsx)$/,
          /\.css$/,
          /\.json$/,
          /\.svg$/
        ],
        loader: 'url',
        query: {
          limit: 10000,
          name: 'static/[name].[ext]'
        }
      },
      {
        test: /\.json$/,
        loader: 'json'
      },
      {
        test: /\.svg$/,
        loader: 'file',
        query: {
          name: 'static/[name].[ext]'
        }
      }
    ],
  },
  plugins: [
    new LodashModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: PATHS.publicHtml,
      inject: 'body',
      title: 'React Redux Starter',
    }),
  ],
};
