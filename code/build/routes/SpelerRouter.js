"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require('express');
var router = express.Router();
var SpelerController_1 = require("../Controller/SpelerController");
router.get("/all", SpelerController_1.SpelerController.findAllUsers);
router.get("/id/:id", SpelerController_1.SpelerController.findUserById);
router.post("/create", SpelerController_1.SpelerController.createPlayers);
module.exports = router;
//# sourceMappingURL=SpelerRouter.js.map