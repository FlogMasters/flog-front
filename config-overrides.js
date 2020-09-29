const path = require('path');

const override = (config, env) => {
  config.devServer = { ...config.devServer, hot: true }
  config.resolve.modules = [
    ...(config.resolve.modules || []),
    path.resolve(__dirname, 'src')
  ];
  return config;
}

module.exports = override