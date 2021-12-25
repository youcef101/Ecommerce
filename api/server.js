import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import authRouter from './routes/auth.js'
import userRouter from './routes/user.js'
import productRouter from './routes/product.js'
import orderRouter from './routes/order.js'
import cartRouter from './routes/cart.js'

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

app.use('/api/auth', authRouter)
app.use('/api/user', userRouter)
app.use('/api/product', productRouter)
app.use('/api/order', orderRouter)
app.use('/api/cart', cartRouter)

//Listen
app.listen(port, () => {
    console.log(`listen on localhost:${port}`)
})