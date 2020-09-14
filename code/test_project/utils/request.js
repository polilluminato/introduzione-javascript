const axios = require('axios');
axios.defaults.baseURL = 'https://fakerapi.it/api/v1'; //https://fakerapi.it/en
axios.defaults.responseType = 'json';
axios.defaults.timeout = 1000;


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