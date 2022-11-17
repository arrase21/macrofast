const Alimento = require('../models/Alimento');

exports.mostrarAlimentos = async (req, res) => {
  try {
    const alimentos = await Alimento.find();
    res.json(alimentos);
  }
  catch (error) {
    console.log(error)
    res.status(500).send('Error al consultar el alimento')
  }
}

exports.agregarAlimentos = async(req, res) => {
  try {
    let alimentos = new Alimento (req.body)
    await alimentos.save();
    res.send(alimentos);
  }
  catch(error){
    console.log(error)
    res.status(500).send('error al insertar el alimento')
  }
}

exports.mostrarAlimento = async (req, res) => {
  try {
    let alimentos = await Alimento.findById(req.params.id);
    if(!alimentos){
      res.status(400).json({msg: 'No se encuentra el alimento'})
    }
    res.send(alimentos);
  } 
  catch (error) {
    console.log(error)
    res.status(500).send('error al insertar el alimento')
  }
}

exports.eliminarAlimento = async (req, res) =>{
  try {
    let alimentos = await Alimento.findById(req.params.id);
    if(!alimentos){
      res.status(404).json({msg: 'El alimento no existe'})
    }
    await Alimento.findOneAndDelete({_id: req.params.id});
    res.json({msg: 'El alimento se elimino'})
  } 
  catch (error) {
    console.log(error)
    res.status(500).send('error al insertar el alimento')
  }
}

exports.actualizarAlimento = async (req, res) => {
  try {
    const { nombres, gramos, calorias, proteinas, carbohidratos, grasas} = req.body;
    let alimentos = await Alimento.findById(req.params.id);

    if (!alimentos) {
      res.status(400).json({ msg: 'EL alimento no existe' })
    }

    alimentos.nombres = nombres;
    alimentos.gramos = gramos;
    alimentos.calorias = calorias;
    alimentos.proteinas = proteinas;
    alimentos.carbohidratos = carbohidratos;
    alimentos.grasas = grasas;

    alimentos = await Alimento.findOneAndUpdate({ _id: req.params.id }, alimentos, { new: true });
    res.json(alimentos);
  }
  catch (error) {
    console.log(error)
    res.status(500).send('Error al consultar los alimentos')
  }
}
