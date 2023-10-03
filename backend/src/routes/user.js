const express = require('express')
const router = express.Router()
const userControllers = require(`../controllers/userControllers`)

router.post('/register', userControllers.createPeli)
router.put('/updateUser/:_id', userControllers.updatePeli)
router.get('/getallusers', userControllers.getAllPelis)
router.get('/getByUsername/:Name', userControllers.getByName)
router.get('/deleteUser/:_id', userControllers.deletePeli)
router.get('/addFollower/', userControllers.addFollower)


module.exports = router