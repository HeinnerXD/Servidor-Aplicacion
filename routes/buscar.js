var lista = new Array();
function buscar_producto(req, res){
   
   res.render('buscar_producto', {
      lista: lista
   });
}
exports.get_producto = function(req, res){
   buscar_producto(req, res);
}

exports.post_producto = function(req, res){
    buscar_producto(req, res);
    console.log('buscando producto');
 }
