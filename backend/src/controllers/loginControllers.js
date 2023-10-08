const LoginModel = require('../models/login.model')
//---------------------------------------------------------------------------------------------------------------------------------------------------------------
async function createUser(request, response) {
    //extraer la data del body
    let { username, email, name, lastname, password } = request.body;
    const hashPassword = await bcrypt.hash(password, 10);
    // revisar si en la base de datos se encuentran registros con el username o el email
    const data = await UserModel.find({ $or: [{ email }, { username }] });
    // condicionar si se va a crear o si va a mostrar un mensaje de que yta existe - [] - null
    if (data && data.length !== 0) {
        return response.status(400).json({ msg: "este usuario ya existe" });
    }
    //decirle que quiero crear un documento en la coleccion users
    const newUser = new UserModel({
        username,
        email,
        name,
        lastname,
        password,
    });
    // lo guarda
    await newUser.save();
    return response.status(201).json({ msg: "usuario creado" });
}

//---------------------------------------------------------------------------------------------------------------------------------------------------------------

async function updateUser(request, response) {
    try {
        //query param - request.query
        //url params - request.param
        let { _id } = request.params;
        console.log(_id);
        //body - request.body
        let data = request.body;
        //actualice el usuario
        await UserModel.findByIdAndUpdate(_id, data);
        return response.status(200).json({ msg: "Usuario fue actualizado" });
    } catch (error) {
        return response.status(400).json({ msg: "Error", error });
    }
}

//---------------------------------------------------------------------------------------------------------------------------------------------------------------

async function getAllUsers(request, response) {
    const data = await UserModel.find()
    response.status(200).json({ data })
}

//---------------------------------------------------------------------------------------------------------------------------------------------------------------

async function getByUsername(request, response) {
    try {
        const { username } = request.params;
        const user = await UserModel.findOne({ username });
        return response.status(200).json({ user });
    } catch (error) {
        return response.status(400).json({ msg: "Error", error });
    }
}

//---------------------------------------------------------------------------------------------------------------------------------------------------------------

async function deleteUser(request, response) {
    try {
        let { _id } = request.params;

        //elimine el usuario
        await UserModel.findByIdAndRemove(_id);

        return response.status(200).json({ msg: "Usuario fue eliminado" });
    } catch (error) {
        return response.status(400).json({ msg: "Error", error });
    }
}

//---------------------------------------------------------------------------------------------------------------------------------------------------------------

async function addFollower(request, response) {
    try {
        let { id_a_seguir, id_que_sigue_a } = request.body;

        //personas que sigó
        let que_sigue_a = await UserModel.findById(id_que_sigue_a);
        que_sigue_a.follows.push(id_a_seguir);
        await UserModel.findByIdAndUpdate(id_que_sigue_a, {
            follows: que_sigue_a.follows,
        });

        //personas que lo siguen
        let a_seguir = await UserModel.findById(id_a_seguir);
        a_seguir.followers.push(id_que_sigue_a);
        await UserModel.findByIdAndUpdate(id_a_seguir, {
            followers: a_seguir.followers,
        });

        return response
            .status(400)
            .json({ msg: "Se ha seguido un usuario", id_a_seguir, id_que_sigue_a });
    } catch (error) {
        return response.status(400).json({ msg: "Error", error });
    }
}
//---------------------------------------------------------------------------------------------------------------------------------------------------------------

module.exports = {
    createUser,
    updateUser,
    getAllUsers,
    getByUsername,
    deleteUser,
    addFollower
}