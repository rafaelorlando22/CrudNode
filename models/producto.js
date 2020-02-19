let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let productoSchema = new Schema({
    id: {type: String},
    nombre: {type: String},
    descripcion: {type: String},
    precio: {type: Number, min: 0}
},{versionKey: false });

let Producto = mongoose.model('Productos', productoSchema); //EN MONGO DE PONE EN PLURAR

module.exports = Producto;