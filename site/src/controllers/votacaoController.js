var votacaoModel = require("../models/votacaoModel");

var sessoes = [];

function testar(req, res) {
    console.log("ENTRAMOS NA votacaoController");
    res.json("ESTAMOS FUNCIONANDO!");
}


function votar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var voto = req.body.votoServer;
    var idUsuario = req.body.idServer;
    

    // Faça as validações dos valores
    if (voto == undefined) {
        res.status(400).send("O voto está undefined!");
    } else if (idUsuario == undefined) {
        res.status(400).send("Seu idUsuario está undefined!");
    } else {
        
        // Passe os valores como parâmetro e vá para o arquivo votacaoModel.js
        votacaoModel.votar(idUsuario, voto)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o voto! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

module.exports = {
    votar,
    testar
}