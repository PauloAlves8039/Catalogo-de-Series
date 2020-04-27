/**
 * @file: app.js
 * @author: Paulo Alves
 * @description: responsável pelas configurações do servidor no backend.
 * @version 1.0.1(27/04/2020)
 */

import express from 'express'
import morgan from'morgan'
import cors from 'cors'
import path from 'path'
import mongoose from 'mongoose'

const app = express()

/**
 * @param {Mongoose} uri - define o local do banco de dados a ser utilizado.
 */
const uri = 'mongodb://localhost:27017/catalogo-series'

/**
 * @param {Mongoose} options - define as opções de configurações do banco de dados.
 */
const options = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
}

/**
 * @function connect - responsável pela conexão com o banco de dados.
 */
mongoose.connect(uri, options).then(
    () => { console.log('Conectando ao banco de dados!') },
    err => { console.log(err) }
)

app.use(morgan('tiny'))
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/api', require('./routes/serie'))

/**
 * @param {connect-history-api-fallback} history - Responsável por atribuir um histórico de simulação de rotas para o Vue.js.
 */
const history = require('connect-history-api-fallback')
app.use(history())
app.use(express.static(path.join(__dirname, 'public')))

/**
 * @description: Atribuindo automaticamente uma porta na execução do servirdor, caso outras portas estejam em uso será utilizada a porta 3000. 
 */
app.set('port', process.env.PORT || 3000)
app.listen(app.set('port'), () => {
    console.log('Executando servidor na porta: ' + app.get('port'))    
})