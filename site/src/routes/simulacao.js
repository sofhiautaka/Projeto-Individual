var express = require("express");
var router = express.Router();

var simulacaoController = require("../controllers/simulacaoController");

router.post("/", function (req, res) {
    simulacaoController.testar(req, res);
});

router.post("/listar", function (req, res) {
    simulacaoController.listar(req, res);
});

// router.post("/listar/:idUsuario", function (req, res) {
//     simulacaoController.listarPorUsuario(req, res);
// });

// router.post("/pesquisar/:texto", function (req, res) {
//     simulacaoController.pesquisarTexto(req, res);
// });

router.post("/simular", function (req, res) {
    simulacaoController.simular(req, res);
});

module.exports = router;