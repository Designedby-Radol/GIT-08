const express = require('express')
const router = express.Router()
const newsControllers = require(`../controllers/newsControllers`)

router.post('/register', newsControllers.createNew)

module.exports = router

