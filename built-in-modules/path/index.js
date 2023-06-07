const path = require('path')

// path separator for specific platform
console.log(path.sep)

// join some path using the path.sep property
console.log(path.join('a', 'g'))

// basepath of a full path
const filepath = path.join('a', 'b', 'c')
console.log(path.basename(filepath))

// Ques -> what is the difference between path.join and path.resolve ??
console.log(path.resolve(__dirname, '/b', 'c'))
