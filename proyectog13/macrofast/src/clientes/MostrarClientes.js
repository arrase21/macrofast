import {  useTheme } from "@mui/material";
import axios from 'axios'
import { tokens } from "../theme";
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

const URL = 'http://localhost:5000/api/clientes'
const CompMostrarCliente = () => {
  const [clientes, setCliente] = useState([])
  useEffect(() => {
    getClientes()
  }, [])

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  // Mostrar Cliente
  const getClientes = async () => {
    const res = await axios.get(URL)
    setCliente(res.data)
  }

  // Eliminar Clientes
  const eliminarClientes = async (id) => {
    await axios.delete(`${URL}${id}`)
    getClientes()
  }
  return (
    <div className='container'>
      <div className='row'>
        <div className='colum'>
          <Link to='/agregar' className='btn btn-primary mt-2 mb-2'>
            <i class='fa-sharp fa-solid fa-user-plus'></i>
          </Link>
          <table className='table'>
            <thead className='tableTheBg'>
              <tr>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Documento</th>
                <th>Correo</th>
                <th>Direccion</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {clientes.map((cliente, index) => ( 
                <tr key={index}>
                  <td> {cliente.nombres} </td>
                  <td> {cliente.apellidos} </td>
                  <td> {cliente.documento} </td>
                  <td> {cliente.correo} </td>
                  <td> {cliente.telefono} </td>
                  <td> {cliente.direccion} </td>
                  <td>
                    <Link to={`/editar/${cliente._id}`} className='btn btn-info'> <i class="fa-sharp fa-solid fa-user-pen"></i> </Link>
                    <button onClick={() => eliminarClientes(cliente._id)} className='btn btn-danger'> <i class="fa-sharp fa-solid fa-user-minus"></i> </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
export default CompMostrarCliente;
