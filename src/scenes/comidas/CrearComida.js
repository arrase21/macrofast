import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'



const URL = 'https://macro-api.onrender.com/alimentos/'
const CompAgregarComida = () => {
	const [nombres, setNombres] = useState('')
	const [calorias, setCalorias] = useState('')
	const [gramos, setGramos] = useState('')
	const [proteinas, setProteinas] = useState('')
	const [grasas, setGrasas] = useState('')
	const [carbohidratos, setCarbohidratos] = useState('')
	const navigate = useNavigate()

	const guardarComida = async (g) => {
		g.preventDefault()
		await axios.post(URL, {
			nombres: nombres,
			calorias: calorias,
			gramos: gramos,
			proteinas: proteinas,
			grasas: grasas,
			carbohidratos: carbohidratos,
		})
		navigate('/')
	}

	return (
		<div>
			<h4>  </h4>
			<form onSubmit={guardarComida}>
				<div className='mb-3'>
					<label className='form-label'> Comida </label>
					<input
						value={nombres}
						onChange={(g) => setNombres(g.target.value)}
						type='text'
						className='form-control'
					/>
				</div>
				<div className='mb-3'>
					<label className='form-label'> Calorias </label>
					<input
						value={calorias}
						onChange={(g) => setCalorias(g.target.value)}
						type='number'
						className='form-control'
					/>
				</div>

				<div className='mb-3'>
					<label className='form-label'>  Gramos </label>
					<input
						value={gramos}
						onChange={(g) => setGramos(g.target.value)}
						type='number'
						className='form-control'
					/>
				</div>

				<div className='mb-3'>
					<label className='form-label'> Proteinas </label>
					<input
						value={proteinas}
						onChange={(g) => setProteinas(g.target.value)}
						type='number'
						className='form-control'
					/>
				</div>

				<div className='mb-3'>
					<label className='form-label'> Grasas </label>
					<input
						value={grasas}
						onChange={(g) => setGrasas(g.target.value)}
						type='number'
						className='form-control'
					/>
				</div>

				<div className='mb-3'>
					<label className='form-label'> Carbohidratos </label>
					<input
						value={carbohidratos}
						onChange={(g) => setCarbohidratos(g.target.value)}
						type='number'
						className='form-control'
					/>
				</div>

				<button type='submit' className='btn btn-primary'>
					{' '}
					Guardar{' '}
				</button>
			</form>
		</div>
	)
}

export default CompAgregarComida;
