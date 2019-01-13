
function database(req, res){
   res.render('database', {
     
   });
}
exports.get_database = function(req, res){
   database(req, res);
}

exports.post_database = function(req, res){
    database(req, res);
    console.log('corriendo base de datos');
 }