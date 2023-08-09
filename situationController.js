//Importar meu modelo 
//Importar ./ quando o arquivo esta na mesma pasta
//Importar ../ quando esta em outra pasta
//para cada nivel eu preciso usar ../
//VS Code - ext chamada autoimport
const {Situation: SituationModel}= require("../models/situation")

const SituationController = {

    //Crud
    //Criar - Create
    create: async (req, res) => {
        //assincrono: executa em paralelo ou fora de sincronia
        //sincrono: executa na sequencia
        //req - request: o que o usuario quer ver, ou salvar, ou pesquisar
        //res - response: a resposta do servidor
        //POST - envia dados no corpo(body) da requisição
        try {
            //tente fazer algo
            //data ou nome do modelo
            //$data php e muito comum $data = $request->all()
            //const data = req.body
            const data = {
                // nome: req.data.nome
                nome: req.body.nome
            }
            const response = await SituationModel.create(situation)

            res.status(201).json({response, msg:"Criado com sucesso!"})

        } catch (error) {
            //em caso de erro retorne
            console.log(error)
            res.status(400).json({msg: "Não foi possivel salvar"})
        }
    }
    //Ler - Read
    //Atualizar - Update
    //Remover - Delete
}

module.exports = SituationController 