const { readFile, writeFile } = require('fs')

readFile('./dump.txt', 'utf8', (error, result) => {
  if (error) return null

  console.log(result)
})

// will overwrite all the existing text in the file
writeFile('./dump.txt', 'some new text asyncly', (error, result) => {
  if (error) console.log(error)
})
