const express = require('express')

const app = express()

const someJSONData = require('./data.json')

app.get('/', (req, res) => {
  res.json(someJSONData)
})

app.get('/api/item/:itemID', (req, res) => {
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
