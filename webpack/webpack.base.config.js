import HtmlWebpackPlugin from 'html-webpack-plugin';
import LodashModuleReplacementPlugin from 'lodash-webpack-plugin';
import PATHS from './paths';

export default {
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
        include: PATHS.src,
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
