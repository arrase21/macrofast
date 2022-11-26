import logo from './logo.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Topbar from './scenes/global/Topbar'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { ColorModeContext, useMode } from './theme'

import CompMostrarCliente from './clientes/MostrarClientes'
import CompAgregarClientes from './clientes/CrearCliente'

function App() {
	const [theme, colorMode] = useMode()
	return (
		<ColorModeContext.Provider value={colorMode}>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<div className='App'>
					<header className='App-header'>
						<img src={logo} className='App-logo' alt='logo' />
					</header>
					<Topbar />
					<BrowserRouter>
						<Routes>
							<Route path='/' element={<CompMostrarCliente />} />
							<Route path='/agregar' element={<CompAgregarClientes />} />
						</Routes>
					</BrowserRouter>
				</div>
			</ThemeProvider>
		</ColorModeContext.Provider>
	)
}

export default App;
