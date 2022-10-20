const { merge } = require('webpack-merge')
const commonConfig = require('./webpack/webpack.common')

module.exports = () => {
  const env =  process.env.NODE_ENV === 'production' ? 'prod' : 'dev'
  const envConfig = require(`./webpack/webpack.${env}.js`)

  const mergedConfig = merge(
    commonConfig,
    envConfig
  )

  return mergedConfig
}
