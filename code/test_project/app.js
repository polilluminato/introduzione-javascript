const express = require('express');
const bodyParser = require('body-parser');
const timeout = require('connect-timeout');
const env = require('node-env-file');
const path = require('path');

//Libreria per la variabile di configurazione
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

/*Router per le api*/
var routers = []
    routers.push({path:"/browser",file:('./routes/browser')});

for(var i in routers){
    var req = require(routers[i].file);
    app.use(routers[i].path, req);
}
/*Router per le api*/


//Avvio l'applicazione
const port = process.env.SERVER_PORT;
app.listen(port, () => {
  console.log('We are live on ' + port);
});