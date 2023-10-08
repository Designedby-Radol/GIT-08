require('dotenv').config()
require('./db')
//llamar las librerias
const express = require(`express`)

//rutas importadas
const pelicula = require(`./routes/Peliculas.js`)

//definir las funciones a utilizar
const app = express()

//debe entender json
app.use(express.json())

//lamar a db
require(`./db`)

//definir el puertoa
const port = 3000

//definir rutas de usuario
app.use(`/peliculas`,pelicula)
app.use(`/login`,login)

//iniciar el servidor
app.listen(port, ( ) => console.log(`server is running in port ${port}`))