
const {getComment} = require('../../lib/static')
module.exports.opts = {
  width: 1080,
  decimal: 5
}

module.exports.styleInput = `
.text-box{
  width: 500pv;
  height: 200pv;
  animation: ani linear 1s infinite;
}
`
module.exports.styleOutputExpected = `/* ${getComment(this.opts)} */
.text-box{
  width: 46.29630vw;
  height: 18.51852vw;
  animation: ani linear 1s infinite;
}
`