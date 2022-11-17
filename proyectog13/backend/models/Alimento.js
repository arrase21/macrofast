const mongoose = require('mongoose');

const alimentoSchema = mongoose.Schema({

  nombres: {
    type: String,
    required: true
  },
  gramos: {
    type: Number,
    required: true
  },
  calorias:{
    type: Number,
    required: true
  },
  proteinas:{
    type: Number,
    required: true
  },
  carbohidratos:{
    type: Number,
    required: true
  },
  grasas:{
    type: Number,
    required: true
  },
  
})
module.exports = mongoose.model('Alimento', alimentoSchema)
