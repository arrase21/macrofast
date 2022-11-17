const Cliente = require('../models/Cliente');

exports.mostrarClientes = async (req, res) => {
  try {
    const clientes = await Cliente.find();
    res.json(clientes);
  }
  catch (error) {
    console.log(error)
    res.status(500).send('Error al consultar los clientes')
  }
}

exports.agregarClientes = async(req, res) => {
  try {
    let clientes;
    clientes = new Cliente(req.body)
    await clientes.save();
    res.send(clientes);
  }
  catch (error) {
    console.log(error)
    res.status(500).send('error al insertar los clientes')
  }
}

exports.mostrarCliente = async(req, res) => {

  try {
    let clientes = await Cliente.findById(req.params.id);

    if(!clientes) {
      res.status(400).json({msg: 'No se encuentra el cliente'})
    }
    res.send(clientes);
  } 
  catch (error) {
    console.log(error)
    res.status(500).send('error al insertar los clientes')
  }
}

exports.eliminarCliente = async(req,res) => {
  try {
    let clientes = await Cliente.findById(req.params.id);
    if (!clientes){
      res.status(404).json({msg: 'El cliente no existe'})
    }
    await Cliente.findOneAndDelete({_id: req.params.id});
    res.json({msg: 'El cliente se elimino'})
  } 
  catch (error) {
    console.log(error)
    res.status(500).send('error al insertar los clientes')
  }
}

exports.actualizarClientes = async (req, res) => {
  try {
    const { nombres, apellidos, documento, correo, telefono, direccion } = req.body;
    let clientes = await Cliente.findById(req.params.id);

    if (!clientes) {
      res.status(400).json({ msg: 'EL cliente no existe' })
    }

    clientes.nombres = nombres;
    clientes.apellidos = apellidos;
    clientes.documento = documento;
    clientes.correo = correo;
    clientes.telefono = telefono;
    clientes.direccion = direccion;

    clientes = await Cliente.findOneAndUpdate({ _id: req.params.id }, clientes, { new: true });
    res.json(clientes);
  }
  catch (error) {
    console.log(error)
    res.status(500).send('Error al consultar los clientes')
  }
}
