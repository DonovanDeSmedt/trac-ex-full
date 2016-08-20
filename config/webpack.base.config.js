import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import LodashModuleReplacementPlugin from 'lodash-webpack-plugin';

const PATHS = {
  app: path.join(__dirname, '..', 'app'),
  dist: path.join(__dirname, '..', 'dist'),
};

export default {
  entry: [
    PATHS.app,
  ],
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
        loader: 'babel?cacheDirectory=true',
        include: PATHS.app,
      },
      {
        test: /\.((woff2?|svg)(\?v=[0-9]\.[0-9]\.[0-9]))|(woff2?|svg)$/,
        loader: 'url?limit=10000',
      },
      {
        test: /\.((ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9]))|(ttf|eot)$/,
        loader: 'file',
      },
      {
        test: /\.png$/,
        loader: 'url-loader?limit=100000&mimetype=image/png&name=[path][name].[hash].[ext]',
      },
      {
        test: /\.jpg$/,
        loader: 'file-loader?name=[path][name].[hash].[ext]',
      },
    ],
  },
  plugins: [
    new LodashModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: './index.html',
      inject: 'body',
      title: 'React Redux Starter',
    }),
  ],
};
