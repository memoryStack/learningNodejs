const express = require('express')

const app = express()

app.use(express.static('./public'))

// app.get('/', (req, res) => {
//   res.sendFile(path.resolve(__dirname, './public/index.html'))
// })

// NOTE: put it below the other handlers
// else it will be called for all the incoming requests
// and even the "/" or "/about" valid requests will be served as 404
app.all('*', (req, res) => {
  res.status(404).send('<h1>resources not found</h1>')
})

app.listen(5001, () => {
  console.log('listening on 5001')
})
