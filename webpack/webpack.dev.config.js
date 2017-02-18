import webpack from 'webpack';
import stylelint from 'stylelint';
import reporter from 'postcss-reporter';
import PATHS from './paths';

export default {
  entry: [
    'react-hot-loader/patch',
    'webpack-hot-middleware/client',
    PATHS.src,
  ],
  module: {
    loaders: [
      // local files: css modules
      {
        test: /\.css$/,
        loaders: [
          'style',
          'css?sourceMap&modules&localIdentName=[name]---[local]---[hash:base64:5]',
          'postcss',
        ],
        include: PATHS.src,
      },
      // external css files
      {
        test: /\.css$/,
        loaders: ['style', 'css'],
        exclude: PATHS.src,
      },
    ],
  },
  postcss() {
    return [
      stylelint(),
      reporter(),
    ];
  },
  devtool: 'eval-source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      '__DEV__': true,
      'process.env.NODE_ENV': JSON.stringify('development'),
    }),
  ],
};
