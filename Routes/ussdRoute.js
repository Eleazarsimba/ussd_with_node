const express = require('express');
const router = express.Router();

const {
    ussd
} = require('../Controllers/ussdController');
router.post('/', ussd);

module.exports =router;