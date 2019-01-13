function login(req, res){
    res.render('index', {
      
    });
 }
 exports.get_login = function(req, res){
    login(req, res);
 }
 
 exports.post_login = function(req, res){
     login(req, res);
     console.log('corriendo login');
  }