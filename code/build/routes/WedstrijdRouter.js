"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require('express');
var router = express.Router();
var WedstrijdController_1 = require("../Controller/WedstrijdController");
router.get("/toernooi/:toernooi", WedstrijdController_1.WedstrijdController.findAllToernooiWedstrijden);
/*
router.get("/toernooi/:toernooi", (req, res) => {
    res.send('hello world');
})

*/
module.exports = router;
//# sourceMappingURL=WedstrijdRouter.js.map