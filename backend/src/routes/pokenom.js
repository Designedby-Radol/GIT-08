const express = require('express')
const router = express.Router()
const pokenomControllers = require(`../controllers/pokenomControllers`)

router.post('/register', pokenomControllers.createPokenom)

module.exports = router

