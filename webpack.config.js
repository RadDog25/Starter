const merge = require('webpack-merge')

const baseConfig = require('./webpack/base.config.js')
const devConfig = require('./webpack/dev.config.js')
const prodConfig = require('./webpack/prod.config.js')

const activeConfig = process.env.NODE_ENV === 'production' ? prodConfig : devConfig

module.exports = merge(baseConfig, activeConfig)