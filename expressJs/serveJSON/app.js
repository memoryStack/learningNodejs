const express = require('express')

const app = express()

const morgan = require('morgan')

const someJSONData = require('./data.json')

const { logger } = require('./logger')

// put logger middleware in between for all the routes
// the order of this app.use matters

/*
  to use the logger for specific routes
    app.use('/api', logger)
    this middleware will apply to the /api* endpoints only
*/

/*
  to use multiple middlewares use it like
    app.use([m1, m2])
*/

app.use(morgan('tiny'))

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
