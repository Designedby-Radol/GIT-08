const PeliculaModel = require('../models/Pelicula.model')
//---------------------------------------------------------------------------------------------------------------------------------------------------------------
async function createPeli(request, response) {
    //extraer la data del body
    let { name, lastname, year, type } = request.body;
    // revisar si en la base de datos se encuentran registros con el username o el email
    const data = await PeliculaModel.find({ $or: [{ lastname }, { name}] });
    // condicionar si se va a crear o si va a mostrar un mensaje de que yta existe - [] - null
    if (data && data.length !== 0) {
        return response.status(400).json({ msg: "esta pelicula ya existe" });
    }
    //decirle que quiero crear un documento en la coleccion users
    const newPeli = new PeliculaModel({
        name,
        lastname,
        year,
        type
    });
    // lo guarda
    await newPeli.save();
    return response.status(201).json({ msg: "pelicula creado" });
}

//---------------------------------------------------------------------------------------------------------------------------------------------------------------

async function updatePeli(request, response) {
    try {
        //query param - request.query
        //url params - request.param
        let { _id } = request.params;
        console.log(_id);
        //body - request.body
        let data = request.body;
        //actualice el usuario
        await PeliculaModel.findByIdAndUpdate(_id, data);
        return response.status(200).json({ msg: "Pelicula fue actualizada" });
    } catch (error) {
        return response.status(400).json({ msg: "Error", error });
    }
}

//---------------------------------------------------------------------------------------------------------------------------------------------------------------

async function getAllPelis(request, response) {
    const data = await PeliculaModel.find()
    response.status(200).json({ data })
}

//---------------------------------------------------------------------------------------------------------------------------------------------------------------

async function getByName(request, response) {
    try {
        const { name } = request.params;
        const pelicula = await PeliculaModel.findOne( name );
        return response.status(200).json( pelicula );
    } catch (error) {
        return response.status(400).json({ msg: "Error", error });
    }
}

//---------------------------------------------------------------------------------------------------------------------------------------------------------------

async function deletePeli(request, response) {
    try {
        let { _id } = request.params;

        //elimine el usuario
        await PeliculaModel.findByIdAndRemove(_id);

        return response.status(200).json({ msg: "la pelicula eliminado" });
    } catch (error) {
        return response.status(400).json({ msg: "Error", error });
    }
}

//---------------------------------------------------------------------------------------------------------------------------------------------------------------

module.exports = {
    createPeli,
    updatePeli,
    getAllPelis,
    getByName,
    deletePeli,
}