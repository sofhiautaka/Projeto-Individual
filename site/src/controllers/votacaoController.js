var votacaoModel = require("../models/votacaoModel");

function buscarUltimosVotos(req, res) {

    // const limite_linhas = 7;

    var idUsuario = req.params.idUsuario;

    // console.log(`Recuperando as ultimas ${limite_linhas} medidas`);

    votacaoModel.buscarUltimosVotos(idUsuario).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimos votos.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
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
// function buscarMedidasEmTempoReal(req, res) {

//     var idAquario = req.params.idAquario;

//     console.log(`Recuperando medidas em tempo real`);

//     medidaModel.buscarMedidasEmTempoReal(idAquario).then(function (resultado) {
//         if (resultado.length > 0) {
//             res.status(200).json(resultado);
//         } else {
//             res.status(204).send("Nenhum resultado encontrado!")
//         }
//     }).catch(function (erro) {
//         console.log(erro);
//         console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
//         res.status(500).json(erro.sqlMessage);
//     });
// }

module.exports = {
    buscarUltimosVotos,
    votar
    // buscarMedidasEmTempoReal

}