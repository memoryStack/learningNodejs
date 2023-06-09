
const express = require('express')

const router = express.Router()

const { loginUser } = require('../controllers/login')

const API = [
  {
    method: 'get',
    handler: loginUser,
    url: '/',
  }
]

const prepareRoutes = () => {
  API.forEach(({ method, handler, url }) => {
    router[method](url, handler)
  });
}

prepareRoutes()

module.exports = router
