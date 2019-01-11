var express = require('express');
var routes = require('./routes');
var productos = require('./routes/productos');
var search = require('./routes/buscar')

var bodyParser = require('body-parser');


var http = require('http');
var path = require('path');

var Request = require("request");

var app = express();

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use(bodyParser.urlencoded({
    extended: true
  }));
  app.use(bodyParser.json());
/*
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));

app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

/*if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}*/
 
app.get('/', function(req, res){
  res.send('Servidor Web');
});

app.get('/buscar_producto', search.get_producto);
app.post('/buscar_producto', search.post_producto);

app.get('/agregar_producto', productos.get_agregar_producto);
app.post('/agregar_producto', productos.post_agregar_producto);

Request.get("https://api.exchangeratesapi.io", (error, response, body) => {
    if(error) {
        return console.dir(error);
    }
    console.dir(JSON.parse(body));
});

/*http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});*/

// escuchar 
app.listen(9000);	 
 
console.log("Servidor Express escuchando en modo %s", app.settings.env);