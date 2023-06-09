const express = require('express')

const router = express.Router()

const {
  getPeople,
  createPerson,
  // createPersonPostman,
  updatePerson,
  deletePerson,
} = require('../controllers/people')

const API = [
  {
    method: 'get',
    handler: getPeople,
    url: '/',
  },
  {
    method: 'post',
    handler: createPerson,
    url: '/',
  },
  {
    method: 'put',
    handler: updatePerson,
    url: '/:id',
  },
  {
    method: 'delete',
    handler: deletePerson,
    url: '/:id',
  },
]

function prepareRoutes() {
  API.forEach(({ method, handler, url }) => {
    router[method](url, handler)
  });
}

prepareRoutes()

module.exports = router
