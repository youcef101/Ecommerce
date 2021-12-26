import express from 'express'
import Product from '../models/Product.js'
import { verifyTokens } from '../utils/authTokens.js'
import { upload } from '../utils/upload.js'
const router = express.Router()

router.get('/', (req, res) => {
    res.status(200).send('hello from productroute!!!')
})

//add product
router.post('/add', verifyTokens, upload, async (req, res) => {
    const url = req.protocol + "://" + req.get('host') + "/public/uploads/"
    let newProduct = {
        categoryId: req.body.categoryId,
        title: req.body.title,
        desc: req.body.desc,
        price: req.body.price,
        productImage: url + req.file.filename,
    }
    try {
        if (req.user.isAdmin === true) {
            await Product.create(newProduct)
            res.status(200).send('Product successfully created !!!')
        } else {
            res.status(400).send('You are not Allowed To Add New Product !!!')
        }

    } catch (err) {
        res.status(500).send(err)
    }

})

//delete product
router.delete('/:productId/delete', verifyTokens, async (req, res) => {
    try {
        if (req.user.isAdmin === true) {
            await Product.findByIdAndDelete(req.params.productId)
            res.status(200).send('Product successfully deleted !!!')
        } else {
            res.status(401).send('You are not Allowed to delete Product !!!')
        }
    } catch (err) {
        res.status(500).send(err)
    }
})
//edit product
router.put('/:productId/edit', verifyTokens, upload, async (req, res) => {
    const url = req.protocol + "://" + req.get('host') + "/public/uploads/"
    try {
        if (req.user.isAdmin === true) {
            await Product.findByIdAndUpdate(req.params.productId, { $set: req.body, productImage: url + req.file.filename })
            res.status(200).send('Product successfully Updated !!!')
        } else {
            res.status(401).send('You are not Allowed to update Product !!!')
        }
    } catch (err) {
        res.status(500).send(err)
    }
})


//get product by category
router.get('/:categoryId/all', async (req, res) => {
    try {
        const all_products = await Product.find()
        const category_product = all_products.find(product => product.categoryId != req.params.categoryId)
        res.status(200).send(category_product)
    } catch (err) {
        res.status(500).send(err)
    }
})

//get product by title
router.get('/:title', async (req, res) => {
    try {
        const product = await Product.findOne({ title: req.params.title })
        res.status(200).send(product)
    } catch (err) {
        res.status(500).send(err)
    }
})

export default router