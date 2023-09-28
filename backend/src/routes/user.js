const express = require('express')
const router = express.Router()
const userControllers = require(`../controllers/userControllers`)

router.post('/register', userControllers.createUser)
router.put('/update/:_id', userControllers.updateUser)
router.get('/getallusers', userControllers.getAllUsers)
router.get('/getByUsername/:username', userControllers.getByUsername)
router.get('/deleteUser/:_id', userControllers.deleteUser)
router.get('/addFollower/', userControllers.addFollower)


module.exports = router