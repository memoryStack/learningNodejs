const fs = require('fs')
const util = require('util')

const readFilePromise = util.promisify(fs.readFile)

return readFilePromise('./dump.txt', 'utf8').then((result) => {
  console.log(result)
}).catch((err) => {
  console.log('error reading file', err)
})
