const express = require('express')
const router = express.Router()
const forosControllers = require(`../controllers/forosControllers`)

router.post('/register', forosControllers.createForo)

module.exports = router

