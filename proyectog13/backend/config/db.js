const mongoose = require('mongoose');
require('dotenv').config();
const conectarDB = () => {
	//conection mongo
	mongoose
		.connect(process.env.MONGO_URL)
		.then(() => console.log('Conexion establecida a mongo'))
		.catch((err) => console.error(err));
}

module.exports = conectarDB;
