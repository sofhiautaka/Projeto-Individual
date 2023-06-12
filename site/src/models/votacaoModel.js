var database = require("../database/config");


function votar(idUsuario, fkPostVotado) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function votar():", idUsuario, fkPostVotado);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
        UPDATE Usuario SET fkPostVotado = ${fkPostVotado} WHERE id = ${idUsuario};`;

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

// function buscarMedidasEmTempoReal(idAquario) {

//     instrucaoSql = ''

//     if (process.env.AMBIENTE_PROCESSO == "producao") {
//         instrucaoSql = `select top 1
//         dht11_temperatura as temperatura, 
//         dht11_umidade as umidade,  
//                         CONVERT(varchar, momento, 108) as momento_grafico, 
//                         fk_aquario 
//                         from medida where fk_aquario = ${idAquario} 
//                     order by id desc`;

//     } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
//         instrucaoSql = `select 
//         dht11_temperatura as temperatura, 
//         dht11_umidade as umidade,
//                         DATE_FORMAT(momento,'%H:%i:%s') as momento_grafico, 
//                         fk_aquario 
//                         from medida where fk_aquario = ${idAquario} 
//                     order by id desc limit 1`;
//     } else {
//         console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
//         return
//     }

//     console.log("Executando a instrução SQL: \n" + instrucaoSql);
//     return database.executar(instrucaoSql);
// }

function buscarUltimosVotos() {
    // if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        var instrucaoSql = `SELECT (SELECT Count(*) FROM Usuario where fkPostVotado = 1) voto1,
        (SELECT Count(*) FROM Usuario where fkPostVotado = 2) voto2,
        (SELECT Count(*) FROM Usuario where fkPostVotado = 3) voto3,
        (SELECT Count(*) FROM Usuario where fkPostVotado = 4) voto4,
        (SELECT Count(*) FROM Usuario where fkPostVotado = 5) voto5,
        (SELECT Count(*) FROM Usuario where fkPostVotado = 6) voto6,
        (SELECT Count(*) FROM Usuario where fkPostVotado = 7) voto7,
        (SELECT Count(*) FROM Usuario where fkPostVotado = 8) voto8,
        (SELECT Count(*) FROM Usuario where fkPostVotado = 9) voto9;
        `;     
    // } else {
    //     console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
    //     return
    // }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


module.exports = {
    buscarUltimosVotos,
    votar
    // buscarMedidasEmTempoReal
}
