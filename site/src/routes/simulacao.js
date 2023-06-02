var express = require("express");
var router = express.Router();

var simulacaoController = require("../controllers/simulacaoController");

router.get("/", function (req, res) {
    simulacaoController.testar(req, res);
});


//Recebendo os dados do html e direcionando para a função cadastrar de simulacaoController.js
router.post("/simular", function (req, res) {
    simulacaoController.simular(req, res);
})


module.exports = router;