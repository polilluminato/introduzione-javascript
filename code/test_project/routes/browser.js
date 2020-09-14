const express = require('express');
const router = express.Router();
const utils = require('../utils/request');

router.get('/',(req,res,next)=>{

    res.render('template');
});

router.get('/randomaddresses', async (req,res,next)=>{

    let risposta = await utils.getData('addresses',10);
    let myData = risposta.data;

    console.log(myData);
    res.render('template');

});

module.exports = router;