const control = require('../controller/controller');
const express = require('express');
const router = express.Router();


router.get('/',control.serverRun);

router.get('/send',control.getTokenData)

router.post('/add',control.addToken);




module.exports= router;