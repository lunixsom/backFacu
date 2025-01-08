

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const morgan = require('morgan');
const cors = require('cors');

const dotenv = require('dotenv');
dotenv.config();

const routerUser = require('./router/userRouter');


const app = express();


const PORT = process.env.PORT;
const MONGO_LOCAL = process.env.MONGO_LOCAL;
const MONGO_ATLAS = process.env.MONGO_ATLAS;

const conexion = require('./conexion/conexion');


app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(morgan('dev')); 
app.use(cors());

app.use('/user' , routerUser);

conexion(MONGO_ATLAS);



app.get("/", (req, res) => {
    res.send(`<h1>Bienvenido a la Api Rest</h1>`);
});


const server = app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto http://localhost:${PORT}`);
});

server.on('error', (error) => {
    console.log(`Error en el servidor: ${error}`)
});



