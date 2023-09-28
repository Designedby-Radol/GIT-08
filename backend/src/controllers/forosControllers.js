const forosModel = require('../models/forosModel')
async function createForo(request, response){
    let {foro} = request.body

    //decirle que quiero crear un documento en la coleccion users
    const newForos = new forosModel({
        foro
    })

    await newForos.save()
    response.json({msg: 'foro creado', r: request.body})
}

module.exports = {
    createForo
}
