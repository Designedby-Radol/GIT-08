const mongoose = require('mongoose')

const peliSchema = new mongoose.Schema({
    name: {type: String, require: true},
    year: {type: Number, require: true},
    type: {type: String, require: true}
}) 

const Peli= mongoose.model('peli',peliSchema)

module.exports = Peli