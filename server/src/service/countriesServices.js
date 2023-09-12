const getCountries = require("../controllers/getCountries")
const getCountriesService = async(req,res)=>{
    try {
        const countries = await getCountries.getCountries();    
        res.status(200).json(countries)
    } catch (error) {
        res.status(500).send("Error en el handler para obtener los paises")
    }
}

module.exports = {
        getCountriesService
}