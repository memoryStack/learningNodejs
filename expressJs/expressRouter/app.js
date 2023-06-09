const express = require('express')

const app = express()

const peopleRouter = require('./routes/people')
const loginRouter = require('./routes/auth')

// used to read the encoded body data
app.use(express.urlencoded({ extended: false }))

// middleware to parse the json incoming data
app.use(express.json())

app.use('/api/people', peopleRouter)
app.use('/login', loginRouter)

app.listen(5001, () => {
  console.log('server listening on 5001')
})
