const PokenomModel = require('../models/pokenom.model')
async function createPokenom(request, response){
    let {name, species} = request.body

    //decirle que quiero crear un documento en la coleccion users
    const newPokenom = new PokenomModel({
        name, species
    })

    await newPokenom.save()
    response.json({msg: 'pokenom creado', r: request.body})
}

module.exports = {
    createPokenom
}
