import express from 'express'
const router = express.Router()

router.get('/', (req, res) => {
    res.status(200).send('hello from productroute!!!')
})

//add product

//delete product

//edit product

//get product by id

//get category product

//get all product

//get product by title

export default router