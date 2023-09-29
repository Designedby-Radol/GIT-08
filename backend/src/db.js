const mongoose = require(`mongoose`)
//const bdpato = process.env.BDPATO

const uri = process.env.URI
//"mongodb+srv://raulsantigoramirez:1031648361r@radol.q4e4eeh.mongodb.net/bit01?retryWrites=true&w=majority"

mongoose.connect(uri,{useUnifiedTopology: true, useNewUrlParser: true})
.then(() => console.log("conectado a DB"))
.catch((error) => console.log(error))

module.exports = mongoose