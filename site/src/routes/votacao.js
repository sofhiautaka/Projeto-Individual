var express = require("express");
var router = express.Router();

var votacaoController = require("../controllers/votacaoController");

router.get("/", function (req, res) {
    votacaoController.testar(req, res);
});
// router.get("/verVotos", function (req, res) {
//     votacaoController.verVotos(req, res);
// });


//Recebendo os dados do html e direcionando para a função cadastrar de votacaoController.js
router.post("/votar", function (req, res) {
    votacaoController.votar(req, res);
})


module.exports = router;