const express = require('express')
const json = require('body-parser').json()

const Pets = require('./pets.service')
const People = require('../people/people.service')

const router = express.Router()

router.get('/', (req, res) => {
  // Return all pets currently up for adoption.
  res.status(200).json(Pets.get())
})

router.delete('/', json, (req, res) => {
  const { type } = req.body;
  Pets.dequeue(type)
  res.status(202).json(Pets.get())
})

module.exports = router
