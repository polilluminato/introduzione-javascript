const express = require('express');
const bodyParser = require('body-parser');
const timeout = require('connect-timeout');
const env = require('node-env-file');
const path = require('path');

//Libreria per le variabili di configurazione
env('./.env');

const app = express();

app.set('json spaces', 0);

app.use(timeout('60s'));
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({extended: true,limit: '50mb'}));
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

//Aggiungo la gestione di ejs per le viste
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


//Preparo un array di router che poi verranno utilizzati per le chiamate
var routers = []
    routers.push({path:"/browser",file:('./routes/browser')});

for(var i in routers){
    var req = require(routers[i].file);
    app.use(routers[i].path, req);
}


//Avvio l'applicazione sulla porta definita nel file .env
const port = process.env.SERVER_PORT;
app.listen(port, () => {
  console.log(`Test Project live on port ${port}`);
});