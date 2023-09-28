const mongoose = require(`mongoose`)
const bdpato = process.env.BDPATO

const uri = process.env.URI
const atluri= `${process.env.URI}/${bdpato}`

mongoose.connect(atluri,{useUnifiedTopology: true, useNewUrlParser: true})
.then(() => console.log("conectado a DB"))
.catch((error) => console.log(error))

module.exports = mongoose