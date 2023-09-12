const axios = require("axios");
const {Country} = require("../db")

const getCountries = async()=>{
        try{
            const countriesFromdB = await Country.findAll();

            if(countriesFromdB.length === 0){
                const countriesFromApi = await axios.get("https://localhost:5000/countries")
                return countriesFromApi.data;
            }
        }catch(err){
            return err;
        }
}



module.exports = {
    getCountries
}