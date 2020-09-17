const postcss = require('postcss');
const {parseValue, checkUnit} = require('./lib/util');
const {defaultConf, getComment} = require('./lib/static');
const _ = require('lodash');
module.exports = postcss.plugin('postcss-px2vw-pv', function (opts = {}) {
  const comment = getComment(opts);
  opts = _.merge(defaultConf, opts);
  opts.width = Number(opts.width);
  opts.decimal = Number(opts.decimal);
  return async function (root) {
        root.walkDecls(decl => {
          if (checkUnit(decl.value)) {
            decl.value = parseValue(decl, opts);
          }
        })
        root.prepend(
          postcss.comment({text: comment})
        )
  };
});