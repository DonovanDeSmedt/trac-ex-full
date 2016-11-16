import merge from 'webpack-merge';
import baseConfig from './webpack/webpack.base.config';
import devConfig from './webpack/webpack.dev.config';
import prdConfig from './webpack/webpack.prd.config';

const TARGET = process.env.npm_lifecycle_event;

let config = {}; // eslint-disable-line
switch (TARGET) {
  case 'dist':
    config = merge.smart(baseConfig, prdConfig);
    break;
  default:
    config = merge.smart(baseConfig, devConfig);
}

export default config;
