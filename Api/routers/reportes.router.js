  
const express = require("express");
const router = express.Router();
const estudianteController = require("../controllers/estudiante.controller");
const estudianteAleatorio = require("../controllers/estudianteAleatorio.controller");


//envio de reportes a la carpeta correspondiente
router.get("/reportes", estudianteController.getEstudiantes);
router.get("/reportesMedellin", estudianteController.getReporteEstudianteMedellin);
//guardado de estudiante generado aleatoriamente
router.post("/estudianteAleatorio", estudianteAleatorio.estudianteRandom);


module.exports = router;