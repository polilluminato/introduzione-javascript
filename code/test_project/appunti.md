
# routes -> browser.js

const utils = require('../utils/request');

router.get('/randomaddresses', async (req,res,next)=>{

    let risposta = await utils.getData('addresses',{_quantity:10});
    let myData = risposta.data;

    console.log(myData);
    res.render('template', {content: 'liste/addresses',data: myData});

});

router.get('/randomcreditcard', async (req,res,next)=>{

    let risposta = await utils.getData('credit_cards',{_quantity:10});
    let myData = risposta.data;

    console.log(myData);
    res.render('template');

});


# utils->request.js

exports.getData = (url,number)=>{
    
    return new Promise((resolve,reject)=>{
    
        axios.get(`/${url}?_quantity=${number}`)
            .then(function (response) {
                resolve(response.data);
            })
            .catch(function (error) {
                reject(error);
            })
            .then(function () {
                console.log('Chiamata terminata')
            });
    });
}

exports.getData = (url,options) => {

    const keys = Object.keys(options);
    const values = Object.values(options);
    
    let arrayOptions = [];
    for( let i = 0 ; i < keys.length ; i++ ){
        arrayOptions.push(`${keys[i]}=${values[i]}`);    
    }
    let stringOptions = arrayOptions.join('&');

    return new Promise((resolve,reject)=>{
        
        axios.get(`/${url}?${stringOptions}`)
            .then(function (response) {
                resolve(response.data);
            })
            .catch(function (error) {
                reject(error);
            })
            .then(function () {
                console.log('Chiamata terminata')
            }); 
    });
}


# routes->browser.js

router.get('/randomcreditcard', async (req,res,next)=>{

    let risposta = await utils.getData('credit_cards',{_quantity:10});
    let myData = risposta.data;

    console.log(myData);
    res.render('template');

});


# view->template.ejs

<%- include(content); %>

res.render('template', {content: 'liste/addresses',data: myData});