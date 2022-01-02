import express from 'express'
import Category from '../models/Category.js'
import { verifyTokens } from '../utils/authTokens.js'
import { upload } from '../utils/upload.js'
const router = express.Router()

router.get('/', (req, res) => {
    res.status(200).send('hello from category route!!!')
})

//add category
router.post('/add', verifyTokens, upload, async (req, res) => {
    const url = req.protocol + "://" + req.get('host') + "/public/uploads/"
    let newCategory = {
        title: req.body.title,
        categoryImage: url + req.file.filename,
    }
    try {
        if (req.user.isAdmin === true) {
            await Category.create(newCategory)
            res.status(200).send('Category created successfully !!!')
        } else {
            res.status(400).send('You are not Allowed To Add New Category !!!')
        }
    } catch (err) {
        res.status(500).send(err)
    }

})

//edit Category
router.put('/:categoryId/edit', verifyTokens, upload, async (req, res) => {
    const url = req.protocol + "://" + req.get('host') + "/public/uploads/"
    try {
        if (req.user.isAdmin === true) {
            await Category.findByIdAndUpdate(req.params.categoryId, { $set: req.body, categoryImage: url + req.file.filename })
            res.status(200).send('Category edited successfully !!!')
        } else {
            res.status(400).send('Your are not Allowed !!!')
        }

    } catch (err) {
        res.status(500).send(err)
    }
})

//delete Category
router.delete('/:categoryId/dlete', verifyTokens, async (req, res) => {

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

export default router