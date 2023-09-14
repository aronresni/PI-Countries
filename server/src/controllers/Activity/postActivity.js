const { Activity, Country } = require("../../db")

const postActivity = async (name, difficulty, duration, season, countries) => {
    //le vamos a pasar toda la info por query, despue vamos creando y buscando cada variable que necesitamos
    try {
        const newActivity = await Activity.create({
            name,
            difficulty,
            duration,
            season
        })
        let countryFind = await Country.findAll({
            where: { name: countries }
        })
        return await newActivity.country(countryFind)
    }
    catch (error) {
        return (error)
    }

}

module.exports = { postActivity }