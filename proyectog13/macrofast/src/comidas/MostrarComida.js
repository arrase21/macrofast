import axios from 'axios'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

const URL = 'http://localhots:5000/api/comida'
const CompMostrarComida = () => {
	const [comida, setComida] = useState([])
	useEffect(() => {
		getComida()
	}, [])

  //
	const getComida = async () => {
		const result = await axios.get(URL)
		setComida(result.data)
	}

  //
  const eliminarComdida = async (id) => {
    await axios.delete(`${ URL }${ id }`)
    getComida()
  }

}
