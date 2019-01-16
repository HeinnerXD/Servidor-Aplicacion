var express = require('express');

var router = express.Router(); 

router.get('/', (req,res) => {
    res.render('auth/signin');
});

module.exports = router;