//llamar las librerias
const express = require(`express`)

//rutas importadas
const user = require(`./routes/user.js`)
const pokenom = require(`./routes/pokenom.js`)
const news = require(`./routes/news.js`)
const foro = require(`./routes/foros.js`)

//definir las funciones a utilizar
const app = express()

//debe entender json
app.use(express.json())

//lamar a db
require(`./db`)

//definir el puertoa
const port = 3000

//definir rutas de usuario
app.use(`/user`,user)
app.use(`/pokenom`,pokenom)
app.use(`/news`,news)
app.use(`/foro`,foro)

//iniciar el servidor
app.listen(port, ( ) => console.log(`server is running in port ${port}`))
