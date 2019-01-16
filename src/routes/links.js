var express = require('express');
var router = express.Router();
var search = require('../database');
var {isLoggedIn} = require('../lib/auth');

router.get('/add', isLoggedIn, (req,res) => {
    res.render('links/add');
});

router.post('/add', isLoggedIn, async (req,res) => {
    var {id, name, description, unitsavailable, price, dolarprice} =  req.body;
    var newProduct = {
        id,
        name,
        description,
        unitsavailable,
        price,
        dolarprice
    }
    await search.query('INSERT INTO sw_products set ?', [newProduct]);
    req.flash('success', 'GUARDADO satisfactoriamente');
    res.redirect('/links');
});

router.get('/', isLoggedIn, async (req, res) => {
    var products = await search.query('SELECT * FROM sw_products');
    console.log(products);
    res.render('links/list', {products});
});


router.get('/delete/:id', isLoggedIn, async (req, res) => {
    var { id } = req.params;
    await search.query('DELETE FROM sw_products WHERE id = ?', [id]);
    req.flash('success', 'ELIMINADO satisfactoriamente');
    res.redirect('/links');
});

router.get('/search', isLoggedIn, async (req, res) => {
    res.render('links/search');
}); 

router.post('/search', isLoggedIn, async (req, res) => {
    var {buscar} = req.body;
    var products = await search.query('SELECT * FROM sw_products WHERE name = ? ', [buscar]);
    console.log(products)
    res.render('links/search', {products});
});

module.exports = router;