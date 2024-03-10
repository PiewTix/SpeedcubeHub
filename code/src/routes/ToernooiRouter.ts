import {Toernooi} from "../entity/Toernooi";

let express = require('express');

let router = express.Router()

import {ToernooiController} from "../Controller/ToernooiController"

router.get("/all", ToernooiController.findAllToernooien)

//router.get("/id/:id", SpelerController.findUserById);


router.put("/deelnameprijs", ToernooiController.updateDeelnameprijs)


module.exports = router