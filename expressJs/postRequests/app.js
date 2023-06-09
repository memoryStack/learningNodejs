const express = require('express')

const path = require('path')

const app = express()

// had some trouble with this serving the file locally for each folder
// might want to debug it sometime later
app.use(express.static(path.join(__dirname, 'post-method-public')))

// used to read the encoded body data
app.use(express.urlencoded({ extended: false }))

app.post('/login', (req, res) => {

  const { name } = req.body

  if (name) {
    return res.status(200).send(`Welcome ${name}`)
  }
  res.status(404).send('Please privide credentials')
})

app.listen(5001, () => {
  console.log('server listening on 5001')
})
