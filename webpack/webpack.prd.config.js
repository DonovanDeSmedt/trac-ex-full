import path from 'path';
import webpack from 'webpack';
import autoprefixer from 'autoprefixer';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import CleanWebpackPlugin from 'clean-webpack-plugin';

const PATHS = {
  app: path.join(__dirname, '..', 'app'),
  dist: path.join(__dirname, '..', 'dist'),
};

export default {
  entry: [
    PATHS.app,
  ],
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract(
          'style',
          'css?modules&localIdentName=[name]---[local]---[hash:base64:5]!postcss'
        ),
        include: PATHS.app,
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style', 'css'),
        exclude: PATHS.app,
      },
    ],
  },
  postcss() {
    return [
      autoprefixer(),
    ];
  },
  devtool: 'source-map',
  plugins: [
    new CleanWebpackPlugin(PATHS.dist, {
      root: process.cwd(),
      verbose: true,
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.DefinePlugin({
      '__DEV__': false,
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        screw_ie8: true,
      },
    }),
    new ExtractTextPlugin('styles.css'),
  ],
};
