const axios = require('axios');
axios.defaults.baseURL = 'https://fakerapi.it/api/v1';
axios.defaults.responseType = 'json';
axios.defaults.timeout = 1000;

//Funzione di "interfaccia" tra la mia applicazione e il servizio esterno di 
//  Faker: https://fakerapi.it/en
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