"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require('express');
var router = express.Router();
var OrganisatorController_1 = require("../Controller/OrganisatorController");
router.get("/id/:id", OrganisatorController_1.OrganisatorController.findOrganisatorById);
module.exports = router;
//# sourceMappingURL=OrganisatorRouter.js.map