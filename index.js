const postcss = require('postcss');
const {parseValue, checkUnit} = require('./lib/util')
const defaultConf = {
  width: 750,
  decimal: 6,
  comment: true
}

module.exports = postcss.plugin('postcss-px2vw-pv', function (opts) {
  opts = Object.assign({}, defaultConf, opts);
  opts.width = Number(opts.width);
  opts.decimal = Number(opts.decimal);
  const comment =
  `
    plugin: postcss-px2vw-pv
    width:  ${opts.width}
    decimal: ${opts.decimal}
    @https://github.com/pomelott/postcss-px2vw-pv
`
  return async function (root) {
        root.walkDecls(decl => {
          if (checkUnit(decl.value)) {
            decl.value = parseValue(decl.value, opts);
          }
        })
        if (opts.comment) {
          root.prepend(
            postcss.comment({text: comment})
          )
        }
  };
});