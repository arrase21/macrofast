import axios from 'axios';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
// import KeepMountedModal from './modal';


const URL = 'https://macro-api.onrender.com/alimentos/'
const CompMostrarComida = () => {
	const [comidas, setComida] = useState([])
	useEffect(() => {
		getComida()
	}, []);

	// Mostrar Cliente
	const getComida = async () => {
		const res = await axios.get(URL)
		setComida(res.data);
	};

	// Eliminar Clientes
	const eliminarComida = async (id) => {
		await axios.delete(`${URL}${id}`)
		getComida()
	};

	return (
		<div className='container'>
			<div className='row'>
				<div className='colum'>
					<Link to='/agregar/comida' className='btn btn-primary mt-2 mb-2'>
						<i class='fa-sharp fa-solid fa-user-plus'></i>
					</Link>
					<table id='table' className='table'>
						<thead className='tableTheBg'>
							<tr>
								<th>Nombre</th>
								<th>Gramos</th>
								<th>Calorias</th>
								<th>Proteinas</th>
								<th>Grasas</th>
								<th>Carbohidratos</th>
							</tr>
						</thead>
						<tbody backgroundcolor='red'>
							{comidas.map((comida, index) => (
								<tr key={index}>
									<td> {comida.nombres} </td>
									<td> {comida.gramos} </td>
									<td> {comida.calorias} </td>
									<td> {comida.proteinas} </td>
									<td> {comida.grasas} </td>
									<td> {comida.carbohidratos} </td>
									<td>
										<Link to={`/editar/${comida._id}`} className='btn btn-info'>
											{' '}
											<i class='fa-sharp fa-solid fa-user-pen'></i>{' '}
										</Link>
										<button
											onClick={() => eliminarComida(comida._id)}
											className='btn btn-danger'
										>
											{' '}
											<i class='fa-sharp fa-solid fa-user-minus'></i>{' '}
										</button>
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

export default CompMostrarComida;
