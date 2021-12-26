import express from 'express'
import Category from '../models/Category.js'
import { verifyTokens } from '../utils/authTokens.js'
const router = express.Router()

router.get('/', (req, res) => {
    res.status(200).send('hello from category route!!!')
})

//add category
router.post('/add', verifyTokens, async (req, res) => {
    let newCategory = {
        title: req.body.title
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