const express = require('express')

const app = express()

const someJSONData = require('./data.json')

app.get('/', (req, res) => {
  res.json(someJSONData)
})

app.listen(5001, () => {
  console.log('listening on 5001')
})
