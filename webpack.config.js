const merge = require('webpack-merge');
const baseConfig = require('./webpack/webpack.base.config');
const devConfig = require('./webpack/webpack.dev.config');
const prdConfig = require('./webpack/webpack.prd.config');

const TARGET = process.env.npm_lifecycle_event;

let config = {}; // eslint-disable-line
switch (TARGET) {
  case 'dist':
    config = merge.smart(baseConfig, prdConfig);
    break;
  default:
    config = merge.smart(baseConfig, devConfig);
}

module.exports = config;
