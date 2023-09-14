const postActivity = require("../../controllers/Activity/postActivity");

const postActivityHandler = async (req, res) => {
    try {
        const { name, difficulty, duration, season, countries } = req.body;
        if (!name || !difficulty || !duration || !season || !countries || countries.length === 0) {
            return res.status(400).json({ error: "Faltan campos obligatorios o países." })
        }
        const createdActivity = await postActivity(name, difficulty, duration, season, countries);
        res.status(200).json(createdActivity)


    } catch (error) {
        res.status(500).json({ error: "Error al crear la actividad turistica" })
    }

}

module.exports = postActivityHandler