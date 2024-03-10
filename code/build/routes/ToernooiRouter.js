"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require('express');
var router = express.Router();
var ToernooiController_1 = require("../Controller/ToernooiController");
router.get("/all", ToernooiController_1.ToernooiController.findAllToernooien);
//router.get("/id/:id", SpelerController.findUserById);
router.put("/deelnameprijs", ToernooiController_1.ToernooiController.updateDeelnameprijs);
module.exports = router;
//# sourceMappingURL=ToernooiRouter.js.map