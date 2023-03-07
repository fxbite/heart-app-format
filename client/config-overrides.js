const {
    removeModuleScopePlugin,
    override,
    babelInclude,
    addWebpackAlias,
  } = require('customize-cra')
const path = require('path')
const dotenv = require('dotenv')
const webpack = require('webpack')

function myOverrides(config) {
  config.module.exprContextCritical = false
  const envVars = dotenv.config().parsed;

  // Add the environment variables to the webpack DefinePlugin
  config.plugins.push(
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(envVars),
    })
  );
  return config
}

module.exports = override(
  myOverrides,
  removeModuleScopePlugin(),
  addWebpackAlias({
    types: path.resolve(__dirname, '../types'),
  }),
  babelInclude([path.resolve('src'), path.resolve('../types')])
)


