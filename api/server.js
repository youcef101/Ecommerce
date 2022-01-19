import express from 'express'
import dotenv from 'dotenv'
import Cors from 'cors'
import authRouter from './routes/auth.js'
import userRouter from './routes/user.js'
import productRouter from './routes/product.js'
import orderRouter from './routes/order.js'
import cartRouter from './routes/cart.js'
import tokenRouter from './routes/token.js'
import categoryRouter from './routes/category.js'
import stripeRouter from './routes/stripe.js'
import mongoose from 'mongoose'
import { upload } from './utils/upload.js'


//env config
dotenv.config()

//app config
const app = express()
const port = process.env.PORT || 8001

//middlewares
app.use(express.json())
app.use(Cors())

//DB config
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    //useCreateIndex: true,
    useUnifiedTopology: true,
    //useFindAndModify: true,

})
    .then(console.log('connected to mongoDB !!!'))
    .catch(err => console.log(err));

//API endpoints
app.get('/', (req, res) => {
    res.status(200).send('hello from server !!!')
})

app.use('/api/auth', authRouter)
app.use('/api/user', userRouter)
app.use('/api/product', productRouter)
app.use('/api/order', orderRouter)
app.use('/api/cart', cartRouter)
app.use('/api/token', tokenRouter)
app.use('/api/category', categoryRouter)
app.use('/api/checkout', stripeRouter)
//public image for upload
app.use('/public', express.static('public'));

app.post('/api/upload', upload, (req, res) => {
    res.status(200).send('file upload')
})
//Listen
app.listen(port, () => {
    console.log(`listen on localhost:${port}`)
})