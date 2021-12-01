//postgres
//import exprerss
//doten
//ts-init
//need types

import  express from 'express'
import postgres from './postgres'
const app = express();

//express json

app.use(express.json());
app.use(express.static('public'))

//use controllers

app.get('/', (req,res) => {
    res.send('hello world')
})

const procedureController = require('./controllers/procedure.ts')
app.use('/procedure', procedureController)
//@ts-ignore to allow postgres.connect
postgres.connect();

app.listen(process.env.PORT || 300, () => {
    console.log('listening');
    
})

