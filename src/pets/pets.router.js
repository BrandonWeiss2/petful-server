const express = require('express')
const json = require('body-parser').json()

const Pets = require('./pets.service')
const People = require('../people/people.service')

const router = express.Router()

router.get('/', (req, res) => {
  // Return all pets currently up for adoption.

})

router.get('/cats', (req, res) => {
  res.json(Pets.get().nextCat)
}) 

router.get('/dogs', (req, res) => {
  res.json(Pets.get().nextDog)
}) 

router.delete('/', json, (req, res) => {
  // Remove a pet from adoption.
})

module.exports = router
