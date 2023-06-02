var database = require("../database/config");

function listar() {
    console.log("ACESSEI O AVISO  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
        SELECT 
            s.idSimulador,
            s.texto,
            s.fkUsuario,
            u.id AS idUsuario,
            u.nome,
            u.email,
            u.senha
        FROM Simulador s
            INNER JOIN Usuario u
                ON s.fkUsuario = u.id;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

// function pesquisarTexto(texto) {
//     console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function pesquisarDescricao()");
//     var instrucao = `
//         SELECT 
//         s.idSimulador,
//         s.texto,
//         s.fkUsuario,
//         u.id AS idUsuario,
//         u.nome,
//         u.email,
//         u.senha
//     FROM Simulador s
//         INNER JOIN Usuario u
//             ON s.fkUsuario = u.id;
//         WHERE s.texto LIKE '${texto}';
//     `;
//     console.log("Executando a instrução SQL: \n" + instrucao);
//     return database.executar(instrucao);
// }

// function listarPorUsuario(idUsuario) {
//     console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listarPorUsuario()");
//     var instrucao = `
//         SELECT 
//         s.idSimulador,
//         s.texto,
//         s.fkUsuario,
//         u.id AS idUsuario,
//         u.nome,
//         u.email,
//         u.senha
//     FROM Simulador s
//         INNER JOIN Usuario u
//             ON s.fkUsuario = u.id;
//         WHERE u.id = ${idUsuario};
//     `;
//     console.log("Executando a instrução SQL: \n" + instrucao);
//     return database.executar(instrucao);
// }

function simular(idSimulador, texto, fkUsuario) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", idSimulador, texto, fkUsuario);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
        INSERT INTO Simulador (idSimulador, texto, fkUsuario) VALUES ('${idSimulador}','${texto}', '${fkUsuario
        }}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}



module.exports = {
    listar,
    // listarPorUsuario,
    // pesquisarTexto,
    simular
}
