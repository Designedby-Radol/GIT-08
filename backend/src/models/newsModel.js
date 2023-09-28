const mongoose = require('mongoose')

const newSchema = new mongoose.Schema({
    noticia: String
})

const News = mongoose.model('News',newSchema)

module.exports = News