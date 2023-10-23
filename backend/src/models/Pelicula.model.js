const mongoose = require('mongoose')

const peliSchema = new mongoose.Schema({
    name: String,
    year: Number,
    type: String
}) 

const PeliculaModel= mongoose.model('pelis',peliSchema)

module.exports = PeliculaModel