const os = require('os')

// user-info 
console.log(os.userInfo())

// system up-time in seconds
console.log(os.uptime())

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMemory: os.totalmem(),
  freeMemory: os.freemem(),
}

console.log(currentOS)