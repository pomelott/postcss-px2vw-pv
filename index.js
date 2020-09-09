const postcss = require('postcss');

const defaultConf = {
  filename: 'retina-border',
  pxRange: 2,
  dprRange: 3,
  selector: '.retina-border-%dpx'
}
module.exports = postcss.plugin('postcss-retina-px-border', function (opts) {
  opts = Object.assign({}, defaultConf, opts);
  return async function (root, finalResult) {
      let filename = getFileName(root.source.input.file);
      if (filename === opts.filename) {
      }
  };
});