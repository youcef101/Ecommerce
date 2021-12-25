import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'

//env config
dotenv.config()

//app config
const app = express()
const port = process.env.PORT || 8001

//middlewares
app.use(express.json())
app.use(cors())

//API endpoints
app.get('/', (req, res) => {
    res.status(200).send('hello from server !!!')
})

//Listen
app.listen(port, () => {
    console.log(`listen on localhost:${port}`)
})