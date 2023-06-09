const express = require('express')

const app = express()

app.get('/', (req, res) => {
  res.status(200).send('some home page data')
})

app.get('/about', (req, res) => {
  res.status(200).send('some about us data')
})

// NOTE: put it below the other handlers
// else it will be called for all the incoming requests
// and even the "/" or "/about" valid requests will be served as 404
app.all('*', (req, res) => {
  res.status(404).send('<h1>resources not found</h1>')
})

app.listen(5001, () => {
  console.log('listening on 5001')
})
