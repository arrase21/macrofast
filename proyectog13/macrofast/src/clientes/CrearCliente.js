import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const URL = 'http://localhost:5000/api/clientes'
const CompAgregarClientes = () => {
	const [nombres, setNombres] = useState('')
	const [apellidos, setApellidos] = useState('')
	const [documento, setDocumento] = useState('')
	const [correo, setCorreo] = useState('')
	const [telefono, setTelefono] = useState('')
	const [direccion, setDireccion] = useState('')
	const navigate = useNavigate()

	const guardarCliente = async (g) => {
		g.preventDefault()
		await axios.post(URL, {
			nombres: nombres,
			apellidos: apellidos,
			documento: documento,
			correo: correo,
			telefono: telefono,
			direccion: direccion,
		})
		navigate('/')
	}
	return (
		<div>
			<h4> Formulario guardar cliente </h4>
			<form onSubmit={guardarCliente}>
				<div className='mb-3'>
					<label className='form-label'> Nombre Cliente </label>
					<input
						value={nombres}
						onChange={(g) => setNombres(g.target.value)}
						type='text'
						className='form-control'
					/>
				</div>
				<div className='mb-3'>
					<label className='form-label'> Apellidos Cliente </label>
					<input
						value={apellidos}
						onChange={(g) => setApellidos(g.target.value)}
						type='text'
						className='form-control'
					/>
				</div>

				<div className='mb-3'>
					<label className='form-label'> Documento Cliente </label>
					<input
						value={documento}
						onChange={(g) => setDocumento(g.target.value)}
						type='number'
						className='form-control'
					/>
				</div>

				<div className='mb-3'>
          <label className='form-label'> Correo Cliente </label>
					<input
						value={correo}
						onChange={(g) => setCorreo(g.target.value)}
						type='text'
						className='form-control'
					/>
				</div>

				<div className='mb-3'>
					<label className='form-label'> Telefono Cliente </label>
					<input
						value={telefono}
						onChange={(g) => setTelefono(g.target.value)}
						type='number'
						className='form-control'
					/>
				</div>

				<div className='mb-3'>
					<label className='form-label'> Direccion Cliente </label>
					<input
						value={direccion}
						onChange={(g) => setDireccion(g.target.value)}
						type='text'
						className='form-control'
					/>
				</div>

          <button type='submit' className='btn btn-primary'> Guardar </button>

			</form>
		</div>
	)
}

export default CompAgregarClientes;
