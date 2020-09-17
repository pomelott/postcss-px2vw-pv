
const {getComment} = require('../../lib/static')

module.exports.opts = {
  remMigration: true
}

module.exports.styleInput = `
.text-box{
  width: 4rem;
  height: 6rem;
}
`
module.exports.styleOutputExpected = `/* ${getComment(this.opts)} */
.text-box{
  width: 40vw;
  height: 60vw;
}
`