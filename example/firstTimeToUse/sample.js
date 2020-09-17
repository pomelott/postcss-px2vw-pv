
const {getComment} = require('../../lib/static')

module.exports.styleInput = `
.text-box{
  border: 1px solid #ff0;
  width: 500pv;
  height: 200pv;
  animation: ani linear 1s infinite;
}
`
module.exports.styleOutputExpected = `/* ${getComment()} */
.text-box{
  border: 1px solid #ff0;
  width: 66.6667vw;
  height: 26.6667vw;
  animation: ani linear 1s infinite;
}
`