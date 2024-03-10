"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var StatistiekController_1 = require("../Controller/StatistiekController");
var express = require('express');
var router = express.Router();
router.get('/ranking', StatistiekController_1.StatistiekController.findStatistieken);
module.exports = router;
//# sourceMappingURL=StatistiekRouter.js.map