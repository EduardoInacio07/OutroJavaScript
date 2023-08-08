//Importação padrão JS
//Import apelido from 'endereço do arquivo'
//Servidor Backend
const express = require('express')

//Camada de segurança
const cors = require('cors')

//Declara e inicializa a variavel do servidor
const app = express()

//Dizer pro app usar o que foi importado
app.use(cors)

//Trabalhar com json
app.use(express.json())

//Inicializar o servidor
//digitar no terminal e digite npm start
app.listen(3000, function () {
    console.log(`Servidor Online!!`)
})
