const control = require('../controller/controller');
const express = require('express');
const router = express.Router();


router.get('/',control.getTokenData)
router.post('/add',control.addToken);


module.exports= router;