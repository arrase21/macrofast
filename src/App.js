import { useState } from 'react'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Sidebar from './scenes/global/Sidebar'
import Topbar from './scenes/global/Topbar'

import CompMostrarCliente from './scenes/clientes/MostrarClientes'
import CompAgregarClientes from './scenes/clientes/CrearCliente'
import CompEditarClientes from './scenes/clientes/ModificarClientes.js'
import CompMostrarComidas from './scenes/comidas/MostrarComidas'
import CompEditarComidas from './scenes/comidas/ModificarComidas.js'

import ContactUs from './scenes/contact/contact'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { ColorModeContext, useMode } from './theme'
import Calendar from './scenes/calendar/calendar'

function App() {

    fetch("http://localhost:3005")
        .then(res => res.text())
        .then(res => this.setState({ apiResponse: res }));

	const [theme, colorMode] = useMode()
	const [isSidebar, setIsSidebar] = useState(true)
	return (
		<ColorModeContext.Provider value={colorMode}>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<div className='app'>
					<header className='App-header'></header>
					<BrowserRouter>
						<Sidebar isSidebar={isSidebar} />
						<main className='content'>
							<Topbar setIsSidebar={setIsSidebar} />
							<Routes>
								<Route path='/clientes/' element={<CompMostrarCliente />} />
								<Route path='/clientes/agregar' element={<CompAgregarClientes />}/>
								<Route path='/clientes/editar/:id' element={<CompEditarClientes />}/>
								<Route path='/comida/' element={<CompMostrarComidas />} />
                <Route path='/comida/editar/:id' element={<CompEditarComidas />}/>
								<Route path='/calendar/' element={<Calendar />} />
								<Route path='/contacto/' element={<ContactUs />} />
							</Routes>
						</main>
					</BrowserRouter>
				</div>
			</ThemeProvider>
		</ColorModeContext.Provider>
	)
}
export default App
