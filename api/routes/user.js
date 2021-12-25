import express from 'express'
const router = express.Router()

router.get('/', (req, res) => {
    res.status(200).send('hello from user route!!!')
})

export default router