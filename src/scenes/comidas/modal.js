import React from 'react'
import Box from '@mui/material/Box'
import { pink } from '@mui/material/colors'
import Modal from '@mui/material/Modal'
import Button from '@mui/material/Button'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { TextField } from '@mui/material'
import useMediaQuery from '@mui/material/useMediaQuery'
import { SaveAs } from '@mui/icons-material'

const URL = 'https://macro-api.onrender.com/alimentos/'
const style = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 900,
	border: '2px solid #000',
	boxShadow: 24,
	bgcolor: 'background.paper',
	p: 4,
}

export default function CrearComidas() {
	const [open, setOpen] = React.useState(false)
	const handleOpen = () => setOpen(true)
	const handleClose = () => setOpen(false)

	const isNonMobile = useMediaQuery('(min-width:600px)')
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
		navigate('#')
	}
	function refreshPage() {
		window.location.reload(true)
	}

	return (
		<div>
			<Button
				onClick={handleOpen}
				color='primary'
				startIcon={<SaveAs />}
				sx={{ color: pink[900] }}
				border='solid'
			>
				Agregar
			</Button>
			<Modal keepMounted open={open} onClose={handleClose}>
				<Box sx={style}>
					<div>
						<form onSubmit={guardarComida}>
							<Box
								display='grid'
								gap='30px'
								gridTemplateColums='repeat(4, minmax(0, 1fr))'
								sx={{
									'& > div': { gridColumn: isNonMobile ? undefined : 'span 5' },
								}}
							>
								<TextField
									fullWidth
									variant='filled'
									label='Alimento'
									error={nombres.length === 0}
									value={nombres}
									onChange={(g) => setNombres(g.target.value)}
									type='text'
									sx={{ gridColumn: 'span 6' }}
								/>
								<TextField
									fullWidth
									variant='filled'
									error={calorias.length === 0}
									value={calorias}
									label='Calorias'
									onChange={(g) => setCalorias(g.target.value)}
									type='number'
									sx={{ gridColumn: 'span 1' }}
								/>

								<TextField
									fullWidth
									variant='filled'
									error={gramos.length === 0}
									value={gramos}
									label='Gramos'
									onChange={(g) => setGramos(g.target.value)}
									type='number'
									sx={{ gridColumn: 'span 1' }}
								/>

								<TextField
									fullWidth
									variant='filled'
									error={proteinas.length === 0}
									value={proteinas}
									label='Proteinas'
									onChange={(g) => setProteinas(g.target.value)}
									type='number'
									sx={{ gridColumn: 'span 1' }}
								/>

								<TextField
									fullWidth
									variant='filled'
									error={grasas.length === 0}
									value={grasas}
									label='Grasas'
									onChange={(g) => setGrasas(g.target.value)}
									type='number'
									sx={{ gridColumn: 'span 1' }}
								/>

								<TextField
									fullWidth
									variant='filled'
									error={grasas.length === 0}
									value={carbohidratos}
									label='Carbohidratos'
									onChange={(g) => setCarbohidratos(g.target.value)}
									type='number'
									sx={{ gridColumn: 'span 1' }}
								/>

								<Button
									type='submit'
									variant='contained'
									color='secondary'
									startIcon={<SaveAs />}
									onClick={refreshPage}
								>
									GUARDAR
								</Button>
							</Box>
						</form>
					</div>
				</Box>
			</Modal>
		</div>
	)
}
