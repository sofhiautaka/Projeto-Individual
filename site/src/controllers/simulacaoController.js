var simulacaoModel = require("../models/simulacaoModel");

var sessoes = [];

function testar(req, res) {
    console.log("ENTRAMOS NA simulacaoController");
    res.json("ESTAMOS FUNCIONANDO!");
}


function simular(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var texto = req.body.txtServer;
    var idUsuario = req.body.idServer;
    

    // Faça as validações dos valores
    if (texto == undefined) {
        res.status(400).send("Seu texto está undefined!");
    } else if (idUsuario == undefined) {
        res.status(400).send("Seu idUsuario está undefined!");
    } else {
        
        // Passe os valores como parâmetro e vá para o arquivo simulacaoModel.js
        simulacaoModel.simular(texto, idUsuario)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

module.exports = {
    simular,
    testar
}