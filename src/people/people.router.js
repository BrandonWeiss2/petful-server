const express = require('express')
const json = require('body-parser').json()

const People = require('./people.service')

const router = express.Router()

router.get('/', (req, res) => {
  res.status(200).json(People.get())
})

router.post('/', json, (req, res) => {
  const { name } = req.body
  People.enqueue(name)
  res.status(201).json(name)
})

router.delete('/', (req, res) => {
  People.dequeue()
  res.status(202).json(People.get())
})

module.exports = router
