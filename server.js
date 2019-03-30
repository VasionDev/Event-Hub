import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import user from './routes/user'
import mongoose from 'mongoose'
import config from './config/database'

const port = 4000
const app = express()

mongoose.connect(config.database, {useNewUrlParser: true})
mongoose.connection.on('connected', ()=>{
    console.log('MongoDB successfully connected on '+config.database)
})
mongoose.connection.on('error', (err)=>{
    console.log('Database not connected '+err)
})

app.use(cors())
app.use(bodyParser.json())

app.use('/api', user)

app.get('/', (req, res)=>{
    res.send('Invalid endpoint')
})

app.listen(port, ()=>{
    console.log('Express server is running on port '+port)
})