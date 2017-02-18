const argv = require('yargs').argv;

function getClientEnvironment() {
  const defaults = {
    'process.env.NODE_ENV': process.env.NODE_ENV || 'development',
    '__DEV__':  process.env.NODE_ENV !== 'production',
  };

  return Object
      .keys(defaults)
      .reduce((env, key) => {
        env[key] = JSON.stringify(defaults[key]);
        return env;
      }, {});
}

module.exports = getClientEnvironment;
