const { readFileSync, writeFileSync } = require('fs')

const existingText = readFileSync('./dump.txt', 'utf8')

console.log(existingText)

// will overwrite all the existing text in the file
writeFileSync('./dump.txt', 'some new text')

// will append text 
writeFileSync('./dump.txt', 'some new text', { flag: 'a' })
