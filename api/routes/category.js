import express from 'express'
import Category from '../models/Category.js'
import { verifyTokens } from '../utils/authTokens.js'
import { upload } from '../utils/upload.js'
const router = express.Router()

router.get('/', (req, res) => {
    res.status(200).send('hello from category route!!!')
})

//add category
router.post('/add', verifyTokens, async (req, res) => {

    try {
        if (req.user.isAdmin === true) {
            await Category.create(req.body)
            res.status(200).send('Category created successfully !!!')
        } else {
            res.status(400).send('You are not Allowed To Add New Category !!!')
        }
    } catch (err) {
        res.status(500).send(err)
    }

})

//edit Category
router.put('/:categoryId/info/edit', verifyTokens, async (req, res) => {
    try {
        if (req.user.isAdmin === true) {

            await Category.findByIdAndUpdate(req.params.categoryId, { $set: req.body })
            res.status(200).send('Category edited successfully !!!')

        } else {
            res.status(400).send('Your are not Allowed !!!')
        }

    } catch (err) {
        res.status(500).send(err)
    }
})

//delete Category
router.delete('/:categoryId/delete', verifyTokens, async (req, res) => {

    try {
        if (req.user.isAdmin === true) {
            await Category.findByIdAndDelete(req.params.categoryId)
            res.status(200).send('Category deleted successfully !!!')
        } else {
            res.status(400).send('Your are not Allowed !!!')
        }

    } catch (err) {
        res.status(500).send(err)
    }
})

//get all category
router.get('/all', async (req, res) => {
    try {
        const all_category = await Category.find()
        res.status(200).send(all_category)
    } catch (err) {
        res.status(500).send(err)
    }
})

//get category by id
router.get('/get/:catId/d', async (req, res) => {
    try {
        const result = await Category.findById(req.params.catId)
        res.status(200).send(result)
    } catch (err) {
        res.status(500).send(err)
    }
})

//get latest 4 category
router.get("/get/", async (req, res) => {
    const query = req.query.new;
    try {
        const categories = query
            ? await Category.find().sort({ _id: -1 }).limit(4)
            : await Category.find();
        res.status(200).json(categories);
    } catch (err) {
        res.status(500).json(err);
    }
});

export default router