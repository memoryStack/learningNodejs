const express = require('express')

const app = express()

const someJSONData = require('./data.json')

const logger = (req, res, next) => {
  const method = req.method
  const url = req.url
  const time = new Date()
  console.log(method, url, time)
  next() // will call the next middleware in the chain
}

// put logger middleware in between
app.get('/', logger, (req, res) => {
  res.json(someJSONData)
})

app.get('/api/item/:itemID', logger, (req, res) => {
  const { itemID } = req.params

  const item = someJSONData.find(({ id, tag }) => {
    return id === Number(itemID) && tag === req.query.tag
  })

  if (!item) {
    return res.status(404).send('Product does not exist')
  }

  res.json(item)
})

app.listen(5001, () => {
  console.log('listening on 5001')
})
