import axios from 'axios'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Button from '@mui/material/Button'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import { SaveAs } from '@mui/icons-material';
import { pink } from '@mui/material/colors';

const URL = 'https://macro-api.onrender.com/api/clientes'
const CompMostrarCliente = () => {
	const [clientes, setCliente] = useState([])
	useEffect(() => {
		getClientes()
	}, [])

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
					<table className='table'>
						<thead className='tableTheBg'>
							<tr>
								<th>Nombre</th>
								<th>Apellido</th>
								<th>Documento</th>
								<th>Correo</th>
								<th>Telefono</th>
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
										<Button
											variant='contained'
											component={Link}
											to={`/clientes/editar/${cliente._id}`}
											startIcon={<EditIcon />}
											color='info'
										>
											Edit
										</Button>
										<Button
											variant='contained'
											color='error'
											startIcon={<DeleteIcon />}
											onClick={() => eliminarClientes(cliente._id)}
										>
											Delete
										</Button>
									</td>
								</tr>
							))}
						</tbody>
					</table>
            <Button startIcon={<SaveAs />}
            component={Link}
            to={`/clientes/agregar`}
            sx={{ color: pink[900] }}
          > Agregar Usuario </Button>
				</div>
			</div>
		</div>
	)
}
export default CompMostrarCliente
