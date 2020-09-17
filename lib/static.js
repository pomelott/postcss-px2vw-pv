const defaultConf = {
  width: 750,
  decimal: 4,
  rem: false,
  remMigration: false
}

module.exports.defaultConf = defaultConf;

module.exports.getComment = (opts = {}) => {
  opts = Object.assign({}, defaultConf, opts);
  return `plugin: postcss-px2vw-pv; width: ${opts.width}; decimal: ${opts.decimal}; contact@https://github.com/pomelott/postcss-px2vw-pv`;
}