const fs = require('fs').promises

fs.readFile('./dump.txt', 'utf8').then((result) => {
  console.log(result)
}).catch((err) => {
  console.log('error reading file', err)
})
