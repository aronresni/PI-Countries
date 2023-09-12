const { Router } = require("express");
const router = Router();    
const countriesService = require("../service/countriesServices");

router.get("/allCountries", async (req, res) => {
    try {
        const countries = await countriesService.getCountriesService();
        res.status(200).json(countries);
    } catch (error) {
        console.error(error); // Registra el error en la consola para propósitos de depuración
        res.status(500).json({ error: "Internal server error" }); // Responde con un mensaje de error al cliente
    }
});
