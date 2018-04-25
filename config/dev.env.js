'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  //API_ROOT: '"iot.ideyee.com"',
  API_ROOT: '"update.ideyee.com"'
})
