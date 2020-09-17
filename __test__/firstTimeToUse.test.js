

module.exports = async () => {
  const postcss = require('postcss');
const sampleEg = require('../example/firstTimeToUse/sample');
const pluginEg = require('../example/firstTimeToUse/postcss.config');
  const pluginTestItemOutput = await postcss(
    pluginEg.plugins
  ).process(sampleEg.styleInput, {
    from: undefined,
    to: undefined
  });
  expect(pluginTestItemOutput.css).toBe(sampleEg.styleOutputExpected)
}