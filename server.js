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
import favicon from 'serve-favicon';
import webpackConfig from './webpack.config.babel';

const config = {
  host: 'localhost',
  port: 3010,
  proxyUrl: '',
};
const PATHS = {
  dist: path.join(__dirname, 'dist'),
  indexHtml: path.join(__dirname, 'dist', 'index.html'),
  publicFavicon: path.join(__dirname, 'public', 'favicon.ico'),
};

const logger = console;
const app = express();

if (!yargs.argv.production) {
  const compiler = webpack(webpackConfig);
  const middleware = webpackMiddleware(compiler, {
    publicPath: webpackConfig.output.publicPath,
    contentBase: 'app',
    stats: {
      colors: true,
      timings: true,
      chunks: false,
    },
  });

  app.use(morgan('dev'));
  app.use(favicon(PATHS.publicFavicon));
  app.use(middleware);
  app.use(webpackHotMiddleware(compiler));
  app.use('/api', proxy(url.parse(`${config.proxyUrl}/$api`)));

  app.get(/^((?!\/api).)*$/, (req, res) => {
    res.write(middleware.fileSystem.readFileSync(PATHS.indexHtml));
    res.end();
  });
} else {
  logger.info('serving production');
  app.use(compress()); // gzip
  app.use(favicon(PATHS.publicFavicon));
  app.use(express.static(PATHS.dist));
  app.use('/api', proxy(url.parse(`${config.proxyUrl}/$api`)));
  app.get(/^((?!\/api).)*$/, (req, res) => {
    res.sendFile(PATHS.indexHtml);
  });
}

app.listen(config.port, config.host, (err) => {
  if (err) {
    logger.log(err);
  }
  logger.info('==> Open up http://%s:%s in your browser.', config.host, config.port);
});
