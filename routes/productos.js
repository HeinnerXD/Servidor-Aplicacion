var lista = new Array();
function agregar_producto(req, res){
   res.render('agregar_producto', {
      lista: lista
   });
}
exports.get_agregar_producto = function(req, res){
   agregar_producto(req, res);
}
exports.post_agregar_producto = function(req, res){
   var codigo = req.body.codigo;
   var nombre = req.body.nombre;
   var descripcion = req.body.descripcion;
   var unidades_disponibles = req.body.unidades_disponibles;
   var precio = req.body.precio;
   var precio_dolares = req.body.precio_dolares;
   lista.push({
      codigo: codigo,
      nombre: nombre,
      descripcion: descripcion,
      unidades_disponibles: unidades_disponibles,
      precio: precio,
      precio_dolares: precio_dolares
   })
   agregar_producto(req, res);
}
/*
exports.get_mensaje = function(req, res){
   var indice = req.params.indice;
   var mensaje = (lista[indice] != undefined) ? lista[indice] : null;
   res.render('mensajes/mensaje', {
      mensaje: mensaje
   });
}*/