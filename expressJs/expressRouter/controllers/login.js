
const loginUser = (req, res) => {

  const { name } = req.body

  if (name) {
    return res.status(200).send(`Welcome ${name}`)
  }
  res.status(404).send('Please privide credentials')
}

module.exports = { loginUser }
