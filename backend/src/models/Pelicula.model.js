const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {type: String, require: true},
    lastname: {type: String, require: true},
    year: {type: String, require: true},
    type: {type: String, require: true},
}) 

const Peli= mongoose.model('peli',userSchema)

module.exports = Peli