var express = require('express');
//var routes = require('./routes');
var productos = require('./routes/productos');


var http = require('http');
var path = require('path');

var app = express();

app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');
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
  res.send('SERVIDOR WEB');
});
//app.get('/agregar_producto', productos.get);

/*http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});*/

// escuchar 
app.listen(9000);	 
 
console.log("Servidor Express escuchando en modo %s", app.settings.env);