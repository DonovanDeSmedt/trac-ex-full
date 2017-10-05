const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const getClientEnvironment = require('./env');
const PATHS = require('./paths');

// eslint-disable-next-line no-empty-function
const noop = () => {};
module.exports = function prdConfig(env) {
  return {
    entry: [require.resolve('./polyfills'), PATHS.src],
    module: {
      rules: [
        {
          test: /\.css$/,
          use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: [
              {
                loader: 'css-loader',
                options: {
                  modules: true,
                  localIdentName: '[name]---[local]---[hash:base64:5]',
                  minimize: true,
                },
              },
              {
                loader: 'postcss-loader',
                options: {
                  plugins: [
                    autoprefixer({
                      browsers: [
                        '>1%',
                        'last 4 versions',
                        'Firefox ESR',
                        'not ie < 9', // React doesn't support IE8 anyway
                      ],
                    }),
                  ],
                },
              },
            ],
          }),
          include: PATHS.src,
        },
        {
          test: /\.css$/,
          use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: [
              {
                loader: 'css-loader',
                options: {
                  minimize: true,
                },
              },
            ],
          }),
          exclude: PATHS.src,
        },
      ],
    },
    plugins: [
      new CleanWebpackPlugin(PATHS.dist, {
        root: process.cwd(),
        verbose: true,
      }),
      new webpack.DefinePlugin(getClientEnvironment(env)),
      new webpack.optimize.ModuleConcatenationPlugin(),
      new webpack.optimize.UglifyJsPlugin({
        sourceMap: true,
        compress: {
          screw_ie8: true, // React doesn't support IE8
          warnings: false,
        },
        mangle: {
          screw_ie8: true,
        },
        output: {
          comments: false,
          screw_ie8: true,
        },
      }),
      new ExtractTextPlugin({
        filename: 'styles.css',
        disable: false,
        allChunks: true,
      }),
      env.analyze ? new BundleAnalyzerPlugin() : noop,
      new CompressionPlugin({
        asset: '[path].gz[query]',
        algorithm: 'gzip',
        test: /\.js$|\.css$|\.html$/,
        threshold: 10240,
        minRatio: 0.8,
      }),
    ],
  };
};
