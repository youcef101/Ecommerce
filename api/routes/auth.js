import express from 'express'
import User from '../models/User.js'
import bcrypt from 'bcrypt'
import { generateAccessToken, generateRefreshToken, refreshTokens } from '../utils/authTokens.js'
const router = express.Router()

router.get('/', (req, res) => {
    res.status(200).send('hello from auth route!!!')
})

//register
router.post('/register', async (req, res) => {

    const salt = await bcrypt.genSalt(10)
    let hash_password = await bcrypt.hash(req.body.password, salt);
    let newUser = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: hash_password,
        password_confirm: req.body.password_confirm,
        fullName: req.body.firstName + ' ' + req.body.lastName,
        country: req.body.country,
        city: req.body.city,
        codePostal: req.body.codePostal,
        adresse: req.body.adresse,
        isAdmin: req.body.isAdmin,
        phone: req.body.phone,
        profileImage: req.body.profileImage
    }
    let email = await User.findOne({ email: req.body.email })

    try {
        if (req.body.password !== req.body.password_confirm) {
            res.status(400).send('password didn\'t match !!!')
        }
        else if (email) {
            res.status(400).send('you already have an account with this email !!!')
        } else {
            await User.create(newUser)
            res.status(200).send('Account created successfully !!!')
        }

    } catch (err) {
        res.status(500).send(err)
    }
})

//login
router.post('/login', async (req, res) => {
    try {
        let user = await User.findOne({ email: req.body.email });
        if (user) {
            let password = await bcrypt.compare(req.body.password, user.password);
            if (password) {
                let access_token = generateAccessToken(user)
                let refresh_token = generateRefreshToken(user)
                refreshTokens.push(refresh_token)
                res.status(200).send({
                    user,
                    accessToken: access_token,
                    refreshToken: refresh_token
                })
            } else {
                res.status(400).send('Password Didnt Match !!!')
            }
        } else {
            res.status(400).send(`User Does Not Exists !!!`)
        }

    } catch (err) {
        res.status(500).send(err);
    }
})

export default router