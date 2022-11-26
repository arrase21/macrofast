import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

const URL = 'http://localhost:5000/api/clientes/';

const CompEditarClientes = () => {
  const [nombres, setNombres] = useState('')
  const [apellidos, setApellidos] = useState('')
  const [documento, setDocumento] = useState('')
  const [correo, setCorreo] = useState('')
  const [telefono, setTelefono] = useState('')
  const [direccion, setDireccion] = useState('')
  const {id}= useParams()

  const Actualizar = async (a) => {
    a.preventDefault()
    await axios.put(`${URL}${cliente_id}`,{
      nombres:nombres,
      apellidos:apellidos,
      documento:documento,
      correo:correo,
      telefono:telefono,
      direccion:direccion,
    })
    Navigate('/clientes')
  }
}

export default CompEditarClientes;
