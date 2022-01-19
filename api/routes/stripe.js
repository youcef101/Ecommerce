/* 
to implements stripe in my app:
===>install stripe library <<npm i stripe >>
===>go to stripe site <<https://stripe.com/>> and create an account
===>after login go to the developpers mode ==> secret key==>reveal my secret key==>copy
===>paste it in .env file
*/
import express from 'express'
import Stripe from 'stripe'
import { verifyTokens } from '../utils/authTokens.js'
const router = express.Router()
const KEY = process.env.STRIPE_KEY
const stripe = new Stripe(KEY)


router.get('/', (req, res) => {
    res.status(200).send('hello from stripe route !!!')

})

router.post('/payment', async (req, res) => {
    await stripe.charges.create({
        source: req.body.tokenId,
        amount: req.body.amount,
        currency: 'usd'
    }, (stripeErr, stripeRes) => {
        if (stripeErr) {
            res.status(500).send(stripeErr)
        } else {
            res.status(200).send(stripeRes)
        }
    })
})
export default router