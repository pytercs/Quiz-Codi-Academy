import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import { config } from 'dotenv';
import router from './router/route.js';


/*Conexão com o banco de dados*/
import connect from './database/conn.js';

const app = express ()


/*Middlewares*/
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json())
config();

/*Porta usada */
const port = process.env.PORT || 8080;

/*Rotas*/
app.use('/api', router) /* apis*/

app.get('/', (req, res) => {
    try {
        res.json("Get Request")
    } catch (error) {
        res.json(error)
    }
})

/*Iniciando o servidor somente quando tem uma conexão válida*/
connect().then(() =>{
    try {
        app.listen(port, () => {
            console.log(`Servidor conectado ao http://localhost:${port}`)
        })
    } catch (error) {
        console.log("Incapaz de conectar com o servidor");
    }
}).catch(error => {
    console.log("Conexão inválida com o banco de dados!");
})

