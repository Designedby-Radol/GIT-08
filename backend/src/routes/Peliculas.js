const express = require('express')
const router = express.Router()
const peliculasControllers = require(`../controllers/peliculasControllers`)

router.post('/register', peliculasControllers.createPeli)
router.put('/update/:_id', peliculasControllers.updatePeli)
router.get('/getallpelis', peliculasControllers.getAllPelis)
router.get('/getByName/:Name', peliculasControllers.getByName)
router.get('/deletePeli/:_id', peliculasControllers.deletePeli)



module.exports = router