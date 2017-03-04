const PATHS = require('./paths');

function getConfig(env) {
  if (env && env.production) {
    return require(`${PATHS.config}/prod`);
  } else if (env && env.test) {
    return require(`${PATHS.config}/test`);
  }
  return require(`${PATHS.config}/dev`);
}

function getClientEnvironment(env) {
  const config = getConfig(env);
  return Object.keys(config).reduce((acc, key) => {
    acc[key] = JSON.stringify(config[key]);
    return acc;
  }, {});
}

module.exports = getClientEnvironment;
