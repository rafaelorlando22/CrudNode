let express = require('express');
let router = express.Router();

let mongoose = require('./../config/conexion');
let Producto = require('./../models/producto');


/* GET home page. */
router.get('/', (req, res, next) => {
  Producto.find((err, productos) => {
    //console.log(personas);
    if (err) throw err;
    res.render('index', { productos: productos });
  });
});

router.get('/producto/nuevo', (req, res, next) => {
  res.render('productoForm', {});
});

router.get('/producto/modificar/:id', (req, res, next) => {
  let idProducto = req.params.id;  
  Persona.findOne({_id: idProducto }, (err, producto) => {
    //console.log(persona);
    if (err) throw err;
    res.render('productoForm', { producto: producto });
  });
});

router.get('/producto/eliminar/:id', (req, res, next) => {
  let idProducto = req.params.id;

  Persona.remove({_id: idProducto }, (err) => {
    if (err) throw err;
    //o llamar nuevamente a find() y res.render();
    res.redirect('/');
  });
});

module.exports = router;
