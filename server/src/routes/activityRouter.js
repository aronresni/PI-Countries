const { Router } = require("express");
const router = Router();

const postActivityHandler = require("../handlers/Activity/postActivityHandler")


router.post("/activities", postActivityHandler)

module.exports = router;