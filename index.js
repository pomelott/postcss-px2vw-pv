const postcss = require('postcss');
const {parseValue, checkUnit} = require('./lib/util')
const defaultConf = {
  width: 750,
  decimal: 6
}
module.exports = postcss.plugin('postcss-px2vw-pv', function (opts) {
  opts = Object.assign({}, defaultConf, opts);
  opts.width = Number(opts.width);
  opts.decimal = Number(opts.decimal);
  return async function (root, finalResult) {
        root.walkDecls(decl => {
          if (checkUnit(decl.value)) {
            decl.value = parseValue(decl.value, opts);
          }
        })
  };
});