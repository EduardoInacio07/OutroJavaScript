//Importar o mongoose
const mongoose = require('mongoose')

//Importar situation
const { situationSchema } = require('situation')

//Extrair o Schema
const { Schema } = mongoose

//Criar o modelo
const tarefaSchema = new Schema({
    Assunto :{
        type: String,
        required: true
    },
    Data :{
        type: Date,
        required: true
    },
    Descricao :{
        type: String,
        required: true
    },
    Contato :{
        type: String,
        required: true
    },
    Situacao :{
        type: [situatonSchema],
        required: true
    }
},{timestamps: true})

//Definir o modelo no mongoose
const Tarefa = mongoose.model('Tarefa',tarefaSchema)

//Exportar
module.exports = {
    Tarefa,
    tarefaSchema
}