var express = require("express");
var router = express.Router();

var votacaoController = require("../controllers/votacaoController");

router.get("/votar/:idAquario", function (req, res) {
    votacaoController.buscarUltimosVotos(req, res);
});

router.post("/votar", function (req, res) {
    votacaoController.votar(req, res);
})

// router.get("/tempo-real/:idAquario", function (req, res) {
//     votosController.buscarvotossEmTempoReal(req, res);
// })

module.exports = router;