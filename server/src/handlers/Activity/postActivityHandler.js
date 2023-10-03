const postActivity = require("../../controllers/Activity/postActivity");

const postActivityHandler = async (req, res) => {
    try {
        const { name, difficulty, duration, season, countries } = req.body;
        if (!name || !difficulty || !duration || !season || !countries || countries.length === 0) {
            return res.status(400).json({ error: "Faltan campos obligatorios o países." })
        }
        const createdActivity = await postActivity.postActivity(name, difficulty, duration, season, countries);
        if(createdActivity === "La actividad ya existe") return res.status(404).json(({error: "La actividad ya existe"}))
        
        res.status(200).json(createdActivity)


    } catch (error) {
        console.error('Error al crear la actividad turística:', error);
        res.status(500).json({ error: `Error al crear la actividad turística: ${error.message}` });
      }
      

}

module.exports = postActivityHandler    