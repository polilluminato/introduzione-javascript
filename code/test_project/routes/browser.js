const express = require('express');
const router = express.Router();
const utils = require('../utils/request');

router.get('/',(req,res,next)=>{
    res.render('template');
});

router.get('/randomaddresses', async (req,res,next)=>{

    let risposta = await utils.getData('addresses',{ _quantity: 6, _locale: 'it_IT' });
    let myData = risposta.data;

    res.render('template', {content: 'liste/addresses',data: myData});

});

router.get('/randomcreditcards', async (req,res,next)=>{

    let risposta = await utils.getData('credit_cards',{ _quantity: 6 });
    let myData = risposta.data;

    res.render('template', {content: 'liste/creditcards',data: myData});

});

module.exports = router;