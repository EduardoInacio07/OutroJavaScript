//Biblioteca que vai conversar com o mongodb
const mongoose = require('mongoose')

//Use metodo "destructor" para extrair o Schema
const { Schema } = mongoose

//Criar uma constante que sera exportada
//Inserir os dados do nosso banco de dados
const situationSchema = new Schema({
    nome : {
        type: String,
        required: true
    }
},{timestamps: true})

//Definir modelo no mongoose
const Situation = mongoose.model("Situation",situationSchema)

//Exportar constantes
module.exports([
    Situation,
    situationSchema
])
