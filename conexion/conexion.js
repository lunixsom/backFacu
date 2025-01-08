const mongoose = require('mongoose');
require('dotenv').config();

const conexion = async (URL) => {
    try {
        await mongoose.connect(URL);
        console.log('Conexión a la base de datos exitosa');
    } catch (error) {
        console.log('Error en la conexión a la base de datos:', error);
    }
}

module.exports = conexion;