import * as React from 'react'
import Button from '@mui/material/Button'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import CrearComidas from './modal'

const URL = 'https://macro-api.onrender.com/alimentos/'
const CompMostrarComidas = () => {
	const [comidas, setComida] = useState([])
	useEffect(() => {
		getComidas()
	}, [])

	// Mostrar Cliente
	const getComidas = async () => {
		const res = await axios.get(URL)
		setComida(res.data)
	}

	// Eliminar Clientes
	const eliminarComidas = async (id) => {
		await axios.delete(`${URL}${id}`)
		getComidas()
	}
	return (
		<div className='container'>
			<div className='row'>
				<div className='colum'>
					<table className='table'>
						<thead className='tableTheBg'>
							<tr>
								<th>Nombre</th>
								<th>Calorias</th>
								<th>Gramos</th>
								<th>Proteinas</th>
								<th>Grasas</th>
								<th>Carbohidratos</th>
							</tr>
						</thead>
						<tbody>
							{comidas.map((comida, index) => (
								<tr key={index}>
									<td> {comida.nombres} </td>
									<td> {comida.calorias} </td>
									<td> {comida.gramos} </td>
									<td> {comida.proteinas} </td>
									<td> {comida.grasas} </td>
									<td> {comida.carbohidratos} </td>
									<td>
										<Button
											variant='contained'
											component={Link}
											to={`/comidas/editar/${comida._id}`}
											startIcon={<EditIcon />}
											color='info'
										>
											Edit
										</Button>
										<Button
											variant='contained'
											color='error'
											startIcon={<DeleteIcon />}
											onClick={() => eliminarComidas(comida._id)}
										>
											Delete
										</Button>
									</td>
								</tr>
							))}
						</tbody>
					</table>
					<div>
						<CrearComidas />
					</div>
				</div>
			</div>
		</div>
	)
}
export default CompMostrarComidas;
