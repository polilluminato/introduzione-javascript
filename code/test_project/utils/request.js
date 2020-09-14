const axios = require('axios');
axios.defaults.baseURL = 'https://fakerapi.it/api/v1';
axios.defaults.responseType = 'json';
axios.defaults.timeout = 1000;

//Funzione di "interfaccia" tra la mia applicazione e il servizio esterno di 
//  Faker: https://fakerapi.it/en
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