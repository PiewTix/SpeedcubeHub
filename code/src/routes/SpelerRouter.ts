let express = require('express');

let router = express.Router()

import {SpelerController} from "../Controller/SpelerController"

router.get("/all", SpelerController.findAllUsers)

router.get("/id/:id", SpelerController.findUserById);

router.post("/create", SpelerController.createPlayers);



module.exports = router