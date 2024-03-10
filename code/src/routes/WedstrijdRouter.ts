let express = require('express');

let router = express.Router()

import {WedstrijdController} from "../Controller/WedstrijdController"

router.get("/toernooi/:toernooi", WedstrijdController.findAllToernooiWedstrijden)


/*
router.get("/toernooi/:toernooi", (req, res) => {
    res.send('hello world');
})

*/


module.exports = router