const mongoose = require('mongoose')

const forosSchema = new mongoose.Schema({
    foro: String
})

const foros = mongoose.model('foros',forosSchema)

module.exports = foros