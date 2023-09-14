const { Router } = require("express");
const router = Router();

const postActivityHandler = require("../handlers/Activity/postActivityHandler")
const getActivitiesHandler = require("../handlers/Activity/getActivityHandler")
router.get("/activities", getActivitiesHandler)
router.post("/activities", postActivityHandler)



module.exports = router;