const { Router } = require("express");
const router = Router();
const getCountriesHandler = require("../handlers/getCountriesHandler"); // Importa el controlador

router.get("/allCountries", getCountriesHandler); // Pasa la función del controlador como referencia

module.exports = router; // Exporta solo el router
