//DEBO INSTALAR MONGOOSE CON npm install mongoose --save
let mongoose = require('mongoose');

//mongoose.connect('mongodb://localhost:27017/test', {useMongoClient: true});
mongoose.connect('mongodb://localhost:27017/test', {useUnifiedTopology: true, useNewUrlParser: true});

module.exports = mongoose;