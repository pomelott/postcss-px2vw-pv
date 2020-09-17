const {opts} = require('./sample')
module.exports = {
  plugins: [
    require('postcss-px2vw-pv')(opts)
  ]
}