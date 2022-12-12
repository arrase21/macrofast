import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

const URL = 'https://macro-api.onrender.com/api/alimentos/';
const CompEditarComidas = () => {
	const [nombres, setNombres] = useState('')
	const [gramos, setGramos] = useState('')
	const [calorias, setCalorias] = useState('')
	const [proteinas, setProteinas] = useState('')
	const [carbohidratos, setCarbohidratos] = useState('')
	const [grasas, setGrasas] = useState('')
	const navigate = useNavigate()
	const { id } = useParams()

	const Actualizar = async (a) => {
		a.preventDefault()
		await axios.put(`${URL}${id}`, {
			nombres: nombres,
			gramos: gramos,
			calorias: calorias,
			proteinas: proteinas,
			carbohidratos: carbohidratos,
			grasas: grasas,
		});
		navigate('/comidas/');
	}

	useEffect(() => {
		getComidaById()
	}, []);

	const getComidaById = async () => {
		const resul = await axios.get(`${URL}${id}`)
		setNombres(resul.data.nombres)
		setGramos(resul.data.gramos)
		setCalorias(resul.data.calorias)
		setProteinas(resul.data.proteinas)
		setCarbohidratos(resul.data.carbohidratos)
		setGrasas(resul.data.grasas)
	}

	return (
		<div>
			<h4>ddd</h4>
			<form onSubmit={Actualizar}>
				<div className='mb-3'>
					<label className='form-label'> Nombre</label>
					<input
						value={nombres}
						onChange={(a) => setNombres(a.target.value)}
						type='text'
						className='form-control'
					/>
				</div>
				<div className='mb-3'>
					<label className='form-label'> Gramos </label>
					<input
						value={gramos}
						onChange={(a) => setGramos(a.target.value)}
						type='number'
						className='form-control'
					/>
				</div>

				<div className='mb-3'>
					<label className='form-label'> Calorias</label>
					<input
						value={calorias}
						onChange={(a) => setCalorias(a.target.value)}
						type='text'
						className='form-control'
					/>
				</div>
				<div className='mb-3'>
					<label className='form-label'> Proteinas </label>
					<input
						value={proteinas}
						onChange={(a) => setProteinas(a.target.value)}
						type='number'
						className='form-control'
					/>
				</div>
				<div className='mb-3'>
					<label className='form-label'> Carbohidratos </label>
					<input
						value={carbohidratos}
						onChange={(a) => setCarbohidratos(a.target.value)}
						type='text'
						className='form-control'
					/>
				</div>
				<div className='mb-3'>
					<label className='form-label'> Grasas </label>
					<input
						value={grasas}
						onChange={(a) => setGrasas(a.target.value)}
						type='text'
						className='form-control'
					/>
				</div>

				<button type='submit' className='btn btn-primary'>
					{' '}
					Sync{' '}
				</button>
			</form>
		</div>
	)
}

export default CompEditarComidas;
