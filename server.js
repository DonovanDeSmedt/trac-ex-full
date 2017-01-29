import path from 'path';
import express from 'express';
import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import proxy from 'proxy-middleware';
import url from 'url';
import morgan from 'morgan';
import yargs from 'yargs';
import compress from 'compression';
import config from './webpack.config.babel';

const argv = yargs.argv;
const logger = console;
const backendUrl = '';
const production = !!argv.production;
const port = 3010;
const host = 'localhost';
const app = express();
const PATHS = {
  dist: path.join(__dirname, 'dist'),
  index: path.join(__dirname, 'dist', 'index.html'),
};

if (!production) {
  const compiler = webpack(config);
  const middleware = webpackMiddleware(compiler, {
    publicPath: config.output.publicPath,
    contentBase: 'app',
    stats: {
      colors: true,
      timings: true,
      chunks: false,
    },
  });

  app.use(morgan('dev'));
  app.use(middleware);
  app.use(webpackHotMiddleware(compiler));
  app.use('/api', proxy(url.parse(`${backendUrl}/$api`)));

  app.get(/^((?!\/api).)*$/, (req, res) => {
    res.write(middleware.fileSystem.readFileSync(PATHS.index));
    res.end();
  });
} else {
  logger.info('serving production');
  app.use(compress()); // gzip
  app.use(express.static(PATHS.dist));
  app.use('/api', proxy(url.parse(`${backendUrl}/$api`)));
  app.get(/^((?!\/api).)*$/, (req, res) => {
    res.sendFile(PATHS.index);
  });
}

app.listen(port, host, (err) => {
  if (err) {
    logger.log(err);
  }
  logger.info('==> Open up http://%s:%s in your browser.', host, port);
});
