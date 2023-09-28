const mongoose = require('mongoose')

const pokenomSchema = new mongoose.Schema({
    name: String,
    species: String 
})

const Pokenom = mongoose.model('pokenom',pokenomSchema)

module.exports = Pokenom