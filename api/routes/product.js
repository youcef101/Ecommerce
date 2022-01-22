import express from 'express'
import Product from '../models/Product.js'
import Category from '../models/Category.js'
import { verifyTokens } from '../utils/authTokens.js'
import { upload } from '../utils/upload.js'
const router = express.Router()

router.get('/', (req, res) => {
    res.status(200).send('hello from productroute!!!')
})

//add product
router.post('/add', verifyTokens, async (req, res) => {
    try {
        if (req.user.isAdmin === true) {
            await Product.create(req.body)
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
router.put('/:productId/edit', verifyTokens, async (req, res) => {

    try {
        if (req.user.isAdmin === true) {
            await Product.findByIdAndUpdate(req.params.productId, { $set: req.body })
            res.status(200).send('Product successfully Updated !!!')
        } else {
            res.status(401).send('You are not Allowed to update Product !!!')
        }
    } catch (err) {
        res.status(500).send(err)
    }
})


//get product by id
router.get('/:productId/', async (req, res) => {
    try {
        const product = await Product.findById(req.params.productId)
        res.status(200).send(product)
    } catch (err) {
        res.status(500).send(err)
    }
})

//get products by category name
router.get('/:category/all', async (req, res) => {
    const category_title = req.params.category
    const cat_title = category_title.split(' ').join(' ')
    //console.log(cat_title)
    try {
        const cat = await Category.findOne({ title: cat_title })
        const products = await Product.find()
        const cat_product = products.filter(product => product.categoryId == cat._id)
        res.status(200).send(cat_product)
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

//get 12 products randomly
router.get('/random/all/d', async (req, res) => {
    const result = []
    try {
        const all_products = await Product.find()
        for (let i = 0; i < 12;) {
            const random = Math.floor(Math.random() * all_products.length);
            if (result.indexOf(all_products[random]) !== -1) {
                continue;
            };
            result.push(all_products[random])
            i++
        }
        res.status(200).send(result)
    } catch (err) {
        res.status(500).send(err)
    }
})

//get latest 12 products
//get latest 4 category
router.get("/get/latest/", async (req, res) => {
    const query = req.query.new;
    try {
        const products = query
            ? await Product.find().sort({ _id: -1 }).limit(12)
            : await Product.find();
        res.status(200).json(products);
    } catch (err) {
        res.status(500).json(err);
    }
});


//get all products
router.get('/all/d', async (req, res) => {
    try {
        const products = await Product.find()
        res.status(200).send(products)
    } catch (err) {
        res.status(500).send(err)
    }
})
//get all product except current product
router.get('/:productId/all/d', async (req, res) => {
    try {
        const all_products = await Product.find()
        const products = all_products.filter(product => product._id != req.params.productId)
        res.status(200).send(products)
    } catch (err) {
        res.status(500).send(err)
    }
})
//delete product color
router.put('/:productId/:color/delete', async (req, res) => {
    try {
        const current_product = await Product.findById(req.params.productId)
        if (current_product.color.includes(req.params.color)) {
            await current_product.updateOne({ $pull: { color: req.params.color } })
        }


        res.status(200).json('product color updated successfully !!!')
    } catch (err) {
        res.status(500).send(err)
    }
})
export default router