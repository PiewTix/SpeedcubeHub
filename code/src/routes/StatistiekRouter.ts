import {StatistiekController} from "../Controller/StatistiekController";

let express = require('express');
let router = express.Router()

router.get('/ranking', StatistiekController.findStatistieken)

module.exports = router