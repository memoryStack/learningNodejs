const logger = (req, res, next) => {
  const method = req.method
  const url = req.url
  const time = new Date()
  console.log(method, url, time)
  next() // will call the next middleware in the chain
}

module.exports = { logger }