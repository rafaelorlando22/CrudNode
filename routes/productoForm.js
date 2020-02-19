let express = require('express');
let router = express.Router();

let mongoose = require('./../config/conexion');
let Producto = require('./../models/producto');

router.post('/producto/operar', (req, res, next) => {
  console.log(req.body);  

  if (req.body._id === "") {
    let prod = new Producto({
      nombre: req.body.nombre,
      descripcion: req.body.descripcion,
      precio: req.body.precio
    });
    
    prod.save();
  } else {    
    //console.log(req.body._id);
    Producto.findByIdAndUpdate(req.body._id, { $set: req.body }, { new: true }, (err, model) => {
      if (err) throw err;
    });
  }
  res.redirect('/');
});

module.exports = router;
