import express from 'express'
import User from '../models/User.js'
import { verifyTokens } from '../utils/authTokens.js'
import { upload } from '../utils/upload.js'
import bcrypt from 'bcrypt'
const router = express.Router()

router.get('/', (req, res) => {
    res.status(200).send('hello from user route!!!')
})

//delete user
router.delete('/:userId/delete', verifyTokens, async (req, res) => {
    //console.log(req.user)
    try {
        if (req.user.id === req.params.userId || req.user.isAdmin === true) {
            await User.findByIdAndDelete(req.params.userId)
            res.status(200).send('Account Successfully Deleted !!!')
        } else {
            res.status(403).send('Your Are Not Allowed To Delete This Account !!!')
        }
    } catch (err) {
        res.status(500).send(err)
    }
})

//edit user info
router.put('/:userId/info/edit', verifyTokens, async (req, res) => {
    try {
        if (req.user.id === req.params.userId || req.user.isAdmin === true) {
            await User.findByIdAndUpdate(req.params.userId, { $set: req.body })
            res.status(200).send('Account Successfully Updated!!!')
        } else {
            res.status(403).send('Your Are Not Allowed To Modify This Account Info !!!')
        }
    } catch (err) {
        res.status(500).send(err)
    }
})

//edit user photo
router.route('/:userId/photo/edit').put(upload, verifyTokens, async (req, res) => {
    const url = req.protocol + "://" + req.get('host') + "/public/uploads/"
    try {
        if (req.user.id === req.params.userId || req.user.isAdmin === true) {
            await User.findByIdAndUpdate(req.params.userId, { profileImage: url + req.file.filename });
            res.status(200).send(`your account profile photo updated successfully !!!`);
        } else {
            res.status(401).send('You are Not allowed to Update this account')
        }
    } catch (err) {
        res.status(500).send(err)
    }

})
//edit user password
router.put('/:userId/password/change', verifyTokens, async (req, res) => {
    let user = await User.findById(req.params.userId);
    if (req.user.id === req.params.userId || req.user.isAdmin === true) {
        if (req.body.password) {
            try {
                const salt = await bcrypt.genSalt(10);
                req.body.password = await bcrypt.hash(req.body.password, salt);
                await user.updateOne({ password: req.body.password });
                res.status(200).send('your password has been changed successfully !!!')
            } catch (err) {
                res.status(500).send(err);
            }
        }
    } else {
        res.status(400).send('you can update only your account !!!')
    }


})
//get user by id
router.get('/:userId', async (req, res) => {
    try {
        const user = await User.findById(req.params.userId)
        res.status(200).send(user)
    } catch (err) {
        console.log(err)
    }
})

//get all user except current user
router.get('/:userId/all', async (req, res) => {
    try {
        const all_users = await User.find()
        const users = all_users.find(user => user._id != req.params.userId)
        res.status(200).send(users)
    } catch (err) {
        res.status(500).send(err)
    }
})


export default router