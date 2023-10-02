const express = require('express')
const router = express.Router()
const userControllers = require(`../controllers/userControllers`)

router.post('/register', userControllers.createPeli)
router.put('/update/:_id', userControllers.updatePeli)
router.get('/getallpelis', userControllers.getAllPelis)
router.get('/getByName/:Name', userControllers.getByName)
router.get('/deletePeli/:_id', userControllers.deletePeli)
router.get('/addFollower/', userControllers.addFollower)


module.exports = router