import { Box, Button, TextField } from '@mui/material'
import useMediaQuery from '@mui/material/useMediaQuery'
import Header from '../../components/Header'
import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const URL = 'https://macro-api.onrender.com/clientes'
const Form = () => {
	const isNonMobile = useMediaQuery('(min-width:600px)')
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
		navigate('/clientes/')
	}

	return (
		<Box m='20px'>
			<Header title='CREAR USUARIO' subtitle='Crear Nuevo Perfil de Usuario' />
			<form onSubmit={guardarCliente}>
				<Box
					display='grid'
					gap='30px'
					gridTemplateColumns='repeat(4, minmax(0, 1fr))'
					sx={{
						'& > div': { gridColumn: isNonMobile ? undefined : 'span 4' },
					}}
				>
					<TextField
						fullWidth
						variant='filled'
						type='text'
						label='Nombre'
						value={nombres}
						onChange={(g) => setNombres(g.target.value)}
						name='nombres'
						sx={{ gridColumn: 'span 2' }}
					/>
					<TextField
						fullWidth
						variant='filled'
						type='text'
						label='Apellidos'
						onChange={(g) => setApellidos(g.target.value)}
						value={apellidos}
						name='apellidos'
						sx={{ gridColumn: 'span 2' }}
					/>
					<TextField
						fullWidth
						variant='filled'
						type='number'
						label='Documento'
						onChange={(g) => setDocumento(g.target.value)}
						value={documento}
						name='documento'
						sx={{ gridColumn: 'span 4' }}
					/>
					<TextField
						fullWidth
						variant='filled'
						type='text'
						label='Correo'
						onChange={(g) => setCorreo(g.target.value)}
						value={correo}
						name='correo'
						sx={{ gridColumn: 'span 4' }}
					/>
					<TextField
						fullWidth
						variant='filled'
						type='number'
						label='Telefono'
						onChange={(g) => setTelefono(g.target.value)}
						value={telefono}
						name='telefono'
						sx={{ gridColumn: 'span 4' }}
					/>
					<TextField
						fullWidth
						variant='filled'
						type='text'
						label='Direccion'
						onChange={(g) => setDireccion(g.target.value)}
						value={direccion}
						name='Direccion'
						sx={{ gridColumn: 'span 4' }}
					/>
				</Box>
				<Box display='flex' justifyContent='end' mt='20px'>
					<Button type='submit' color='secondary' variant='contained'>
						Create New User
					</Button>
				</Box>
			</form>
		</Box>
	)
}

export default Form
