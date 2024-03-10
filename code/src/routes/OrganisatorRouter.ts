let express = require('express');

let router = express.Router()

import {OrganisatorController} from "../Controller/OrganisatorController"

router.get("/id/:id", OrganisatorController.findOrganisatorById);


module.exports = router