const NewsModel = require('../models/newsModel')
async function createNew(request, response){
    let {noticia} = request.body

    //decirle que quiero crear un documento en la coleccion users
    const newNews = new NewsModel({
        noticia
    })

    await newNews.save()
    response.json({msg: 'noticia creada', r: request.body})
}

module.exports = {
    createNew
}
